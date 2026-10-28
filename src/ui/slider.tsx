import { cn } from "../utils.js"
import {
  Slider as SliderPrimitive,
  SliderThumb,
  SliderTrack,
  type SliderProps,
} from "react-aria-components"

/**
 * Tek değerli kaydırıcı (React Aria `Slider`). Ham `<input type="range">`
 * yerine kullanılır (DESIGN.md § Yeni panel); erişilebilir adı `aria-label`
 * ya da çevreleyen etiketle verilir. İlk kullanıcı: Reklam Tasarım Aracı
 * (opaklık, gölge, kırpma, filtre).
 */
function Slider({
  className,
  ...props
}: Omit<SliderProps<number>, "className" | "children"> & {
  className?: string
}) {
  return (
    <SliderPrimitive
      data-slot="slider"
      className={cn(
        "relative flex w-full touch-none items-center select-none data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SliderTrack className="relative h-5 w-full">
        {({ state }) => (
          <>
            <div className="absolute top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-muted" />
            <div
              className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-primary"
              style={{ width: `${state.getThumbPercent(0) * 100}%` }}
            />
            <SliderThumb className="top-[calc(50%-0.5rem)] size-4 rounded-full border border-primary bg-background shadow-sm transition-shadow outline-none data-dragging:ring-3 data-dragging:ring-ring/30 data-focus-visible:ring-3 data-focus-visible:ring-ring/30" />
          </>
        )}
      </SliderTrack>
    </SliderPrimitive>
  )
}

export { Slider }
