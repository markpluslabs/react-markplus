# Markdown Plus

<img src="https://chuntaoliu.com/markdown-plus/icon.svg" alt="icon" width="256" height="256"/>

A React markdown editor and previewer.

## [Online Demo](https://chuntaoliu.com/markdown-plus/)

![Markdown Plus](screenshot.png)

## Installation

```
yarn add markdown-plus
```

## Usage

```tsx
import MarkdownPlus from 'markdown-plus';

<MarkdownPlus markdown="# Hello world!" />;
```

## props

### markdown

Initial markdown text to load into the editor:

```tsx
<MarkdownPlus markdown="# Hello world!" />
```

### toolbar

Show, hide or remove toolbar:

```tsx
<MarkdownPlus toolbar="show" />
```

3 possible values:

- `show`
- `hide`
- `none`

The difference between `hide` and `none` is:

- `hide`: hide the toolbar but show a gutter on the top, click the gutter to toggle the toolbar
- `none`: no toolbar and no gutter

### mode

Display editor, preview or both"

```tsx
<MarkdownPlus mode="both" />
```

3 possible values:

- `both`: show both editor and preview
- `editor`: show editor only
- `preview`: show preview only

## Tutorial

TBD

For details, please check [demo](./demo/) folder.
