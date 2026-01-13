import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const text = "npm run dev - Alamdaar Technologies";

  useEffect(() => {
    setDisplayedText(""); // Reset text
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < text.length) {
        const char = text[charIndex];
        setDisplayedText((prev) => {
          return prev + char;
        });
        charIndex++;
      } else {
        clearInterval(typingInterval);
        // Wait a bit before completing
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 500);
        }, 1500);
      }
    }, 80); // Typing speed

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 flex items-center justify-center"
        >
          {/* Laptop Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full h-full flex items-center justify-center p-4"
          >
            {/* Laptop Image - Responsive */}
            <div className="relative w-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
              <img
                src="/laptop.png"
                alt="Laptop"
                className="w-full h-auto max-w-full max-h-[90vh] object-contain"
                style={{ maxWidth: 'min(800px, 90vw)', maxHeight: '90vh' }}
              />

              {/* Terminal Text Overlay - Positioned within laptop screen area */}
              {/* Left-aligned text typing from left to right */}
              <div
                className="absolute text-left px-4"
                style={{
                  top: '35%',
                  left: '50%',
                  width: '70%',
                  maxWidth: '520px',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="flex items-center justify-start gap-2 font-mono text-sm sm:text-base md:text-lg lg:text-xl text-white whitespace-nowrap">
                  <span>{displayedText}</span>
                  {displayedText.length < text.length && (
                    <motion.span
                      animate={{ opacity: showCursor ? 1 : 0 }}
                      className="text-cyan-400"
                    >
                      ▊
                    </motion.span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
