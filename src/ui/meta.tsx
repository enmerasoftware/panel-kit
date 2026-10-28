import { cn } from '../utils.js';

/** Başlığın altındaki küçük, soluk bilgi satırı (tarih · kaynak · ülke): her listede aynı boyut, renk ve aralık. */
export function MetaRow({ className, ...props }: React.ComponentProps<'div'>) {
    return <div className={cn('flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground', className)} {...props} />;
}

/** Madde ya da numaralı liste (adımlar, gerekçeler). */
export function List({ ordered = false, className, ...props }: React.HTMLAttributes<HTMLElement> & { ordered?: boolean }) {
    const classes = cn('flex flex-col gap-1 ps-5 text-sm', ordered ? 'list-decimal' : 'list-disc', className);

    return ordered ? <ol className={classes} {...props} /> : <ul className={classes} {...props} />;
}

/**
 * Bölüm kartındaki (SectionCard flush) liste satırı: kartın başlığıyla aynı yatay boşluk. `stack` içeriği alt alta dizer.
 * Tıklanan satır RowButton / RowLink'tir; aynı boşluğu className ile alır.
 */
export function ListRow({ stack = false, className, ...props }: React.ComponentProps<'li'> & { stack?: boolean }) {
    return <li className={cn('flex gap-3 px-4 py-3 sm:px-6', stack ? 'flex-col' : 'flex-wrap items-center', className)} {...props} />;
}
