import { Separator } from "../lightswind/separator";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.div
      id="about"
      className="text-foreground max-w-7xl mx-auto w-full px-6 py-12 space-y-4"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold">About Me</h2>

      <p className="text-muted-foreground text-sm max-w-3xl">
        I am a passionate and detail-oriented MERN Stack Developer with hands-on
        experience in building responsive and user-friendly web applications.
        I have worked on multiple real-world projects and internships, gaining
        strong practical knowledge of HTML, CSS, JavaScript, React, Node.js,
        Express, and MongoDB.
        <br /><br />
        I am currently working as an <strong>offline Full Stack Development Intern at
        Digital Fly High Solutions</strong>, where I am actively involved in
        developing and maintaining web applications, implementing responsive
        UI components, and collaborating with team members on real client
        projects.
        <br /><br />
        Previously, I completed internships at Oasis Infobyte and Next24tech
        Technology & Services, where I strengthened my frontend fundamentals,
        improved problem-solving skills, and learned real-world development
        workflows.
        <br /><br />
        I enjoy turning ideas into clean, functional interfaces and continuously
        improving my skills by learning new technologies. I am actively seeking
        opportunities where I can grow as a developer and contribute to
        building impactful digital products.
      </p>

      <Separator />
    </motion.div>
  );
};
