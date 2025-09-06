import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Gift, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const impacts = [
  { amount: "20€", description: "Offrent une nuit de sécurité à une femme et son enfant." },
  { amount: "50€", description: "Financent une séance de soutien psychologique." },
  { amount: "100€", description: "Contribuent à un programme de formation professionnelle." },
];

export default function DonatePage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="relative flex h-[50vh] min-h-[350px] w-full items-center justify-center bg-background/80 py-20">
         <Image
          src="https://picsum.photos/1600/800"
          alt="Hands holding each other in support"
          fill
          className="object-cover -z-10"
          data-ai-hint="helping hands"
        />
        <div className="container mx-auto px-4 text-center text-primary-foreground">
             <div className="bg-black/30 p-8 rounded-lg">
                <h1 className="font-headline text-4xl font-bold md:text-5xl">Faire un Don</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg">Votre générosité change des vies.</p>
            </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <Card className="w-full max-w-3xl text-center shadow-2xl">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-3xl md:text-4xl text-primary">Soutenez notre action</CardTitle>
                <CardDescription className="text-lg pt-2">
                  Chaque contribution, grande ou petite, est un pas de plus vers un avenir sans violence pour de nombreuses femmes et enfants. Votre don est essentiel pour nous permettre de continuer notre mission.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="my-6">
                  <p className="font-semibold text-lg mb-4">Voici comment votre don peut aider :</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                    {impacts.map(impact => (
                      <div key={impact.amount} className="bg-accent/50 p-4 rounded-lg flex">
                         <CheckCircle className="h-5 w-5 mr-3 mt-1 text-primary shrink-0"/>
                         <div>
                            <span className="font-bold">{impact.amount}</span> {impact.description}
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-4">
                 <Button asChild size="lg" className="w-full text-lg py-7">
                    <Link href="https://www.paypal.com/donate" target="_blank" rel="noopener noreferrer">
                      <Gift className="mr-2 h-5 w-5" /> Donner Maintenant (Plateforme sécurisée)
                    </Link>
                  </Button>
                <p className="text-xs text-muted-foreground">Vous serez redirigé vers notre plateforme de paiement partenaire.</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
