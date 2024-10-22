# Markdown Plus

Markdown Plus ("M+" or "mdp" for short) is a markdown editor with extra features.

<img src="https://chuntaoliu.com/markdown-plus/icon.svg" alt="icon" width="256" height="256"/>

## Table of Contents

[toc]

Note: Only `h2` & `h3` are shown in toc.

## Mastering Markdown

Markdown allows you to write using an easy-to-read, easy-to-write plain text format, which then converts to valid HTML for viewing.

[Mastering Markdown Guide](https://guides.github.com/features/mastering-markdown/).

## Strikethrough

~~strikethrough~~

## Underline

++underline++

## Mark

==mark==

## Subscript

H~2~O or H<sub>2</sub>O

You can also use inline math: `$H_2O$`

## Superscript

29^th^ or 29<sup>th</sup>

You can also use inline math: `$29^{th}$`

## Emoji

:panda_face: :sparkles: :camel: :boom: :pig:

[Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)

## Fontawesome

:fa-cab: :fa-flag: :fa-bicycle: :fa-leaf: :fa-heart:

[All the Font Awesome icons](https://github.com/gluons/Font-Awesome-Icon-Chars/blob/master/character-list/character-list.yaml)

You may specify the font icon style like this :fa-regular fa-smile:.

Please note that, this demo only includes free icons and styles.

## Code snippets

Inline: `print 'hello code'`

    evens = [1, 2, 3, 4, 5].collect do |item|
      item * 2
    end

```ts
async function fetchItems<T>(url: string): Promise<T[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  const data: T[] = await response.json();
  return data;
}
```

[Code Formatting](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)

## Tables and alignment

| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |

| Left-Aligned | Center Aligned  | Right Aligned |
| :----------- | :-------------: | ------------: |
| col 3 is     | some wordy text |         $1600 |
| col 2 is     |    centered     |           $12 |

[Table Syntax](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables)

## Task list

- [ ] a bigger project
  - [x] first subtask
  - [x] follow up subtask
  - [ ] final subtask
- [ ] a separate task

[Task List Syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#task-lists)

## Footnote

Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
    belong to the previous footnote.

Here is an inline note.^[Inlines notes are easier to write, since
you don't have to pick an identifier and move down to type the
note.]

[Footnote Syntax](https://pandoc.org/MANUAL.html#footnotes)

## Math

Inline math: `$\dfrac{ \tfrac{1}{2}[1-(\tfrac{1}{2})^n] }{ 1-\tfrac{1}{2} } = s_n$`

Math block:

```math
\oint_C x^3\, dx + 4y^2\, dy

2 = \left(
 \frac{\left(3-x\right) \times 2}{3-x}
 \right)

\sum_{m=1}^\infty\sum_{n=1}^\infty\frac{m^2\,n}
 {3^m\left(m\,3^n+n\,3^m\right)}

\phi_n(\kappa) =
 \frac{1}{4\pi^2\kappa^2} \int_0^\infty
 \frac{\sin(\kappa R)}{\kappa R}
 \frac{\partial}{\partial R}
 \left[R^2\frac{\partial D_n(R)}{\partial R}\right]\,dR
```

[Mathematical Formula Syntax](https://www.mediawiki.org/wiki/Extension:Math/Syntax)

## Mermaid charts

```mermaid
graph TD
A[Christmas] -->|Get money| B(Go shopping)
B --> C{Let me think}
C -->|One| D[Laptop]
C -->|Two| E[iPhone]
C -->|Three| F[Car]
```

[Mermaid documentation](https://mermaid.js.org/intro/)

## Custom Container

Markup is similar to fenced code blocks. Valid container types are `success`, `info`, `warning` and `danger`.

::: info
You have new mail.
:::

::: danger
Staying up all night is bad for health.
:::

## Definition list

Term 1
~ Definition 1

Term 2
~ Definition 2a
~ Definition 2b

[Definition List Syntax](https://pandoc.org/MANUAL.html#definition-lists)

## HTML

If you find the markdown syntax too limited, you can try some <span style="color: blue;">HTML<span>:

<p style="text-align:center;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png"/></p>

<a href="https://github.com/tylerlong/markdown-plus/" target="_blank"><img style="position: absolute; top: 0; right: 0; border: 0; z-index: 1000;" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png" alt="Fork me on GitHub"></a>

## Chart.js

[Documentation for charts](https://www.chartjs.org/docs/latest/)

```chartjs
{
  "type": "bar",
  "data": {
    "labels": [
      "Red",
      "Blue",
      "Yellow",
      "Green",
      "Purple",
      "Orange"
    ],
    "datasets": [
      {
        "label": "# of Votes",
        "data": [
          12,
          19,
          3,
          5,
          2,
          3
        ],
        "borderWidth": 1
      }
    ]
  },
  "options": {
    "scales": {
      "y": {
        "beginAtZero": true
      }
    }
  }
}
```
