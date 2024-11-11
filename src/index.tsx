import { ConfigProvider } from 'antd';
import React, { ReactElement, useEffect, useMemo } from 'react';

import Layout from './components/layout';

import 'katex/dist/katex.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { manage } from 'manate';

import { Store } from './store';

export const defaultToolbarItems = [
  'about',
  '|',
  'bold',
  'italic',
  'strikethrough',
  'underline',
  'mark',
  '|',
  'emoji',
  'fontawesome',
  '|',
  'quote',
  'unordered-list',
  'ordered-list',
  'unchecked-list',
  'checked-list',
  '|',
  'link',
  'image',
  'code',
  'table',
  '|',
  'math',
  'mermaid',
  'chartjs',
];

const MarkPlus = (props: {
  markdown?: string;
  mode?: 'editor' | 'preview' | 'both';
  toolbar?: 'show' | 'hide' | 'none';
  theme?: 'light' | 'dark' | 'auto';
  toolbarItems?: (string | ReactElement)[];
}) => {
  const { markdown, mode, toolbar, theme, toolbarItems } = props;
  const store = useMemo(() => {
    return manage(new Store());
  }, []);
  useEffect(() => {
    store.preferences.mode = mode ?? 'both';
    store.preferences.toolbar = toolbar ?? 'show';
    store.preferences.theme = theme ?? 'auto';
    store.preferences.toolbarItems = toolbarItems ?? defaultToolbarItems;
    store.applyTheme();
  }, [mode, toolbar, theme, toolbarItems, store]);
  useEffect(() => {
    store.editor?.dispatch({
      changes: {
        from: 0,
        to: store.editor.state.doc.length,
        insert: markdown ?? '',
      },
    });
  }, [markdown, store.editor]);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
    >
      <Layout store={store} />
    </ConfigProvider>
  );
};

export default MarkPlus;
