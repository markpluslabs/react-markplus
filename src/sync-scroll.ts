import debounce from "debounce";

import { Store } from "./store.ts";
import { animate } from "./utils.ts";

type IScroll = {
  lastMarker: number;
  nextMarker: number;
  percentage: number;
};

export const generateScrollMethods = (store: Store) => {
  let scrollingSide: string | null = null;
  let timeoutHandle: number | null = null;
  const scrollSide = (
    side: "left" | "right",
    howToScroll: () => void,
  ): void => {
    if (scrollingSide !== null && scrollingSide !== side) {
      return; // the other side hasn't finished scrolling
    }
    scrollingSide = side;
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }
    timeoutHandle = setTimeout(() => {
      scrollingSide = null;
    }, 512) as unknown as number;
    howToScroll();
  };

  const scrollEditor = (targetLineNumber: number): void => {
    scrollSide("left", () => {
      animate(
        (lineNumber) => {
          const line = store.editor.state.doc.line(lineNumber);
          const dom = store.editor.scrollDOM;
          const lineCoords = store.editor.coordsAtPos(line.from);
          if (lineCoords) {
            dom.scrollTop += lineCoords.top - dom.getBoundingClientRect().top;
          }
        },
        store.editor.state.doc.lineAt(
          store.editor.lineBlockAtHeight(store.editor.scrollDOM.scrollTop).from,
        ).number,
        targetLineNumber,
        128,
      );
    });
  };

  const scrollPreview = (scrollTop: number): void => {
    const rightPanel = document.querySelector(`#${store.uid} .right-panel`)!;
    scrollSide("right", () => {
      animate(
        (i) => (rightPanel.scrollTop = i),
        rightPanel.scrollTop,
        scrollTop,
        128,
      );
    });
  };

  const getEditorScroll = (): IScroll => {
    const lineMarkers = document.querySelectorAll(
      `#${store.uid} .right-panel .preview > [data-sl]`,
    ) as NodeListOf<HTMLElement>;
    const lines: number[] = [];
    lineMarkers.forEach((element: HTMLElement) => {
      lines.push(parseInt(element.dataset.sl!, 10));
    });
    const currentLine = store.editor.state.doc.lineAt(
      store.editor.lineBlockAtHeight(store.editor.scrollDOM.scrollTop).from,
    ).number;
    let lastMarker: number | null = null;
    let nextMarker: number | null = null;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i] < currentLine) {
        lastMarker = lines[i];
      } else {
        nextMarker = lines[i];
        break;
      }
    }
    let percentage = 0;
    if (lastMarker && nextMarker && lastMarker !== nextMarker) {
      percentage = (currentLine - lastMarker) / (nextMarker - lastMarker);
    }
    // returns two neighboring markers' lines, and current scroll percentage between two markers
    const r = { lastMarker: lastMarker, nextMarker: nextMarker, percentage };
    return r as IScroll;
  };

  const setPreviewScroll = (editorScroll: IScroll): void => {
    let lastPosition = 0;
    let nextPosition = document.querySelector<HTMLElement>(
      `#${store.uid} .right-panel .preview`,
    )!.offsetHeight -
      document.querySelector<HTMLElement>(`#${store.uid} .right-panel`)!
        .offsetHeight; // maximum scroll

    if (editorScroll.lastMarker) {
      const lastMarkerElement = document.querySelector<HTMLElement>(
        `#${store.uid} .right-panel .preview > [data-sl="${editorScroll.lastMarker}"]`,
      );
      if (lastMarkerElement) {
        lastPosition = lastMarkerElement.offsetTop;
      }
    }

    if (editorScroll.nextMarker) {
      const nextMarkerElement = document.querySelector<HTMLElement>(
        `#${store.uid} .right-panel .preview > [data-sl="${editorScroll.nextMarker}"]`,
      );
      if (nextMarkerElement) {
        nextPosition = nextMarkerElement.offsetTop;
      }
    }
    const scrollTop = lastPosition +
      (nextPosition - lastPosition) * editorScroll.percentage; // right scroll according to left percentage
    scrollPreview(scrollTop);
  };

  const getPreviewScroll = (): IScroll => {
    const rightPanel = document.querySelector<HTMLElement>(
      `#${store.uid} .right-panel`,
    )!;
    const preview = document.querySelector<HTMLElement>(
      `#${store.uid} .right-panel .preview`,
    )!;
    const scroll = rightPanel.scrollTop;
    let lastLine = 1; // editor line starts with 1
    let lastScroll = 0;
    let nextLine = store.editor.state.doc.toString().split("\n").length; // number of lines of markdown
    let nextScroll = preview.offsetHeight - rightPanel.offsetHeight; // maximum scroll
    const lineMarkers = document.querySelectorAll<HTMLElement>(
      `#${store.uid} .right-panel .preview > [data-sl]`,
    );
    for (let i = 0; i < lineMarkers.length; i++) {
      const lineMarker = lineMarkers[i];
      if (lineMarker.offsetTop < scroll) {
        lastLine = parseInt(lineMarker.dataset.sl!, 10);
        lastScroll = lineMarker.offsetTop;
      } else {
        nextLine = parseInt(lineMarker.dataset.sl!, 10);
        nextScroll = lineMarker.offsetTop;
        break;
      }
    }
    let percentage = 0;
    if (lastScroll !== nextScroll) {
      percentage = (scroll - lastScroll) / (nextScroll - lastScroll);
    }
    // returns two neighboring marker lines, and current scroll percentage between two markers
    const r = {
      lastMarker: lastLine,
      nextMarker: nextLine,
      percentage: percentage,
    };
    return r;
  };

  const setEditorScroll = (previewScroll: IScroll): void => {
    const targetLineNumber =
      (previewScroll.nextMarker - previewScroll.lastMarker) *
        previewScroll.percentage +
      previewScroll.lastMarker;
    scrollEditor(targetLineNumber);
  };

  const syncPreview = debounce(() => {
    // sync right with left
    if (scrollingSide !== "left") {
      const editorScroll = getEditorScroll();
      setPreviewScroll(editorScroll);
    }
  }, 128);

  const syncEditor = debounce(() => {
    // sync left with right
    if (scrollingSide !== "right") {
      const previewScroll = getPreviewScroll();
      setEditorScroll(previewScroll);
    }
  }, 128);
  return { syncPreview, syncEditor };
};
