"use client";

import Link from "next/link";
import { Leaf, Mail, MapPin, GraduationCap, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STUDENT_INFO, NAV_ITEMS } from "@/lib/data";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="contact" className="border-t border-border bg-muted/50">
      <div className="section-padding container-custom">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Leaf className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold">Soil Protection CSP</p>
                <p className="text-xs text-muted-foreground">Community Service Project</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              A comprehensive community service project on soil protection and conservation awareness
              conducted in Yemmiganur, Andhra Pradesh.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Student Information</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="font-medium text-foreground">{STUDENT_INFO.name}</li>
              <li>Reg. No: {STUDENT_INFO.registerNumber}</li>
              <li className="flex items-start gap-2">
                <GraduationCap className="mt-0.5 h-4 w-4 shrink-0" />
                {STUDENT_INFO.college}
              </li>
              <li>Academic Year: {STUDENT_INFO.academicYear}</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Project Information</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{STUDENT_INFO.projectTitle}</li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {STUDENT_INFO.location}
              </li>
              <li>Duration: {STUDENT_INFO.duration}</li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:raghu@example.com" className="hover:text-primary">
                  Contact Student
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {NAV_ITEMS.slice(0, 8).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {STUDENT_INFO.name}. All rights reserved.
          </p>
          <Button variant="outline" size="sm" onClick={scrollToTop} className="gap-2">
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
