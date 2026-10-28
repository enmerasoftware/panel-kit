import { Button as ButtonPrimitive, type ButtonProps } from 'react-aria-components';
import { cn } from '../utils.js';

/**
 * Basılabilir ya da seçilebilir kart: süzgeç işi gören gösterge kutusu, seçilecek işletme, öneri satırı.
 * Seçiliyken marka halkası ve hafif zemin; iç yerleşim className'den. Tek seçimli grup için RadioGroup kullanılır.
 */
export function OptionCard({ isSelected = false, className, ...props }: Omit<ButtonProps, 'className'> & { isSelected?: boolean; className?: string }) {
    return (
        <ButtonPrimitive
            aria-pressed={isSelected}
            data-selected={isSelected || undefined}
            className={cn(
                'flex cursor-default flex-col items-start gap-1 rounded-2xl bg-card p-4 text-start ring-1 ring-foreground/10 transition-[box-shadow,background-color] outline-hidden hover:ring-foreground/25 focus-visible:ring-2 focus-visible:ring-ring/60 disabled:opacity-50 data-selected:bg-primary/5 data-selected:ring-2 data-selected:ring-primary',
                className,
            )}
            {...props}
        />
    );
}
