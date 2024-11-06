import { ConfigProvider } from 'antd';
import localforage from 'localforage';
import { autoRun } from 'manate';
import { auto } from 'manate/react';
import React, { useEffect } from 'react';

import MarkdownPlus from '../src';
import PreferencesModal from './preferences-modal';
import markdownUrl from './sample.md';
import { Store } from './store';

const App = (props: { store: Store }) => {
  const { store } = props;
  const { preferences } = store;

  // load sample markdown
  const [markdown, setMarkdown] = React.useState('');
  useEffect(() => {
    const loadSampleData = async () => {
      const r = await fetch(markdownUrl);
      const text = await r.text();
      setMarkdown(text);
    };
    loadSampleData();
  }, []);

  // for printing
  useEffect(() => {
    const beforePrintHandler = () => {
      const element = document.getElementById('preview');
      document.body.appendChild(element);
      document.getElementById('root').style.display = 'none';
    };
    window.addEventListener('beforeprint', beforePrintHandler);
    const afterPrintHandler = () => {
      const element = document.getElementById('preview');
      document.getElementById('root').style.display = 'block';
      document.getElementById('right-panel').appendChild(element);
    };
    window.addEventListener('afterprint', afterPrintHandler);
    return () => {
      window.removeEventListener('beforeprint', beforePrintHandler);
      window.removeEventListener('afterprint', afterPrintHandler);
    };
  }, []);

  // load/save preferences
  useEffect(() => {
    let preferencesSaver: ReturnType<typeof autoRun>;
    const main = async () => {
      const savedPreferences = await localforage.getItem<string>(
        'markdown-plus-preferences',
      );
      if (savedPreferences) {
        Object.assign(preferences, JSON.parse(savedPreferences));
      }
      // must be after loading, otherwise it will save the default preferences
      preferencesSaver = autoRun(preferences, () => {
        localforage.setItem(
          'markdown-plus-preferences',
          JSON.stringify(preferences),
        );
      });
      preferencesSaver.start();
    };
    main();
    return () => {
      if (preferencesSaver) {
        preferencesSaver.stop();
      }
    };
  }, [preferences]);

  return (
    <>
      <MarkdownPlus
        markdown={markdown}
        {...preferences}
        toolBarItems={[
          'about',
          '|',
          'print',
          '|',
          <i
            key="preferences-toolbar-item"
            title="Preferences"
            className="fa fa-cog"
            onClick={() => (store.preferencesModalOpen = true)}
          ></i>,
        ]}
      />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}
      >
        <PreferencesModal store={store} />
      </ConfigProvider>
    </>
  );
};

export default auto(App);
