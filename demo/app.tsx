import { ConfigProvider } from 'antd';
import localforage from 'localforage';
import { autoRun } from 'manate';
import { auto } from 'manate/react';
import React, { useEffect } from 'react';
import waitFor from 'wait-for-async';

import MarkdownPlus, { defaultToolBarItems } from '../src';
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

  // scroll to hash
  useEffect(() => {
    const scrollToHash = async () => {
      if (window.location.hash.length === 0) {
        return;
      }
      const r = await waitFor({
        interval: 100,
        times: 30,
        condition: () => document.querySelector(window.location.hash) !== null,
      });
      if (!r) {
        return;
      }
      const linkElement = document.querySelector<HTMLElement>(
        window.location.hash,
      );
      const rightPanel = document.querySelector('.right-panel');
      rightPanel.scrollTop = linkElement.offsetTop;
    };
    scrollToHash();
  }, []);

  // open preferences modal with cmd + ,
  useEffect(() => {
    const keyUpListener = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === ',') {
        event.preventDefault();
        document.querySelector<HTMLElement>('.toolbar .fa-cog')?.click();
      }
    };
    window.addEventListener('keydown', keyUpListener);
    return () => {
      window.removeEventListener('keydown', keyUpListener);
    };
  }, []);

  return (
    <>
      <MarkdownPlus
        markdown={markdown}
        {...preferences}
        toolBarItems={[
          ...defaultToolBarItems,
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
