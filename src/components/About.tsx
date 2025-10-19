import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            About Hanan Irfan
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12" />
          
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Hanan Irfan</strong> is the visionary <strong>Co-Founder of QuickWorks IT Center</strong>, 
                  a leading institute dedicated to transforming IT education. As a passionate BSCS student at KFUEIT, 
                  Hanan Irfan combines academic excellence with practical industry experience.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  At <strong>QuickWorks IT Center</strong>, Hanan Irfan leads the mission to empower students with 
                  cutting-edge IT skills through innovative and hands-on learning experiences. The institute offers 
                  comprehensive training programs designed to prepare students for real-world challenges in the 
                  technology sector.
                </p>
                <p className="text-lg leading-relaxed">
                  Hanan Irfan's vision for <strong>QuickWorks IT Center</strong> is to create a learning environment 
                  where students don't just learn theory—they develop practical skills that make them industry-ready 
                  from day one.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-muted-foreground">BSCS Student at KFUEIT</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="font-semibold text-lg mb-2">Role</h3>
                <p className="text-muted-foreground">Co-Founder, QuickWorks IT Center</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Vision</h3>
                <p className="text-muted-foreground">Empowering through Practical IT Skills</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
