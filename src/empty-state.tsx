import type { ReactNode } from 'react';

/** Boş durum: ikon, başlık, açıklama ve isteğe bağlı eylem. */
export function EmptyState({ title, description, action }: { title: string; description?: ReactNode; action?: ReactNode }) {
    return (
        <div className="flex flex-col items-center gap-2 px-4 py-10 text-center">
            <p className="text-sm font-semibold">{title}</p>
            {description && <p className="max-w-md text-xs text-muted-foreground">{description}</p>}
            {action && <div className="mt-3">{action}</div>}
        </div>
    );
}
