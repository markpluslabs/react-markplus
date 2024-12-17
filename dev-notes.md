- No [abbreviation](https://michelf.ca/projects/php-markdown/extra/#abbr) support, because prettier will replace "\*" with "\_" which will break abbreviation.

## Todo

- Write Playwright tests
- Make an app for ebook authoring
- Create a VS Code extension
- Create a Chrome extension for GitHub markdown rendering
- Create a browser extension for email authoring
- refactor store data structure
- remove manate from dep
- remove as many deps as possible
- add more toolbal items, but by default do not show so many
- replace parcel with packle

## useMemo vs useRef

You cannot read/write useRef object during rendering. So do not useRef and pass it to children components. Since you will be reading it for rendering.

useMemo doesn't have this restriction.
