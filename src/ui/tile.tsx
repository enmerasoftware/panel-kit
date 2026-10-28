import { cn } from '../utils.js';

const tones = {
    default: 'bg-card ring-foreground/5 shadow-sm dark:ring-foreground/10',
    primary: 'bg-primary/5 ring-primary/15',
    muted: 'bg-muted/40 ring-foreground/5',
    success: 'bg-emerald-500/5 ring-emerald-500/20',
    warning: 'bg-amber-500/5 ring-amber-500/25',
    danger: 'bg-red-500/5 ring-red-500/20',
    info: 'bg-sky-500/5 ring-sky-500/15',
} as const;

const sizes = {
    sm: 'rounded-2xl p-3',
    default: 'rounded-2xl p-4',
    lg: 'rounded-3xl p-5 sm:p-6',
    // Satırlı liste ya da tablo taşıyan kutu: iç boşluk yok, içerik köşeden taşmaz.
    flush: 'overflow-hidden rounded-2xl',
} as const;

/**
 * Kart içindeki ya da yan yana dizilen kutu (gösterge, öneri, seçenek, uyarı). Başlıklı büyük bölümler SectionCard'dır.
 * Ton anlamı taşır (primary öneri, warning dikkat…); iç yerleşim (flex, grid, gap) className'den.
 */
export function Tile({ tone = 'default', size = 'default', interactive = false, className, ...props }: React.ComponentProps<'div'> & { tone?: keyof typeof tones; size?: keyof typeof sizes; interactive?: boolean }) {
    // interactive: kutunun tamamı bir bağlantının içindeyse üzerine gelince halka koyulaşır.
    return <div className={cn('ring-1', sizes[size], tones[tone], interactive && 'transition-[box-shadow] hover:shadow-md hover:ring-foreground/20', className)} {...props} />;
}

/** Grafik ve harita ipucu kutusu: her grafikte aynı zemin, çerçeve, gölge ve yazı boyutu. */
export function TooltipBox({ className, ...props }: React.ComponentProps<'div'>) {
    return <div className={cn('grid min-w-32 gap-1.5 rounded-xl border bg-background px-3 py-2 text-xs shadow-lg', className)} {...props} />;
}
