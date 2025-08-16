import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">CakeBox Pro</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
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