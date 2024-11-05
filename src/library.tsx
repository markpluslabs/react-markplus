import { ConfigProvider } from 'antd';
import React, { ReactElement, useEffect } from 'react';

import App from './components/app';
import store from './store';

const MarkdownPlus = (props: {
  markdown?: string;
  mode?: 'editor' | 'preview' | 'both';
  toolbar?: 'show' | 'hide' | 'none';
  theme?: 'light' | 'dark' | 'auto';
  editorFontSize?: number;
  toolBarItems?: (string | ReactElement)[];
}) => {
  const { markdown, mode, toolbar, theme, editorFontSize, toolBarItems } =
    props;
  useEffect(() => {
    store.preferences.mode = mode ?? 'both';
    store.preferences.toolbar = toolbar ?? 'none';
    store.preferences.theme = theme ?? 'auto';
    store.preferences.editorFontSize = editorFontSize ?? 14;
    store.preferences.toolBarItems = toolBarItems ?? [
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
      '|',
      'preferences',
      'print',
    ];
  }, [mode, toolbar, theme, editorFontSize, toolBarItems]);
  useEffect(() => {
    store.editor.dispatch({
      changes: {
        from: 0,
        to: store.editor.state.doc.length,
        insert: markdown,
      },
    });
  }, [markdown]);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
    >
      <App store={store} />
    </ConfigProvider>
  );
};

export default MarkdownPlus;
