const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">CakeBox Pro</h3>
          <p className="text-primary-foreground/80 mb-4">
            Professional packaging solutions for the food industry
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <span>© 2024 CakeBox Pro</span>
            <span>•</span>
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;