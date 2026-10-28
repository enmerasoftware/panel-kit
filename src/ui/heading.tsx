import { cn } from '../utils.js';

/**
 * Ürünün tek başlık ölçeği (panel ve tanıtım sitesi): yazı tipi, kalınlık, satır ve harf aralığı burada; sayfa yalnız
 * boyutu seçer (renk ve yerleşim className'den). Büyük boyutlar görüntü yazı tipiyle, `base` ve `sm` metin yazı tipiyle.
 * Ölçek dışı boyut eklenmez.
 */
const sizes = {
    mega: 'font-display text-5xl leading-[1.02] tracking-[-0.035em] sm:text-7xl',
    hero: 'font-display text-4xl leading-[1.05] tracking-[-0.03em] sm:text-6xl',
    display: 'font-display text-4xl leading-tight tracking-tight sm:text-5xl',
    section: 'font-display text-3xl tracking-tight sm:text-4xl',
    title: 'font-display text-2xl tracking-tight sm:text-3xl',
    subtitle: 'font-display text-2xl tracking-tight',
    card: 'font-display text-xl tracking-tight',
    small: 'font-display text-lg tracking-tight',
    base: 'text-base',
    sm: 'text-sm',
} as const;

export type HeadingSize = keyof typeof sizes;

export function Heading({ as: Tag = 'h2', size, className, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { as?: 'h1' | 'h2' | 'h3' | 'h4'; size: HeadingSize }) {
    return <Tag className={cn('font-semibold text-balance', sizes[size], className)} {...props} />;
}
