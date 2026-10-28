import type { ReactNode } from 'react';
import { cn } from './utils.js';

const tones = {
    success: 'bg-emerald-500/10 text-emerald-700 ring-emerald-600/20 dark:text-emerald-400',
    danger: 'bg-red-500/10 text-red-700 ring-red-600/20 dark:text-red-400',
    warning: 'bg-amber-500/10 text-amber-700 ring-amber-600/20 dark:text-amber-400',
    info: 'bg-sky-500/10 text-sky-700 ring-sky-600/20 dark:text-sky-400',
    purple: 'bg-purple-500/10 text-purple-700 ring-purple-600/20 dark:text-purple-400',
    neutral: 'bg-muted text-muted-foreground ring-foreground/10',
    // Marka vurgusu: "Yeni", "Önerilen", seçili sayısı.
    primary: 'bg-primary/10 text-brand-link ring-primary/20 dark:text-primary',
    // Dolu sayaç (okunmamış, menü rozeti).
    accent: 'bg-primary text-primary-foreground ring-transparent',
    // Görselin üstündeki etiket (süre, sıra).
    overlay: 'bg-black/60 text-white ring-transparent',
} as const;

const sizes = {
    sm: 'h-5 px-2 text-2xs',
    default: 'h-6 px-2.5 text-xs',
} as const;

export type StatusTone = keyof typeof tones;

/**
 * Ürünün tek rozeti — panelde ve tanıtım sitesinde aynı renk dili (yeşil iyi, kırmızı sorun, marka yeni…).
 * `sm` sayaç ve tablo içi etiketler içindir; renk ve boyut dışarıdan verilmez.
 */
export function StatusBadge({ tone = 'neutral', size = 'default', children, className, title }: { tone?: StatusTone; size?: keyof typeof sizes; children: ReactNode; className?: string; title?: string }) {
    return (
        <span title={title} className={cn('inline-flex shrink-0 items-center gap-1 rounded-full font-medium whitespace-nowrap tabular-nums ring-1 ring-inset [&_svg]:size-3 [&_svg]:shrink-0', sizes[size], tones[tone], className)}>
            {children}
        </span>
    );
}
