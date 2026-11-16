# Grid Column UI — Video Recreation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/grid-column-ui/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

This is a runnable recreation of the 16.5-second screen recording titled **Grid Column UI**.

## What is shown in the video

- Dark navy page background and glowing blue `Grid Column UI` heading
- Six preset buttons arranged in two rows of three
- A preview area containing three grid columns labelled `Col 1`, `Col 2`, `Col 3`
- The selected preset changes the relative width of the columns
- A code readout displays the active `grid-template-columns` declaration

## Presets visible in the video

1. `1fr 1fr 1fr`
2. `3fr 1fr 1fr`
3. `1fr 3fr 1fr`
4. `1fr 1fr 3fr`
5. `2fr 4fr 2fr`
6. `10% 70% 10%`

## Extracted implementation concept

The recording shows the rendered UI and the live CSS declaration rather than a source-code editor. The central CSS property being demonstrated is:

```css
.grid-preview {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
}
```

The preset buttons update the `grid-template-columns` value, and the output label displays the exact active value. This standalone implementation recreates the visible interaction and styling; it is not a byte-for-byte extraction of unseen original source files.

## Run

Extract the ZIP and open `index.html` in any modern browser. No dependencies, npm install, server, or build step is required.

## Files

- `index.html` — heading, preset buttons, three-column preview and live code output
- `style.css` — dark theme, grid preview, responsive layout and button states
- `script.js` — preset selection and live CSS declaration update
- `README.md` — video observations and setup instructions

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
