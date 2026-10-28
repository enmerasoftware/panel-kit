import { CalendarIcon, CircleCheckIcon, CircleXIcon, ClockIcon, ShoppingBagIcon, UsersIcon, type LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from './utils.js';

/** İstatistik kartları (controller'lar aynı diziyi gönderir). */
export type StatCard = {
    label: string;
    value: ReactNode;
    hint?: ReactNode;
    color?: 'indigo' | 'green' | 'amber' | 'purple' | 'red' | 'blue' | 'gray';
    /** Kayıtlı ad (bag, check…) ya da doğrudan bir Lucide ikonu. */
    icon?: 'bag' | 'check' | 'clock' | 'calendar' | 'x' | 'users' | LucideIcon;
};

const tones: Record<NonNullable<StatCard['color']>, string> = {
    indigo: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
    green: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    red: 'bg-red-500/10 text-red-600 dark:text-red-400',
    blue: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
    gray: 'bg-muted text-muted-foreground',
};

const icons: Record<'bag' | 'check' | 'clock' | 'calendar' | 'x' | 'users', LucideIcon> = {
    bag: ShoppingBagIcon,
    check: CircleCheckIcon,
    clock: ClockIcon,
    calendar: CalendarIcon,
    x: CircleXIcon,
    users: UsersIcon,
};

// Sınıf adı birleştirilerek üretilmez — Tailwind taraması tam adı görmeli.
const grid: Record<number, string> = { 1: 'xl:grid-cols-1', 2: 'xl:grid-cols-2', 3: 'xl:grid-cols-3', 4: 'xl:grid-cols-4', 5: 'xl:grid-cols-5', 6: 'xl:grid-cols-6' };

/** Liste ekranlarının üstündeki özet kartları. */
export function StatCards({ items }: { items: StatCard[] }) {
    if (items.length === 0) {
        return null;
    }

    return (
        <div className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2', grid[Math.min(items.length, 6)] ?? 'xl:grid-cols-5')}>
            {items.map((card) => {
                const Icon = card.icon === undefined || typeof card.icon === 'string' ? icons[card.icon ?? 'bag'] : card.icon;
                return (
                    <div key={card.label} className="flex items-center gap-4 rounded-3xl bg-card p-4 shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10">
                        <span className={cn('flex size-11 shrink-0 items-center justify-center rounded-full', tones[card.color ?? 'gray'])}>
                            <Icon className="size-5" />
                        </span>
                        <div className="min-w-0">
                            <p className="truncate text-xs text-muted-foreground">{card.label}</p>
                            <p className="text-2xl font-semibold tabular-nums">{card.value}</p>
                            {card.hint && <p className="mt-0.5 truncate text-xs text-muted-foreground">{card.hint}</p>}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
