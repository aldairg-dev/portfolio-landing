"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle, CheckCircle, Info, AlertCircle } from "lucide-react";

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
  const [isClosing, setIsClosing] = useState(false);

  // Manejar el cierre con animación
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200);
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
  }, [isOpen, onClose]);

  // Get icon and color based on type
  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return {
          icon: <CheckCircle className="w-6 h-6" />,
          iconBg: "bg-green-50 dark:bg-green-900/20",
          iconColor: "text-green-500 dark:text-green-400",
          buttonBg: "bg-green-600 hover:bg-green-700 focus:ring-green-500/30",
          headerBg: "bg-green-50 dark:bg-green-900/20",
          borderColor: "border-green-200 dark:border-green-800/30",
          titleColor: "text-green-800 dark:text-green-300",
        };
      case "warning":
        return {
          icon: <AlertTriangle className="w-6 h-6" />,
          iconBg: "bg-amber-50 dark:bg-amber-900/20",
          iconColor: "text-amber-500 dark:text-amber-400",
          buttonBg: "bg-amber-600 hover:bg-amber-700 focus:ring-amber-500/30",
          headerBg: "bg-amber-50 dark:bg-amber-900/20",
          borderColor: "border-amber-200 dark:border-amber-800/30",
          titleColor: "text-amber-800 dark:text-amber-300",
        };
      case "info":
        return {
          icon: <Info className="w-6 h-6" />,
          iconBg: "bg-blue-50 dark:bg-blue-900/20",
          iconColor: "text-blue-500 dark:text-blue-400",
          buttonBg: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500/30",
          headerBg: "bg-blue-50 dark:bg-blue-900/20",
          borderColor: "border-blue-200 dark:border-blue-800/30",
          titleColor: "text-blue-800 dark:text-blue-300",
        };
      case "error":
      default:
        return {
          icon: <AlertCircle className="w-6 h-6" />,
          iconBg: "bg-red-50 dark:bg-red-900/20",
          iconColor: "text-red-500 dark:text-red-400",
          buttonBg: "bg-red-600 hover:bg-red-700 focus:ring-red-500/30",
          headerBg: "bg-red-50 dark:bg-red-900/20",
          borderColor: "border-red-200 dark:border-red-800/30",
          titleColor: "text-red-800 dark:text-red-300",
        };
    }
  };

  const {
    icon,
    iconBg,
    iconColor,
    buttonBg,
    headerBg,
    borderColor,
    titleColor,
  } = getTypeStyles();

  // Backdrop click handler
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={handleBackdropClick}
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 dark:bg-black/60"
          />
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
              transition: { duration: 0.15 },
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 350,
            }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-md w-full border border-gray-200 dark:border-gray-800 overflow-hidden relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with close button */}
            <div
              className={`flex justify-between items-center p-5 ${headerBg} ${borderColor}`}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${iconBg} ${iconColor}`}>
                  {icon}
                </div>
                <h2
                  id="modal-title"
                  className={`text-lg font-semibold ${titleColor}`}
                >
                  {title}
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <p
                id="modal-description"
                className="text-gray-600 dark:text-gray-300 text-base leading-relaxed"
              >
                {message}
              </p>
            </div>

            {/* Footer with actions */}
            <div className="p-5 bg-gray-50 dark:bg-gray-800/50 flex flex-col sm:flex-row-reverse gap-3 border-t border-gray-200 dark:border-gray-800">
              {primaryAction ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={primaryAction.onClick}
                  className={`px-5 py-2.5 rounded-lg text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${buttonBg} w-full sm:w-auto shadow-sm`}
                >
                  {primaryAction.label}
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleClose}
                  className={`px-5 py-2.5 rounded-lg text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${buttonBg} w-full sm:w-auto shadow-sm`}
                >
                  Aceptar
                </motion.button>
              )}

              {secondaryAction && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={secondaryAction.onClick}
                  className="px-5 py-2.5 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 w-full sm:w-auto shadow-sm"
                >
                  {secondaryAction.label}
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
