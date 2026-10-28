import { Button as ButtonPrimitive, Link as LinkPrimitive, type ButtonProps, type LinkProps } from 'react-aria-components';
import { cn } from '../utils.js';

const tones = {
    primary: 'font-medium text-primary hover:underline',
    muted: 'text-muted-foreground hover:text-foreground hover:underline',
    // Tanıtım sitesinin bağlantı rengi (beyaz zeminde okunaklı marka tonu).
    brand: 'font-medium text-brand-link hover:underline dark:text-primary',
    warning: 'font-medium text-amber-700 hover:underline dark:text-amber-400',
} as const;

const base = 'inline-flex max-w-full items-center gap-1 rounded-sm text-start underline-offset-4 outline-hidden focus-visible:ring-2 focus-visible:ring-ring/40 [&_svg]:size-3.5 [&_svg]:shrink-0';

/** Bağlantı görünümlü metin düğmesi ("Tüm kelimeler", geliştirici adına göre süz): satır içinde, kutusuz. */
export function TextButton({ tone = 'primary', size = 'sm', className, ...props }: Omit<ButtonProps, 'className'> & { tone?: keyof typeof tones; size?: 'xs' | 'sm'; className?: string }) {
    return (
        <ButtonPrimitive
            className={cn(base, 'cursor-default', size === 'sm' ? 'text-sm' : 'text-xs', tones[tone], className)}
            {...props}
        />
    );
}

/** Metin bağlantısı ("Tümünü gör", "Ayrıntılar"): TextButton'la aynı görünüm, sayfa ya da dış adres açar. */
export function TextLink({ tone = 'primary', size = 'sm', className, ...props }: Omit<LinkProps, 'className'> & { tone?: keyof typeof tones; size?: 'xs' | 'sm'; className?: string }) {
    return <LinkPrimitive className={cn(base, 'cursor-pointer', size === 'sm' ? 'text-sm' : 'text-xs', tones[tone], className)} {...props} />;
}
