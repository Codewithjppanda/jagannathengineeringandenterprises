import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "civil", name: "Civil" },
    { id: "electrical", name: "Electrical" },
    { id: "railway", name: "Railway" },
    { id: "maintenance", name: "Maintenance" },
    { id: "mechanical", name: "Mechanical" },
    { id: "equipment", name: "Equipment Supply" }
  ];

  const projects = [
    {
      id: 1,
      title: "Bridge Construction Project",
      category: "civil",
      location: "Bhadrak, Odisha",
      description: "Major bridge construction and infrastructure development project",
      image: "/public/images/projects/proj1.jpg"
    },
    {
      id: 2,
      title: "Power Plant Maintenance",
      category: "electrical",
      location: "Industrial Area",
      description: "Comprehensive electrical maintenance and system upgrades",
      image: "/public/images/projects/proj2.jpg"
    },
    {
      id: 3,
      title: "Railway Track Maintenance",
      category: "railway",
      location: "Eastern Railway",
      description: "Regular maintenance and safety upgrades for railway infrastructure",
      image: "/public/images/projects/proj3.jpg"
    },
    {
      id: 4,
      title: "Industrial Building Construction",
      category: "civil",
      location: "Odisha Industrial Complex",
      description: "Modern industrial facility construction with advanced features",
      image: "/public/images/projects/proj4.jpg"
    },
    {
      id: 5,
      title: "Equipment Installation",
      category: "mechanical",
      location: "Manufacturing Unit",
      description: "Heavy machinery installation and commissioning services",
      image: "/public/images/projects/proj5.jpg"
    },
    {
      id: 6,
      title: "Electrical System Upgrade",
      category: "electrical",
      location: "Commercial Complex",
      description: "Complete electrical system modernization and safety compliance",
      image: "/public/images/projects/proj6.jpg"
    },
    {
      id: 7,
      title: "Infrastructure Maintenance",
      category: "maintenance",
      location: "Multiple Locations",
      description: "Ongoing maintenance services for various infrastructure projects",
      image: "/public/images/projects/proj7.jpg"
    },
    {
      id: 8,
      title: "Equipment Supply Project",
      category: "equipment",
      location: "Industrial Zone",
      description: "Large-scale equipment procurement and delivery services",
      image: "/public/images/projects/proj8.jpg"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing our expertise across diverse engineering and construction projects
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={activeFilter === category.id ? "bg-sky-600 hover:bg-sky-700" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video bg-slate-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-3">{project.location}</p>
                  <p className="text-sm mb-4">{project.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-xl mb-8 text-slate-200">Let's discuss how we can help bring your vision to life</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                <a href="tel:+919853687795">Call +91 98536 87795</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <a href="/contact">Start a Project</a>
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

export default Projects;