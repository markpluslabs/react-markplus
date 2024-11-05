import localforage from 'localforage';
import React, { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import MarkdownPlus from './library';
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

  // load preferences from local
  const [preferences, setPreferences] = React.useState({});
  useEffect(() => {
    const main = async () => {
      const savedPreferences = await localforage.getItem<string>(
        'markdown-plus-preferences',
      );
      setPreferences(savedPreferences ? JSON.parse(savedPreferences) : {});
    };
    main();
  }, []);

  return <MarkdownPlus markdown={markdown} {...preferences} />;
};

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
