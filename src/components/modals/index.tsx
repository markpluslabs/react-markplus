import { auto } from 'manate/react';
import React from 'react';

import { Store } from '../../store';
import PreferencesModal from './preferences';
import PromptModals from './prompt';
import StaticModals from './static';

const Modals = auto((props: { store: Store }) => {
  const { store } = props;
  return (
    <>
      <PreferencesModal store={store} />
      <PromptModals store={store} />
      <StaticModals modals={store.modals} />
    </>
  );
});

export default Modals;
