import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

function SocialIcon({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
      {children}
    </a>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.4 1.4-3.3 1.4H6.7c-1.3 0-1.3-1.4-1.3-1.4s1.7-3 3.3-4.4C7.4 6.1 6.7 4 6.7 4S8.1 4 10.7 6.6c2.6-2.6 4-2.6 4-2.6s.7 2.1 2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.4 1.4-3.3 1.4H13.3c-1.3 0-1.3-1.4-1.3-1.4s1.7-3 3.3-4.4C14.1 6.1 13.4 4 13.4 4s1.4 0 4 2.6c2.6-2.6 4-2.6 4-2.6z"/>
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}


export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <h3 className="font-headline text-2xl font-bold">Paroles de Femmes - Le Relais</h3>
            <p className="mt-2 text-primary-foreground/80">Soutenir, accompagner et reconstruire.</p>
            <div className="mt-4 flex space-x-4">
              <SocialIcon href="#"><FacebookIcon /></SocialIcon>
              <SocialIcon href="#"><TwitterIcon /></SocialIcon>
              <SocialIcon href="#"><InstagramIcon /></SocialIcon>
            </div>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-headline text-lg font-semibold">Contact</h4>
            <ul className="mt-2 space-y-2 text-primary-foreground/80">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 shrink-0" />
                <span>431 956 481</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 shrink-0" />
                <span>96 RUE DE PARIS, 77127 LIEUSAINT</span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-headline text-lg font-semibold">Liens rapides</h4>
            <ul className="mt-2 space-y-1 text-primary-foreground/80">
              <li><Link href="/about" className="hover:text-primary-foreground transition-colors">À Propos</Link></li>
              <li><Link href="/services" className="hover:text-primary-foreground transition-colors">Services</Link></li>
              <li><Link href="/news" className="hover:text-primary-foreground transition-colors">Actualités</Link></li>
              <li><Link href="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
              <li><Link href="/donate" className="hover:text-primary-foreground transition-colors">Faire un Don</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Paroles de Femmes - Le Relais. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
