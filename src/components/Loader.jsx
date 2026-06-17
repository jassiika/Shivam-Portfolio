import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import loadingImg from "../assets/images/lodingpg.png";

const loadingQuotes = [
  "Initializing portfolio components...",
  "Loading interactive 3D elements...",
  "Positioning character models...",
  "Preparing responsive layouts...",
  "Optimizing project details...",
  "Polishing visual experiences..."
];

export default function Loader() {
  const { active, progress } = useProgress();
  const [pageLoaded, setPageLoaded] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Track page load
  useEffect(() => {
    const handleLoad = () => {
      setPageLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Cycle loading quotes every 2.5 seconds
  useEffect(() => {
    if (displayProgress >= 100) return;
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % loadingQuotes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [displayProgress]);

  // Smoothly interpolate progress
  useEffect(() => {
    let animationFrameId;

    const updateProgress = () => {
      setDisplayProgress((prev) => {
        // Target is progress from Drei, or 100 if Three.js isn't active
        let target = active ? progress : 100;

        // Cap at 88% if page resources (fonts, stylesheets, images) aren't fully loaded
        if (!pageLoaded && target > 88) {
          target = 88;
        }

        if (prev >= target) {
          return prev;
        }

        // Increment smoothly: faster when far, slower when close
        const diff = target - prev;
        const step = Math.max(0.4, diff * 0.08);
        const next = Math.min(target, prev + step);
        return next;
      });

      animationFrameId = requestAnimationFrame(updateProgress);
    };

    animationFrameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrameId);
  }, [active, progress, pageLoaded]);

  // Check if fully loaded (progress reached 100) and trigger fade out
  useEffect(() => {
    if (displayProgress >= 100) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Wait 1 second at 100% to let user appreciate completion
      return () => clearTimeout(timer);
    }
  }, [displayProgress]);

  // Fallback timeout: force hide loader after 8.5 seconds in case of assets fetch failure
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 8500);
    return () => clearTimeout(timeout);
  }, []);

  // Prevent scrolling on body when loader is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100vh",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Background Ambient Orbs */}
          <div className="ambient-glow orb-1" />
          <div className="ambient-glow orb-2" />

          <div className="loader-container">
            {/* Logo/Avatar Section */}
            <div className="avatar-wrapper">
              <div className="rotating-ring" />
              <div className="avatar-inner">
                <img
                  src={loadingImg}
                  alt="Shivam Saini"
                  className="avatar-image"
                />
              </div>
            </div>

            {/* Title & Brand */}
            <h2 className="brand-text">
              SHIVAM<span>.</span>
            </h2>

            {/* Percentage Display */}
            <div className="progress-percentage">
              {Math.round(displayProgress)}%
            </div>

            {/* Progress Bar Container */}
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${displayProgress}%` }}
              />
            </div>

            {/* Dynamic Status Text */}
            <div className="status-text-wrapper">
              <AnimatePresence mode="wait">
                <motion.p
                  key={displayProgress >= 100 ? "loaded" : quoteIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 0.75, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="status-quote"
                >
                  {displayProgress >= 100
                    ? "Welcome to my portfolio! Let's explore..."
                    : loadingQuotes[quoteIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <style>{`
            .loader-overlay {
              position: fixed;
              inset: 0;
              z-index: 99999;
              background-color: #020617;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              font-family: Inter, sans-serif;
            }

            /* Premium Glowing Ambient Background */
            .ambient-glow {
              position: absolute;
              border-radius: 50%;
              filter: blur(120px);
              opacity: 0.18;
              pointer-events: none;
            }

            .orb-1 {
              width: 450px;
              height: 450px;
              background: radial-gradient(circle, #0891b2 0%, transparent 70%);
              top: -10%;
              left: -5%;
              animation: float-slow 12s infinite ease-in-out alternate;
            }

            .orb-2 {
              width: 500px;
              height: 500px;
              background: radial-gradient(circle, #22c55e 0%, transparent 70%);
              bottom: -15%;
              right: -5%;
              animation: float-slow 15s infinite ease-in-out alternate-reverse;
            }

            @keyframes float-slow {
              0% { transform: translate(0, 0) scale(1); }
              100% { transform: translate(40px, 30px) scale(1.1); }
            }

            .loader-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              width: 90%;
              max-width: 420px;
              position: relative;
              z-index: 10;
            }

            /* Avatar & Rotating Glow Styling */
            .avatar-wrapper {
              position: relative;
              width: 140px;
              height: 140px;
              margin-bottom: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .rotating-ring {
              position: absolute;
              inset: -8px;
              border-radius: 50%;
              padding: 3px;
              background: conic-gradient(from 0deg, #0891b2, #22c55e, #0891b2);
              -webkit-mask: 
                linear-gradient(#fff 0 0) content-box, 
                linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              animation: rotate-ring 3s linear infinite;
              box-shadow: 0 0 24px rgba(8, 145, 178, 0.4);
            }

            @keyframes rotate-ring {
              to { transform: rotate(360deg); }
            }

            .avatar-inner {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              overflow: hidden;
              border: 3px solid rgba(255, 255, 255, 0.1);
              box-shadow: inset 0 4px 12px rgba(0, 0, 0, 0.3);
              background: #0f172a;
              animation: avatar-pulse 3.5s ease-in-out infinite;
            }

            @keyframes avatar-pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.03); }
            }

            .avatar-image {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            /* Text Styles */
            .brand-text {
              color: #ffffff;
              font-size: 1.5rem;
              font-weight: 900;
              letter-spacing: 2px;
              margin: 0 0 28px 0;
            }

            .brand-text span {
              color: #22c55e;
            }

            .progress-percentage {
              color: #ffffff;
              font-size: 2.2rem;
              font-weight: 900;
              margin-bottom: 14px;
              letter-spacing: -1px;
              font-feature-settings: "tnum";
            }

            /* Progress Bar Styling */
            .progress-bar-container {
              width: 100%;
              height: 4px;
              background: rgba(255, 255, 255, 0.08);
              border-radius: 999px;
              overflow: hidden;
              margin-bottom: 24px;
              box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5);
            }

            .progress-bar-fill {
              height: 100%;
              background: linear-gradient(90deg, #0891b2, #22c55e);
              box-shadow: 0 0 12px rgba(8, 145, 178, 0.8);
              border-radius: 999px;
              transition: width 0.12s linear;
            }

            /* Quote Scroller styling */
            .status-text-wrapper {
              height: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .status-quote {
              color: #94a3b8;
              font-size: 0.9rem;
              font-weight: 500;
              margin: 0;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
