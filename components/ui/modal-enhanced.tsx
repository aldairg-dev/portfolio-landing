"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  AlertCircle, 
  Sparkles,
  Clock,
  Mail,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: "success" | "error" | "info" | "warning";
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  type = "success",
  primaryAction,
  secondaryAction,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  // Handle close with animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  // Close on escape key
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    // Lock body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Auto close for success modals after 5 seconds
  useEffect(() => {
    if (isOpen && type === "success") {
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, type]);

  // Get icon and styles based on type
  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return {
          icon: <CheckCircle2 className="w-8 h-8" />,
          iconBg: "bg-gradient-to-br from-green-400 to-emerald-500",
          iconColor: "text-white",
          accentColor: "text-green-600 dark:text-green-400",
          badgeColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
          gradientBg: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
          borderGlow: "shadow-green-500/20",
          sparkles: true
        };
      case "warning":
        return {
          icon: <AlertTriangle className="w-8 h-8" />,
          iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
          iconColor: "text-white",
          accentColor: "text-amber-600 dark:text-amber-400",
          badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
          gradientBg: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20",
          borderGlow: "shadow-amber-500/20",
          sparkles: false
        };
      case "info":
        return {
          icon: <Info className="w-8 h-8" />,
          iconBg: "bg-gradient-to-br from-blue-400 to-cyan-500",
          iconColor: "text-white",
          accentColor: "text-blue-600 dark:text-blue-400",
          badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
          gradientBg: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
          borderGlow: "shadow-blue-500/20",
          sparkles: false
        };
      case "error":
      default:
        return {
          icon: <AlertCircle className="w-8 h-8" />,
          iconBg: "bg-gradient-to-br from-red-400 to-pink-500",
          iconColor: "text-white",
          accentColor: "text-red-600 dark:text-red-400",
          badgeColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
          gradientBg: "bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20",
          borderGlow: "shadow-red-500/20",
          sparkles: false
        };
    }
  };

  const {
    icon,
    iconBg,
    iconColor,
    accentColor,
    badgeColor,
    gradientBg,
    borderGlow,
    sparkles
  } = getTypeStyles();

  // Backdrop click handler
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Floating particles animation for success
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      opacity: [0.8, 1, 0.8],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
          aria-hidden="true"
        >
          {/* Enhanced Backdrop with subtle pattern */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-lg"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 40% 80%, rgba(120, 199, 255, 0.3) 0%, transparent 50%)`
            }}
          />

          {/* Floating Particles for Success */}
          {sparkles && (
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
              {/* Sparkles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  variants={particleVariants}
                  animate="animate"
                  className="absolute"
                  style={{
                    left: `${15 + i * 12}%`,
                    top: `${25 + (i % 3) * 20}%`,
                    animationDelay: `${i * 0.2}s`
                  }}
                >
                  <Sparkles className="w-4 h-4 text-yellow-400/70" />
                </motion.div>
              ))}
              
              {/* Confetti effect */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`confetti-${i}`}
                  initial={{ 
                    y: -100, 
                    x: Math.random() * 400, // Use a fixed width for SSR compatibility
                    rotate: 0,
                    opacity: 0
                  }}
                  animate={{ 
                    y: window.innerHeight + 100, 
                    rotate: 360,
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    delay: Math.random() * 2,
                    ease: "easeOut"
                  }}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: [
                      '#10B981', '#F59E0B', '#EF4444', 
                      '#8B5CF6', '#06B6D4', '#F97316'
                    ][i % 6]
                  }}
                />
              ))}
            </div>
          )}

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            initial={{ 
              opacity: 0, 
              scale: 0.8, 
              y: 50,
              rotateX: 15 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotateX: 0 
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 50,
              rotateX: 15,
              transition: { duration: 0.2 }
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
              duration: 0.4
            }}
            className={`relative bg-background rounded-3xl shadow-2xl max-w-lg w-full border border-border overflow-hidden ${borderGlow}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient background */}
            <div className={`relative px-8 pt-8 pb-6 ${gradientBg}`}>
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="absolute top-4 right-4 h-8 w-8 rounded-full hover:bg-background/20 transition-all duration-200"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </Button>

              {/* Icon with animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring", 
                  damping: 15, 
                  stiffness: 300,
                  delay: 0.2 
                }}
                className="flex justify-center mb-6"
              >
                <div className={`p-4 rounded-full ${iconBg} ${iconColor} shadow-lg`}>
                  {icon}
                </div>
              </motion.div>

              {/* Title with animation */}
              <motion.h2
                id="modal-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-center mb-2 text-foreground"
              >
                {title}
              </motion.h2>

              {/* Success Badge */}
              {type === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center"
                >
                  <Badge className={badgeColor}>
                    ✨ Solicitud Procesada
                  </Badge>
                </motion.div>
              )}
            </div>

            {/* Content */}
            <div className="px-8 pb-6">
              <motion.p
                id="modal-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground text-center text-lg leading-relaxed mb-6"
              >
                {message}
              </motion.p>

              {/* Success Additional Info */}
              {type === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <div className="bg-card p-4 rounded-xl border border-border/50">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Próximos Pasos
                    </h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>Revisión de tu solicitud (2-4 horas)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary/50 rounded-full" />
                        <span>Propuesta detallada por email (24 horas)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary/30 rounded-full" />
                        <span>Llamada de planificación (48 horas)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>Respuesta por email</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      <span>WhatsApp disponible</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="px-8 pb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                {primaryAction ? (
                  <Button
                    onClick={primaryAction.onClick}
                    className="flex-1 group"
                    size="lg"
                  >
                    {primaryAction.label}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleClose}
                    className="flex-1 group"
                    size="lg"
                  >
                    Perfecto, Gracias
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}

                {secondaryAction && (
                  <Button
                    variant="outline"
                    onClick={secondaryAction.onClick}
                    className="flex-1"
                    size="lg"
                  >
                    {secondaryAction.label}
                  </Button>
                )}
              </motion.div>

              {/* Auto-close indicator for success */}
              {type === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-xs text-muted-foreground text-center mt-4"
                >
                  Este mensaje se cerrará automáticamente en unos segundos
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;