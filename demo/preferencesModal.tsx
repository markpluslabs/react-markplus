// import { EditorView } from '@codemirror/view';
import { Button, Form, Modal, Select } from 'antd';
// import { autoRun } from 'manate';
import { auto } from 'manate/react';
import React from 'react';

import iconUrl from '../icon.svg';
import { Preferences } from './preferences';

const PreferencesModal = (props: {
  preferences: Preferences;
  modalOpen: boolean;
  setModalOpen: (boolean) => void;
}) => {
  const { preferences, modalOpen, setModalOpen } = props;
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
      open={modalOpen}
      footer={
        <div style={{ textAlign: 'center' }}>
          <Button
            type="primary"
            size="large"
            onClick={() => setModalOpen(false)}
          >
            Save
          </Button>
        </div>
      }
      onCancel={() => setModalOpen(false)}
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
              value={preferences.toolbar}
              options={[
                { value: 'show', label: 'Show' },
                { value: 'hide', label: 'Hide' },
                { value: 'none', label: 'None' },
              ]}
              onChange={(value) => (preferences.toolbar = value)}
            />
          </Form.Item>
          <Form.Item label="Mode">
            <Select
              value={preferences.mode}
              options={[
                { value: 'both', label: 'Both' },
                { value: 'editor', label: 'Editor' },
                { value: 'preview', label: 'Preview' },
              ]}
              onChange={(value) => (preferences.mode = value)}
            />
          </Form.Item>
          <Form.Item label="Theme">
            <Select
              value={preferences.theme}
              options={[
                { value: 'auto', label: 'Auto' },
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
              ]}
              onChange={(value) => (preferences.theme = value)}
            />
          </Form.Item>
          <Form.Item label="Editor font size">
            <Select
              value={preferences.editorFontSize}
              options={[
                8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 24, 32,
              ].map((i) => ({ value: i, label: `${i}px` }))}
              onChange={(value) => (preferences.editorFontSize = value)}
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default auto(PreferencesModal);
