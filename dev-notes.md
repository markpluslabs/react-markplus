- No [abbreviation](https://michelf.ca/projects/php-markdown/extra/#abbr) support, because prettier will replace "\*" with "\_" which will break abbreviation.

## Todo

- Write Playwright tests
- Replace mermaid with lightweight alternatives
- Make an app for ebook authoring
- Create a VS Code extension
- Close most GitHub issues
- bug: all components have the same className
  - Just generate uniq id for them
  - Remove css module?
- refactor store data structure
- remove manate from dep
- remove as many deps as possible

## Pending

- fix a parcel sass build warning:
  - pending here: https://github.com/parcel-bundler/parcel/issues/9857

## useMemo vs useRef

You cannot read/write useRef object during rendering. So do not useRef and pass it to children components. Since you will be reading it for rendering.

useMemo doesn't have this restriction.
