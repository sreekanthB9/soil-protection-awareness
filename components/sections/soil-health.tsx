"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { getIcon } from "@/lib/icons";
import { SOIL_HEALTH, SOIL_PROBLEMS, IMPROVEMENT_ACTIVITIES, CROP_PRODUCTION_INFO } from "@/lib/data";
import { motion } from "framer-motion";

export function SoilHealthSection() {
  return (
    <>
      <section id="soil-health" className="section-padding bg-muted/30">
        <div className="container-custom">
          <FadeIn>
            <SectionHeading
              badge="Soil Health"
              title="Understanding Soil Health"
              subtitle="The foundation of sustainable agriculture and food security."
            />
          </FadeIn>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SOIL_HEALTH.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <StaggerItem key={item.title}>
                  <Card className="h-full border-t-4 border-t-primary">
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="mb-2 font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeIn>
            <SectionHeading
              badge="Challenges"
              title="Common Soil Problems"
              subtitle="Issues identified during our field visits and community surveys."
            />
          </FadeIn>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SOIL_PROBLEMS.map((problem, index) => {
              const Icon = getIcon(problem.icon);
              return (
                <StaggerItem key={problem.title}>
                  <motion.div whileHover={{ scale: 1.03 }}>
                    <Card className="h-full overflow-hidden">
                      <div className="h-1 bg-gradient-to-r from-secondary to-primary" />
                      <CardContent className="p-5">
                        <div className="mb-3 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="text-xs font-medium text-muted-foreground">
                            Problem {index + 1}
                          </span>
                        </div>
                        <h3 className="mb-2 font-semibold">{problem.title}</h3>
                        <p className="text-sm text-muted-foreground">{problem.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <FadeIn>
            <SectionHeading
              badge="Solutions"
              title="Activities to Improve Soil Health"
              subtitle="Practical methods promoted through our awareness program."
            />
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {IMPROVEMENT_ACTIVITIES.map((activity) => {
              const Icon = getIcon(activity.icon);
              return (
                <StaggerItem key={activity.title}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center rounded-2xl border border-border bg-card p-5 text-center shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-medium">{activity.title}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <FadeIn>
            <SectionHeading
              badge="Infographic"
              title="Role of Soil Health in Crop Production"
              subtitle="How healthy soil directly impacts agricultural productivity."
            />
          </FadeIn>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10" />
            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CROP_PRODUCTION_INFO.map((item, index) => {
                const Icon = getIcon(item.icon);
                return (
                  <StaggerItem key={item.title}>
                    <Card className={`relative h-full ${index === 3 ? "lg:col-start-2" : ""}`}>
                      <CardContent className="p-5">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mb-1 font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </>
  );
}
