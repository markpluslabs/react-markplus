import { auto } from 'manate/react';
import React from 'react';

import { Store } from '../../store';
import AboutModal from './about';
import PreferencesModal from './preferences';
import PromptModals from './prompt';

const Modals = (props: { store: Store }) => {
  const { store } = props;
  return (
    <>
      <PreferencesModal store={store} />
      <PromptModals store={store} />
      <AboutModal modal={store.modals.about} />
    </>
  );
};

export default auto(Modals);
