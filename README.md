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

Initial markdown text to load into the editor.

```tsx
<MarkdownPlus markdown="# Hello world!" />
```

Default value is `''`.

### toolbar

Show, hide or remove toolbar.

```tsx
<MarkdownPlus toolbar="show" />
```

3 possible values:

- `show`: show toolbar.
- `hide`: hide toolbar, show a gutter on top. Click the gutter to show toolbar.
- `none`: no toolbar, no gutter.

Default value: `none`.

### mode

Display editor, preview or both.

```tsx
<MarkdownPlus mode="both" />
```

3 possible values:

- `both`: show both editor and preview
- `editor`: show editor only
- `preview`: show preview only

Default value: `both`.

### theme

Overal theme: light, dark or auto:

```tsx
<MarkdownPlus theme="auto" />
```

3 possible values:

- `light`: light theme
- `dark`: dark theme
- `auto`: same as system theme

Default value: `auto`.
