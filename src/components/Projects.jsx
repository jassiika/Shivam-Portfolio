import { motion } from "framer-motion";

const projects = [
  {
    title: "Traveler Record Website",
    type: "React + Node (Full Stack)",
    description: "Built a full-stack travel tracking website with map visualization, route tracking, and trip-based expense management.",
    tags: ["React.js", "Node.js", "Express", "MongoDB"],
    repo: "https://shivam-2807.github.io/",
    linkLabel: "View Project",
  },
  {
    title: "T-shirt Selling Ecommerce",
    type: "PHP + MySQL (Full Stack)",
    description: "Developed a responsive T-shirt e-commerce store with product listings, cart, secure checkout, and a robust admin dashboard.",
    tags: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    repo: "https://tshirt.auragaint.com",
    linkLabel: "Live Demo",
  },
  {
    title: "Auragaint Projects Store",
    type: "WooCommerce Website",
    description: "Built a digital product store with complete inventory management, payment integration, and custom theme layouts.",
    tags: ["WordPress", "WooCommerce", "UI/UX", "SEO"],
    repo: "https://auragaint.com",
    linkLabel: "Live Demo",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <span>Projects</span>
        <h2>Selected work with clean UI and interactive details.</h2>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 42, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.58, delay: index * 0.12, ease: "easeOut" }}
            whileHover={{ y: -8, rotate: index % 2 === 0 ? 0.4 : -0.4 }}
          >
            <div className="project-glow" />
            <div className="project-top">
              <span>{project.type}</span>
              <strong>0{index + 1}</strong>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className="project-button" href={project.repo} target="_blank" rel="noreferrer">
              {project.linkLabel || "View repository"}
            </a>
          </motion.article>
        ))}
      </div>

      <style>{`
        .projects-section {
          position: relative;
          padding: 110px 7vw;
          background:
            radial-gradient(circle at 15% 18%, rgba(14, 165, 233, 0.18), transparent 30%),
            linear-gradient(135deg, #0f172a 0%, #111827 58%, #082f49 100%);
          color: #ffffff;
          overflow: hidden;
        }

        .projects-header {
          max-width: 760px;
          margin: 0 auto 44px;
          text-align: center;
        }

        .projects-header span {
          color: #67e8f9;
          font-size: 0.78rem;
          font-weight: 950;
          text-transform: uppercase;
        }

        .projects-header h2 {
          margin: 14px 0 0;
          font-size: clamp(2.2rem, 5vw, 4.35rem);
          line-height: 1;
          letter-spacing: 0;
        }

        .projects-grid {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          perspective: 1000px;
        }

        .project-card {
          position: relative;
          min-height: 390px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.24);
          backdrop-filter: blur(18px);
          overflow: hidden;
        }

        .project-glow {
          position: absolute;
          inset: -40% -20% auto auto;
          width: 220px;
          height: 220px;
          border-radius: 999px;
          background: rgba(34, 197, 94, 0.18);
          filter: blur(32px);
          pointer-events: none;
        }

        .project-top {
          position: relative;
          display: flex;
          justify-content: space-between;
          gap: 16px;
          color: #a5f3fc;
          font-size: 0.82rem;
          font-weight: 900;
          text-transform: uppercase;
        }

        .project-card h3 {
          position: relative;
          margin: auto 0 14px;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          line-height: 1.04;
        }

        .project-card p {
          position: relative;
          margin: 0;
          color: #cbd5e1;
          line-height: 1.7;
        }

        .project-tags {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }

        .project-tags span {
          padding: 8px 11px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          color: #f8fafc;
          font-size: 0.78rem;
          font-weight: 850;
        }

        .project-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          width: fit-content;
          margin-top: 22px;
          padding: 0 16px;
          border: 1px solid rgba(103, 232, 249, 0.42);
          border-radius: 8px;
          background: rgba(103, 232, 249, 0.12);
          color: #ffffff;
          font-size: 0.88rem;
          font-weight: 900;
          text-decoration: none;
          box-shadow: 0 0 28px rgba(103, 232, 249, 0.12);
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
        }

        .project-button:hover {
          transform: translateY(-2px);
          border-color: rgba(34, 197, 94, 0.7);
          background: rgba(34, 197, 94, 0.16);
        }

        @media (max-width: 980px) {
          .projects-section {
            padding: 86px 24px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-card {
            min-height: 310px;
          }
        }

        @media (max-width: 560px) {
          .projects-section {
            padding: 76px 18px;
          }

          .projects-header {
            text-align: left;
          }

          .project-card {
            min-height: 290px;
            padding: 22px;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;
