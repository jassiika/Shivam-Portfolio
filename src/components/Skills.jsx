import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building fast, responsive, and cross-browser compatible client interfaces.",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React.js (Learning)", level: 65 },
    ],
  },
  {
    title: "Backend & Database",
    description: "Creating secure server-side logic, custom admin panels, and database systems.",
    skills: [
      { name: "PHP", level: 85 },
      { name: "MySQL", level: 82 },
      { name: "REST APIs", level: 78 },
    ],
  },
  {
    title: "Tools & Concepts",
    description: "Version control, CMS deployment, and modern interface design patterns.",
    skills: [
      { name: "WordPress", level: 88 },
      { name: "Git & GitHub", level: 85 },
      { name: "Responsive Design", level: 92 },
      { name: "UI/UX Concepts", level: 80 },
    ],
  },
];

const tools = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "PHP",
  "MySQL",
  "WordPress",
  "Git",
  "GitHub",
  "REST APIs",
  "Responsive Design",
  "UI/UX",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 34, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="skills-header"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <span>Skills</span>
        <h2>Modern frontend skills for interactive web experiences.</h2>
        <p>
          I focus on the tools and patterns that make interfaces feel sharp:
          responsive layouts, reusable components, smooth motion, and clean
          implementation.
        </p>
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillGroups.map((group) => (
          <motion.article
            className="skill-card"
            variants={cardVariants}
            key={group.title}
          >
            <div className="skill-card-top">
              <span>{group.title.slice(0, 2)}</span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
            </div>

            <div className="skill-list">
              {group.skills.map((skill, index) => (
                <div className="skill-row" key={skill.name}>
                  <div className="skill-meta">
                    <strong>{skill.name}</strong>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <motion.div
                      className="skill-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{
                        duration: 0.9,
                        delay: index * 0.08,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        className="skills-marquee"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <motion.div
          className="skills-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[...tools, ...tools].map((tool, index) => (
            <span key={`${tool}-${index}`}>{tool}</span>
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        .skills-section {
          position: relative;
          padding: 110px 7vw;
          background:
            radial-gradient(circle at 84% 12%, rgba(34, 197, 94, 0.16), transparent 32%),
            linear-gradient(135deg, #ffffff 0%, #f8fafc 42%, #ecfeff 100%);
          color: #0f172a;
          overflow: hidden;
        }

        .skills-header {
          max-width: 760px;
          margin: 0 auto 44px;
          text-align: center;
        }

        .skills-header span {
          display: inline-flex;
          color: #0891b2;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        .skills-header h2 {
          margin: 14px 0 18px;
          font-size: clamp(2.25rem, 5vw, 4.35rem);
          line-height: 1;
          letter-spacing: 0;
        }

        .skills-header p {
          margin: 0 auto;
          max-width: 640px;
          color: #475467;
          font-size: 1rem;
          line-height: 1.75;
        }

        .skills-grid {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .skill-card {
          min-height: 430px;
          padding: 26px;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.84);
          box-shadow: 0 24px 80px rgba(15, 23, 42, 0.1);
          backdrop-filter: blur(18px);
        }

        .skill-card-top {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          margin-bottom: 30px;
        }

        .skill-card-top > span {
          flex: 0 0 auto;
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: #0f172a;
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 900;
          text-transform: uppercase;
        }

        .skill-card h3 {
          margin: 0 0 8px;
          font-size: 1.28rem;
          line-height: 1.2;
        }

        .skill-card p {
          margin: 0;
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .skill-list {
          display: grid;
          gap: 22px;
        }

        .skill-meta {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 9px;
        }

        .skill-meta strong {
          font-size: 0.94rem;
          color: #1e293b;
        }

        .skill-meta span {
          color: #0891b2;
          font-size: 0.88rem;
          font-weight: 800;
        }

        .skill-track {
          height: 9px;
          border-radius: 999px;
          background: #e2e8f0;
          overflow: hidden;
        }

        .skill-fill {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #0891b2, #22c55e);
        }

        .skills-marquee {
          max-width: 1180px;
          margin: 28px auto 0;
          overflow: hidden;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.78);
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
        }

        .skills-track {
          width: max-content;
          display: flex;
          gap: 12px;
          padding: 16px;
        }

        .skills-track span {
          display: inline-flex;
          align-items: center;
          min-height: 40px;
          padding: 0 18px;
          border-radius: 999px;
          background: #0f172a;
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 800;
          white-space: nowrap;
        }

        @media (prefers-reduced-motion: reduce) {
          .skills-track {
            transform: none !important;
          }
        }

        @media (max-width: 980px) {
          .skills-section {
            padding: 86px 24px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skill-card {
            min-height: auto;
          }
        }

        @media (max-width: 620px) {
          .skills-section {
            padding: 76px 18px;
          }

          .skills-header {
            text-align: left;
          }

          .skill-card {
            padding: 22px;
          }

          .skill-card-top {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;
