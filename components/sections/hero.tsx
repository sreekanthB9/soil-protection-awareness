"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { HERO_STATS, STUDENT_INFO } from "@/lib/data";

const leaves = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${(i * 8.3) % 100}%`,
  delay: i * 0.5,
  duration: 4 + (i % 3),
}));

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden gradient-hero">
      {/* Animated soil particles */}
      <div className="absolute inset-0 overflow-hidden">
        {leaves.map((leaf) => (
          <motion.div
            key={leaf.id}
            className="absolute text-primary/20"
            style={{ left: leaf.left, top: "-10%" }}
            animate={{
              y: ["0vh", "110vh"],
              rotate: [0, 360],
              x: [0, Math.sin(leaf.id) * 50],
            }}
            transition={{
              duration: leaf.duration,
              repeat: Infinity,
              delay: leaf.delay,
              ease: "linear",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1.23-3.08C8.5 19.5 12.5 18 17 8z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Agriculture illustration */}
      <div className="absolute right-0 bottom-0 hidden opacity-20 lg:block lg:w-1/3">
        <svg viewBox="0 0 400 300" className="w-full" fill="none">
          <ellipse cx="200" cy="280" rx="180" ry="20" fill="#2E7D32" opacity="0.3" />
          <path d="M80 250 Q100 150 120 250" stroke="#2E7D32" strokeWidth="3" fill="none" />
          <path d="M200 250 Q220 100 240 250" stroke="#2E7D32" strokeWidth="4" fill="none" />
          <path d="M320 250 Q340 160 360 250" stroke="#2E7D32" strokeWidth="3" fill="none" />
          <circle cx="120" cy="140" r="30" fill="#81C784" opacity="0.6" />
          <circle cx="240" cy="90" r="40" fill="#81C784" opacity="0.6" />
          <circle cx="360" cy="150" r="25" fill="#81C784" opacity="0.6" />
        </svg>
      </div>

      <div className="container-custom relative z-10 px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            {STUDENT_INFO.projectType}
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-gradient">Soil Protection</span>
            <br />
            and Conservation Awareness Program
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            A 6-week community service initiative in Yemmiganur, Andhra Pradesh — studying soil health,
            conducting surveys, and promoting sustainable agricultural practices.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#about" className="gap-2">
                Explore Project
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#survey" className="gap-2">
                <BarChart3 className="h-5 w-5" />
                View Survey
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-6 rounded-2xl glass p-6 sm:grid-cols-4 lg:max-w-3xl"
        >
          {HERO_STATS.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.a>
    </section>
  );
}
