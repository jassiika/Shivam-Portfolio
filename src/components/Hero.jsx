import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";

const heroStats = [
  { value: "React / PHP", label: "Core stack" },
  { value: "Responsive", label: "Clean UI/UX" },
  { value: "Full Stack", label: "Future focus" },
];

export default function Hero({ animation }) {
  return (
    <section id="home" className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <motion.span
          className="hero-kicker"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          Frontend Developer | Aspiring Full Stack Developer
        </motion.span>
        <h1>Hi, I&apos;m Shivam Saini. I build websites that feel alive.</h1>
        <p>
          Creating responsive web interfaces, custom e-commerce applications, and interactive user experiences. Evolving from frontend building blocks to full-stack capabilities.
        </p>

        <div className="hero-actions">
          <a href="#projects">View projects</a>
          <a href="#contact">Let&apos;s talk</a>
        </div>

        <div className="hero-stats">
          {heroStats.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.18 }}
            >
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="hero-visual-space" aria-hidden="true">
        <ThreeScene animation={animation} />
        <motion.div
          className="floating-chip chip-one"
          animate={{ y: [0, -14, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          MCA Student
        </motion.div>
        <motion.div
          className="floating-chip chip-two"
          animate={{ y: [0, 16, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        >
          Problem Solver
        </motion.div>
        <motion.div
          className="floating-chip chip-three"
          animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        >
          Future Full Stack
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(360px, 0.95fr);
          align-items: center;
          gap: 28px;
          padding: 130px 7vw 86px;
          background:
            radial-gradient(circle at 78% 22%, rgba(103, 232, 249, 0.24), transparent 30%),
            radial-gradient(circle at 18% 76%, rgba(34, 197, 94, 0.16), transparent 28%),
            linear-gradient(135deg, #f8fafc 0%, #ffffff 46%, #ecfeff 100%);
          color: #0f172a;
          overflow: hidden;
        }

        .hero-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(15, 23, 42, 0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.055) 1px, transparent 1px);
          background-size: 54px 54px;
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.72), transparent 84%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 5;
          max-width: 720px;
        }

        .hero-kicker {
          display: inline-flex;
          color: #0891b2;
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        .hero-content h1 {
          margin: 16px 0 22px;
          font-size: clamp(2.25rem, 5.6vw, 5.1rem);
          line-height: 1;
          letter-spacing: 0;
        }

        .hero-content p {
          max-width: 580px;
          margin: 0;
          color: #475467;
          font-size: clamp(1rem, 1.6vw, 1.14rem);
          line-height: 1.75;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .hero-actions a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 22px;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 900;
          text-decoration: none;
          transition: transform 180ms ease, background 180ms ease, color 180ms ease;
        }

        .hero-actions a:first-child {
          background: #0f172a;
          color: #ffffff;
          box-shadow: 0 18px 45px rgba(15, 23, 42, 0.22);
        }

        .hero-actions a:last-child {
          border: 1px solid rgba(15, 23, 42, 0.14);
          background: rgba(255, 255, 255, 0.76);
          color: #0f172a;
        }

        .hero-actions a:hover {
          transform: translateY(-2px);
        }

        .hero-actions a:first-child:hover {
          background: #0891b2;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          max-width: 560px;
          margin-top: 34px;
        }

        .hero-stats div,
        .floating-chip {
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.74);
          box-shadow: 0 18px 60px rgba(15, 23, 42, 0.1);
          backdrop-filter: blur(16px);
        }

        .hero-stats div {
          min-height: 92px;
          display: grid;
          align-content: center;
          gap: 7px;
          padding: 18px;
        }

        .hero-stats strong {
          font-size: 1.32rem;
          line-height: 1;
        }

        .hero-stats span {
          color: #64748b;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .hero-visual-space {
          position: relative;
          z-index: 4;
          min-height: 620px;
        }

        .floating-chip {
          position: absolute;
          z-index: 1;
          padding: 13px 16px;
          color: #0f172a;
          font-size: 0.9rem;
          font-weight: 900;
        }

        .chip-one {
          top: 28%;
          right: 4%;
        }

        .chip-two {
          top: 58%;
          left: 0;
        }

        .chip-three {
          right: 6%;
          bottom: 12%;
        }

        @media (max-width: 1024px) {
          .hero-section {
            grid-template-columns: minmax(0, 1fr) minmax(300px, 0.78fr);
            padding: 122px 5vw 78px;
          }

          .hero-visual-space {
            min-height: 560px;
          }
        }

        @media (max-width: 820px) {
          .hero-section {
            grid-template-columns: 1fr;
            min-height: 100vh;
            padding: 124px 24px 410px;
          }

          .hero-visual-space {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            min-height: 370px;
            pointer-events: none;
          }

          .chip-one {
            top: 18%;
            right: 9%;
          }

          .chip-two {
            top: 58%;
            left: 7%;
          }

          .chip-three {
            right: 8%;
            bottom: 14%;
          }
        }

        @media (max-width: 560px) {
          .hero-section {
            padding: 116px 18px 350px;
          }

          .hero-content h1 {
            line-height: 1.05;
          }

          .hero-actions a {
            flex: 1 1 150px;
          }

          .hero-stats {
            grid-template-columns: 1fr;
          }

          .hero-stats div {
            min-height: 74px;
          }

          .floating-chip {
            padding: 10px 12px;
            font-size: 0.78rem;
          }
        }
      `}</style>
    </section>
  );
}
