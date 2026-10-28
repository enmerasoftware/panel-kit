import { intlLocale } from './config.js';

/** Arama ve karşılaştırma için küçük harf, arayüz dilinin kuralıyla (Türkçede "I" → "ı", "İ" → "i"). */
export const lowerText = (text: string): string => text.toLocaleLowerCase(intlLocale());

/** Görünen metnin büyük harfi (baş harf, kısaltma), arayüz dilinin kuralıyla. */
export const upperText = (text: string): string => text.toLocaleUpperCase(intlLocale());

/** Ülke, dil, para ve kupon kodu gibi Latin harfli kodlar: dilden bağımsız ("id" Türkçede "İD" olmasın). */
export const upperCode = (code: string): string => code.toLocaleUpperCase('en-US');

export const lowerCode = (code: string): string => code.toLocaleLowerCase('en-US');
