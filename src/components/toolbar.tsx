import { auto } from 'manate/react';
import React from 'react';

import iconUrl from '../icon.svg';
import { Store } from '../store';

const Toolbar = (props: { store: Store }) => {
  const { store } = props;
  const { modals } = store;
  const stylingClicked = (modifier: string) => {
    const editor = store.editor;
    let mainSelection = editor.state.selection.main;
    if (mainSelection.empty) {
      const word = editor.state.wordAt(mainSelection.head);
      if (word) {
        editor.dispatch({
          selection: { anchor: word.from, head: word.to },
        });
      }
    }
    mainSelection = editor.state.selection.main; // don't forget to update this variable
    editor.dispatch({
      changes: {
        from: mainSelection.from,
        to: mainSelection.to,
        insert: `${modifier}${editor.state.sliceDoc(
          mainSelection.from,
          mainSelection.to,
        )}${modifier}`,
      },
    });
  };
  const listClicked = (prefix: string) => {
    const editor = store.editor;
    const startLine = editor.state.doc.lineAt(editor.state.selection.main.from);
    const endLine = editor.state.doc.lineAt(editor.state.selection.main.to);
    for (let i = startLine.number; i <= endLine.number; i++) {
      const line = editor.state.doc.line(i);
      editor.dispatch({
        changes: {
          from: line.from,
          to: line.from,
          insert: prefix,
        },
      });
    }
  };
  const insertFence = (type: string, sample: string) => {
    const editor = store.editor;
    const mainSelection = editor.state.selection.main;
    const text =
      editor.state.sliceDoc(mainSelection.from, mainSelection.to) || sample;
    editor.dispatch({
      changes: {
        from: mainSelection.from,
        to: mainSelection.to,
        insert: `\n\`\`\`${type}\n${text}\n\`\`\`\n`,
      },
    });
  };
  return (
    <div id="toolbar" className="noselect">
      <img
        src={iconUrl}
        id="about-icon"
        onClick={() => modals.about.open()}
        title="About"
      />
      <i className="dividor">|</i>
      {[
        { title: 'Bold', icon: 'fa-bold', modifier: '**' },
        { title: 'Italic', icon: 'fa-italic', modifier: '*' },
        { title: 'Strikethrough', icon: 'fa-strikethrough', modifier: '~~' },
        { title: 'Underline', icon: 'fa-underline', modifier: '++' },
        { title: 'Mark', icon: 'fa-marker', modifier: '==' },
      ].map(({ title, icon, modifier }) => (
        <i
          key={title}
          title={title}
          className={`fa ${icon}`}
          onClick={() => stylingClicked(modifier)}
        ></i>
      ))}
      <i className="dividor">|</i>
      <i
        title="Emoji"
        className="fa fa-regular fa-smile"
        onClick={() => modals.emoji.open()}
      ></i>
      <i
        title="Font awesome"
        className="fa fa-regular fa-flag"
        onClick={() => modals.fontAwesome.open()}
      ></i>
      <i className="dividor">|</i>
      {[
        { name: 'Quote', icon: 'fa-quote-left', prefix: '> ' },
        { name: 'Unordered list', icon: 'fa-list-ul', prefix: '- ' },
        { name: 'Ordered list', icon: 'fa-list-ol', prefix: '1. ' },
        {
          name: 'Incomplete task list',
          icon: 'fa-regular fa-square',
          prefix: '- [ ] ',
        },
        {
          name: 'Complete task list',
          icon: 'fa-regular fa-check-square',
          prefix: '- [x] ',
        },
      ].map(({ name, icon, prefix }) => (
        <i
          key={name}
          title={name}
          className={`fa ${icon}`}
          onClick={() => listClicked(prefix)}
        ></i>
      ))}
      <i className="dividor">|</i>
      <i
        title="Link"
        className="fa fa-link"
        onClick={() => {
          const editor = store.editor;
          const mainSelection = editor.state.selection.main;
          const text =
            editor.state.sliceDoc(mainSelection.from, mainSelection.to) ||
            'link';
          editor.dispatch({
            changes: {
              from: mainSelection.from,
              to: mainSelection.to,
              insert: `[${text}](https://github.com/tylerlong/markdown-plus/)`,
            },
          });
        }}
      ></i>
      <i
        title="Image"
        className="fa fa-regular fa-image"
        onClick={() => {
          const editor = store.editor;
          const mainSelection = editor.state.selection.main;
          const text =
            editor.state.sliceDoc(mainSelection.from, mainSelection.to) ||
            'image';
          editor.dispatch({
            changes: {
              from: mainSelection.from,
              to: mainSelection.to,
              insert: `![${text}](https://chuntaoliu.com/markdown-plus/icon.svg)`,
            },
          });
        }}
      ></i>
      <i
        title="Code"
        className="fa fa-code"
        onClick={() => {
          const editor = store.editor;
          const mainSelection = editor.state.selection.main;
          const text =
            editor.state.sliceDoc(mainSelection.from, mainSelection.to) ||
            "console.log('Hello, world!');";
          editor.dispatch({
            changes: {
              from: mainSelection.from,
              to: mainSelection.to,
              insert: `\n\`\`\`\n${text}\n\`\`\`\n`,
            },
          });
        }}
      ></i>
      <i
        title="Table"
        className="fa fa-table"
        onClick={() => {
          const sample = `
          header 1 | header 2
---|---
row 1 col 1 | row 1 col 2
row 2 col 1 | row 2 col 2`.trim();
          const editor = store.editor;
          const cursorPos = editor.state.selection.main.head;
          const currentLine = editor.state.doc.lineAt(cursorPos);
          const isAtLineStart = cursorPos === currentLine.from;
          if (isAtLineStart) {
            editor.dispatch({
              changes: {
                from: currentLine.from,
                to: currentLine.from,
                insert: `\n${sample}\n\n`,
              },
            });
          } else {
            editor.dispatch({
              changes: {
                from: currentLine.to,
                to: currentLine.to,
                insert: `\n\n${sample}\n`,
              },
            });
          }
        }}
      ></i>
      <i className="dividor">|</i>
      <i
        title="Math"
        className="fa fa-square-root-variable"
        onClick={() => {
          const editor = store.editor;
          const mainSelection = editor.state.selection.main;
          const text =
            editor.state.sliceDoc(mainSelection.from, mainSelection.to) ||
            'E = mc^2';
          editor.dispatch({
            changes: {
              from: mainSelection.from,
              to: mainSelection.to,
              insert: `\n\`\`\`math\n${text}\n\`\`\`\n`,
            },
          });
        }}
      ></i>
      <i
        title="Mermaid chart"
        className="fa fa-diagram-project"
        onClick={() => insertFence('mermaid', 'graph LR\nA-->B')}
      ></i>
      <i
        title="Chart.js chart"
        className="fa fa-chart-column"
        onClick={() =>
          insertFence(
            'chartjs',
            `{
  "type": "bar",
  "data": {
    "labels": [
      "last year",
      "this year"
    ],
    "datasets": [
      {
        "label": "# of Rainy Days",
        "data": [
          60,
          30
        ]
      }
    ]
  }
}`,
          )
        }
      ></i>
      <i className="dividor">|</i>
      <i
        title="Preferences"
        className="fa fa-cog"
        onClick={() => modals.preferences.open()}
      ></i>
      <i
        title="Help"
        className="fa fa-regular fa-question-circle"
        onClick={() => modals.help.open()}
      ></i>
    </div>
  );
};

export default auto(Toolbar);
