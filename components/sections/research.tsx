"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { RESEARCH } from "@/lib/data";

export function ResearchSection() {
  return (
    <section id="research" className="section-padding bg-background">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            badge="Research"
            title="Research Methodology & Findings"
            subtitle="Systematic approach to identifying and analyzing soil-related problems in the community."
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn direction="left">
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="mb-6 text-xl font-bold">Criteria for Choosing Soil Problems</h3>
                <ul className="space-y-4">
                  {RESEARCH.criteria.map((criterion, index) => (
                    <motion.li
                      key={criterion}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 + 0.2, type: "spring" }}
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      </motion.div>
                      <span className="text-sm">{criterion}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn direction="right">
            <Card className="h-full border-l-4 border-l-primary">
              <CardContent className="p-8">
                <h3 className="mb-6 text-xl font-bold">Problems Identified</h3>
                <StaggerContainer className="space-y-3">
                  {RESEARCH.identified.map((problem) => (
                    <StaggerItem key={problem}>
                      <div className="flex items-center gap-3 rounded-lg bg-muted/50 px-4 py-3">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-sm font-medium">{problem}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
