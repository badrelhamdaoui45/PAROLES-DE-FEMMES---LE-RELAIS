"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, UserPlus, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Volunteer = {
  id: string;
  name: string;
  image: string;
  imageHint: string;
};

const volunteers: Volunteer[] = [
  {
    id: "PF322",
    name: "Brie Paulet",
    image: "/PRO_HEADSHOOT.jpeg",
    imageHint: "woman portrait smiling",
  },
];

export default function VolunteersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<Volunteer | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const result = volunteers.find((v) => v.id.toLowerCase() === searchTerm.toLowerCase());
    setSearchResult(result || null);
    setSearched(true);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Espace Bénévoles</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            Rejoignez notre équipe de bénévoles ou accédez à votre espace personnel.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            
            <Card className="w-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                    <UserPlus className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline text-3xl text-primary">Devenir Bénévole</CardTitle>
                </div>
                <CardDescription className="pt-2 text-base">
                  Votre temps et vos compétences sont précieux. En rejoignant notre équipe, vous contribuez directement à nos actions et apportez un soutien essentiel aux femmes que nous accompagnons.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image src="https://picsum.photos/800/500" alt="Volunteers working together" width={800} height={500} className="rounded-lg mb-6 w-full object-cover" data-ai-hint="volunteers community" />
                <p className="mb-6">
                    Que vous ayez des compétences en écoute, en organisation, en communication ou simplement l'envie d'aider, il y a une place pour vous.
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">Rejoindre notre équipe</Link>
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
                 <Card className="w-full">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <Search className="h-8 w-8 text-primary" />
                            <CardTitle className="font-headline text-3xl text-primary">Espace Bénévole</CardTitle>
                        </div>
                        <CardDescription className="pt-2 text-base">
                        Recherchez un bénévole par son numéro d'identification pour vérifier son statut.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            <div className="w-full space-y-2">
                                <Label htmlFor="volunteer-id" className="sr-only">Numéro d'identification</Label>
                                <Input 
                                    type="text" 
                                    id="volunteer-id" 
                                    placeholder="Ex: PF322" 
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setSearched(false);
                                        setSearchResult(null);
                                    }}
                                />
                            </div>
                            <Button type="submit" onClick={handleSearch}>
                                <Search className="h-4 w-4 md:mr-2" />
                                <span className="hidden md:inline">Rechercher</span>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {searched && (
                    <div className="mt-8">
                        {searchResult ? (
                            <Card className="text-center shadow-lg">
                                <CardContent className="pt-6">
                                <Avatar className="h-28 w-28 mx-auto border-4 border-primary">
                                    <AvatarImage src={searchResult.image} alt={searchResult.name} data-ai-hint={searchResult.imageHint}/>
                                    <AvatarFallback>{searchResult.name.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <h3 className="mt-4 text-2xl font-semibold font-headline">{searchResult.name}</h3>
                                <p className="text-muted-foreground">{searchResult.id}</p>
                                <Badge className="mt-4" variant="secondary">
                                    <ShieldCheck className="h-4 w-4 mr-2" />
                                    Bénévolat vérifié
                                </Badge>
                                </CardContent>
                            </Card>
                        ) : (
                            <Card>
                                <CardContent className="pt-6 text-center">
                                    <p>Aucun bénévole trouvé avec cet identifiant.</p>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
