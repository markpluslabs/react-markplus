# MarkPlus

<img src="https://markpluslabs.github.io/react-markplus/icon.svg" alt="icon" width="256" height="256"/>

A React markdown editor and previewer.

## Demos

- [Demo for Markdown authors](https://markpluslabs.github.io/react-markplus/)
- [Demo for React developers](https://markpluslabs.github.io/react-markplus-demo/)
  - [source code](https://github.com/markpluslabs/react-markplus-demo/blob/main/src/app.tsx)

## Installation

```
yarn add react-markplus
```

## Usage

```tsx
import MarkPlus from "react-markplus";

<MarkPlus markdown="# Hello world!" />;
```

## markdown

Initial markdown text to load into the editor.

```tsx
<MarkPlus markdown="# Hello world!" />;
```

Default value is `''`.

## onChange

A callback function to be invoked automatically when markdown text changes.

```tsx
<MarkPlus
  onChange={(markdown) => {
    console.log("markdown text changed to:", markdown);
  }}
/>;
```

Default value is `() => {}`.

## ❌ onPreviewChange

A callback function to be invoked automatidally when preview html changes.

This has been **removed** from the library. Because you are supposed to generate
preview using
[markplus-engine](https://github.com/markpluslabs/markplus-engine).

## toolbar

Show, hide or remove toolbar.

```tsx
<MarkPlus toolbar="show" />;
```

3 possible values:

- `show`: show toolbar, show a gutter below toolbar. Click the gutter to hide
  toolbar.
- `hide`: hide toolbar, show a gutter on top. Click the gutter to show toolbar.
- `none`: no toolbar, no gutter.

Default value: `show`.

## mode

Display editor, preview or both.

```tsx
<MarkPlus mode="both" />;
```

3 possible values:

- `both`: show both editor and preview
  - there is a vertical gutter between editor and preview, you may drag the
    gutter to adjust sizes of them.
- `editor`: show editor only
- `preview`: show preview only
  - Use this mode if you don't need any editing feature.
  - in this mode this library is a markdown renderer.

Default value: `both`.

## theme

Overall theme: light, dark or auto:

```tsx
<MarkPlus theme="auto" />;
```

3 possible values:

- `light`: light theme
- `dark`: dark theme
- `auto`: same as system theme

Default value: `auto`.

## toolbarItems

You may configure the toolbar freely.

```tsx
<MarkPlus toolbarItems={["about", "|", "bold", "italic"]} />;
```

A toolbar item could be either a string or a `ReactElement`. For toolbar items
included with library, you may just specify a string. For your own custom
toolbar items, please specify a `ReactElement`.

## Included toolbar Items

- `'about'`
  - show a modal about MarkPlus
- `'|'`
  - a vertical separator
- `'bold'`
  - make text bold
- `'italic'`
  - make text italic
- `'strikethrough'`
  - make text strokethrough
- `'underline'`
  - make text underlined
- `'mark'`
  - make text marked
- `'emoji'`
  - show a modal to insert emojis
- `'fontawesome'`
  - show a modal to insert fontawesome icons
- `'quote'`
  - quote text
- `'unordered-list'`
  - create unordered list item
- `'ordered-list'`
  - create ordered list item
- `'unchecked-list'`
  - create unchecked task list item
- `'checked-list'`
  - create checked task list item
- `'link'`
  - insert a link
- `'image'`
  - insert a image
- `'code'`
  - insert a code snippet
- `'table'`
  - insert a table
- `'math'`
  - insert some math formulas
- `flowchart`
  - insert some flowcharts

## Default toolbar items

```tsx
import { defaultToolbarItems } from "react-markplus";
```

Its value is:

```tsx
[
  "about",
  "|",
  "bold",
  "italic",
  "strikethrough",
  "underline",
  "mark",
  "|",
  "emoji",
  "fontawesome",
  "|",
  "quote",
  "unordered-list",
  "ordered-list",
  "unchecked-list",
  "checked-list",
  "|",
  "link",
  "image",
  "code",
  "table",
  "|",
  "math",
  "flowchart",
];
```

You may add or remote items from it to customize your own toolbar.

## Custom toolbar item

Here is a sample to create and insert a custom toolbar item:

```tsx
<MarkPlus
  toolbarItems={[
    "about",
    "|",
    <i
      key="preferences"
      title="Preferences"
      className="fa fa-cog"
      onClick={() => {
        console.log("Todo: display a preferences modal");
      }}
    >
    </i>,
  ]}
/>;
```

### Known issue

Custom toolbar item will freeze in React 19 dev mode.

It works in production mode though. It also works with React 18.
