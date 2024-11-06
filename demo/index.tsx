import localforage from 'localforage';
import { autoRun } from 'manate';
import React, { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import MarkdownPlus from '../src/library';
import preferences from './preferences';
import PreferencesModal from './preferencesModal';
import markdownUrl from './sample.md';

const Root = () => {
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
  }, []);

  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <MarkdownPlus
        markdown={markdown}
        {...preferences}
        toolbar="show"
        toolBarItems={[
          'about',
          '|',
          'print',
          '|',
          <i
            key="preferences-toolbar-item"
            title="Preferences"
            className="fa fa-cog"
            onClick={() => setModalOpen(true)}
          ></i>,
        ]}
      />
      <PreferencesModal
        preferences={preferences}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
