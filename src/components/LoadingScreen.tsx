import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./LoadingScreen.css";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isExit, setIsExit] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const fullText = "npm run dev - Alamdaar Technologies";

  useEffect(() => {
    let exitTimeout: ReturnType<typeof setTimeout>;
    let completeTimeout: ReturnType<typeof setTimeout>;

    // Typing effect
    const typingInterval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < fullText.length) {
          return prev + 1;
        }
        clearInterval(typingInterval);

        // Wait 0.5s after typing finishes, then exit
        exitTimeout = setTimeout(() => {
          setIsExit(true);
          completeTimeout = setTimeout(onComplete, 800);
        }, 500);

        return prev;
      });
    }, 50); // Normal typing speed

    return () => {
      clearInterval(typingInterval);
      clearTimeout(exitTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExit && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="ls-container"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="ls-card"
          >
            <div className="ls-wrap">
              <div className="ls-terminal">
                <hgroup className="ls-head">
                  <p className="ls-title">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"></path>
                    </svg>
                    Terminal
                  </p>
                  <button type="button" tabIndex={-1} className="ls-copy_toggle">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                      <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                    </svg>
                  </button>
                </hgroup>

                <div className="ls-body">
                  <pre className="ls-pre">
                    <code>-&nbsp;</code>
                    <code className="ls-cmd">
                      {fullText.split("").map((char, index) => (
                        <span
                          key={index}
                          style={{
                            opacity: index < visibleCount ? 1 : 0,
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
