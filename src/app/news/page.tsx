import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    title: "Campagne de sensibilisation 'Brisons le Silence'",
    date: "15 Octobre 2023",
    excerpt: "Notre nouvelle campagne vise à briser le silence sur les violences conjugales à travers des témoignages poignants et des actions de rue.",
    imageUrl: "https://picsum.photos/800/600?q=1",
    imageHint: "community awareness"
  },
  {
    title: "Un Gala de charité record pour l'association",
    date: "28 Septembre 2023",
    excerpt: "Grâce à la générosité de nos donateurs, notre gala annuel a permis de collecter des fonds essentiels pour l'ouverture d'un nouveau centre d'accueil.",
    imageUrl: "https://picsum.photos/800/600?q=2",
    imageHint: "charity event"
  },
  {
    title: "Témoignage : le chemin vers la résilience de Marie",
    date: "12 Septembre 2023",
    excerpt: "Découvrez l'histoire inspirante de Marie, qui a reconstruit sa vie, retrouvé un travail et un logement stable grâce à l'accompagnement de nos équipes.",
    imageUrl: "https://picsum.photos/800/600?q=3",
    imageHint: "woman smiling"
  },
  {
    title: "Nouveau partenariat avec les entreprises locales",
    date: "25 Août 2023",
    excerpt: "Nous sommes fiers d'annoncer un partenariat stratégique avec dix entreprises de la région pour favoriser la réinsertion professionnelle des femmes que nous accompagnons.",
    imageUrl: "https://picsum.photos/800/600?q=4",
    imageHint: "business meeting"
  },
    {
    title: "Ateliers d'art-thérapie : l'expression pour se reconstruire",
    date: "10 Juillet 2023",
    excerpt: "Nos nouveaux ateliers d'art-thérapie offrent un espace d'expression libre et créatif, un outil puissant sur le chemin de la guérison.",
    imageUrl: "https://picsum.photos/800/600?q=5",
    imageHint: "art therapy"
  },
  {
    title: "La course solidaire 'Elles Marchent' a rassemblé 500 participants",
    date: "19 Juin 2023",
    excerpt: "Un immense succès pour la 3ème édition de notre course solidaire, qui a permis de sensibiliser le grand public et de financer nos programmes sportifs.",
    imageUrl: "https://picsum.photos/800/600?q=6",
    imageHint: "running race"
  },
];

export default function NewsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Actualités et Événements</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">Suivez nos actions, nos campagnes et les moments forts de la vie de l'association.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.title} className="overflow-hidden flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                 <div className="relative w-full h-56">
                    <Image src={item.imageUrl} alt={item.title} fill className="object-cover" data-ai-hint={item.imageHint} />
                </div>
                <CardHeader>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                  <CardTitle className="font-headline text-xl h-14">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm">{item.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0">
                    <Link href="#">
                      Lire la suite <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
