import { auto } from "manate/react.js";
import React from "react";

import { Store } from "../../store.ts";
import AboutModal from "./about.tsx";
import PromptModals from "./prompt.tsx";

const Modals = (props: { store: Store }) => {
  const { store } = props;
  return (
    <>
      <AboutModal modal={store.modals.about} />
      <PromptModals store={store} />
    </>
  );
};

export default auto(Modals);
