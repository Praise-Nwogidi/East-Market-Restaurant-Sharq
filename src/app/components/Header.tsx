import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif text-primary">East Market & Restaurant</h1>
            <p className="text-sm text-muted-foreground">Sharq</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("menu")} className="text-foreground hover:text-primary transition-colors">
              Menu
            </button>
            <button onClick={() => scrollToSection("gallery")} className="text-foreground hover:text-primary transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection("reviews")} className="text-foreground hover:text-primary transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center gap-2 text-primary">
            <Phone className="w-5 h-5" />
            <span className="font-medium">+1 (555) 123-4567</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-border">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("menu")} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors">
              Menu
            </button>
            <button onClick={() => scrollToSection("gallery")} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection("reviews")} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors">
              Contact
            </button>
            <div className="flex items-center gap-2 text-primary px-4 py-2">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
