import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">Nous Contacter</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            N'hésitez pas à nous joindre. Nous sommes là pour vous écouter et vous orienter.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-headline text-3xl font-bold text-primary">Informations</h2>
                <p className="mt-2 text-muted-foreground">
                  Retrouvez nos coordonnées ci-dessous. Pour toute urgence, veuillez privilégier le contact téléphonique.
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-6 w-6 mr-3 text-primary" />
                    Téléphone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:431956481" className="text-lg hover:text-primary transition-colors">431 956 481</a>
                  <p className="text-sm text-muted-foreground mt-1">Ligne d'écoute et d'urgence disponible 24/7</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-6 w-6 mr-3 text-primary" />
                    Adresse
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">96 RUE DE PARIS, 77127 LIEUSAINT</p>
                   <p className="text-sm text-muted-foreground mt-1">Accueil sur rendez-vous uniquement</p>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="p-4 sm:p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-6 w-6 mr-3 text-primary" />
                    Envoyez-nous un message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Votre nom</Label>
                            <Input id="name" placeholder="Marie Dupont" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Votre email</Label>
                            <Input id="email" type="email" placeholder="marie@exemple.com" />
                        </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet</Label>
                      <Input id="subject" placeholder="Prise de contact" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Votre message</Label>
                      <Textarea id="message" placeholder="Écrivez votre message ici..." rows={6} />
                    </div>
                    <Button type="submit" size="lg" className="w-full">Envoyer le message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
