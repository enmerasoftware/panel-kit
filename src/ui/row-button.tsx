import { Button as ButtonPrimitive, Link as LinkPrimitive, type ButtonProps, type LinkProps } from 'react-aria-components';
import { cn } from '../utils.js';

/**
 * Tıklanabilir liste satırı ya da açılır bölüm başlığı: tam genişlik, solda metin, üzerine gelince hafif zemin,
 * klavyede içe doğru odak halkası. İç boşluk çağırandan gelir (satırın listesiyle aynı hizada dursun).
 */
const base = 'flex w-full items-center gap-3 text-start transition-colors outline-hidden hover:bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset';

export function RowButton({ isSelected, className, ...props }: Omit<ButtonProps, 'className'> & { isSelected?: boolean; className?: string }) {
    // isSelected: listeyi süzen satır (konu, yıldız) seçiliyken zemini kalır.
    return <ButtonPrimitive aria-pressed={isSelected} className={cn(base, 'cursor-default', isSelected && 'bg-primary/5 hover:bg-primary/10', className)} {...props} />;
}

/** Başka sayfaya giden liste satırı: RowButton'la aynı görünüm. */
export function RowLink({ className, ...props }: Omit<LinkProps, 'className'> & { className?: string }) {
    return <LinkPrimitive className={cn(base, 'cursor-pointer', className)} {...props} />;
}
