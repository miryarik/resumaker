// Fonts offered for the resume. `google` is the css2 family spec; DM Mono is
// already loaded by index.css so it doesn't need one.
export const FONTS = [
    {
        id: "dm-mono",
        label: "DM Mono",
        group: "Monospace",
        family: '"DM Mono", monospace',
    },
    {
        id: "inter",
        label: "Inter",
        group: "Sans serif",
        family: '"Inter", sans-serif',
        google: "Inter:wght@400;700",
    },
    {
        id: "roboto",
        label: "Roboto",
        group: "Sans serif",
        family: '"Roboto", sans-serif',
        google: "Roboto:wght@400;700",
    },
    {
        id: "open-sans",
        label: "Open Sans",
        group: "Sans serif",
        family: '"Open Sans", sans-serif',
        google: "Open+Sans:wght@400;700",
    },
    {
        id: "lato",
        label: "Lato",
        group: "Sans serif",
        family: '"Lato", sans-serif',
        google: "Lato:wght@400;700",
    },
    {
        id: "source-sans-3",
        label: "Source Sans 3",
        group: "Sans serif",
        family: '"Source Sans 3", sans-serif',
        google: "Source+Sans+3:wght@400;700",
    },
    {
        id: "merriweather",
        label: "Merriweather",
        group: "Serif",
        family: '"Merriweather", serif',
        google: "Merriweather:wght@400;700",
    },
    {
        id: "lora",
        label: "Lora",
        group: "Serif",
        family: '"Lora", serif',
        google: "Lora:wght@400;700",
    },
    {
        id: "source-serif-4",
        label: "Source Serif 4",
        group: "Serif",
        family: '"Source Serif 4", serif',
        google: "Source+Serif+4:wght@400;700",
    },
    {
        id: "eb-garamond",
        label: "EB Garamond",
        group: "Serif",
        family: '"EB Garamond", serif',
        google: "EB+Garamond:wght@400;700",
    },
];

export const DEFAULT_FONT = "dm-mono";

// content text size, in px
export const FONT_SIZE = { min: 9, max: 15, step: 0.5, default: 12 };

export const getFont = (id) =>
    FONTS.find((f) => f.id === id) ?? FONTS.find((f) => f.id === DEFAULT_FONT);

// Adds the Google Fonts stylesheet for a font the first time it's used.
export function loadFont(font) {
    if (!font.google) return;
    const id = `gfont-${font.id}`;
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${font.google}&display=swap`;
    document.head.appendChild(link);
}
