import { ConfigProvider } from 'antd';
import React, { ReactElement, useEffect } from 'react';

import Layout from './components/layout';
import store from './store';

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
  useEffect(() => {
    store.preferences.mode = mode ?? 'both';
    store.preferences.toolbar = toolbar ?? 'show';
    store.preferences.theme = theme ?? 'auto';
    store.preferences.toolbarItems = toolbarItems ?? defaultToolbarItems;
  }, [mode, toolbar, theme, toolbarItems]);
  useEffect(() => {
    store.editor.dispatch({
      changes: {
        from: 0,
        to: store.editor.state.doc.length,
        insert: markdown ?? '',
      },
    });
  }, [markdown]);
  useEffect(() => {
    store.applyTheme();
  }, [theme]);
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
