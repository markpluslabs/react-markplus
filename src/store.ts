import { EditorView } from "@codemirror/view";
import { ReactElement } from "react";

export class ModalState {
  isOpen = false;

  constructor(private store: Store) {}

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.store.editor?.focus();
  }
}

class Preferences {
  mode: "editor" | "preview" | "both" = "both";
  toolbar: "show" | "hide" | "none" = "show";
  theme: "light" | "dark" | "auto" = "auto";
  toolbarItems: (string | ReactElement)[] = [];
}

let counter = 0;
export class Store {
  uid = `markplus-${counter++}`;
  editor!: EditorView;
  onChange: (markdown: string) => void = () => {};

  modals = {
    about: new ModalState(this),
    emoji: new ModalState(this),
    fontAwesome: new ModalState(this),
  };

  preferences = new Preferences();
}
