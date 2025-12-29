"use client";

// FIX 1: Use 'import type' for Variants to satisfy verbatimModuleSyntax
import { motion, type Variants } from "framer-motion";
import React, {
  type ElementType, // FIX 2: Added 'type' keyword
  type ReactNode,   // FIX 3: Added 'type' keyword
  useEffect,
  useState,
} from "react";
import { cn } from "../../lib/utils";

export interface TypingTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  letterSpacing?: string;
  align?: "left" | "center" | "right";
  loop?: boolean;
}

export const TypingText = ({
  children,
  as: Component = "div",
  className = "",
  delay = 0,
  duration = 2,
  fontSize = "text-4xl",
  fontWeight = "font-bold",
  color = "text-white",
  letterSpacing = "tracking-wide",
  align = "left",
  loop = false, // Note: Error TS6133 warned this is unused. Keeping for now.
}: TypingTextProps) => {
  const [textContent, setTextContent] = useState<string>("");

  useEffect(() => {
    const extractText = (node: ReactNode): string => {
      if (typeof node === "string" || typeof node === "number") {
        return node.toString();
      }
      if (Array.isArray(node)) {
        return node.map(extractText).join("");
      }
      // FIX 4: Casting node to 'any' to avoid "node.props is unknown" (TS18046)
      if (
        React.isValidElement(node) &&
        (node.props as any).children !== undefined
      ) {
        return extractText((node.props as any).children);
      }
      return "";
    };

    setTextContent(extractText(children));
  }, [children]);

  const characters = textContent.split("").map((char) =>
    char === " " ? "\u00A0" : char
  );

  const characterVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay + i * (duration / (characters.length || 1)),
        duration: 0.3,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <Component
      className={cn(
        "inline-flex",
        className,
        fontSize,
        fontWeight,
        color,
        letterSpacing,
        align === "center"
          ? "justify-center text-center"
          : align === "right"
          ? "justify-end text-right"
          : "justify-start text-left"
      )}
    >
      <motion.span
        className="inline-block"
        initial="hidden"
        animate="visible"
        aria-label={textContent}
      >
        {/* FIX 5: Removed role="text" as it's not a valid standard ARIA role 
            and was causing "type never" conflicts in some TS versions */}
        {characters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            className="inline-block"
            variants={characterVariants}
            custom={index}
            initial="hidden"
            animate="visible"
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
};