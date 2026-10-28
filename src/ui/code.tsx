import { cn } from '../utils.js';

/** Satır içi kod, anahtar ya da teknik değer (alan adı kaydı, API yolu, kupon kodu). */
export function Code({ className, ...props }: React.ComponentProps<'code'>) {
    return <code className={cn('rounded-md bg-muted px-1.5 py-0.5 font-mono text-xs break-all', className)} {...props} />;
}
