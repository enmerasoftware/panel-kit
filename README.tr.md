# @enmera/panel-kit

React 19, [react-aria](https://react-spectrum.adobe.com/react-aria/) ve Tailwind CSS v4 ile yapılan yönetim panelleri
için ortak bileşenler. Her düğme, giriş alanı, rozet, kutu ve başlık için tek görünüm: aynı şey her ekranda ve kiti
kullanan her üründe aynı görünür.

[English](README.md)

İki canlı panelden ([Searvia](https://searvia.com) ve Enmera Commerce) çıktı. Kuralları
[@enmera/ai-design-check](https://github.com/enmerasoftware/ai-design-check) denetler: sayfa bileşen, ton ve boyut
seçer; görünümü kendisi yazmaz.

## Kurulum

```bash
npm install @enmera/panel-kit react-aria-components class-variance-authority cn lucide-react
# isteğe bağlı (grafik, bildirim, temalı bildirim):
npm install recharts sonner next-themes
```

Ana CSS dosyasında, Tailwind'den sonra:

```css
@import "tailwindcss";
@import "@enmera/panel-kit/theme.css";
```

`theme.css` Tailwind'e kitin sınıflarını taratır ve shadcn belirteçleri dışında kullandığı birkaç belirtece varsayılan
verir (`--color-ink`, `--color-brand-link`, `--color-on-brand`, `--color-on-brand-ink`, `--text-2xs`, `--font-display`).
Projenin kendi değeri geçerlidir. Renkler projenin temasından gelir (`--primary`, `--muted`, `--card`, `--sidebar` …);
her ürün kendi paletini korur.

Açılışta bir kez çeviri, dil ve sayı/tarih biçimi bağlanır:

```ts
import { configurePanelKit } from '@enmera/panel-kit/config';

configurePanelKit({ t, locale: () => 'tr-TR', formatNumber, formatDate });
```

Bağlanmazsa İngilizce metin ve tarayıcının dili kullanılır. Anahtarlar İngilizce metnin kendisidir; Türkçesi
`@enmera/panel-kit/lang/tr.json` dosyasında, projenin sözlüğüne eklenir.

## Kullanım

Kural: **görünüm prop'tan, yerleşim `className`'den.** Renk, köşe, çerçeve, halka ve gölge bileşenindir; sayfa genişlik,
boşluk ve ızgara konumu ekler. Kutular ve satırlar (Tile, SectionCard, RowButton, ListRow …) iç boşluğu ve iç yerleşimi
de çağırandan alır. Uygun ton ya da boyut yoksa çağrı yerine sınıf değil, bileşene ton ya da boyut eklenir.

Bileşen listesi ve seçenekler için [README.md](README.md#use).

## Sürümler

Anlamsal sürümleme. Bir bileşenin görünümünü değiştiren değişiklik ara sürümdür ve [CHANGELOG.md](CHANGELOG.md)'de
yazılır; prop ya da görünüm kaldırmak ana sürümdür.

## Lisans

MIT
