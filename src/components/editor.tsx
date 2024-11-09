import {
  defaultKeymap,
  history,
  historyKeymap,
  indentLess,
  indentMore,
} from '@codemirror/commands';
import { markdown } from '@codemirror/lang-markdown';
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
import { githubLight } from '@uiw/codemirror-theme-github';
import Chart from 'chart.js/auto';
import debounce from 'debounce';
import { exclude } from 'manate';
import { auto } from 'manate/react';
import mde from 'markdown-extensible';
import mermaid from 'mermaid/dist/mermaid.esm.mjs';
import React, { useEffect, useRef } from 'react';

import { Store } from '../store';
import { syncEditor, syncPreview } from '../sync-scroll';

const Editor = (props: { store: Store }) => {
  const { store } = props;
  const editorDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const contentChangeListener = EditorView.updateListener.of(
      (update: ViewUpdate) => {
        if (update.docChanged) {
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
        key: 'Mod-,',
        run: () => {
          const preferencesIcon = document.querySelector(
            'i.fa-cog',
          ) as HTMLElement;
          if (preferencesIcon) {
            preferencesIcon.click();
            return true;
          }
          return false;
        },
      },
      {
        key: 'Mod-b',
        run: () => {
          (document.querySelector('i.fa-bold') as HTMLElement).click();
          return true;
        },
      },
    ]);
    const cm = new EditorView({
      extensions: [
        store.editorTheme.of(githubLight),
        EditorView.lineWrapping,
        highlightActiveLine(),
        history(),
        keymap.of([
          ...defaultKeymap,
          ...historyKeymap,
        ] as unknown as KeyBinding[]), // todo: type casting is unnecessary in the future
        markdown(),
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

    const handleEditorScroll = () => {
      syncPreview();
    };
    store.editor.scrollDOM.addEventListener('scroll', handleEditorScroll);

    const handlePreviewScroll = () => {
      syncEditor();
    };
    const rightPanel = document.querySelector('.right-panel')!;
    rightPanel.addEventListener('scroll', handlePreviewScroll);

    // whenever user changes markdown
    mermaid.initialize({ startOnLoad: false, theme: 'neutral' });
    const lazyChange = debounce(() => {
      const markdown = store.editor.state.doc.toString();
      document.querySelector('.preview')!.innerHTML = mde.render(markdown);
      // Chart.js
      document
        .querySelectorAll('.preview .chartjs')
        .forEach((element: HTMLCanvasElement) => {
          try {
            new Chart(element, JSON.parse(element.textContent));
          } catch (e) {
            element.outerHTML = `<pre>Chart.js complains: "${e}"</pre>`;
          }
        });

      // mermaid
      mermaid.run({
        nodes: document.querySelectorAll('.preview pre.mermaid'),
      });
    }, 512);
    return () => {
      store.editor.scrollDOM.removeEventListener('scroll', handleEditorScroll);
      store.editor.destroy();
      rightPanel.removeEventListener('scroll', handlePreviewScroll);
    };
  }, [store]);
  return <div className="editor" ref={editorDiv}></div>;
};

export default auto(Editor);
