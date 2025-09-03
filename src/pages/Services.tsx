import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Civil Work",
      description: "Comprehensive civil engineering and construction services",
      tasks: [
        "Building construction and renovation",
        "Infrastructure development",
        "Road and bridge construction",
        "Site preparation and earthwork",
        "Concrete work and structural repairs",
        "Quality control and project management"
      ]
    },
    {
      title: "Maintenance Work", 
      description: "Preventive and corrective maintenance across all sectors",
      tasks: [
        "Scheduled preventive maintenance",
        "Emergency repair services",
        "Equipment maintenance and servicing",
        "Facility management",
        "Condition monitoring and assessment",
        "Maintenance planning and execution"
      ]
    },
    {
      title: "Electrical Work",
      description: "Complete electrical installations and power systems",
      tasks: [
        "Electrical installations and wiring",
        "Power distribution systems",
        "Control panel installation",
        "Lighting systems design and installation",
        "Electrical maintenance and troubleshooting",
        "Safety compliance and testing"
      ]
    },
    {
      title: "Railway Work",
      description: "Specialized railway infrastructure and maintenance services",
      tasks: [
        "Railway track maintenance",
        "Signal and communication systems",
        "Platform and station infrastructure",
        "Railway electrification work",
        "Safety systems installation",
        "Regular inspection and maintenance"
      ]
    },
    {
      title: "Mechanical Work",
      description: "Mechanical systems and equipment services (Co-Partner)",
      tasks: [
        "Mechanical equipment installation",
        "HVAC systems design and installation",
        "Piping and plumbing systems",
        "Machinery maintenance and repair",
        "Fabrication and welding services",
        "Industrial automation systems"
      ]
    },
    {
      title: "Equipment Supply",
      description: "Industrial equipment procurement and supply services",
      tasks: [
        "Construction equipment supply",
        "Industrial machinery procurement",
        "Quality equipment sourcing",
        "Vendor management and coordination",
        "Equipment testing and commissioning",
        "After-sales support and warranty"
      ]
    }
  ];

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive engineering solutions across civil, electrical, railway, and industrial sectors
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-sky-600 rounded"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 flex-grow">
                    {service.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-slate-200">Contact us today for a consultation and detailed quote</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                <a href="tel:+919853687795">Call +91 98536 87795</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <a href="/contact">Get Quote</a>
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

export default Services;