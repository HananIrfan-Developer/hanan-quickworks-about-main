import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, FileText, Youtube, Code, Video } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: Palette,
      title: "Graphic Designing",
      description: "Master Adobe Photoshop, Illustrator, and design principles. Create stunning visuals and brand identities.",
      color: "text-primary"
    },
    {
      icon: FileText,
      title: "MS Office",
      description: "Become proficient in Word, Excel, PowerPoint, and Access. Essential skills for any professional.",
      color: "text-secondary"
    },
    {
      icon: Youtube,
      title: "YouTube Automation",
      description: "Learn content strategy, video optimization, and channel growth techniques for YouTube success.",
      color: "text-primary"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build modern, responsive websites using HTML, CSS, JavaScript, and popular frameworks.",
      color: "text-secondary"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Create professional videos using industry-standard software. Learn editing, effects, and storytelling.",
      color: "text-primary"
    }
  ];

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Courses</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At QuickWorks IT Center, we offer comprehensive training programs designed by industry experts 
            to give you practical, job-ready skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <course.icon className={`w-12 h-12 mb-4 ${course.color}`} />
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{course.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
