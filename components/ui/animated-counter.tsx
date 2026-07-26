"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  label,
  className,
  duration = 2.5,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
        {isInView ? (
          <CountUp end={value} duration={duration} suffix={suffix} />
        ) : (
          `0${suffix}`
        )}
      </div>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">{label}</p>
    </div>
  );
}
