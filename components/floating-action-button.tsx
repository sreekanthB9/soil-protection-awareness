"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingActionButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed right-6 bottom-6 z-50"
        >
          <Button
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ChevronUp className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="no-print mb-4 text-sm text-muted-foreground">
      <ol className="flex items-center gap-2">
        <li>
          <a href="#home" className="hover:text-primary">
            Home
          </a>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-foreground">Soil Protection CSP</li>
      </ol>
    </nav>
  );
}
