"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface ToastProps {
  message: string;
  visible: boolean;
}

export default function Toast({ message, visible }: ToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[150] flex items-center gap-2.5 rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2.5 text-sm font-medium text-neutral-100 shadow-2xl shadow-black/40 backdrop-blur-sm whitespace-nowrap"
          role="status"
          aria-live="polite"
        >
          <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
