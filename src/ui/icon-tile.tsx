import { cn } from '../utils.js';

const tones = {
    primary: 'bg-primary/10 text-primary',
    neutral: 'bg-muted text-muted-foreground',
    success: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
    warning: 'bg-amber-500/10 text-amber-700 dark:text-amber-400',
    danger: 'bg-red-500/10 text-red-700 dark:text-red-400',
} as const;

const sizes = {
    sm: 'size-8 rounded-xl [&_svg]:size-4',
    default: 'size-10 rounded-2xl [&_svg]:size-5',
} as const;

/** Kartın başındaki kare ikon zemini (özellik, öneri, adım). */
export function IconTile({ tone = 'primary', size = 'default', className, ...props }: React.ComponentProps<'span'> & { tone?: keyof typeof tones; size?: keyof typeof sizes }) {
    return <span className={cn('flex shrink-0 items-center justify-center [&_svg]:shrink-0', sizes[size], tones[tone], className)} {...props} />;
}
