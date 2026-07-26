"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { getIcon } from "@/lib/icons";
import { AWARENESS_ACTIVITIES } from "@/lib/data";
import { TrendingUp, Users, TreePine, BookOpen } from "lucide-react";

const results = [
  { icon: Users, label: "100+ People Reached", value: "Community Impact" },
  { icon: TreePine, label: "50+ Trees Planted", value: "Environmental Action" },
  { icon: BookOpen, label: "5 School Programs", value: "Education" },
  { icon: TrendingUp, label: "78% Awareness Gain", value: "Measurable Impact" },
];

export function AwarenessSection() {
  return (
    <section id="awareness" className="section-padding bg-muted/30">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            badge="Awareness Program"
            title="Community Awareness Activities"
            subtitle="Hands-on programs conducted to educate farmers, students, and villagers about soil conservation."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AWARENESS_ACTIVITIES.map((activity) => {
            const Icon = getIcon(activity.icon);
            return (
              <StaggerItem key={activity.title}>
                <Card className="group h-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="h-1 bg-gradient-to-r from-primary to-accent transition-all group-hover:h-1.5" />
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-semibold">{activity.title}</h3>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.3} className="mt-12">
          <h3 className="mb-6 text-center text-xl font-bold">Program Results</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((result) => (
              <div
                key={result.label}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <result.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                <p className="text-lg font-bold">{result.label}</p>
                <p className="text-sm text-muted-foreground">{result.value}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
