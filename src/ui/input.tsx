import * as React from "react"
import { cn } from "../utils.js"
import {
  composeRenderProps,
  Input as InputPrimitive,
} from "react-aria-components"

function Input({
  className,
  type,
  size = "default",
  mono = false,
  ...props
}: Omit<React.ComponentProps<typeof InputPrimitive>, "size"> & {
  size?: "default" | "sm" | "xs"
  /** Kod, anahtar, adres gibi eş aralıklı yazılması gereken değerler. */
  mono?: boolean
}) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      data-size={size}
      data-mono={mono || undefined}
      className={composeRenderProps(className, (className) =>
        cn(
          "h-9 data-[size=sm]:h-8 data-[size=sm]:text-sm data-[size=xs]:h-7 data-[size=xs]:px-2.5 data-[size=xs]:text-xs data-mono:font-mono w-full min-w-0 rounded-3xl border border-transparent bg-input/50 px-3 py-1 text-base transition-[color,box-shadow,background-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
          className
        )
      )}
      {...props}
    />
  )
}

export { Input }
