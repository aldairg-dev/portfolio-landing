import * as React from "react"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  useToast as useToastPrimitive,
} from "@radix-ui/react-toast"

import { cn } from "@/lib/utils"

const ToastContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToastProvider>
      <ToastViewport />
      {children}
    </ToastProvider>
  )
}

const ToastComponent = React.forwardRef<React.ElementRef<typeof Toast>, React.ComponentPropsWithoutRef<typeof Toast>>(
  ({ className, ...props }, ref) => {
    return (
      <Toast
        ref={ref}
        className={cn(
          "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-end data-[swipe=cancel]:animate-cancel data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-value)] data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-value)] data-[state=closed]:slide-out-to-right-1/2 data-[state=open]:slide-in-from-top-1/2 sm:w-[390px]",
          className,
        )}
        {...props}
      />
    )
  },
)
ToastComponent.displayName = Toast.displayName

const ToastHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-1">{children}</div>
}

const ToastTitleComponent = React.forwardRef<
  React.ElementRef<typeof ToastTitle>,
  React.ComponentPropsWithoutRef<typeof ToastTitle>
>(({ className, ...props }, ref) => {
  return <ToastTitle ref={ref} className={cn("text-sm font-semibold [&+div]:text-xs", className)} {...props} />
})
ToastTitleComponent.displayName = ToastTitle.displayName

const ToastDescriptionComponent = React.forwardRef<
  React.ElementRef<typeof ToastDescription>,
  React.ComponentPropsWithoutRef<typeof ToastDescription>
>(({ className, ...props }, ref) => {
  return <ToastDescription ref={ref} className={cn("text-sm opacity-80", className)} {...props} />
})
ToastDescriptionComponent.displayName = ToastDescription.displayName

const ToastCloseComponent = React.forwardRef<
  React.ElementRef<typeof ToastClose>,
  React.ComponentPropsWithoutRef<typeof ToastClose>
>(({ className, ...props }, ref) => {
  return (
    <ToastClose
      ref={ref}
      className={cn(
        "absolute right-2 top-2 rounded-md text-gray-500 opacity-0 transition-opacity hover:bg-gray-100 focus:ring-2 focus:ring-gray-500 group-hover:opacity-100",
        className,
      )}
      {...props}
    />
  )
})
ToastCloseComponent.displayName = ToastClose.displayName

export {
  useToastPrimitive as useToast,
  ToastContainer,
  ToastComponent as Toast,
  ToastHeader,
  ToastTitleComponent as ToastTitle,
  ToastDescriptionComponent as ToastDescription,
  ToastCloseComponent as ToastClose,
}

