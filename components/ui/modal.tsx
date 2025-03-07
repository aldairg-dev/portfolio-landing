"use client";

import type React from "react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle, CheckCircle, Info } from "lucide-react";

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
  type = "error",
  primaryAction,
  secondaryAction,
}) => {
  // Close on escape key
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
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
  }, [isOpen, onClose]);

  // Get icon and color based on type
  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return {
          icon: <CheckCircle className="w-12 h-12" />,
          iconBg: "bg-green-50 dark:bg-green-900/20",
          iconColor: "text-green-500 dark:text-green-400",
          buttonBg: "bg-green-500 hover:bg-green-600 focus:ring-green-500/30",
        };
      case "warning":
        return {
          icon: <AlertTriangle className="w-12 h-12" />,
          iconBg: "bg-amber-50 dark:bg-amber-900/20",
          iconColor: "text-amber-500 dark:text-amber-400",
          buttonBg: "bg-amber-500 hover:bg-amber-600 focus:ring-amber-500/30",
        };
      case "info":
        return {
          icon: <Info className="w-12 h-12" />,
          iconBg: "bg-blue-50 dark:bg-blue-900/20",
          iconColor: "text-blue-500 dark:text-blue-400",
          buttonBg: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-500/30",
        };
      case "error":
      default:
        return {
          icon: <AlertTriangle className="w-12 h-12" />,
          iconBg: "bg-red-50 dark:bg-red-900/20",
          iconColor: "text-red-500 dark:text-red-400",
          buttonBg: "bg-red-500 hover:bg-red-600 focus:ring-red-500/30",
        };
    }
  };

  const { icon, iconBg, iconColor, buttonBg } = getTypeStyles();

  // Backdrop click handler
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
          onClick={handleBackdropClick}
          aria-hidden="true"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 10,
              transition: { duration: 0.2 },
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-md w-full border border-gray-200 dark:border-gray-800 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with close button */}
            <div className="flex justify-between items-center p-5 border-b border-gray-200 dark:border-gray-800">
              <h2
                id="modal-title"
                className="text-xl font-semibold text-gray-900 dark:text-white"
              >
                {title}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-full ${iconBg} ${iconColor} flex-shrink-0`}
                >
                  {icon}
                </div>
                <p
                  id="modal-description"
                  className="text-gray-600 dark:text-gray-300 text-base leading-relaxed"
                >
                  {message}
                </p>
              </div>
            </div>

            {/* Footer with actions */}
            <div className="p-5 bg-gray-50 dark:bg-gray-800/50 flex flex-col sm:flex-row-reverse gap-3 border-t border-gray-200 dark:border-gray-800">
              {primaryAction ? (
                <button
                  onClick={primaryAction.onClick}
                  className={`px-5 py-2.5 rounded-lg text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${buttonBg} w-full sm:w-auto`}
                >
                  {primaryAction.label}
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className={`px-5 py-2.5 rounded-lg text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${buttonBg} w-full sm:w-auto`}
                >
                  Aceptar
                </button>
              )}

              {secondaryAction && (
                <button
                  onClick={secondaryAction.onClick}
                  className="px-5 py-2.5 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 w-full sm:w-auto"
                >
                  {secondaryAction.label}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
