import {
  defaultKeymap,
  history,
  historyKeymap,
  indentLess,
  indentMore,
} from '@codemirror/commands';
import {
  defaultHighlightStyle,
  syntaxHighlighting,
} from '@codemirror/language';
import {
  EditorView,
  highlightActiveLine,
  KeyBinding,
  keymap,
  ViewUpdate,
} from '@codemirror/view';
import Chart from 'chart.js/auto';
import debounce from 'debounce';
import { exclude } from 'manate';
import { auto } from 'manate/react';
import markplusEngine from 'markplus-engine';
import mermaid from 'mermaid/dist/mermaid.esm.mjs';
import React, { useEffect, useRef } from 'react';

import { Store } from '../store';
import { generateScrollMethods } from '../sync-scroll';

const Editor = (props: { store: Store }) => {
  const { store } = props;
  const editorDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const contentChangeListener = EditorView.updateListener.of(
      (update: ViewUpdate) => {
        if (update.docChanged) {
          store.onChange(store.editor.state.doc.toString());
          lazyChange();
        }
      },
    );

    // Define the custom key binding
    const customKeymap = keymap.of([
      {
        key: 'Tab',
        run: indentMore,
      },
      {
        key: 'Shift-Tab',
        run: indentLess,
      },
      {
        key: 'Mod-s',
        run: () => true,
      },
      {
        key: 'Mod-b',
        run: () => {
          document
            .querySelector<HTMLElement>(`#${store.uid} .toolbar i.fa-bold`)
            ?.click();
          return true;
        },
      },
    ]);
    const cm = new EditorView({
      extensions: [
        EditorView.lineWrapping,
        highlightActiveLine(),
        history(),
        keymap.of([
          ...defaultKeymap,
          ...historyKeymap,
        ] as unknown as KeyBinding[]), // todo: type casting is unnecessary in the future
        syntaxHighlighting(defaultHighlightStyle),
        customKeymap,
        contentChangeListener,
      ],
      parent: editorDiv.current!,
    });

    // auto focus after change text
    const dispatch = cm.dispatch.bind(cm);
    cm.dispatch = (tr) => {
      dispatch(tr);
      if (tr.changes && tr.changes.insert) {
        cm.focus();
      }
    };

    store.editor = exclude(cm);

    const { syncEditor, syncPreview } = generateScrollMethods(store);
    const handleEditorScroll = () => {
      syncPreview();
    };
    store.editor.scrollDOM.addEventListener('scroll', handleEditorScroll);

    const handlePreviewScroll = () => {
      syncEditor();
    };
    const rightPanel = document.querySelector(`#${store.uid} .right-panel`)!;
    rightPanel.addEventListener('scroll', handlePreviewScroll);

    // whenever user changes markdown
    mermaid.initialize({ startOnLoad: false, theme: 'neutral' });
    const lazyChange = debounce(() => {
      const markdown = store.editor.state.doc.toString();
      document.querySelector<HTMLElement>(
        `#${store.uid} .right-panel .preview`,
      ).innerHTML = markplusEngine.render(markdown);
      // Chart.js
      document
        .querySelectorAll(`#${store.uid} .right-panel .preview .chartjs`)
        .forEach((element: HTMLCanvasElement) => {
          try {
            new Chart(element, JSON.parse(element.textContent));
          } catch (e) {
            element.outerHTML = `<pre>Chart.js complains: "${e}"</pre>`;
          }
        });

      // mermaid
      mermaid.run({
        nodes: document.querySelectorAll(
          `#${store.uid} .right-panel .preview pre.mermaid`,
        ),
      });

      // todo: remove this? user should generate html instead
      setTimeout(() => {
        store.onPreviewChange(
          document.querySelector('.right-panel .preview')!.outerHTML,
        );
      }, 1000); // because it takes time for mermaid and chart.js to render
    }, 256);
    return () => {
      store.editor.scrollDOM.removeEventListener('scroll', handleEditorScroll);
      store.editor.destroy();
      rightPanel.removeEventListener('scroll', handlePreviewScroll);
    };
  }, [store]);
  return <div className="editor" ref={editorDiv}></div>;
};

export default auto(Editor);
