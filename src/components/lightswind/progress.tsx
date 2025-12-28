"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current progress value */
  value?: number;
  /** Maximum progress value */
  max?: number;
  /** Optional class name for the indicator element */
  indicatorClassName?: string;
  /** Whether to show indeterminate loading animation */
  indeterminate?: boolean;
  /** Color variant for the progress bar */
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  /** Size variant of the progress bar */
  size?: "sm" | "md" | "lg";
  /** Whether to show the progress value as text */
  showValue?: boolean;
  /** Animation speed for the progress transitions */
  animationSpeed?: "slow" | "normal" | "fast";
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ 
    className, 
    value = 0, 
    max = 100, 
    indicatorClassName,
    indeterminate = false,
    color = "default",
    size = "md",
    showValue = false,
    animationSpeed = "normal",
    ...props 
  }, ref) => {
    const percentage = value ? (value / max) * 100 : 0;
    const [prevPercentage, setPrevPercentage] = React.useState(percentage);
    const [isAnimating, setIsAnimating] = React.useState(false);
    
    React.useEffect(() => {
      // Only animate when the value actually changes
      if (percentage !== prevPercentage) {
        setIsAnimating(true);
        setPrevPercentage(percentage);
        
        // Reset the animation state after the transition is complete
        const timeout = setTimeout(() => {
          setIsAnimating(false);
        }, 1000); // This should match the CSS transition duration
        
        return () => clearTimeout(timeout);
      }
    }, [percentage, prevPercentage]);
    
    // Color variants
    const colorVariants = {
      default: "bg-skyblue-500",
      primary: "bg-skyblue-500",
      secondary: "bg-skyblue-400",
      success: "bg-green-500",
      warning: "bg-yellow-500",
      danger: "bg-red-500"
    };
    
    // Size variants
    const sizeVariants = {
      sm: "h-2",
      md: "h-4",
      lg: "h-6"
    };
    
    // Animation speed variants
    const animationVariants = {
      slow: "duration-1000",
      normal: "duration-700",
      fast: "duration-300"
    };
    
    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuetext={indeterminate ? undefined : `${Math.round(percentage)}%`}
        className={cn(
          "relative w-full overflow-hidden rounded-full bg-skyblue-100 dark:bg-slate-700 border border-skyblue-200 dark:border-skyblue-900/30",
          sizeVariants[size],
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "h-full flex-1",
            indeterminate ? "animate-progress-indeterminate origin-left" : "",
            isAnimating ? "transition-all ease-out" : "",
            animationVariants[animationSpeed],
            indicatorClassName
          )}
          style={indeterminate ? { backgroundColor: "#0ea5e9" } : { width: `${percentage}%`, backgroundColor: "#0ea5e9" }}
        />
        {showValue && (
          <div className={cn(
            "absolute inset-0 flex items-center justify-center text-xs font-semibold",
            isAnimating ? "transition-opacity duration-300" : ""
          )}>
            {Math.round(percentage)}%
          </div>
        )}
      </div>
    );
  }
);
Progress.displayName = "Progress";

export { Progress };
