import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <motion.div
      id="hero"
      className="text-foreground flex flex-col md:flex-row 
      items-center justify-center max-w-7xl mx-auto w-full"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      }}
    >
      {/* Left Section */}
      <motion.div className="flex-1 space-y-5 p-6 text-left">
        <motion.h1
          className="text-4xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Hanuman S. Jogi
          <motion.span
            style={{ color: "#0ea5e9" }}
            className="text-sm font-semibold block mt-1"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: "easeOut" },
            }}
          >
            He / Him
          </motion.span>
        </motion.h1>

        <motion.h2
          className="text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Full-Stack Developer (MERN)
        </motion.h2>

        <motion.p
          className="text-sm text-muted-foreground max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Crafting clean, user-friendly, and performance-focused web applications
          with a strong emphasis on UI/UX and modern web technologies. Specializing
          in MERN stack development, responsive design, and building scalable
          solutions through real-world projects and internships. Passionate about
          blending creativity with technology to turn ideas into impactful digital
          experiences.
        </motion.p>

        {/* Skills Badges */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          <div style={{ backgroundColor: "#0ea5e9", color: "#ffffff" }} className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold hover:opacity-80 transition-opacity">Problem Solving</div>
          <div style={{ backgroundColor: "#0ea5e9", color: "#ffffff" }} className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold hover:opacity-80 transition-opacity">Decision Making</div>
          <div style={{ backgroundColor: "#0ea5e9", color: "#ffffff" }} className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold hover:opacity-80 transition-opacity">MERN Stack</div>
        </motion.div>

        {/* Resume Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          <a
            href="/resume/Hanuman-Jogi-Resume.pdf"
            download
            style={{ 
              backgroundColor: "#0ea5e9",
              color: "#ffffff"
            }}
            className="px-6 py-3 rounded-lg font-semibold
                       transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90"
          >
            Download Resume
          </a>

          <a
            href="https://drive.google.com/file/d/1KLQePp5fzgjS3Rt7-GUhSW2pESGOQ5_2/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              borderColor: "#0ea5e9", 
              color: "#0ea5e9"
            }}
            className="px-6 py-3 rounded-lg border-2 font-semibold
                       transition-all duration-300"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0ea5e9";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#0ea5e9";
            }}
          >
            View Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="flex-1 flex justify-center p-6"
        initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl border border-white/10">
          <img
            src="/hanuman.png"
            alt="Hanuman S. Jogi"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
