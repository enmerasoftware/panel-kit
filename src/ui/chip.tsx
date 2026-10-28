import { Button as ButtonPrimitive, type ButtonProps } from 'react-aria-components';
import { cn } from '../utils.js';

/**
 * Süzgeç hapı: aynı listeyi daraltan seçim (durum, tür, bölge). Seçili hap koyu, diğerleri çerçeveli; sayaç isteğe
 * bağlı. İçerik değiştiren ana seçim için Segmented kullanılır (seçici dili).
 */
export function Chip({ selected = false, count, className, children, ...props }: Omit<ButtonProps, 'className' | 'children'> & { selected?: boolean; count?: number | string | null; className?: string; children: React.ReactNode }) {
    return (
        <ButtonPrimitive
            aria-pressed={selected}
            className={cn(
                'inline-flex h-8 shrink-0 cursor-default items-center gap-1.5 rounded-full px-3 text-sm font-medium whitespace-nowrap ring-1 transition-colors outline-hidden focus-visible:ring-3 focus-visible:ring-ring/30',
                selected ? 'bg-foreground text-background ring-foreground' : 'text-muted-foreground ring-foreground/10 hover:bg-muted hover:text-foreground',
                className,
            )}
            {...props}
        >
            {children}
            {count !== undefined && count !== null && <span className={cn('tabular-nums', selected ? 'opacity-70' : 'text-muted-foreground')}>{count}</span>}
        </ButtonPrimitive>
    );
}
