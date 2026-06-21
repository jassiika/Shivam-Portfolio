import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home", message: "Welcome to my portfolio", animation: "greeting" },
  { label: "About", href: "#about", message: "Learn more about me", animation: "thinking" },
  { label: "Skills", href: "#skills", message: "These are my skills", animation: "thinking" },
  { label: "Projects", href: "#projects", message: "Check out my projects", animation: "thinking" },
  { label: "Contact", href: "#contact", message: "Let's connect", animation: "bow" },
];

function Navbar({ setMessage, setAnimation }) {
  const [isOpen, setIsOpen] = useState(false);

  const showCharacterState = (message, animation) => {
    setMessage(message);
    setAnimation(animation);
  };

  const resetCharacterState = () => {
    setMessage("");
    setAnimation("idle");
  };

  const handleNavClick = (item) => {
    showCharacterState(item.message, item.animation);
    setIsOpen(false);
    window.setTimeout(resetCharacterState, 900);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <a
        className="navbar-brand"
        href="#home"
        onMouseEnter={() => showCharacterState("Welcome to my portfolio", "greeting")}
        onMouseLeave={resetCharacterState}
      >
        Shivam<span>.</span>
      </a>

      <ul className="navbar-menu desktop-menu">
        {navItems.map((item) => (
          <li key={item.label}>
            <motion.a
              href={item.href}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              onFocus={() => showCharacterState(item.message, item.animation)}
              onBlur={resetCharacterState}
              onMouseEnter={() => showCharacterState(item.message, item.animation)}
              onMouseLeave={resetCharacterState}
            >
              {item.label}
            </motion.a>
          </li>
        ))}
      </ul>

      <button
        className={`menu-toggle ${isOpen ? "is-open" : ""}`}
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => {
        console.log("clicked");
        setIsOpen((current) => !current);
      }}
      >
        <span />
        <span />
        <span />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {navItems.map((item, index) => (
              <motion.a
                href={item.href}
                key={item.label}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.22, delay: index * 0.04 }}
                onClick={() => handleNavClick(item)}
              >
                <span>0{index + 1}</span>
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 16px;
          left: 16px;
          right: 16px;
          width: auto;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center;
          gap: 22px;
          padding: 12px 14px 12px 20px;
          border: 1px solid rgba(103, 232, 249, 0.22);
          border-radius: 8px;
          background:
            linear-gradient(135deg, rgba(15, 23, 42, 0.84), rgba(8, 47, 73, 0.72)),
            rgba(15, 23, 42, 0.72);
          backdrop-filter: blur(18px);
          color: #ffffff;
          z-index: 2000;
          box-shadow:
            0 18px 60px rgba(15, 23, 42, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.12);
        
        }

        .navbar::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 0%,
            rgba(103, 232, 249, 0.16) 34%,
            transparent 58%
          );
          transform: translateX(-120%);
          animation: nav-scan 4.5s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes nav-scan {
          0%,
          48% {
            transform: translateX(-120%);
          }

          78%,
          100% {
            transform: translateX(120%);
          }
        }

        .navbar-brand {
          position: relative;
          z-index: 1;
          color: inherit;
          font-size: 1.18rem;
          font-weight: 950;
          text-decoration: none;
          letter-spacing: 0;
          white-space: nowrap;
        }

        .navbar-brand span {
          color: #22c55e;
        }

        .navbar-menu {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          gap: clamp(16px, 3vw, 34px);
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .navbar-menu a,
        .mobile-menu a {
          position: relative;
          color: rgba(255, 255, 255, 0.88);
          font-size: 0.92rem;
          font-weight: 850;
          text-decoration: none;
          transition: color 180ms ease, transform 180ms ease;
          white-space: nowrap;
        }

        .navbar-menu a:hover,
        .navbar-menu a:focus-visible {
          color: #67e8f9;
          outline: none;
        }

        .navbar-menu a::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -7px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #67e8f9, #22c55e);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 180ms ease;
          box-shadow: 0 0 16px rgba(103, 232, 249, 0.72);
        }

        .navbar-menu a:hover::after,
        .navbar-menu a:focus-visible::after {
          transform: scaleX(1);
        }

        .menu-toggle {
          position: relative;
          z-index: 1;
          display: grid;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 8px;
          background: rgba(103, 232, 249, 0.09);
          cursor: pointer;
          place-items: center;
          padding: 9px;
        }

        .menu-toggle span {
          display: block;
          width: 20px;
          height: 2px;
          margin: 3px auto;
          border-radius: 99px;
          background: #ffffff;
          transition: transform 180ms ease, opacity 180ms ease;
        }

        .menu-toggle.is-open span:nth-child(1) {
          transform: translateY(5px) rotate(45deg);
        }

        .menu-toggle.is-open span:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle.is-open span:nth-child(3) {
          transform: translateY(-5px) rotate(-45deg);
        }

        .mobile-menu {
          position: fixed;
          z-index: 3000;
          top: 80px;
          left: 0;
          right: 0;
          display: grid;
          gap: 8px;
          padding: 12px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          background: rgba(15, 23, 42, 0.94);
          box-shadow: 0 26px 80px rgba(15, 23, 42, 0.35);
        }

        .mobile-menu a {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.06);
        }

        .mobile-menu a span {
          color: #67e8f9;
          font-size: 0.78rem;
        }

        @media (max-width: 760px) {
          .desktop-menu {
            display: none;
          }

          .navbar {
            top: 12px;
            left: 12px;
            right: 12px;
            grid-template-columns: auto auto;
            justify-content: space-between;
          }

          .menu-toggle {
            display: grid;
          }
        }
      `}</style>
    </motion.nav>
  );
}

export default Navbar;
