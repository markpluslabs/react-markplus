import { Compartment } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { githubDark, githubLight } from '@uiw/codemirror-theme-github';
import { exclude, manage } from 'manate';
import { ReactElement } from 'react';

export class ModalState {
  public isOpen = false;

  public open() {
    this.isOpen = true;
  }

  public close() {
    this.isOpen = false;
    store.editor?.focus();
  }
}

class Preferences {
  public mode: 'editor' | 'preview' | 'both' = 'both';
  public toolbar: 'show' | 'hide' | 'none' = 'show';
  public theme: 'light' | 'dark' | 'auto' = 'auto';
  public toolbarItems: (string | ReactElement)[] = [];
}

export class Store {
  public editor: EditorView;
  public editorTheme = exclude(new Compartment());

  public modals = {
    about: new ModalState(),
    emoji: new ModalState(),
    fontAwesome: new ModalState(),
  };

  public preferences = new Preferences();

  public applyTheme() {
    const darkTheme =
      this.preferences.theme === 'dark' ||
      (this.preferences.theme === 'auto' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    // editor theme
    this.editor.dispatch({
      effects: this.editorTheme.reconfigure(
        darkTheme ? githubDark : githubLight,
      ),
    });
  }
}

const store = manage(new Store());

export default store;
