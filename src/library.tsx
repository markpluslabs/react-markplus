import { ConfigProvider } from 'antd';
import React from 'react';

import App from './components/app';
import store from './store';

const MarkdownPlus = () => (
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

export default MarkdownPlus;
