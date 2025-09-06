import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BookOpenCheck, HeartHandshake, Home, ShieldCheck } from "lucide-react";

const services = [
  {
    value: "item-1",
    title: "Hébergement d'Urgence et Sécurisé",
    icon: <Home className="h-7 w-7 text-primary" />,
    content: "Nous offrons un refuge immédiat et sécurisé pour les femmes et leurs enfants fuyant la violence. Nos centres d'hébergement sont des lieux confidentiels où elles peuvent se reposer, se sentir en sécurité et commencer à se reconstruire. L'accompagnement sur place est assuré 24/7 par une équipe de professionnels."
  },
  {
    value: "item-2",
    title: "Accompagnement Psychologique et Social",
    icon: <HeartHandshake className="h-7 w-7 text-primary" />,
    content: "Un soutien individualisé est crucial. Nous proposons des suivis psychologiques avec des thérapeutes spécialisés dans les traumatismes, ainsi qu'un accompagnement social pour toutes les démarches administratives (logement, aides financières, scolarisation des enfants)."
  },
  {
    value: "item-3",
    title: "Conseil et Assistance Juridique",
    icon: <ShieldCheck className="h-7 w-7 text-primary" />,
    content: "Nos partenaires juridiques offrent des consultations gratuites pour informer les femmes de leurs droits. Nous les aidons à engager les procédures nécessaires : dépôt de plainte, ordonnance de protection, divorce, garde des enfants."
  },
    {
    value: "item-4",
    title: "Programmes de Formation et d'Autonomisation",
    icon: <BookOpenCheck className="h-7 w-7 text-primary" />,
    content: "Retrouver l'indépendance économique est une étape clé. Nous organisons des ateliers de confiance en soi, des formations professionnelles et des aides à la recherche d'emploi pour permettre aux femmes de se projeter dans un avenir autonome et serein."
  },
]

export default function ServicesPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Nos Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">Un accompagnement complet et personnalisé pour chaque étape de la reconstruction.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-center text-lg mb-12">
            Notre approche est holistique : nous prenons en charge tous les aspects de la vie d'une femme et de ses enfants pour leur permettre de sortir durablement de la spirale de la violence.
          </p>
          <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
            {services.map((service) => (
              <AccordionItem key={service.value} value={service.value}>
                <AccordionTrigger className="text-lg md:text-xl font-headline hover:no-underline">
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <span>{service.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pl-14 pt-2">
                  {service.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
