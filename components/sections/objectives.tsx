"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { getIcon } from "@/lib/icons";
import { OBJECTIVES } from "@/lib/data";

export function ObjectivesSection() {
  return (
    <section id="objectives" className="section-padding bg-muted/30">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            badge="Objectives"
            title="Project Objectives"
            subtitle="Four key goals driving our soil protection and conservation awareness program."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OBJECTIVES.map((obj, index) => {
            const Icon = getIcon(obj.icon);
            return (
              <StaggerItem key={obj.title}>
                <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                  <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
                  <CardContent className="relative p-6">
                    <span className="mb-4 inline-block text-4xl font-bold text-primary/20">
                      0{index + 1}
                    </span>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{obj.title}</h3>
                    <p className="text-sm text-muted-foreground">{obj.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
