"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { getIcon } from "@/lib/icons";
import { ABOUT_CARDS } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            badge="About Project"
            title="Understanding Our Mission"
            subtitle="A community-driven initiative to protect soil health and promote sustainable agriculture in rural Andhra Pradesh."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_CARDS.map((card) => {
            const Icon = getIcon(card.icon);
            return (
              <StaggerItem key={card.title}>
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
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
