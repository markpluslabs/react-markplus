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
