import { auto } from 'manate/react.js';
import React from 'react';

import { Store } from '../../store.js';
import AboutModal from './about.js';
import PromptModals from './prompt.js';

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
