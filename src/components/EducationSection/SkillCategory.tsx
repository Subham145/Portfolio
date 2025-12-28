import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../lightswind/card.tsx";
import { Progress } from "../lightswind/progress";
import { motion } from "framer-motion";
import { CountUp } from "../lightswind/count-up";

export default function ProfessionalProfile() {
  return (
    <motion.section
      id="skills"
      className="space-y-12 p-8 rounded-lg"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold mb-6">🎯 Core Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* Technical Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">💻 Technical Skills</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {[
                { name: "HTML & CSS", level: 90 },
                { name: "JavaScript (ES6+)", level: 85 },
                { name: "React.js", level: 80 },
                { name: "Node.js & Express.js", level: 75 },
                { name: "MongoDB", level: 70 },
                { name: "Tailwind CSS", level: 85 },
                { name: "Git & GitHub", level: 80 },
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between text-sm font-medium mb-1">
                    <span className="text-foreground">{skill.name}</span>
                    <CountUp
                      className="text-md text-skyblue-600 dark:text-skyblue-400 font-bold"
                      value={skill.level}
                      suffix="%"
                      duration={1.2}
                      decimals={0}
                      animationStyle="spring"
                      colorScheme="default"
                    />
                  </div>
                  <Progress value={skill.level} />
                </motion.div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Soft Skills</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-3 min-h-[80px]">
              {[
                "Problem Solving",
                "Team Collaboration",
                "Communication",
                "Time Management",
                "Adaptability",
                "Continuous Learning",
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 12,
                    delay: i * 0.05,
                  }}
                  viewport={{ once: true }}
                >
                  <div 
                    style={{ 
                      backgroundColor: "#0ea5e9",
                      color: "#ffffff",
                      display: "inline-flex",
                      alignItems: "center",
                      borderRadius: "9999px",
                      padding: "4px 12px",
                      fontSize: "12px",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                    }}
                    className="hover:opacity-80 transition-opacity cursor-default"
                  >
                    {skill}
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </motion.section>
  );
}
