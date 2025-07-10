import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

interface ToasterProps {
  toastOptions?: {
    className?: string
    duration?: number
  }
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

export function Toaster({ toastOptions, position = "bottom-right" }: ToasterProps) {
  const { toasts } = useToast()

  return (
    <ToastProvider swipeDirection="right">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast
            key={id}
            {...props}
            className={toastOptions?.className}
            duration={toastOptions?.duration}
          >
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport className={`toast-viewport-${position}`} />
    </ToastProvider>
  )
}
