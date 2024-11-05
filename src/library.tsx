import { ConfigProvider } from 'antd';
import React, { useEffect } from 'react';

import App from './components/app';
import store from './store';

const MarkdownPlus = (props: { data: string }) => {
  const { data } = props;
  useEffect(() => {
    store.editor.dispatch({
      changes: {
        from: 0,
        to: store.editor.state.doc.length,
        insert: data,
      },
    });
  }, [data]);
  useEffect(() => {
    const beforePrintHandler = () => {
      document.body.appendChild(document.getElementById('preview'));
      document.getElementById('root').style.display = 'none';
    };
    window.addEventListener('beforeprint', beforePrintHandler);
    const afterPrintHandler = () => {
      document.getElementById('root').style.display = 'block';
      document
        .getElementById('right-panel')
        .appendChild(document.getElementById('preview'));
    };
    window.addEventListener('afterprint', afterPrintHandler);
    return () => {
      window.removeEventListener('beforeprint', beforePrintHandler);
      window.removeEventListener('afterprint', afterPrintHandler);
    };
  }, []);
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
