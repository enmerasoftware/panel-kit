import * as React from "react"
import { cn } from "../utils.js"
import {
  composeRenderProps,
  TextArea as TextareaPrimitive,
} from "react-aria-components"

function Textarea({
  className,
  size = "default",
  mono = false,
  ...props
}: React.ComponentProps<typeof TextareaPrimitive> & {
  /** `sm`: ızgara ve tablo içindeki sıkı alan. */
  size?: "default" | "sm"
  /** Kod, JSON gibi eş aralıklı yazılması gereken değerler. */
  mono?: boolean
}) {
  return (
    <TextareaPrimitive
      data-slot="textarea"
      data-size={size}
      data-mono={mono || undefined}
      className={composeRenderProps(className, (className) =>
        cn(
          "flex field-sizing-content min-h-16 data-[size=sm]:min-h-9 data-[size=sm]:rounded-xl data-[size=sm]:px-2.5 data-[size=sm]:py-2 data-[size=sm]:text-xs data-mono:font-mono w-full resize-none rounded-2xl border border-transparent bg-input/50 px-3 py-3 text-base transition-[color,box-shadow,background-color] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          className
        )
      )}
      {...props}
    />
  )
}

export { Textarea }
