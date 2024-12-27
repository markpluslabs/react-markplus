import { ConfigProvider } from "antd";
import { manage } from "manate";
import React, { ReactElement, useEffect, useMemo } from "react";

import Layout from "./components/layout.tsx";
import { Store } from "./store.ts";

export const defaultToolbarItems = [
  "about",
  "|",
  "bold",
  "italic",
  "strikethrough",
  "underline",
  "mark",
  "|",
  "emoji",
  "fontawesome",
  "|",
  "quote",
  "unordered-list",
  "ordered-list",
  "unchecked-list",
  "checked-list",
  "|",
  "link",
  "image",
  "code",
  "table",
  "|",
  "math",
  "flowchart",
];

const MarkPlus = (props: {
  markdown?: string;
  mode?: "editor" | "preview" | "both";
  toolbar?: "show" | "hide" | "none";
  theme?: "light" | "dark" | "auto";
  toolbarItems?: (string | ReactElement)[];
  onChange?: (markdown: string) => void;
}) => {
  const { markdown, mode, toolbar, theme, toolbarItems } = props;
  const store = useMemo(() => {
    return manage(new Store());
  }, []);
  useEffect(() => {
    store.preferences.mode = mode ?? "both";
    store.preferences.toolbar = toolbar ?? "show";
    store.preferences.theme = theme ?? "auto";
    store.preferences.toolbarItems = toolbarItems ?? defaultToolbarItems;
    store.onChange = props.onChange ?? (() => {});
  }, [mode, toolbar, theme, toolbarItems, store, props.onChange]);
  useEffect(() => {
    if (store.editor) {
      const currentSelection = store.editor.state.selection;
      store.editor.dispatch({
        changes: {
          from: 0,
          to: store.editor.state.doc.length,
          insert: markdown ?? "",
        },
        selection: currentSelection,
      });
    }
  }, [markdown, store.editor]);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      <Layout store={store} />
    </ConfigProvider>
  );
};

export default MarkPlus;
