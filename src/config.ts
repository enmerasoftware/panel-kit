/**
 * Paketin projeye bağlandığı tek yer: çeviri, dil ve biçimlendirme projeden gelir.
 * Proje açılışta bir kez `configurePanelKit({ t, locale, formatNumber, formatDate })` çağırır; çağırmazsa İngilizce metin
 * ve tarayıcı dili kullanılır. Bileşenlerdeki metin anahtarları İngilizce kaynak metnin kendisidir (`lang/tr.json`).
 */
export type Translate = (key: string, replacements?: Record<string, string | number>) => string;

type Config = {
    t: Translate;
    locale: () => string;
    formatNumber: (value: number) => string;
    formatDate: (value: string) => string;
};

const fill: Translate = (key, replacements = {}) => key.replace(/:([A-Za-z_]\w*)/g, (match, name: string) => (name in replacements ? String(replacements[name]) : match));

let config: Config = {
    t: fill,
    locale: () => 'en-US',
    formatNumber: (value) => new Intl.NumberFormat(config.locale()).format(value),
    formatDate: (value) => new Date(value).toLocaleDateString(config.locale()),
};

export function configurePanelKit(options: Partial<Config>): void {
    config = { ...config, ...options };
}

export const t: Translate = (key, replacements) => config.t(key, replacements);
export const intlLocale = (): string => config.locale();
export const formatNumber = (value: number): string => config.formatNumber(value);
export const formatDate = (value: string): string => config.formatDate(value);
