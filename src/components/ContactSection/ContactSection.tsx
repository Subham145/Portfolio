import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-16 text-center space-y-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div className="space-y-3">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          I’m open to internships, full-time opportunities, freelance projects,
          and collaborations. Feel free to reach out.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
        {/* Email */}
        <a
          href="mailto:hanumanjogi@example.com"
          className="flex items-center gap-4 p-5 rounded-xl border 
                     border-cosmic-dark/20 bg-cosmic-light/50 hover:bg-cosmic-accent/10 transition"
        >
          <Mail className="text-cosmic-accent" />
          <div>
            <p className="text-sm text-cosmic-muted">Email</p>
            <p className="font-medium text-foreground">hsjogi9827@gmail.com</p>
          </div>
        </a>

        {/* Phone */}
        <a
          href="tel:+917223039329"
          className="flex items-center gap-4 p-5 rounded-xl border 
                     border-cosmic-dark/20 bg-cosmic-light/50 hover:bg-cosmic-accent/10 transition"
        >
          <Phone className="text-cosmic-accent" />
          <div>
            <p className="text-sm text-cosmic-muted">Phone</p>
            <p className="font-medium text-foreground">+91 72230 39329</p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Subham145"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-xl border 
                     border-cosmic-dark/20 bg-cosmic-light/50 hover:bg-cosmic-accent/10 transition"
        >
          <Github className="text-cosmic-accent" />
          <div>
            <p className="text-sm text-cosmic-muted">GitHub</p>
            <p className="font-medium text-foreground">github.com/Subham145</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/hanuman-s-jogi-1284a1260/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-xl border 
                     border-cosmic-dark/20 bg-cosmic-light/50 hover:bg-cosmic-accent/10 transition"
        >
          <Linkedin className="text-cosmic-accent" />
          <div>
            <p className="text-sm text-cosmic-muted">LinkedIn</p>
            <p className="font-medium text-foreground">linkedin.com/in/hanuman-s-jogi-1284a1260</p>
          </div>
        </a>
      </div>

      {/* Footer Note */}
      <p className="text-xs text-muted-foreground pt-6">
        © {new Date().getFullYear()} Hanuman S. Jogi — All rights reserved.
      </p>
    </motion.section>
  );
};
