import { auto } from 'manate/react';
import React, { cloneElement, ReactElement } from 'react';

import iconUrl from '../icon.svg';
import { Store } from '../store';

const Toolbar = (props: { store: Store }) => {
  const { store } = props;
  const { modals } = store;
  const stylingClicked = (modifier: string): void => {
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
  const listClicked = (prefix: string): void => {
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
  const insertFence = (type: string, sample: string): void => {
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
      {store.preferences.toolBarItems.map((item, index) => {
        let reactElement: ReactElement;
        if (typeof item === 'string') {
          switch (item) {
            case 'about': {
              reactElement = (
                <img
                  src={iconUrl}
                  id="about-icon"
                  onClick={() => modals.about.open()}
                  title="About"
                />
              );
              break;
            }
            case '|': {
              reactElement = <i className="dividor">|</i>;
              break;
            }
            case 'bold': {
              reactElement = (
                <i
                  title="Bold"
                  className={`fa fa-bold`}
                  onClick={() => stylingClicked('**')}
                ></i>
              );
              break;
            }
            case 'italic': {
              reactElement = (
                <i
                  title="Italic"
                  className={`fa fa-italic`}
                  onClick={() => stylingClicked('*')}
                ></i>
              );
              break;
            }
            case 'strikethrough': {
              reactElement = (
                <i
                  title="Strikethrough"
                  className={`fa fa-strikethrough`}
                  onClick={() => stylingClicked('~~')}
                ></i>
              );
              break;
            }
            case 'underline': {
              reactElement = (
                <i
                  title="Underline"
                  className={`fa fa-underline`}
                  onClick={() => stylingClicked('++')}
                ></i>
              );
              break;
            }
            case 'mark': {
              reactElement = (
                <i
                  title="Mark"
                  className={`fa fa-marker`}
                  onClick={() => stylingClicked('==')}
                ></i>
              );
              break;
            }
            case 'emoji': {
              reactElement = (
                <i
                  title="Emoji"
                  className="fa fa-regular fa-smile"
                  onClick={() => modals.emoji.open()}
                ></i>
              );
              break;
            }
            case 'fontawesome': {
              reactElement = (
                <i
                  title="Font awesome"
                  className="fa fa-regular fa-flag"
                  onClick={() => modals.fontAwesome.open()}
                ></i>
              );
              break;
            }
            case 'quote': {
              reactElement = (
                <i
                  title={'Quote'}
                  className={`fa fa-quote-left`}
                  onClick={() => listClicked('> ')}
                ></i>
              );
              break;
            }
            case 'unordered-list': {
              reactElement = (
                <i
                  title={'Unordered list'}
                  className={`fa fa-list-ul`}
                  onClick={() => listClicked('- ')}
                ></i>
              );
              break;
            }
            case 'ordered-list': {
              reactElement = (
                <i
                  title={'Ordered list'}
                  className={`fa fa-list-ol`}
                  onClick={() => listClicked('1. ')}
                ></i>
              );
              break;
            }
            case 'unchecked-list': {
              reactElement = (
                <i
                  title={'Unchecked list'}
                  className={`fa fa-regular fa-square`}
                  onClick={() => listClicked('- [ ] ')}
                ></i>
              );
              break;
            }
            case 'checked-list': {
              reactElement = (
                <i
                  title={'Checked list'}
                  className={`fa fa-regular fa-check-square`}
                  onClick={() => listClicked('- [x] ')}
                ></i>
              );
              break;
            }
            case 'link': {
              reactElement = (
                <i
                  title="Link"
                  className="fa fa-link"
                  onClick={() => {
                    const editor = store.editor;
                    const mainSelection = editor.state.selection.main;
                    const text =
                      editor.state.sliceDoc(
                        mainSelection.from,
                        mainSelection.to,
                      ) || 'link';
                    editor.dispatch({
                      changes: {
                        from: mainSelection.from,
                        to: mainSelection.to,
                        insert: `[${text}](https://github.com/tylerlong/markdown-plus/)`,
                      },
                    });
                  }}
                ></i>
              );
              break;
            }
            case 'image': {
              reactElement = (
                <i
                  title="Image"
                  className="fa fa-regular fa-image"
                  onClick={() => {
                    const editor = store.editor;
                    const mainSelection = editor.state.selection.main;
                    const text =
                      editor.state.sliceDoc(
                        mainSelection.from,
                        mainSelection.to,
                      ) || 'image';
                    editor.dispatch({
                      changes: {
                        from: mainSelection.from,
                        to: mainSelection.to,
                        insert: `![${text}](https://chuntaoliu.com/markdown-plus/icon.svg)`,
                      },
                    });
                  }}
                ></i>
              );
              break;
            }
            case 'code': {
              reactElement = (
                <i
                  title="Code"
                  className="fa fa-code"
                  onClick={() => {
                    const editor = store.editor;
                    const mainSelection = editor.state.selection.main;
                    const text =
                      editor.state.sliceDoc(
                        mainSelection.from,
                        mainSelection.to,
                      ) || "console.log('Hello, world!');";
                    editor.dispatch({
                      changes: {
                        from: mainSelection.from,
                        to: mainSelection.to,
                        insert: `\n\`\`\`\n${text}\n\`\`\`\n`,
                      },
                    });
                  }}
                ></i>
              );
              break;
            }
            case 'table': {
              reactElement = (
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
              );
              break;
            }
            case 'math': {
              reactElement = (
                <i
                  title="Math"
                  className="fa fa-square-root-variable"
                  onClick={() => {
                    const editor = store.editor;
                    const mainSelection = editor.state.selection.main;
                    const text =
                      editor.state.sliceDoc(
                        mainSelection.from,
                        mainSelection.to,
                      ) || 'E = mc^2';
                    editor.dispatch({
                      changes: {
                        from: mainSelection.from,
                        to: mainSelection.to,
                        insert: `\n\`\`\`math\n${text}\n\`\`\`\n`,
                      },
                    });
                  }}
                ></i>
              );
              break;
            }
            case 'mermaid': {
              reactElement = (
                <i
                  title="Mermaid chart"
                  className="fa fa-diagram-project"
                  onClick={() => insertFence('mermaid', 'graph LR\nA-->B')}
                ></i>
              );
              break;
            }
            case 'chartjs': {
              reactElement = (
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
              );
              break;
            }
            case 'preferences': {
              reactElement = (
                <i
                  title="Preferences"
                  className="fa fa-cog"
                  onClick={() => modals.preferences.open()}
                ></i>
              );
              break;
            }
            case 'print': {
              reactElement = (
                <i
                  title="Print"
                  className="fa fa-print"
                  onClick={() => window.print()}
                ></i>
              );
              break;
            }
            default: {
              throw new Error(`Unknown toolbar item: ${item}`);
            }
          }
        } else {
          reactElement = item as ReactElement;
        }
        return cloneElement(reactElement, { key: `item-${index}` });
      })}
    </div>
  );
};

export default auto(Toolbar);
