import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Courses />
      <Contact />
      <footer className="bg-card py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 QuickWorks IT Center. Co-Founded by Hanan Irfan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
