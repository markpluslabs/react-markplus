import { Button, Modal, Space } from 'antd';
import { auto } from 'manate/react';
import React from 'react';

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
          <img src="https://chuntaoliu.com/markplus/icon.svg" width="64" />
        </p>
        <h2>MarkPlus</h2>
        <p>A React markdown editor and previewer.</p>
        <p>
          Copyright © 2015 - 2024{' '}
          <a
            href="https://github.com/markpluslabs/"
            target="_blank"
            rel="noreferrer"
          >
            MarkPlus Labs
          </a>
        </p>
        <Space>
          <a
            href="https://chuntaoliu.com/markplus/"
            target="_blank"
            rel="noreferrer"
          >
            Home Page
          </a>
          |
          <a
            href="https://github.com/markpluslabs/react-markplus/"
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
