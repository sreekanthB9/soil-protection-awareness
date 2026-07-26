"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { RECOMMENDATIONS } from "@/lib/data";

export function RecommendationsSection() {
  return (
    <section id="recommendations" className="section-padding bg-background">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            badge="Recommendations"
            title="Sustainable Recommendations"
            subtitle="Actionable recommendations for long-term soil protection and agricultural sustainability."
          />
        </FadeIn>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary md:left-1/2 md:-translate-x-px" />

          {RECOMMENDATIONS.map((rec, index) => {
            const isLeft = index % 2 === 0;
            return (
              <FadeIn key={rec.title} delay={index * 0.05}>
                <div
                  className={`relative mb-6 flex items-start ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-8 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground md:left-1/2">
                    {index + 1}
                  </div>

                  <motion.div
                    className={`ml-16 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-10 md:text-right" : "md:pl-10"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                      <h3 className="font-semibold text-primary">{rec.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{rec.description}</p>
                    </div>
                  </motion.div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
