"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  Search,
  Leaf,
  Download,
  Printer,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/data";
import { useActiveSection } from "@/hooks/use-scroll";
import { useMounted } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  const filteredNav = NAV_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled ? "glass py-2 shadow-md" : "bg-transparent py-4"
        )}
      >
        <nav className="container-custom flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#home" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-tight">Soil Protection</p>
              <p className="text-xs text-muted-foreground">CSP Project</p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 xl:flex">
            {NAV_ITEMS.slice(0, 8).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary",
                  activeSection === item.href.replace("#", "") && "bg-primary/10 text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>

            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}

            <div className="hidden items-center gap-1 md:flex">
              <Button variant="ghost" size="sm" asChild className="gap-1 text-xs">
                <a href="/assets/csp-report.pdf" download>
                  <Download className="h-4 w-4" />
                  PDF
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="gap-1 text-xs">
                <a href="/assets/csp-presentation.pptx" download>
                  <Download className="h-4 w-4" />
                  PPT
                </a>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => window.print()} aria-label="Print">
                <Printer className="h-5 w-5" />
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass border-t border-border px-4 py-3"
            >
              <input
                type="text"
                placeholder="Search sections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
              {searchQuery && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {filteredNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm text-primary hover:bg-primary/20"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 top-16 z-40 overflow-y-auto bg-background p-6 xl:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-primary/10",
                    activeSection === item.href.replace("#", "") && "bg-primary/10 text-primary"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
