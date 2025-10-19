import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Facebook, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">
              Ready to start your IT journey with QuickWorks IT Center? Contact us today!
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">QuickWorks IT Center</h3>
                  <p className="text-muted-foreground mb-6">
                    Founded by Hanan Irfan to provide world-class IT education and practical training. 
                    We are committed to helping you achieve your career goals in technology.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:info@quickworksit.com" className="text-muted-foreground hover:text-primary transition-colors">
                        Contact via our social media
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <p className="text-muted-foreground">Get in touch via our social channels</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:col-span-2">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Location</p>
                      <p className="text-muted-foreground">KFUEIT Area, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="gradient" 
                size="lg"
                onClick={() => window.open('https://quickworkssoftwarehouse.my.canva.site/', '_blank')}
              >
                <Globe className="mr-2 h-5 w-5" />
                Visit Our Website
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://www.instagram.com/quickworkssoftwarehouse_01', '_blank')}
              >
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://www.facebook.com/share/1Et8C2ECwc/', '_blank')}
              >
                <Facebook className="mr-2 h-5 w-5" />
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
