import { auto } from 'manate/react';
import React, { useEffect } from 'react';
import Split from 'split-grid';

import * as styles from '../css/index.module.scss';
import { Store } from '../store';
import Editor from './editor';
import Modals from './modals';
import Preview from './preview';
import Toolbar from './toolbar';

const App = (props: { store: Store }) => {
  const { store } = props;
  const { preferences } = store;
  useEffect(() => {
    Split({
      columnGutters: [
        {
          track: 1,
          element: document.querySelector('.col-gutter')!,
        },
      ],
      snapOffset: 64,
    });
  }, []);
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
    <div className={styles['markdown-plus']} data-theme={theme}>
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
          <div className="gutter col-gutter" title="Resize"></div>
          <div className="right-panel">
            <Preview />
          </div>
        </div>
      </div>
      <Modals store={store} />
    </div>
  );
};

export default auto(App);
