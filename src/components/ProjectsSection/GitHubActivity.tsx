import { motion } from "framer-motion";
import { Github } from "lucide-react";

export const GitHubActivity = () => {
  return (
    <motion.section
      id="github"
      className="max-w-6xl mx-auto px-6 py-20 space-y-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">GitHub Activity</h2>
        <p className="text-muted-foreground">Check out my GitHub contributions and projects</p>
      </div>

      {/* Contribution Calendar/Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-x-auto flex justify-center p-6 rounded-lg bg-white dark:bg-slate-800/50 border border-skyblue-200 dark:border-skyblue-900/20 shadow-sm"
      >
        <img
          src="https://ghchart.rshah.org/409ba5/Subham145"
          alt="GitHub Contribution Calendar"
          className="rounded-lg"
          loading="lazy"
        />
      </motion.div>

      {/* Contribution Graph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="overflow-x-auto flex justify-center p-6 rounded-lg bg-white dark:bg-slate-800/50 border border-skyblue-200 dark:border-skyblue-900/20 shadow-sm"
      >
        <img
          src="https://github-readme-activity-graph.vercel.app/graph?username=Subham145&theme=tokyo-night&hide_border=true"
          alt="GitHub Contribution Graph"
          className="rounded-lg w-full"
          loading="lazy"
        />
      </motion.div>

      {/* GitHub Profile Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <a
          href="https://github.com/Subham145"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-skyblue-500 text-white font-semibold hover:bg-skyblue-600 transition-all hover:shadow-lg"
        >
          <Github size={20} />
          Visit GitHub Profile
        </a>
      </motion.div>
    </motion.section>
  );
};
