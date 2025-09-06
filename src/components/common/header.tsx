"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Heart, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À Propos" },
  { href: "/services", label: "Services" },
  { href: "/news", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "font-medium transition-colors hover:text-primary",
        isActive ? "text-primary" : "text-foreground/80"
      )}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <SheetClose asChild>
      <Link
        href={href}
        className={cn(
          "block py-3 text-lg font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-foreground/80"
        )}
      >
        {children}
      </Link>
    </SheetClose>
  );
}


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="font-headline text-xl font-bold text-primary">
          Paroles de Femmes
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/donate">
              <Heart className="mr-2 h-4 w-4" /> Faire un Don
            </Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Ouvrir le menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b pb-6">
                     <Link href="/" className="font-headline text-xl font-bold text-primary">
                        Paroles de Femmes
                      </Link>
                     <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                        </Button>
                    </SheetClose>
                  </div>
                  <nav className="mt-8 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <MobileNavLink key={link.href} href={link.href}>
                        {link.label}
                      </MobileNavLink>
                    ))}
                  </nav>
                  <div className="mt-auto">
                    <Button asChild size="lg" className="w-full">
                      <Link href="/donate">
                        <Heart className="mr-2 h-5 w-5" /> Faire un Don
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
