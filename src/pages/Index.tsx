import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Jagannath Engineering & Equipment</div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-primary">Home</a>
            <a href="#" className="text-sm font-medium hover:text-primary">About</a>
            <a href="#" className="text-sm font-medium hover:text-primary">Services</a>
            <a href="#" className="text-sm font-medium hover:text-primary">Projects</a>
            <a href="#" className="text-sm font-medium hover:text-primary">Contact</a>
          </nav>
          <Button className="bg-sky-600 hover:bg-sky-700">Get Quote</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Civil, Electrical & Industrial Works in Odisha
            </h1>
            <p className="text-xl mb-8 text-slate-200">
              Quality execution across Civil, Maintenance, Electrical, Railway and partner-led Mechanical & Supply.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700">Get Quote</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">Comprehensive engineering solutions across multiple sectors</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Civil Work", desc: "Construction, infrastructure, and structural projects" },
              { title: "Maintenance Work", desc: "Preventive and corrective maintenance services" },
              { title: "Electrical Work", desc: "Electrical installations and power systems" },
              { title: "Railway Work", desc: "Railway infrastructure and maintenance" },
              { title: "Mechanical Work", desc: "Mechanical systems and equipment" },
              { title: "Equipment Supply", desc: "Industrial equipment procurement and supply" }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-sky-50 py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-sky-600 mb-2">10+</div>
              <div className="text-lg text-slate-700">Years of Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-600 mb-2">50+</div>
              <div className="text-lg text-slate-700">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-600 mb-2">8+</div>
              <div className="text-lg text-slate-700">Industry Sectors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="bg-slate-900 text-white rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Discuss Your Project Today</h2>
            <p className="text-xl mb-8 text-slate-200">Get in touch for a consultation and quote</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                <a href="tel:+919853687795">Call +91 98536 87795</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <a href="mailto:jagannathengineering2020@gmail.com">Send Email</a>
              </Button>
            </div>
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

export default Index;
