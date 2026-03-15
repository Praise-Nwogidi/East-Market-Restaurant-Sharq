import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif text-primary mb-3">East Market & Restaurant</h3>
            <p className="text-sm text-muted-foreground mb-2">Sharq</p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Authentic Afghan cuisine prepared with love and traditional recipes.
            </p>
            <div className="flex gap-3">
              <button className="p-2 bg-primary/10 hover:bg-primary hover:text-white rounded-lg transition-colors group">
                <Facebook className="w-5 h-5 text-primary group-hover:text-white" />
              </button>
              <button className="p-2 bg-accent/10 hover:bg-accent hover:text-white rounded-lg transition-colors group">
                <Instagram className="w-5 h-5 text-accent group-hover:text-white" />
              </button>
              <button className="p-2 bg-secondary/10 hover:bg-secondary hover:text-white rounded-lg transition-colors group">
                <Twitter className="w-5 h-5 text-secondary group-hover:text-white" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("menu")} className="text-muted-foreground hover:text-primary transition-colors">
                  Menu
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("gallery")} className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("reviews")} className="text-muted-foreground hover:text-primary transition-colors">
                  Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-primary transition-colors">
                  Dine-In
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-primary transition-colors">
                  Takeout
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-primary transition-colors">
                  Online Ordering
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-primary transition-colors">
                  Catering
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-primary transition-colors">
                  Reservations
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">123 East Market Street, Sharq District</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">info@eastmarketsharq.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2026 East Market & Restaurant - Sharq. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors">Privacy Policy</button>
              <button className="hover:text-primary transition-colors">Terms of Service</button>
              <button className="hover:text-primary transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
