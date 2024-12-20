import { auto } from 'manate/react.js';
import React, { createRef, useEffect } from 'react';
import Split from 'split-grid';

import { Store } from '../store.js';
import Editor from './editor.js';
import Modals from './modals/index.js';
import Toolbar from './toolbar.js';

const Layout = (props: { store: Store }) => {
  const { store } = props;
  const { preferences } = store;
  const colGutter = createRef<HTMLDivElement>();
  useEffect(() => {
    if (!colGutter.current) return;
    Split({
      columnGutters: [
        {
          track: 1,
          element: colGutter.current,
        },
      ],
      snapOffset: 64,
    });
  }, [colGutter]);
  let gridTemplateRows = '0 0 1fr';
  if (preferences.toolbar === 'show') {
    gridTemplateRows = '20px 6px 1fr';
  } else if (preferences.toolbar === 'hide') {
    gridTemplateRows = '0 6px 1fr';
  }
  let gridTemplateColumns = '1fr 6px 1fr';
  if (preferences.mode === 'editor') {
    gridTemplateColumns = '1fr 0 0';
  } else if (preferences.mode === 'preview') {
    gridTemplateColumns = '0 0 1fr';
  }
  let theme = preferences.theme;
  if (theme === 'auto') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  return (
    <div id={store.uid} className="markplus" data-theme={theme}>
      <div className="rows-grid" style={{ gridTemplateRows }}>
        <Toolbar store={store} />
        <div
          className="gutter row-gutter"
          title={
            preferences.toolbar === 'hide' ? 'Show toolbar' : 'Hide toolbar'
          }
          onClick={() =>
            (preferences.toolbar =
              preferences.toolbar === 'hide' ? 'show' : 'hide')
          }
        ></div>
        <div className="cols-grid" style={{ gridTemplateColumns }}>
          <div className="left-panel">
            <Editor store={store} />
          </div>
          <div
            className="gutter col-gutter"
            title="Resize"
            ref={colGutter}
          ></div>
          <div className="right-panel">
            <article className="markdown-body preview"></article>
          </div>
        </div>
      </div>
      <Modals store={store} />
    </div>
  );
};

export default auto(Layout);
