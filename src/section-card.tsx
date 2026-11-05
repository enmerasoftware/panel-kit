import { Children, type ReactNode } from 'react';
import { cn } from './utils.js';

/**
 * Bölüm kartı: başlık, açıklama, sağda seçenekler.
 * `flush` gövdeyi kenar boşluksuz bırakır (liste, ızgara, tablo için).
 * Telefonda başlık satırı sarılır: sığmayan seçenekler başlığın altına iner, başlık dar bir sütuna sıkışmaz.
 */
export function SectionCard({
    title,
    description,
    actions,
    flush = false,
    highlighted = false,
    className,
    contentClassName,
    children,
}: {
    title?: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    flush?: boolean;
    /** Öne çıkan kart (önerilen plan): marka halkası. */
    highlighted?: boolean;
    className?: string;
    contentClassName?: string;
    children: ReactNode;
}) {
    return (
        <section className={cn('flex flex-col overflow-hidden rounded-3xl bg-card text-card-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10', highlighted && 'ring-2 ring-primary/40 dark:ring-primary/40', className)}>
            {(title || actions) && (
                <header className={cn('flex items-start gap-3 max-sm:flex-wrap px-4 py-3 sm:px-6 sm:py-4', hasContent(children) && 'border-b')}>
                    <div className="min-w-0 flex-1 max-sm:min-w-[min(100%,12rem)]">
                        {title && <h2 className="text-sm font-semibold sm:text-base">{title}</h2>}
                        {description && <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{description}</p>}
                    </div>
                    {actions && <div className="flex shrink-0 items-center gap-2 max-sm:max-w-full max-sm:flex-wrap">{actions}</div>}
                </header>
            )}
            {/* İçeriği olmayan bölüm boş bir gövde kutusu göstermez (başlık ve açıklama yeter). */}
            {hasContent(children) && <div className={cn('flex-1', !flush && 'p-4 sm:p-6', contentClassName)}>{children}</div>}
        </section>
    );
}

function hasContent(children: ReactNode): boolean {
    return Children.toArray(children).length > 0;
}
