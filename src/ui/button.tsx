import * as React from "react"
import { LoaderCircleIcon, LoaderIcon, RefreshCcwIcon, RefreshCwIcon, RotateCcwIcon, RotateCwIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../utils.js"
import {
  Button as ButtonPrimitive,
  Link as LinkPrimitive,
  type ButtonProps as ButtonPrimitiveProps,
  type LinkProps as LinkPrimitiveProps,
} from "react-aria-components"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-4xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,opacity,transform,translate] outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 data-pending:cursor-progress data-pending:opacity-70 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:bg-transparent dark:hover:bg-input/30",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        // Taslak gibi "henüz yayında değil" eylemleri.
        warning: "bg-orange-500 text-white hover:bg-orange-500/85 focus-visible:ring-orange-500/30",
        // Zamanlama gibi "sonra olacak" eylemleri.
        caution: "bg-yellow-400 text-yellow-950 hover:bg-yellow-400/85 focus-visible:ring-yellow-400/40",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        // Satırdaki sil/kaldır ikonu: zemin yalnız üzerine gelince, yazı her zaman kırmızı.
        "destructive-ghost":
          "text-destructive hover:bg-destructive/10 hover:text-destructive focus-visible:ring-destructive/20 aria-expanded:bg-destructive/10 dark:hover:bg-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
        // Açık zeminde koyu düğme (sitede ikinci çağrı, yüzen "Searvia'ya sor"); koyu temada marka rengi.
        inverse: "bg-ink text-white hover:bg-ink/85 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/85",
        // Sayfanın üstünde yüzen koyu düğme ("Searvia'ya sor").
        floating: "bg-ink text-white shadow-lg hover:bg-ink/85 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/85",
        // Marka renkli zeminin üstündeki düğmeler (ana sayfa, blog çağrısı): dolu ve saydam.
        "on-brand": "bg-on-brand text-on-brand-ink hover:bg-on-brand/90",
        "on-brand-soft": "bg-on-brand/10 text-on-brand ring-1 ring-on-brand/30 hover:bg-on-brand/20",
        // Koyu kutunun üstündeki açık düğme.
        light: "bg-white text-ink hover:bg-white/90",
      },
      size: {
        default:
          "h-9 gap-1.5 px-3 has-[>svg:first-child]:pr-[13px] has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 px-3 has-[>svg:first-child]:pr-[13px] has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        lg: "h-10 gap-1.5 px-4 has-[>svg:first-child]:pr-[17px] has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-4",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Bekleyen düğmede bu ikonlar yerinde döner; diğer baş ikonların yerine dönen halka gelir.
const spinInPlaceIcons = new Set<unknown>([RefreshCwIcon, RefreshCcwIcon, RotateCwIcon, RotateCcwIcon, LoaderIcon, LoaderCircleIcon])

function withPendingIcon(children: React.ReactNode): React.ReactNode {
  const items = React.Children.toArray(children)
  const first = items[0]

  if (React.isValidElement<{ className?: string }>(first) && typeof first.type !== "string") {
    const icon = spinInPlaceIcons.has(first.type)
      ? React.cloneElement(first, { className: cn(first.props.className, "animate-spin") })
      : <LoaderCircleIcon key="pending" className="animate-spin" />

    return [icon, ...items.slice(1)]
  }

  return [<LoaderCircleIcon key="pending" className="animate-spin" />, ...items]
}

function Button({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: Omit<ButtonPrimitiveProps, "className"> &
  React.RefAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    className?: string
  }) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {props.isPending && typeof children !== "function" ? withPendingIcon(children) : children}
    </ButtonPrimitive>
  )
}

function LinkButton({
  className,
  variant = "default",
  size = "default",
  ...props
}: Omit<LinkPrimitiveProps, "className"> &
  VariantProps<typeof buttonVariants> & {
    className?: string
  }) {
  return (
    <LinkPrimitive
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, LinkButton, buttonVariants }
