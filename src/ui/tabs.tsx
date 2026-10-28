"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../utils.js"
import {
  TabList as TabListPrimitive,
  TabPanel as TabPanelPrimitive,
  Tab as TabPrimitive,
  Tabs as TabsPrimitive,
} from "react-aria-components"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive>) {
  return (
    <TabsPrimitive
      data-slot="tabs"
      className={cn(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-full p-1 text-muted-foreground group-data-horizontal/tabs:h-9 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col group-data-vertical/tabs:rounded-2xl data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
        // Bölmeli seçicinin yanındaki alt sekmeler: kutusuz metin, seçili olan hafif zeminli.
        plain: "gap-0.5 bg-transparent p-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/**
 * Sekme şeridi. Dar ekranda (telefon, tablet, açık menüyle dar masaüstü) sığmazsa yatay kayar: kaydırma çubuğu
 * gizli, taşan kenar solarak devamı olduğunu gösterir, seçili sekme kendiliğinden ortaya kayar.
 */
function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabListPrimitive> &
  VariantProps<typeof tabsListVariants>) {
  const scroller = React.useRef<HTMLDivElement>(null)
  const [edges, setEdges] = React.useState({ start: false, end: false })

  React.useEffect(() => {
    const element = scroller.current
    if (!element) return

    const update = () =>
      setEdges({
        start: element.scrollLeft > 4,
        end: element.scrollLeft + element.clientWidth < element.scrollWidth - 4,
      })
    // Sayfayı dikeyde kaydırmadan yalnız şeridi kaydırır (scrollIntoView sayfayı da oynatırdı).
    const centerSelected = (behavior: ScrollBehavior = "smooth") => {
      const selected = element.querySelector<HTMLElement>('[aria-selected="true"]')
      if (!selected || element.scrollWidth <= element.clientWidth) return
      const box = element.getBoundingClientRect()
      const tab = selected.getBoundingClientRect()
      element.scrollTo({ left: element.scrollLeft + tab.left - box.left - (box.width - tab.width) / 2, behavior })
    }

    update()
    // İlk konum düzen oturduktan sonra (bir sonraki kare), animasyonsuz.
    const frame = requestAnimationFrame(() => centerSelected("auto"))
    const resize = new ResizeObserver(update)
    resize.observe(element)
    const selection = new MutationObserver(() => centerSelected())
    selection.observe(element, { subtree: true, attributes: true, attributeFilter: ["aria-selected"] })
    element.addEventListener("scroll", update, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      resize.disconnect()
      selection.disconnect()
      element.removeEventListener("scroll", update)
    }
  }, [])

  const mask =
    edges.start || edges.end
      ? `linear-gradient(to right, ${edges.start ? "transparent" : "#000"}, #000 28px, #000 calc(100% - 28px), ${edges.end ? "transparent" : "#000"})`
      : undefined

  return (
    <div
      ref={scroller}
      className="max-w-full overflow-x-auto overscroll-x-contain [scrollbar-width:none] group-data-vertical/tabs:overflow-visible [&::-webkit-scrollbar]:hidden"
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      <TabListPrimitive
        data-slot="tabs-list"
        data-variant={variant}
        className={cn(tabsListVariants({ variant }), "shrink-0", className)}
        {...props}
      />
    </div>
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabPrimitive>) {
  return (
    <TabPrimitive
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 cursor-default items-center justify-center gap-2 rounded-full border border-transparent! px-3 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-[color,background-color,border-color,box-shadow,opacity,transform,translate] group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start group-data-vertical/tabs:rounded-2xl group-data-vertical/tabs:px-3 group-data-vertical/tabs:py-1.5 hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-selected:bg-transparent dark:group-data-[variant=line]/tabs-list:data-selected:border-transparent dark:group-data-[variant=line]/tabs-list:data-selected:bg-transparent",
        "data-selected:bg-background data-selected:text-foreground dark:data-selected:border-input dark:data-selected:bg-input/30 dark:data-selected:text-foreground",
        "group-data-[variant=plain]/tabs-list:data-selected:bg-muted dark:group-data-[variant=plain]/tabs-list:data-selected:border-transparent dark:group-data-[variant=plain]/tabs-list:data-selected:bg-muted",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-selected:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabPanelPrimitive>) {
  return (
    <TabPanelPrimitive
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
