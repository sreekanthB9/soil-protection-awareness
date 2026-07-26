"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { GALLERY_IMAGES } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)))];

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const slides = GALLERY_IMAGES.map((img) => ({ src: img.src, alt: img.alt }));

  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="container-custom">
        <FadeIn>
          <SectionHeading
            badge="Gallery"
            title="Project Gallery"
            subtitle="Visual documentation of field visits, surveys, awareness campaigns, and community activities."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filteredImages.map((image, index) => {
            const globalIndex = GALLERY_IMAGES.findIndex((img) => img.src === image.src);
            return (
              <FadeIn key={image.src} delay={index * 0.05}>
                <motion.div
                  className="group relative mb-4 cursor-pointer overflow-hidden rounded-2xl break-inside-avoid"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openLightbox(globalIndex)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="rounded-full bg-primary/80 px-3 py-1 text-xs font-medium text-white">
                      {image.category}
                    </span>
                    <p className="mt-1 text-sm font-medium text-white">{image.alt}</p>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={slides}
        />
      </div>
    </section>
  );
}
