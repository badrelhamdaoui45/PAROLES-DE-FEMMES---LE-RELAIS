import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HandHelping, Heart, Lightbulb } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  { name: "Jeanne Dupont", role: "Directrice", image: "https://picsum.photos/200/200?a=1", hint: "professional portrait" },
  { name: "Marc Petit", role: "Coordinateur social", image: "https://picsum.photos/200/200?a=2", hint: "man portrait" },
  { name: "Sophie Martin", role: "Psychologue", image: "https://picsum.photos/200/200?a=3", hint: "woman smiling" },
  { name: "Luc Moreau", role: "Responsable juridique", image: "https://picsum.photos/200/200?a=4", hint: "professional man" },
];

const values = [
  { icon: <Heart className="h-8 w-8 text-primary" />, title: "Bienveillance", description: "Nous accueillons chaque personne avec empathie et sans jugement." },
  { icon: <HandHelping className="h-8 w-8 text-primary" />, title: "Solidarité", description: "Nous croyons en la force du collectif pour surmonter les épreuves." },
  { icon: <Lightbulb className="h-8 w-8 text-primary" />, title: "Autonomie", description: "Nous outillons les femmes pour qu'elles redeviennent actrices de leur vie." },
];

export default function AboutPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">À Propos de Notre Association</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">Découvrez notre histoire, nos valeurs et les personnes qui animent notre engagement.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary">Notre Histoire</h2>
              <p className="mt-4 text-lg">
                Fondée en 2005 par un groupe de femmes engagées, l'association "Paroles de Femmes - Le Relais" est née du constat alarmant du manque de structures adaptées pour les victimes de violences conjugales.
              </p>
              <p className="mt-4">
                Partant d'un simple local d'écoute, nous avons progressivement développé nos services pour offrir aujourd'hui un accompagnement global : hébergement d'urgence, soutien psychologique, aide juridique et programmes de réinsertion. Chaque étape de notre croissance a été guidée par les besoins exprimés par les femmes que nous accueillons.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
               <Image src="/IMG1.jpeg" alt="Group of diverse women" width={800} height={600} className="w-full h-full object-cover" data-ai-hint="diverse women" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl font-bold text-primary">Nos Valeurs Fondamentales</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(v => (
              <div key={v.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent mb-4">
                  {v.icon}
                </div>
                <h3 className="font-headline text-2xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl font-bold text-primary">Notre Équipe Engagée</h2>
           <p className="text-center mt-4 max-w-2xl mx-auto text-lg">
            Des professionnels dévoués et des bénévoles passionnés qui travaillent main dans la main.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="pt-6">
                  <Avatar className="h-24 w-24 mx-auto">
                    <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-xl font-semibold font-headline">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
