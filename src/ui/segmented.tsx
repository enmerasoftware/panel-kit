import { cn } from '../utils.js';

type Size = 'sm' | 'md';
type Item<T extends string> = { id: T; label: React.ReactNode; /** Yalnız ikon gösteren seçenek için ad. */ ariaLabel?: string };

/** Bölmeli seçicinin zemini ve düğmesi (TabsList görünümü); bağlantıyla kurulan seçiciler (SectionTabs) de bunları kullanır. */
export function segmentedTrack(size: Size = 'md'): string {
    return cn('inline-flex w-fit max-w-full items-center gap-0.5 overflow-x-auto rounded-full bg-muted p-1 [scrollbar-width:none]', size === 'md' ? 'h-9' : 'h-8');
}

export function segmentedItem(selected: boolean, size: Size = 'md'): string {
    return cn(
        'inline-flex h-full shrink-0 items-center gap-1.5 rounded-full px-3 font-medium whitespace-nowrap transition-colors outline-hidden focus-visible:ring-2 focus-visible:ring-ring/40',
        size === 'md' ? 'text-sm' : 'text-xs',
        selected ? 'bg-background text-foreground shadow-sm dark:bg-input/30' : 'text-foreground/60 hover:text-foreground dark:text-muted-foreground',
    );
}

/**
 * Bölmeli seçici: içerik değiştiren ana seçim (grup, liste, varyant). Alt sekmeler yanında `TabsList variant="plain"`,
 * aynı listeyi daraltan süzgeçler hap düğme olarak listenin içinde durur (~/Projeler/Web/PANEL-TASARIM.md §4).
 */
export function Segmented<T extends string>({ items, value, onChange, label, size = 'md', className }: { items: Item<T>[]; value: T; onChange: (value: T) => void; label: string; size?: Size; className?: string }) {
    return (
        <div role="group" aria-label={label} className={cn(segmentedTrack(size), className)}>
            {items.map((item) => (
                <button key={item.id} type="button" aria-pressed={item.id === value} aria-label={item.ariaLabel} onClick={() => onChange(item.id)} className={segmentedItem(item.id === value, size)}>
                    {item.label}
                </button>
            ))}
        </div>
    );
}
