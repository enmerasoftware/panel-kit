# @enmera/panel-kit

Shared components for admin panels built with React 19, [react-aria](https://react-spectrum.adobe.com/react-aria/) and
Tailwind CSS v4. One look for every button, input, badge, box and heading, so the same thing looks the same on every
screen and in every product that uses the kit.

[Türkçe](README.tr.md)

It grew out of two production panels ([Searvia](https://searvia.com) and Enmera Commerce). Its rules are checked by
[@enmera/ai-design-check](https://github.com/enmerasoftware/ai-design-check): pages pick a component, a tone and a size;
they do not write the look themselves.

## Install

```bash
npm install @enmera/panel-kit react-aria-components class-variance-authority cn lucide-react
# optional, for charts, toasts and themed toasts:
npm install recharts sonner next-themes
```

In your main CSS file, after Tailwind:

```css
@import "tailwindcss";
@import "@enmera/panel-kit/theme.css";
```

`theme.css` makes Tailwind scan the kit's classes and gives defaults to the few tokens it uses beyond the usual shadcn
ones (`--color-ink`, `--color-brand-link`, `--color-on-brand`, `--color-on-brand-ink`, `--text-2xs`, `--font-display`).
Your own values win. Colours come from your theme (`--primary`, `--muted`, `--card`, `--sidebar` …), so each product
keeps its own palette.

Once at start-up, connect your translation, locale and number/date formatting:

```ts
import { configurePanelKit } from '@enmera/panel-kit/config';

configurePanelKit({ t, locale: () => 'tr-TR', formatNumber, formatDate });
```

Without it the kit uses its English text and the browser's locale. Keys are the English text itself; Turkish is in
`@enmera/panel-kit/lang/tr.json` — merge it into your dictionary.

## Use

```tsx
import { Button, LinkButton } from '@enmera/panel-kit/ui/button';
import { StatusBadge } from '@enmera/panel-kit/status-badge';
import { Tile } from '@enmera/panel-kit/ui/tile';
import { Heading } from '@enmera/panel-kit/ui/heading';

<Tile tone="warning" className="flex items-center gap-3">
    <StatusBadge tone="warning">Pending</StatusBadge>
    <Heading as="h3" size="sm">Payment method needs attention</Heading>
    <LinkButton href="/billing" size="sm" variant="outline">Open billing</LinkButton>
</Tile>
```

The rule: **look from props, placement from `className`.** Colour, radius, border, ring and shadow belong to the
component; pages add width, margin and grid position. Boxes and rows (Tile, SectionCard, RowButton, ListRow …) also
take their padding, gap and inner layout from the caller. If a tone or size is missing, add it to the component, not a
class at the call site.

| What | Component | Options |
|---|---|---|
| Button, link button | `ui/button`: `Button`, `LinkButton` | default, outline, secondary, ghost, inverse, light, on-brand, on-brand-soft, floating, warning, caution, destructive, link · xs, sm, default, lg, icon sizes |
| Text button and link | `ui/text-button`: `TextButton`, `TextLink` | primary, muted, brand, warning · xs, sm |
| Clickable row | `ui/row-button`: `RowButton` (`isSelected`), `RowLink` | padding from the caller |
| Selectable card | `ui/option-card`: `OptionCard` (`isSelected`) | |
| Main choice, filter pill | `ui/segmented`: `Segmented`; `ui/chip`: `Chip` | |
| Badge | `status-badge`: `StatusBadge` | success, danger, warning, info, purple, neutral, primary, accent, overlay · sm, default |
| Box, section | `ui/tile`: `Tile`, `TooltipBox`; `section-card`: `SectionCard` | default, primary, muted, success, warning, danger, info · sm, default, lg, flush · `interactive`; SectionCard `highlighted`, `flush` |
| Heading | `ui/heading`: `Heading` | mega, hero, display, section, title, subtitle, card, small, base, sm |
| Icon background | `ui/icon-tile`: `IconTile` | beside text, not above a heading |
| Small parts | `ui/code`: `Code`; `ui/meta`: `MetaRow`, `List`, `ListRow` | |
| Forms and overlays | `ui/input`, `ui/input-group`, `ui/select`, `ui/combobox`, `ui/textarea`, `ui/checkbox`, `ui/radio-group`, `ui/switch`, `ui/slider`, `ui/field`, `ui/dialog`, `ui/alert-dialog`, `ui/sheet`, `ui/popover`, `ui/dropdown-menu`, `ui/tooltip`, `ui/command` | |
| Layout and data | `ui/sidebar`, `ui/tabs`, `ui/table`, `ui/pagination`, `ui/breadcrumb`, `ui/card`, `ui/chart`, `ui/calendar`, `stat-cards`, `summary-strip`, `empty-state` | |
| Case | `text`: `lowerText`, `upperText` (locale rules), `upperCode`, `lowerCode` (codes) | never `toUpperCase()` |

## With ai-design-check

```json
{
    "looks": { "badge": "StatusBadge", "card": "Tile or SectionCard", "heading": "Heading", "link": "LinkButton" },
    "sharedComponents": ["Button", "LinkButton", "StatusBadge", "Input", "Select", "Textarea", "Tile", "SectionCard", "Chip", "Segmented", "TextButton", "TextLink", "RowButton", "RowLink", "Code", "MetaRow", "List"]
}
```

`npx @enmera/ai-design-check inventory` counts how many looks each kind of element has; the kit is how that number
goes down.

## Versions

Semantic versioning. A change to a component's look is a minor version and is listed in [CHANGELOG.md](CHANGELOG.md);
removing a prop or variant is a major version.

## License

MIT
