"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { FadeIn } from "@/components/ui/fade-in";
import { DASHBOARD_STATS } from "@/lib/data";

export function StatisticsSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            badge="Impact"
            title="Project Statistics"
            subtitle="Measurable outcomes from our 6-week soil protection and conservation program."
            className="[&_h2]:text-primary-foreground [&_p]:text-primary-foreground/80 [&_span]:bg-white/20 [&_span]:text-primary-foreground"
          />
        </FadeIn>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-6">
          {DASHBOARD_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                className="[&_p]:text-primary-foreground/80 [&>div]:text-white"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
