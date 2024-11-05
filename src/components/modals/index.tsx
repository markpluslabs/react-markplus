import { auto } from 'manate/react';
import React from 'react';

import { Store } from '../../store';
import AboutModal from './about';
import PromptModals from './prompt';

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
