import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoTransparent from "@/assets/logo-transparent.png";

interface LoadingScreenProps {
  onComplete: () => void;
  onVideoReady: () => void;
}

const LoadingScreen = ({ onComplete, onVideoReady }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90 && prev < 90.5) {
          onVideoReady();
        }

        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 1000);
          }, 400);
          return 100;
        }
        return prev + 1.5;
      });
    }, 35);
    return () => clearInterval(interval);
  }, [onComplete, onVideoReady]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 1,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ backgroundColor: "hsl(213, 56%, 24%)" }}
        >
          <motion.img
            src={logoTransparent}
            alt="Borcelle"
            className="w-80 sm:w-96 mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
          />

          <div className="relative w-72 sm:w-80">
            <div
              className="h-1 rounded-full overflow-hidden"
              style={{ backgroundColor: "hsl(0, 0%, 100%, 0.15)" }}
            >
              <motion.div
                className="h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{
                  ease: [0.43, 0.13, 0.23, 0.96],
                  duration: 0.3
                }}
                style={{
                  background: "linear-gradient(90deg, hsl(0, 0%, 100%), hsl(0, 0%, 95%))",
                  boxShadow: "0 0 16px hsl(0, 0%, 100%, 0.4)"
                }}
              />
            </div>

            <motion.div
              className="absolute -top-8 left-0 w-full flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: progress > 5 ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <span
                className="text-xs font-medium tracking-wider"
                style={{ color: "hsl(0, 0%, 100%, 0.8)" }}
              >
                {Math.round(progress)}%
              </span>
            </motion.div>
          </div>

          <motion.p
            className="mt-10 text-sm tracking-wide font-light"
            style={{ color: "hsl(0, 0%, 100%, 0.6)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
          >
            Preparando sua experiência
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
