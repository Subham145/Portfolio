import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Layers, Users } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "2025 – Present",
      title: "Web Development Intern (Offline)",
      subtitle: "Digital Fly High Solutions",
      description:
        "Currently working as an offline Web Development Intern, contributing to real client projects. Actively involved in developing responsive user interfaces, implementing frontend features, and collaborating with team members to improve application usability and performance.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2024",
      title: "Web Development Intern",
      subtitle: "Oasis Infobyte",
      description:
        "Worked on multiple frontend projects including responsive landing pages and a personal portfolio. Built interactive web applications using HTML, CSS, and JavaScript while strengthening core frontend development skills.",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2024",
      title: "Web Development Intern",
      subtitle: "Next24tech Technology & Services",
      description:
        "Collaborated with a development team to build and optimize user-friendly websites. Implemented responsive layouts, fixed UI bugs, and gained hands-on experience with real-world development workflows.",
      icon: <Users className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2023 – 2024",
      title: "MERN Stack & Project Developer",
      subtitle: "Self-Driven Learning & Projects",
      description:
        "Learned and practiced MERN stack development through hands-on projects. Built portfolio websites, JavaScript-based applications, and practiced Git/GitHub for version control while strengthening problem-solving skills.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="My learning path, internships, and hands-on development experience"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.12}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
