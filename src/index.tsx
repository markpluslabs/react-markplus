import React, { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import MarkdownPlus from './library';
import markdownUrl from './sample.md';

const Root = () => {
  const [data, setData] = React.useState('');
  useEffect(() => {
    const loadSampleData = async () => {
      const r = await fetch(markdownUrl);
      const text = await r.text();
      setData(text);
    };
    loadSampleData();
  }, []);
  return <MarkdownPlus data={data} />;
};

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
