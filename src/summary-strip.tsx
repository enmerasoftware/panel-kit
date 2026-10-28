import { cn } from './utils.js';

/** Para birimi başına tutarlar (controller `money()` ile biçimlenmiş metin gönderir). */
export type CurrencyAmounts = Array<{ currency: string; label: string }>;

/**
 * Liste üstü özet şeridi: her kutuda etiket, bir ya da
 * daha çok değer (ilk değer büyük, diğer para birimleri küçük) ve isteğe bağlı not.
 */
export type SummaryItem = {
    label: string;
    values: string[];
    hint?: string | null;
    tone?: 'default' | 'danger' | 'success' | 'warning' | 'muted';
};

const summaryTones: Record<NonNullable<SummaryItem['tone']>, string> = {
    default: 'text-foreground',
    danger: 'text-red-600 dark:text-red-400',
    success: 'text-emerald-600 dark:text-emerald-400',
    warning: 'text-amber-600 dark:text-amber-400',
    muted: 'text-muted-foreground',
};

const summaryGrid: Record<number, string> = { 1: 'lg:grid-cols-1', 2: 'lg:grid-cols-2', 3: 'lg:grid-cols-3', 4: 'lg:grid-cols-4', 5: 'lg:grid-cols-5', 6: 'lg:grid-cols-6' };

export function SummaryStrip({ items }: { items: SummaryItem[] }) {
    if (items.length === 0) return null;

    return (
        <div className={cn('grid grid-cols-2 gap-4', summaryGrid[Math.min(items.length, 6)])}>
            {items.map((item) => (
                <div key={item.label} className="flex min-w-0 flex-col gap-1 rounded-3xl bg-card p-4 shadow-sm ring-1 ring-foreground/5 sm:p-5 dark:ring-foreground/10">
                    <p className="truncate text-xs text-muted-foreground">{item.label}</p>
                    {item.values.length === 0 ? (
                        <p className="text-2xl font-semibold text-muted-foreground/50">—</p>
                    ) : (
                        item.values.map((value, index) => (
                            <p
                                key={index}
                                className={cn('font-semibold tabular-nums', index === 0 ? 'text-2xl' : 'text-sm', summaryTones[item.tone ?? 'default'])}
                            >
                                {value}
                            </p>
                        ))
                    )}
                    {item.hint && <p className="text-2xs text-muted-foreground">{item.hint}</p>}
                </div>
            ))}
        </div>
    );
}
