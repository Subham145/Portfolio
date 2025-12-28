import { motion } from "framer-motion";
import { Github, Code2, GitBranch, Star } from "lucide-react";

export const GitHubStatsSection = () => {
  const stats = [
    { label: "Public Repos", value: "15+", icon: Code2 },
    { label: "GitHub Followers", value: "100+", icon: Star },
    { label: "Contributions", value: "500+", icon: GitBranch },
    { label: "Active Projects", value: "8", icon: Github },
  ];

  const languages = [
    { name: "JavaScript", level: 90, color: "#F7DF1E" },
    { name: "React.js", level: 85, color: "#61DAFB" },
    { name: "Node.js", level: 80, color: "#68A063" },
    { name: "MongoDB", level: 75, color: "#13AA52" },
    { name: "TypeScript", level: 70, color: "#3178C6" },
    { name: "Tailwind CSS", level: 85, color: "#06B6D4" },
  ];

  return (
    <motion.section
      id="github"
      className="max-w-7xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        GitHub Activity
      </h2>

      {/* GitHub Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="p-6 rounded-lg bg-gradient-to-br from-skyblue-50 to-white dark:from-skyblue-900/20 dark:to-slate-800/50 border border-skyblue-200 dark:border-skyblue-900/20 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-foreground">{stat.label}</h3>
                <Icon size={24} className="text-skyblue-500" />
              </div>
              <p className="text-2xl font-bold text-skyblue-600 dark:text-skyblue-400">{stat.value}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Top Languages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-lg bg-white dark:bg-slate-800/50 border border-skyblue-200 dark:border-skyblue-900/20 shadow-sm mb-12"
      >
        <h3 className="text-xl font-semibold text-foreground mb-8">💻 Top Languages</h3>
        <div className="space-y-6">
          {languages.map((lang, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-foreground">{lang.name}</span>
                <span className="text-sm font-semibold text-skyblue-600 dark:text-skyblue-400">{lang.level}%</span>
              </div>
              <div className="w-full h-2 bg-skyblue-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 + 0.2, duration: 0.8 }}
                  style={{ backgroundColor: lang.color }}
                  className="h-full rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* GitHub Contribution Calendar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-lg bg-white dark:bg-slate-800/50 border border-skyblue-200 dark:border-skyblue-900/20 shadow-sm"
      >
        <h3 className="text-xl font-semibold text-foreground mb-6">🔥 Contribution Graph</h3>
        <div className="flex justify-center overflow-x-auto">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=Subham145&theme=tokyo-night&hide_border=true"
            alt="GitHub Contribution Graph"
            className="w-full max-w-5xl rounded"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          {/* Fallback message if image fails */}
          <div className="w-full flex items-center justify-center py-12 text-foreground">
            <p className="text-center">Visit <a href="https://github.com/Subham145" target="_blank" rel="noopener noreferrer" className="text-skyblue-600 dark:text-skyblue-400 hover:underline">GitHub Profile</a> to see contribution history</p>
          </div>
        </div>
      </motion.div>

      {/* GitHub Profile Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <a
          href="https://github.com/Subham145"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-skyblue-500 text-white font-semibold hover:bg-skyblue-600 transition-colors"
        >
          <Github size={20} />
          Visit GitHub Profile
        </a>
      </motion.div>
    </motion.section>
  );
};
