import { Compartment } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { githubDark, githubLight } from '@uiw/codemirror-theme-github';
import { exclude, manage } from 'manate';
import { ReactElement } from 'react';

class Modal {
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
  public toolbar: 'show' | 'hide' | 'none' = 'none';
  public theme: 'light' | 'dark' | 'auto' = 'auto';
  public toolBarItems: (string | ReactElement)[] = [];
}

export class Store {
  public editor: EditorView;
  public editorTheme = exclude(new Compartment());

  public modals = {
    about: new Modal(),
    preferences: new Modal(),
    emoji: new Modal(),
    fontAwesome: new Modal(),
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

    // github-markdown-css & highlight.js themes
    document.querySelectorAll('[data-theme="light"]').forEach((el) => {
      if (darkTheme) {
        el.setAttribute('disabled', '');
      } else {
        el.removeAttribute('disabled');
      }
    });
    document.querySelectorAll('[data-theme="dark"]').forEach((el) => {
      if (darkTheme) {
        el.removeAttribute('disabled');
      } else {
        el.setAttribute('disabled', '');
      }
    });
  }
}

const store = manage(new Store());

export default store;
