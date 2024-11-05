import { manage } from 'manate';

export class Preferences {
  mode: 'both' | 'editor' | 'preview' = 'both';
  toolbar: 'show' | 'hide' | 'none' = 'none';
  theme: 'auto' | 'light' | 'dark' = 'auto';
  editorFontSize = 14;
}

const preferences = new Preferences();

export default manage(preferences);
