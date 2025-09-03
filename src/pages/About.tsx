import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Jagannath Engineering & Equipment</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner for civil, electrical, and industrial works across Odisha
            </p>
          </div>
        </div>
      </section>

      {/* About the Firm */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About the Firm</h2>
              <p className="text-lg mb-6">
                Jagannath Engineering & Equipment is a Class B licensed firm specializing in comprehensive engineering solutions across multiple sectors. We are committed to delivering quality work with safety, precision, and timeliness.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mr-3"></div>
                  <span>Safety-first approach in all projects</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mr-3"></div>
                  <span>Quality execution and timely delivery</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sky-600 rounded-full mr-3"></div>
                  <span>Comprehensive engineering solutions</span>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold mb-2">Moti Ranjan Parida</h3>
                  <p className="text-muted-foreground mb-4">Proprietor</p>
                  <p className="text-sm">
                    Leading Jagannath Engineering & Equipment with extensive experience in civil and electrical works, 
                    committed to delivering excellence in every project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">TATA Project Limited (TPL)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Infrastructure development projects</li>
                  <li>• Civil construction and maintenance</li>
                  <li>• Quality assurance and project management</li>
                  <li>• Large-scale industrial works</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Power Plant Engineers Limited (PPEL)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Power plant construction support</li>
                  <li>• Electrical installations and maintenance</li>
                  <li>• Safety compliance and procedures</li>
                  <li>• Technical expertise in power sector</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Preview */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Licensed & Certified</h2>
            <p className="text-xl text-muted-foreground">Fully compliant with all regulatory requirements</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">GST Registration</h3>
                <p className="text-muted-foreground">21CNJPP2022R1ZH</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">UDYAM Registration</h3>
                <p className="text-muted-foreground">OD-05-0008533</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">Class B License</h3>
                <p className="text-muted-foreground">849MAL76</p>
              </CardContent>
            </Card>
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

export default About;