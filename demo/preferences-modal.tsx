// import { EditorView } from '@codemirror/view';
import { Button, Form, Modal, Select } from 'antd';
// import { autoRun } from 'manate';
import { auto } from 'manate/react';
import React from 'react';

import iconUrl from '../icon.svg';
import { Store } from './store';

const PreferencesModal = (props: { store: Store }) => {
  const { store } = props;
  // const modal = store.modals.preferences;
  // useEffect(() => {
  //   const { start, stop } = autoRun(store, () => {
  //     if (!store.editor) {
  //       return;
  //     }
  //     // apply light/dark theme
  //     store.applyTheme();

  //     // editor font size
  //     store.editor.dispatch({
  //       effects: store.editorFontSize.reconfigure(
  //         EditorView.theme({
  //           '&': {
  //             fontSize: store.preferences.editorFontSize + 'px',
  //           },
  //         }),
  //       ),
  //     });
  //   });
  //   start();
  //   return () => stop();
  // }, []);
  return (
    <Modal
      open={store.preferencesModalOpen}
      footer={
        <div style={{ textAlign: 'center' }}>
          <Button
            type="primary"
            size="large"
            onClick={() => (store.preferencesModalOpen = false)}
          >
            Close
          </Button>
        </div>
      }
      onCancel={() => (store.preferencesModalOpen = false)}
      maskClosable={true}
      centered={true}
    >
      <div style={{ textAlign: 'center' }}>
        <p>
          <img src={iconUrl} width="64" />
        </p>
        <h2>Markdown Plus Preferences</h2>
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 12 }} labelWrap>
          <Form.Item label="Toolbar">
            <Select
              value={store.preferences.toolbar}
              options={[
                { value: 'show', label: 'Show' },
                { value: 'hide', label: 'Hide' },
                { value: 'none', label: 'None' },
              ]}
              onChange={(value) => (store.preferences.toolbar = value)}
            />
          </Form.Item>
          <Form.Item label="Mode">
            <Select
              value={store.preferences.mode}
              options={[
                { value: 'both', label: 'Both' },
                { value: 'editor', label: 'Editor' },
                { value: 'preview', label: 'Preview' },
              ]}
              onChange={(value) => (store.preferences.mode = value)}
            />
          </Form.Item>
          <Form.Item label="Theme">
            <Select
              value={store.preferences.theme}
              options={[
                { value: 'auto', label: 'Auto' },
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
              ]}
              onChange={(value) => (store.preferences.theme = value)}
            />
          </Form.Item>
          <Form.Item label="Editor font size">
            <Select
              value={store.preferences.editorFontSize}
              options={[
                8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 24, 32,
              ].map((i) => ({ value: i, label: `${i}px` }))}
              onChange={(value) => (store.preferences.editorFontSize = value)}
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default auto(PreferencesModal);
