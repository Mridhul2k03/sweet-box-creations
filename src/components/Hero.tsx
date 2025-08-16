import { Button } from "@/components/ui/button";
import heroBoxes from "@/assets/hero-boxes.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Premium Cake Boxes for Every Occasion
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Professional packaging solutions for bakeries, cake shops, and food businesses. 
              From birthday celebrations to everyday treats, we've got the perfect box.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-hero text-primary-foreground hover:opacity-90 transition-opacity">
                Browse Products
              </Button>
              <Button variant="outline" size="lg">
                Request Samples
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroBoxes} 
              alt="Professional cake boxes in various sizes" 
              className="w-full h-auto rounded-lg shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;