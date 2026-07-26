"use client";

import { useScrollProgress } from "@/hooks/use-scroll";
import { motion } from "framer-motion";

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 z-[60] h-1 bg-primary"
      style={{ width: `${progress}%` }}
      initial={{ width: 0 }}
    />
  );
}
