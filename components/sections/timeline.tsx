"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { TIMELINE_WEEKS } from "@/lib/data";

export function TimelineSection() {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  return (
    <section id="timeline" className="section-padding bg-background">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            badge="6 Week Journey"
            title="Project Timeline"
            subtitle="A week-by-week journey through our soil protection and conservation awareness program."
          />
        </FadeIn>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-primary via-accent to-primary md:left-1/2 md:-translate-x-px" />

          {TIMELINE_WEEKS.map((week, index) => {
            const isLeft = index % 2 === 0;
            const isExpanded = expandedWeek === week.week;

            return (
              <FadeIn key={week.week} delay={index * 0.1}>
                <div
                  className={cn(
                    "relative mb-8 flex items-start gap-4 md:gap-0",
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary text-sm font-bold text-primary-foreground md:left-1/2">
                    W{week.week}
                  </div>

                  <div className={cn("ml-16 w-full md:ml-0 md:w-[calc(50%-2rem)]", isLeft ? "md:pr-8 md:text-right" : "md:pl-8")}>
                    <motion.div
                      className="cursor-pointer rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                      onClick={() => setExpandedWeek(isExpanded ? null : week.week)}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className={cn("flex items-center justify-between gap-2", isLeft && "md:flex-row-reverse")}>
                        <div>
                          <span className="text-sm font-medium text-primary">Week {week.week}</span>
                          <h3 className="text-lg font-semibold">{week.title}</h3>
                          <p className="text-sm text-muted-foreground">{week.summary}</p>
                        </div>
                        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className={cn("mt-4 border-t border-border pt-4", isLeft && "md:text-left")}>
                              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-primary">
                                <Calendar className="h-4 w-4" />
                                Daily Activities
                              </div>
                              <ul className="space-y-2">
                                {week.activities.map((activity, i) => (
                                  <motion.li
                                    key={activity}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                  >
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    {activity}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
