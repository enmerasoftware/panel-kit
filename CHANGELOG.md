# Changelog

## 0.2.1

- `SectionCard`: on phones (below `sm`) the header wraps, so actions that do not fit move under the title instead of
  squeezing it into a narrow column. Nothing changes from `sm` up.
- `Button` / `LinkButton` accept `aria-keyshortcuts`. react-aria drops this attribute from DOM props; it is now written to
  the element through the `render` prop (a `render` you pass yourself still works).
- `Button` `variant="floating"`: in dark mode it uses the card colour with a light ring instead of the primary colour, so the
  floating button does not look like the page's main action.

## 0.2.0

- `Button` `variant="destructive-ghost"`: row delete/remove icons; red text, background only on hover.
- `TextButton` / `TextLink` `tone="danger"`.
- `Heading` `size="xs"` for dense tool panels.
- `Input` `size="xs"` and `mono`; `Textarea` `size="sm"` and `mono` (codes, keys, JSON).

## 0.1.0

- First release: the shared components of the Searvia panel, with `configurePanelKit` for translation, locale and
  number/date formatting, `theme.css` for Tailwind CSS v4 and Turkish texts in `lang/tr.json`.
