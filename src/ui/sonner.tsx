import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon, XIcon } from "lucide-react"
import { buttonVariants } from "./button.js"
import { cn } from "../utils.js"

/**
 * Bildirimler panelin kart dilinde: belirgin kenar ve gölge, türüne göre renkli ikon kutusu, her zaman görünen
 * kapatma tuşu; eylem düğmesi paneldeki düğmenin aynısı.
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      closeButton
      icons={{
        success: <CircleCheckIcon />,
        info: <InfoIcon />,
        warning: <TriangleAlertIcon />,
        error: <OctagonXIcon />,
        loading: <Loader2Icon className="animate-spin" />,
        close: <XIcon />,
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "group/toast relative flex w-[var(--width)] items-start gap-3 rounded-2xl border border-foreground/10 bg-popover p-3.5 pe-10 text-popover-foreground shadow-xl shadow-black/10 dark:shadow-black/40",
          icon: "grid size-8 shrink-0 place-items-center rounded-xl bg-muted text-foreground [&>svg]:size-4",
          content: "flex min-w-0 flex-1 flex-col gap-0.5 self-center",
          title: "text-sm font-semibold leading-snug",
          description: "text-xs text-muted-foreground",
          actionButton: cn(buttonVariants({ size: "xs" }), "self-center"),
          cancelButton: cn(buttonVariants({ size: "xs", variant: "outline" }), "self-center"),
          closeButton:
            "absolute end-2 top-2 grid size-6 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground [&>svg]:size-3.5",
          success: "[&_[data-icon]]:bg-emerald-500/15 [&_[data-icon]]:text-emerald-600 dark:[&_[data-icon]]:text-emerald-400",
          info: "[&_[data-icon]]:bg-sky-500/15 [&_[data-icon]]:text-sky-600 dark:[&_[data-icon]]:text-sky-400",
          warning: "[&_[data-icon]]:bg-amber-500/15 [&_[data-icon]]:text-amber-600 dark:[&_[data-icon]]:text-amber-400",
          error: "[&_[data-icon]]:bg-rose-500/15 [&_[data-icon]]:text-rose-600 dark:[&_[data-icon]]:text-rose-400",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
