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
import debounce from 'debounce';
import { exclude } from 'manate';
import { auto } from 'manate/react.js';
import markplusEngine from 'markplus-engine';
import React, { useEffect, useRef } from 'react';

import { Store } from '../store.js';
import { generateScrollMethods } from '../sync-scroll.js';

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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        run: indentMore as any,
      },
      {
        key: 'Shift-Tab',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        run: indentLess as any,
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
    const lazyChange = debounce(async () => {
      const markdown = store.editor.state.doc.toString();
      const preview = await markplusEngine.render(markdown);
      document.querySelector<HTMLElement>(
        `#${store.uid} .right-panel .preview`,
      ).innerHTML = preview;
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
