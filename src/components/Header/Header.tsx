import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants, MotionProps } from "framer-motion";
import { Menu, X, Sun, Moon, BookCheckIcon } from "lucide-react";
import { useLenis } from "lenis/react";
import { BorderBeam } from "../lightswind/border-beam";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Career", href: "#career" },
  { name: "Projects", href: "#projects" },
];

export default function Header() {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  // Theme toggle
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll listener for hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false); // Scrolling down
      } else {
        setShowHeader(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollTo = (id: string) => {
    if (lenis) {
      lenis.scrollTo(id);
    }
    setIsMobileMenuOpen(false); // Close mobile menu on click
  };

  // ✅ Typed variants
  const menuVariants: Variants = {
    open: {
      clipPath: "circle(1200px at 90% 5%)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: "circle(20px at 90% 5%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const listVariants: Variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -100, top: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0, transition: { duration: 0.4 } }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
        >
          <div
            className="border border-skyblue-200 dark:border-skyblue-900/30 backdrop-blur-2xl
            w-full xl:max-w-6xl rounded-2xl
            flex items-center justify-between px-8 py-4
            bg-white/80 dark:bg-slate-900/60
            shadow-sm dark:shadow-lg
            transition-all duration-300"
          >
            <BorderBeam />

            {/* Logo / Brand */}
            <a
              onClick={() => handleScrollTo("#hero")}
              className="cursor-pointer font-bold text-lg text-skyblue-600 dark:text-skyblue-400 hover:text-skyblue-700 dark:hover:text-skyblue-300 transition-colors"
            >
              <BookCheckIcon size={28} />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 justify-center">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    className="relative group text-sm font-medium text-slate-700 
                    dark:text-slate-300"
                  >
                    <motion.a
                      onClick={() => handleScrollTo(item.href)}
                      className="cursor-pointer relative px-2 py-1 block"
                      whileHover={{ color: "#0ea5e9" }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-skyblue-400 to-skyblue-600 rounded-full"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Theme Toggle Button */}
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-lg text-sm font-semibold
              bg-skyblue-50 dark:bg-skyblue-900/20 
              border border-skyblue-200 dark:border-skyblue-700/30
              hover:bg-skyblue-100 dark:hover:bg-skyblue-900/40 
              transition-all"
              whileHover={{ 
                scale: 1.15,
                boxShadow: "0 0 20px rgba(14, 165, 233, 0.3)"
              }}
              whileTap={{ scale: 0.85 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="moon"
                    initial={{ y: -20, opacity: 0, rotate: -180 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon size={20} className="text-skyblue-600 dark:text-skyblue-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ y: 20, opacity: 0, rotate: 180 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: -180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun size={20} className="text-skyblue-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button - Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-slate-700 dark:text-skyblue-400"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Sidebar */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                {...({
                  initial: "closed",
                  animate: "open",
                  exit: "closed",
                  variants: menuVariants,
                } as MotionProps)}
                className="fixed inset-0 z-40 bg-white/95 dark:bg-slate-950/95 md:hidden flex flex-col items-center justify-center"
              >
                {/* Close Button inside the sidebar */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-8 right-8 text-slate-700 dark:text-skyblue-400"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <X size={32} />
                </motion.button>

                <motion.ul
                  {...({
                    variants: listVariants,
                  } as MotionProps)}
                  className="flex flex-col items-center justify-center h-full space-y-8"
                >
                  {navItems.map((item) => (
                    <motion.li
                      key={item.name}
                      {...({ variants: itemVariants } as MotionProps)}
                    >
                      <a
                        onClick={() => handleScrollTo(item.href)}
                        className="text-4xl font-bold text-gray-800 dark:text-white cursor-pointer"
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                  
                  {/* Mobile Theme Toggle */}
                  <motion.li
                    {...({ variants: itemVariants } as MotionProps)}
                  >
                    <motion.button
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="p-3 rounded-lg bg-skyblue-50 dark:bg-skyblue-900/20 
                      border border-skyblue-200 dark:border-skyblue-700/30
                      hover:bg-skyblue-100 dark:hover:bg-skyblue-900/40 
                      transition-all"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85 }}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {theme === "dark" ? (
                          <motion.div
                            key="moon-mobile"
                            initial={{ y: -20, opacity: 0, rotate: -180 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: 20, opacity: 0, rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Moon size={24} className="text-skyblue-600 dark:text-skyblue-300" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="sun-mobile"
                            initial={{ y: 20, opacity: 0, rotate: 180 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: -20, opacity: 0, rotate: -180 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Sun size={24} className="text-skyblue-500" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
