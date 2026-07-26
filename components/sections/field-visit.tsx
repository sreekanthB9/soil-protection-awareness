"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { getIcon } from "@/lib/icons";
import { FIELD_VISIT } from "@/lib/data";
import { MapPin, Navigation } from "lucide-react";

const MapComponent = dynamic(() => import("@/components/map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] items-center justify-center rounded-2xl bg-muted">
      <p className="text-muted-foreground">Loading map...</p>
    </div>
  ),
});

export function FieldVisitSection() {
  return (
    <section id="field-visit" className="section-padding bg-background">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            badge="Field Visit"
            title="On-Ground Observations"
            subtitle="Direct field visit to agricultural areas in Yemmiganur for practical learning and assessment."
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80"
                alt="Field visit to agricultural fields in Yemmiganur"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium opacity-80">Field Visit Location</p>
                <p className="text-2xl font-bold">{FIELD_VISIT.location}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2 text-primary">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">Location Details</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">{FIELD_VISIT.location}, {FIELD_VISIT.state}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Latitude</span>
                    <span className="font-medium">{FIELD_VISIT.latitude}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Longitude</span>
                    <span className="font-medium">{FIELD_VISIT.longitude}</span>
                  </div>
                  <a
                    href={`https://www.google.com/maps?q=${FIELD_VISIT.latitude},${FIELD_VISIT.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Navigation className="h-4 w-4" />
                    Open in Google Maps
                  </a>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="mt-8">
          <MapComponent
            latitude={FIELD_VISIT.latitude}
            longitude={FIELD_VISIT.longitude}
            location={FIELD_VISIT.location}
          />
        </FadeIn>

        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FIELD_VISIT.observations.map((obs) => {
            const Icon = getIcon(obs.icon);
            return (
              <StaggerItem key={obs.title}>
                <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="flex gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{obs.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{obs.description}</p>
                    </div>
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
