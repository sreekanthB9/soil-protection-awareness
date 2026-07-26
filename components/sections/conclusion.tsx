"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { CONCLUSION_POINTS, STUDENT_INFO } from "@/lib/data";
import { Quote } from "lucide-react";

export function ConclusionSection() {
  return (
    <section id="conclusion" className="section-padding bg-background">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            badge="Conclusion"
            title="Project Conclusion"
            subtitle="Reflecting on the impact and outcomes of our soil protection community service project."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <Card className="mb-10 border-l-4 border-l-primary bg-muted/30">
            <CardContent className="p-8">
              <Quote className="mb-4 h-8 w-8 text-primary opacity-50" />
              <p className="text-lg leading-relaxed text-muted-foreground">
                The Soil Protection and Conservation Awareness Program conducted in{" "}
                <strong className="text-foreground">Yemmiganur, Andhra Pradesh</strong> over six weeks
                successfully raised community awareness about soil health, identified key agricultural
                challenges, and promoted sustainable farming practices. Through surveys, field visits,
                awareness programs, and community engagement, the project made a meaningful contribution
                to environmental conservation and rural agricultural sustainability.
              </p>
              <p className="mt-4 text-sm font-medium text-primary">
                — {STUDENT_INFO.name}, {STUDENT_INFO.registerNumber}
              </p>
            </CardContent>
          </Card>
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONCLUSION_POINTS.map((point) => (
            <StaggerItem key={point.title}>
              <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-3 h-1 w-12 rounded-full bg-primary" />
                  <h3 className="mb-2 font-semibold">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
