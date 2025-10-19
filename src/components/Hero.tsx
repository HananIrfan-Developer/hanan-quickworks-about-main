import { Button } from "@/components/ui/button";
import logo from "@/assets/quickworks-logo.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <img 
            src={logo} 
            alt="QuickWorks IT Center Logo" 
            className="w-48 h-48 mx-auto mb-8 animate-in fade-in duration-1000"
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            QuickWorks IT Center
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Empowering Students with Practical IT Skills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="gradient" 
              size="lg"
              onClick={() => scrollToSection('courses')}
              className="text-lg"
            >
              Explore Courses
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
