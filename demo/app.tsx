import { ConfigProvider } from "antd";
import localforage from "localforage";
import { autoRun } from "manate";
import { auto } from "manate/react";
import React, { useEffect, useRef } from "react";
import waitFor from "wait-for-async";

import MarkPlus, { defaultToolbarItems, MarkPlusRef } from "../src/index.tsx";
import PreferencesModal from "./preferences-modal.tsx";
import { Store } from "./store.ts";

const App = (props: { store: Store }) => {
  const { store } = props;
  const { preferences } = store;

  // `markPlusRef` here is just for demo purpose, we don't need it
  const markPlusRef = useRef<MarkPlusRef | null>(null);

  // load sample markdown
  const [markdown, setMarkdown] = React.useState("");
  useEffect(() => {
    const loadSampleData = async () => {
      const r = await fetch("sample.md");
      const text = await r.text();
      setMarkdown(text);
      const store = markPlusRef.current?.getStore();
      console.log("store via ref:", store);
    };
    loadSampleData();
  }, []);

  // load/save preferences
  useEffect(() => {
    let preferencesSaver: ReturnType<typeof autoRun>;
    const main = async () => {
      const savedPreferences = await localforage.getItem<string>(
        "markplus-preferences",
      );
      if (savedPreferences) {
        Object.assign(preferences, JSON.parse(savedPreferences));
      }
      // must be after loading, otherwise it will save the default preferences
      preferencesSaver = autoRun(() => {
        localforage.setItem(
          "markplus-preferences",
          JSON.stringify(preferences),
        );
      });
      preferencesSaver.start();
    };
    main();
    return () => {
      if (preferencesSaver) {
        preferencesSaver.stop();
      }
    };
  }, [preferences]);

  // scroll to hash
  useEffect(() => {
    const scrollToHash = async () => {
      if (location.hash.length === 0) {
        return;
      }
      const r = await waitFor({
        interval: 100,
        times: 30,
        condition: () => document.querySelector(location.hash) !== null,
      });
      if (!r) {
        return;
      }
      const linkElement = document.querySelector<HTMLElement>(location.hash)!;
      const rightPanel = document.querySelector(".right-panel")!;
      rightPanel.scrollTop = linkElement.offsetTop;
    };
    scrollToHash();
  }, []);

  // open preferences modal with cmd + ,
  useEffect(() => {
    const keyUpListener = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === ",") {
        event.preventDefault();
        document.querySelector<HTMLElement>(".toolbar .fa-cog")?.click();
      }
    };
    addEventListener("keydown", keyUpListener);
    return () => {
      removeEventListener("keydown", keyUpListener);
    };
  }, []);

  return (
    <>
      <MarkPlus
        ref={markPlusRef}
        markdown={markdown}
        {...preferences}
        toolbarItems={[
          ...defaultToolbarItems,
          "|",
          // <i
          //   key="preferences"
          //   title="Preferences"
          //   className="fa fa-cog"
          //   onClick={() => (store.preferencesModalOpen = true)}
          // >
          // </i>,
        ]}
      />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b96b",
          },
        }}
      >
        <PreferencesModal store={store} />
      </ConfigProvider>
    </>
  );
};

export default auto(App);
