import { Button, Modal, Space } from 'antd';
import { auto } from 'manate/react';
import React from 'react';

import iconUrl from '../../../icon.svg';
import store from '../../store';

const AboutModal = (props: { modal: typeof store.modals.about }) => {
  const { modal } = props;
  return (
    <Modal
      open={modal.isOpen}
      footer={
        <div style={{ textAlign: 'center' }}>
          <Button type="primary" size="large" onClick={() => modal.close()}>
            Close
          </Button>
        </div>
      }
      onCancel={() => modal.close()}
      maskClosable={true}
      centered={true}
    >
      <div style={{ textAlign: 'center' }}>
        <p>
          <img src={iconUrl} width="64" />
        </p>
        <h2>Markdown Plus</h2>
        <p>Version 3.0</p>
        <p>A React markdown editor and previewer.</p>
        <p>
          Copyright © 2015 - 2024{' '}
          <a
            href="https://github.com/tylerlong/"
            target="_blank"
            rel="noreferrer"
          >
            Tyler Liu
          </a>
        </p>
        <Space>
          <a
            href="https://chuntaoliu.com/markdown-plus/"
            target="_blank"
            rel="noreferrer"
          >
            Home Page
          </a>
          |
          <a
            href="https://github.com/tylerlong/markdown-plus/"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </Space>
      </div>
    </Modal>
  );
};

export default auto(AboutModal);
