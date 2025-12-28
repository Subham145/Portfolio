import { Card, CardHeader, CardTitle, CardContent } from "../lightswind/card";
import ProfessionalProfile from "./SkillCategory";
import { motion } from "framer-motion";

export const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="space-y-10 py-10 px-6"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Education */}
      <div>
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Education
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Degree */}
          <Card>
            <CardHeader>
              <CardTitle>Bachelor of Technology (B.Tech) — Computer Science</CardTitle>
              <p className="text-sm text-muted-foreground">
                Currently Pursuing
              </p>
            </CardHeader>

            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Pursuing a Bachelor of Technology in Computer Science with a
                strong focus on <strong>software development</strong>,
                <strong> data structures</strong>, and
                <strong> web technologies</strong>.
              </p>

              <ul className="list-disc list-inside space-y-1">
                <li>Hands-on experience with MERN stack through projects</li>
                <li>Actively working on real-world applications and internships</li>
                <li>Strong foundation in programming and problem solving</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Skills Section */}
      <ProfessionalProfile />
    </motion.section>
  );
};
