
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenCheck, HeartHandshake, Newspaper, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: "Hébergement",
    description: "Des solutions d'hébergement sécurisées pour les femmes et leurs enfants.",
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: "Accompagnement",
    description: "Un soutien psychologique, social et juridique personnalisé.",
  },
  {
    icon: <BookOpenCheck className="h-10 w-10 text-primary" />,
    title: "Formations",
    description: "Des programmes pour l'autonomie et la réinsertion professionnelle.",
  },
];

const newsItems = [
  {
    title: "Campagne de sensibilisation",
    date: "15 Octobre 2023",
    excerpt: "Notre nouvelle campagne vise à briser le silence sur les violences conjugales.",
    imageUrl: "/IMG2.jpeg",
    imageHint: "community support"
  },
  {
    title: "Gala de charité annuel",
    date: "28 Septembre 2023",
    excerpt: "Une soirée réussie pour collecter des fonds et soutenir nos actions.",
    imageUrl: "/IMG3.jpeg",
    imageHint: "event charity"
  },
  {
    title: "Témoignage : le chemin vers la résilience",
    date: "12 Septembre 2023",
    excerpt: "L'histoire inspirante de Marie, qui a reconstruit sa vie grâce à l'association.",
    imageUrl: "/IMG4.jpeg",
    imageHint: "woman portrait"
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative flex h-[60vh] min-h-[400px] w-full items-center justify-center bg-background/80 py-20 md:py-32">
        <Image
          src="/IMG1.jpeg"
          alt="Woman looking towards the horizon"
          fill
          className="object-cover -z-10"
          data-ai-hint="woman hope"
          priority
        />
        <div className="container mx-auto px-4 text-center text-primary-foreground animate-in fade-in duration-1000">
          <div className="bg-black/30 p-8 rounded-lg">
            <h1 className="font-headline text-4xl font-bold md:text-6xl">
              Paroles de Femmes - Le Relais
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl">
              Soutenir, accompagner et reconstruire. Ensemble, nous offrons un avenir aux femmes et enfants victimes de violences conjugales.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center animate-in fade-in-50 duration-500">
          <h2 className="font-headline text-3xl font-bold md:text-4xl text-primary">Notre Mission</h2>
          <div className="mx-auto mt-6 max-w-3xl text-lg">
            <p>
              Depuis notre création, nous nous engageons à offrir un refuge sûr et un accompagnement complet aux femmes et enfants en situation de détresse. Notre mission est de leur redonner espoir, dignité et les moyens de se reconstruire une vie autonome et sereine.
            </p>
          </div>
          <Button asChild size="lg" className="mt-8">
            <Link href="/about">En savoir plus sur nous</Link>
          </Button>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4 animate-in fade-in-50 duration-500">
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-primary">Nos Services</h2>
          <p className="text-center mt-4 max-w-2xl mx-auto text-lg">
            Nous proposons un ensemble de services intégrés pour répondre aux besoins spécifiques de chaque femme et de chaque enfant.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent">
                    {service.icon}
                  </div>
                  <CardTitle className="mt-4 font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">Découvrir tous nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="news" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 animate-in fade-in-50 duration-500">
          <h2 className="text-center font-headline text-3xl font-bold md:text-4xl text-primary">Actualités et Événements</h2>
           <p className="text-center mt-4 max-w-2xl mx-auto text-lg">
            Restez informé de nos dernières actions, campagnes et événements.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {newsItems.map((item) => (
              <Card key={item.title} className="overflow-hidden flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <Image src={item.imageUrl} alt={item.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={item.imageHint} />
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                  <p className="mt-2 text-sm">{item.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/news">Toutes les actualités</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="donate" className="py-16 md:py-24 text-center bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 animate-in fade-in-50 duration-500">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Votre Soutien est Précieux</h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg">
            Chaque don, quel que soit son montant, nous aide à poursuivre nos missions et à offrir un avenir meilleur aux femmes et aux enfants.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 text-lg py-6 px-10">
            <Link href="/donate">Faire un Don</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
