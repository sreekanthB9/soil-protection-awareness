"use client";

import { Check, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { PROBLEMS_SOLUTIONS } from "@/lib/data";
import { motion } from "framer-motion";

export function ProblemsSection() {
  return (
    <section id="problems" className="section-padding bg-muted/30">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            badge="Analysis"
            title="Problems & Solutions"
            subtitle="Key challenges identified in Yemmiganur and our recommended sustainable solutions."
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8 dark:border-red-900/30 dark:bg-red-950/20">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30">
                  <X className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">Problems Identified</h3>
              </div>
              <ul className="space-y-4">
                {PROBLEMS_SOLUTIONS.problems.map((problem, index) => (
                  <motion.li
                    key={problem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-200 text-xs font-bold text-red-700 dark:bg-red-900/50 dark:text-red-300">
                      {index + 1}
                    </span>
                    <span className="text-sm">{problem}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 dark:border-green-900/30 dark:bg-green-950/20">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">Recommended Solutions</h3>
              </div>
              <ul className="space-y-4">
                {PROBLEMS_SOLUTIONS.solutions.map((solution, index) => (
                  <motion.li
                    key={solution}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-200 text-xs font-bold text-green-700 dark:bg-green-900/50 dark:text-green-300">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm">{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
