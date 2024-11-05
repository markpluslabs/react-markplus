// import localforage from 'localforage';
// import { autoRun } from 'manate';
import { auto } from 'manate/react';
import React, { useEffect } from 'react';
import Split from 'split-grid';

import { Store } from '../store';
import Editor from './editor';
import Modals from './modals';
import Preview from './preview';
import Toolbar from './toolbar';

const App = (props: { store: Store }) => {
  const { store } = props;
  const { preferences } = store;

  // do not auto save preferences to localforage
  // useEffect(() => {
  //   let preferencesSaver: ReturnType<typeof autoRun>;
  //   const main = async () => {
  //     // load preferences
  //     // we don't need to apply preferences here, it's done in modals.tsx useEffect
  //     const savedPreferences =
  //       await localforage.getItem<string>('mdp-preferences');
  //     if (savedPreferences) {
  //       Object.assign(store.preferences, JSON.parse(savedPreferences));
  //     }
  //     // auto save preferences to localforage
  //     // we can't start it before the first load, otherwise it will save the default preferences
  //     preferencesSaver = autoRun(store.preferences, () => {
  //       localforage.setItem(
  //         'mdp-preferences',
  //         JSON.stringify(store.preferences),
  //       );
  //     });
  //     preferencesSaver.start();
  //   };
  //   main();
  //   return () => {
  //     if (preferencesSaver) {
  //       preferencesSaver.stop();
  //     }
  //   };
  // }, [store.preferences]);

  useEffect(() => {
    Split({
      columnGutters: [
        {
          track: 1,
          element: document.querySelector('#col-gutter')!,
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
  return (
    <>
      <div id="rows-grid" style={{ gridTemplateRows }}>
        <div id="toolbar">
          <Toolbar store={store} />
        </div>
        <div
          id="row-gutter"
          className="gutter"
          title={
            preferences.toolbar === 'hide' ? 'Show toolbar' : 'Hide toolbar'
          }
          onClick={() =>
            (preferences.toolbar =
              preferences.toolbar === 'hide' ? 'show' : 'hide')
          }
        ></div>
        <div id="cols-grid" style={{ gridTemplateColumns }}>
          <div id="left-panel">
            <Editor store={store} />
          </div>
          <div id="col-gutter" className="gutter" title="Resize"></div>
          <div id="right-panel">
            <Preview />
          </div>
        </div>
      </div>
      <Modals store={store} />
    </>
  );
};

export default auto(App);
