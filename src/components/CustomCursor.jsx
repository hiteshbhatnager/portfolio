import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion, useVelocity, useTransform } from "framer-motion";
import { useCursor } from "../context/CursorContext";

export function CustomCursor() {
  const { cursorType } = useCursor();
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  // Motion values for smooth tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const lastAngle = useMotionValue(0);

  // Elastic/Bouncy springs
  const springConfig = { damping: 15, stiffness: 200, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Physics: Velocity-based stretch and rotation
  const velocityX = useVelocity(smoothX);
  const velocityY = useVelocity(smoothY);

  const scaleX = useTransform(() => {
    if (cursorType !== "default") return 1; // Don't stretch when interacting with links/projects
    const vx = velocityX.get();
    const vy = velocityY.get();
    const speed = Math.sqrt(vx * vx + vy * vy);
    const clampedSpeed = Math.min(speed / 2000, 0.35); 
    return 1 + clampedSpeed;
  });

  const scaleY = useTransform(() => {
    if (cursorType !== "default") return 1;
    const vx = velocityX.get();
    const vy = velocityY.get();
    const speed = Math.sqrt(vx * vx + vy * vy);
    const clampedSpeed = Math.min(speed / 2000, 0.35); 
    return 1 - (clampedSpeed * 0.5); // Squeeze slightly
  });

  const rotate = useTransform(() => {
    const vx = velocityX.get();
    const vy = velocityY.get();
    if (Math.abs(vx) < 10 && Math.abs(vy) < 10) return lastAngle.get();
    const angle = Math.atan2(vy, vx) * (180 / Math.PI);
    lastAngle.set(angle);
    return angle;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointerFine(mediaQuery.matches);
    const handleMediaChange = (e) => setIsPointerFine(e.matches);
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isPointerFine || shouldReduceMotion) return;

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isPointerFine, shouldReduceMotion, mouseX, mouseY, isVisible]);

  if (!isPointerFine || shouldReduceMotion) return null;

  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "transparent",
      border: "1px solid rgba(161, 161, 170, 0.4)",
      mixBlendMode: "difference"
    },
    link: {
      width: 52,
      height: 52,
      backgroundColor: "transparent",
      border: "1.5px solid rgba(161, 161, 170, 0.9)",
      mixBlendMode: "difference"
    },
    project: {
      width: 80,
      height: 80,
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      border: "1px solid rgba(255, 255, 255, 1)",
      mixBlendMode: "normal"
    },
    image: {
      width: 64,
      height: 64,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      mixBlendMode: "difference"
    }
  };

  return (
    <>
      {/* Outer Elastic Follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center overflow-hidden"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          scaleX,
          scaleY,
          rotate,
          borderRadius: "50%"
        }}
        variants={variants}
        animate={cursorType}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
      >
        {/* Project View Text */}
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: cursorType === "project" ? 1 : 0, 
            scale: cursorType === "project" ? 1 : 0.5 
          }}
          transition={{ duration: 0.2 }}
          className="text-[10px] font-bold tracking-widest text-zinc-900"
          style={{ mixBlendMode: 'normal' }}
        >
          VIEW
        </motion.span>
      </motion.div>
      
      {/* Central Snappy Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[100]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible && (cursorType === "default" || cursorType === "image") ? 1 : 0,
          backgroundColor: "white",
          mixBlendMode: "difference"
        }}
        transition={{ type: "tween", duration: 0 }}
      />
    </>
  );
}
