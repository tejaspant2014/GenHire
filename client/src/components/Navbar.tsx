import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import genhireLogo from "@/assets/genhire-logo.jpeg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src={genhireLogo} 
                alt="GenHire Logo" 
                className="w-10 h-10 rounded-md object-cover" 
              />
              <span className="text-xl font-semibold text-gray-900">GenHire</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <ScrollLink 
              to="features" 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              Features
            </ScrollLink>
            <ScrollLink 
              to="how-it-works" 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              How It Works
            </ScrollLink>
            <ScrollLink 
              to="about" 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink 
              to="waitlist" 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              Join Waitlist
            </ScrollLink>
          </nav>
          
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <ScrollLink 
                to="features" 
                smooth={true} 
                duration={500} 
                offset={-80}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </ScrollLink>
              <ScrollLink 
                to="how-it-works" 
                smooth={true} 
                duration={500} 
                offset={-80}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </ScrollLink>
              <ScrollLink 
                to="about" 
                smooth={true} 
                duration={500} 
                offset={-80}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </ScrollLink>
              <ScrollLink 
                to="waitlist" 
                smooth={true} 
                duration={500} 
                offset={-80}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Waitlist
              </ScrollLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
