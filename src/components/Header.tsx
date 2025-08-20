import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">Saj Bio Paks</Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/products" 
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/products' ? 'text-primary' : ''}`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/about' ? 'text-primary' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/contact' ? 'text-primary' : ''}`}
            >
              Contact
            </Link>
          </nav>
          
          <Button variant="default" className="hidden sm:inline-flex">
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;