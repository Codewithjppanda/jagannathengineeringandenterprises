import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      // Replace with actual Formspree endpoint
      const response = await fetch("https://formspree.io/f/xxxxdemo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you soon.",
        });
        e.currentTarget.reset();
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Jagannath Engineering & Equipment</div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-sm font-medium hover:text-primary">Home</a>
            <a href="/about" className="text-sm font-medium hover:text-primary">About</a>
            <a href="/services" className="text-sm font-medium hover:text-primary">Services</a>
            <a href="/projects" className="text-sm font-medium hover:text-primary">Projects</a>
            <a href="/contact" className="text-sm font-medium hover:text-primary">Contact</a>
          </nav>
          <Button className="bg-sky-600 hover:bg-sky-700">Get Quote</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your project? Get in touch with us today for a consultation and quote
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Contact us today to discuss your engineering and construction needs. 
                  We're here to help bring your projects to life.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Phone</h3>
                    <a href="tel:+919853687795" className="text-sky-600 hover:text-sky-700 text-lg">
                      +91 98536 87795
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Email</h3>
                    <a href="mailto:jagannathengineering2020@gmail.com" className="text-sky-600 hover:text-sky-700 text-lg">
                      jagannathengineering2020@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Address</h3>
                    <p className="mb-2">Aradichhak, Bhadrak</p>
                    <p className="mb-4">NH-5 Soro Chhak, Bhadrak – 756133, Odisha</p>
                    <Button variant="outline" size="sm">
                      <a href="https://www.google.com/maps?q=Aradichhak,+NH-5+Soro+Chhak,+Bhadrak+756133,+Odisha" target="_blank" rel="noopener noreferrer">
                        Get Directions
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Business Hours</h3>
                    <p className="mb-1">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: By appointment only</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" required />
                      </div>
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" name="company" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" type="tel" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Service of Interest</Label>
                      <Select name="service">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="civil">Civil Work</SelectItem>
                          <SelectItem value="maintenance">Maintenance Work</SelectItem>
                          <SelectItem value="electrical">Electrical Work</SelectItem>
                          <SelectItem value="railway">Railway Work</SelectItem>
                          <SelectItem value="mechanical">Mechanical Work</SelectItem>
                          <SelectItem value="equipment">Equipment Supply</SelectItem>
                          <SelectItem value="medical">Medical Supply</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Please describe your project requirements, timeline, and any specific needs..."
                        rows={6}
                        required 
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-sky-600 hover:bg-sky-700" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We don't share your data. Your information is safe with us.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Aradichhak,+NH-5+Soro+Chhak,+Bhadrak+756133,+Odisha&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jagannath Engineering & Equipment Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <p className="mb-2">Aradichhak, Bhadrak</p>
              <p className="mb-2">NH-5 Soro Chhak, Bhadrak – 756133, Odisha</p>
              <p className="mb-2">Phone: +91 98536 87795</p>
              <p>Email: jagannathengineering2020@gmail.com</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company Details</h3>
              <p className="mb-2">Proprietor: Moti Ranjan Parida</p>
              <p className="mb-2">GST: 21CNJPP2022R1ZH</p>
              <p className="mb-2">UDYAM: OD-05-0008533</p>
              <p>License: Class B (849MAL76)</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <p className="mb-2">Civil Work</p>
              <p className="mb-2">Electrical Work</p>
              <p className="mb-2">Railway Work</p>
              <p>Maintenance Work</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Partners</h3>
              <p className="mb-2">Co-Partner: SBM Infra Projects</p>
              <p className="mb-2">TATA Project Limited (TPL)</p>
              <p>Power Plant Engineers Limited (PPEL)</p>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p>&copy; 2024 Jagannath Engineering & Equipment. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;