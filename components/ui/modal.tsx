"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full border-4 border-red-500 relative"
          >
            {/* Botón Cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-red-500 hover:text-red-700"
              aria-label="Cerrar"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Icono de alerta */}
            <div className="flex flex-col items-center text-center">
              <AlertTriangle className="w-16 h-16 text-red-500 mb-6" />
              <h2 className="text-3xl font-bold text-red-600">{title}</h2>
              <p className="text-xl text-gray-700 mt-4">{message}</p>
            </div>

            {/* Botón de cierre */}
            <button
              onClick={onClose}
              className="mt-8 w-full px-6 py-3 bg-red-500 text-white text-xl font-semibold rounded-lg hover:bg-red-600 transition"
            >
              Cerrar
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
