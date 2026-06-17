import { useState } from "react";

const strengths = [
  "Responsive Design",
  "React.js & PHP Stack",
  "E-Commerce Solutions",
  "IT & Tech Operations",
];

const metrics = [
  { value: "2+", label: "Years experience" },
  { value: "3", label: "Major projects" },
  { value: "2+", label: "Production sites" },
];

const highlights = [
  {
    title: "Frontend Development",
    text: "Building polished React experiences with reusable components, smooth interactions, and layouts that work across screen sizes.",
  },
  {
    title: "Creative Problem Solving",
    text: "Turning rough ideas into practical interfaces by balancing visual detail, user flow, and maintainable code.",
  },
  {
    title: "Continuous Learning",
    text: "Improving through modern tooling, production-ready patterns, and hands-on projects that sharpen real-world development skills.",
  },
];

const experienceData = [
  {
    role: "Web Developer & Technical Operations Executive",
    company: "Teach To India Publication",
    location: "Saharanpur, Uttar Pradesh, India",
    type: "Full-Time - On-Site",
    period: "Aug 2025 – Present",
    details: [
      "Earned promotion from an 11-month internship to a full-time role by delivering strong performance and demonstrating fast learning while managing IT support, digital content, website coordination, and pre-press operations.",
      "Improved website UI, managed content updates, and enhanced overall user experience across web platforms.",
      "Delivered technical support and maintained smooth functionality of web systems by resolving issues and ensuring system reliability."
    ]
  },
  {
    role: "Web Development & Digital Marketing Intern",
    company: "Panwar Avocado Tech Plc",
    location: "Saharanpur, Uttar Pradesh, India (Ethiopia – Based Company)",
    type: "Full-Time - On-Site",
    period: "Sep 2024 – Aug 2025",
    details: [
      "Built and maintained 2 WordPress websites by integrating plugins and implementing responsive design improvements to enhance performance and user experience.",
      "Created 10+ marketing graphics, supported SEO initiatives, managed 10,000+ Excel records, leveraged AI tools (ChatGPT, Gemini) for content creation, and coordinated a 6-member team to streamline operations."
    ]
  }
];

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Shobhit University, Gangoh",
    period: "2025 - 2027",
    status: "Ongoing"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Shobhit University, Gangoh",
    period: "2022 - 2025",
    status: "Completed"
  },
  {
    degree: "Senior Secondary Education - CBSE (Class 12)",
    school: "KLG Public School, Saharanpur",
    period: "2022",
    status: "Completed"
  },
  {
    degree: "Secondary Education - CBSE (Class 10)",
    school: "KLG Public School, Saharanpur",
    period: "2020",
    status: "Completed"
  }
];

const certificationData = [
  {
    title: "Web Application Penetration Testing",
    provider: "DROP Certified Security Course (DCSC)",
    date: "MAY-2025",
    description: "Hands-on security testing focusing on common web application vulnerabilities (OWASP Top 10) and penetration testing methodologies."
  }
];

export default function About() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="about" className="about-section">
      <div className="about-shell">
        <div className="about-copy">
          <span className="about-kicker">About me</span>
          <h2>Frontend Developer with a drive for Full Stack capabilities.</h2>
          <p>
            I am Shivam Saini, a frontend developer with hands-on experience in building responsive web applications using HTML, CSS, JavaScript, and PHP. I specialize in designing user-focused UI/UX and crafting e-commerce solutions.
          </p>
          <p>
            Currently, I am learning React.js to expand my frontend toolkit and pursuing my MCA to grow as a skilled Full Stack Developer. I thrive at resolving technical challenges and making interfaces smooth and intuitive.
          </p>

          <div className="about-tags" aria-label="Core strengths">
            {strengths.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="about-panel">
          <div className="about-card profile-card">
            <div>
              <span className="card-label">Current focus</span>
              <h3>React.js, Full Stack development, & E-Commerce</h3>
            </div>
            <p>
              I am expanding my skills in modern Javascript frameworks and backend systems to build complex, scalable web apps.
            </p>
          </div>

          <div className="about-metrics">
            {metrics.map((metric) => (
              <div className="about-card metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-highlights">
        {highlights.map((item) => (
          <article className="about-card highlight-card" key={item.title}>
            <span />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="about-tabs-container">
        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
          <button
            className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
          <button
            className={`tab-btn ${activeTab === "certifications" ? "active" : ""}`}
            onClick={() => setActiveTab("certifications")}
          >
            Certifications
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "experience" && (
            <div className="timeline">
              {experienceData.map((exp, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-header">
                    <div>
                      <h3>{exp.role}</h3>
                      <span className="company">{exp.company}</span>
                      <span className="location-badge">{exp.location} • {exp.type}</span>
                    </div>
                    <span className="period">{exp.period}</span>
                  </div>
                  <ul className="details-list">
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="education-grid">
              {educationData.map((edu, idx) => (
                <div className="edu-card" key={idx}>
                  <div className="edu-badge">{edu.status}</div>
                  <h3>{edu.degree}</h3>
                  <p className="school">{edu.school}</p>
                  <span className="period">{edu.period}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "certifications" && (
            <div className="certs-grid">
              {certificationData.map((cert, idx) => (
                <div className="cert-card" key={idx}>
                  <div className="cert-header">
                    <h3>{cert.title}</h3>
                    <span className="period">{cert.date}</span>
                  </div>
                  <p className="provider">{cert.provider}</p>
                  <p className="desc">{cert.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
          padding: 110px 7vw;
          background:
            radial-gradient(circle at 10% 10%, rgba(14, 165, 233, 0.12), transparent 30%),
            linear-gradient(135deg, #f8fafc 0%, #eef2ff 48%, #ecfeff 100%);
          color: #101828;
          overflow: hidden;
        }

        .about-shell {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
          gap: 42px;
          align-items: center;
        }

        .about-copy {
          max-width: 690px;
        }

        .about-kicker,
        .card-label {
          display: inline-flex;
          width: fit-content;
          color: #0369a1;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        .about-copy h2 {
          margin: 14px 0 22px;
          font-size: clamp(2.35rem, 5vw, 4.7rem);
          line-height: 0.98;
          letter-spacing: 0;
          color: #0f172a;
        }

        .about-copy p,
        .about-card p {
          margin: 0;
          color: #475467;
          font-size: 1rem;
          line-height: 1.75;
        }

        .about-copy p + p {
          margin-top: 16px;
        }

        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }

        .about-tags span {
          border: 1px solid rgba(15, 23, 42, 0.11);
          background: rgba(255, 255, 255, 0.72);
          color: #1f2937;
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
        }

        .about-panel {
          display: grid;
          gap: 16px;
        }

        .about-card {
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: rgba(255, 255, 255, 0.82);
          border-radius: 8px;
          box-shadow: 0 24px 80px rgba(15, 23, 42, 0.11);
          backdrop-filter: blur(18px);
        }

        .profile-card {
          min-height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 30px;
        }

        .profile-card h3 {
          margin: 12px 0 0;
          color: #0f172a;
          font-size: clamp(1.55rem, 3vw, 2.35rem);
          line-height: 1.08;
          letter-spacing: 0;
        }

        .about-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .metric-card {
          min-height: 126px;
          padding: 22px 18px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 8px;
        }

        .metric-card strong {
          color: #0f172a;
          font-size: clamp(1.7rem, 4vw, 2.45rem);
          line-height: 1;
        }

        .metric-card span {
          color: #64748b;
          font-size: 0.86rem;
          font-weight: 700;
          line-height: 1.35;
        }

        .about-highlights {
          max-width: 1180px;
          margin: 34px auto 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .highlight-card {
          padding: 24px;
        }

        .highlight-card > span {
          display: block;
          width: 38px;
          height: 4px;
          margin-bottom: 22px;
          border-radius: 999px;
          background: linear-gradient(90deg, #0891b2, #22c55e);
        }

        .highlight-card h3 {
          margin: 0 0 12px;
          color: #0f172a;
          font-size: 1.1rem;
          line-height: 1.25;
        }

        .about-tabs-container {
          max-width: 1180px;
          margin: 64px auto 0;
          position: relative;
          z-index: 1;
        }

        .tab-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-bottom: 32px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.1);
          padding-bottom: 16px;
        }

        .tab-btn {
          border: 1px solid transparent;
          background: transparent;
          color: #64748b;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 180ms ease;
        }

        .tab-btn:hover {
          color: #0f172a;
          background: rgba(15, 23, 42, 0.04);
        }

        .tab-btn.active {
          color: #ffffff;
          background: #0f172a;
          border-color: #0f172a;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.15);
        }

        .tab-content {
          min-height: 250px;
        }

        /* Timeline / Experience Styles */
        .timeline {
          display: grid;
          gap: 24px;
          position: relative;
        }

        .timeline-item {
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: rgba(255, 255, 255, 0.82);
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 16px 48px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(18px);
          transition: transform 180ms ease;
        }

        .timeline-item:hover {
          transform: translateY(-2px);
          border-color: rgba(8, 145, 178, 0.3);
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 16px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
          padding-bottom: 14px;
        }

        .timeline-header h3 {
          margin: 0 0 6px;
          font-size: 1.25rem;
          color: #0f172a;
          line-height: 1.2;
        }

        .timeline-header .company {
          display: block;
          color: #0891b2;
          font-weight: 800;
          font-size: 0.95rem;
          margin-bottom: 4px;
        }

        .timeline-header .location-badge {
          display: inline-block;
          font-size: 0.82rem;
          color: #64748b;
          font-weight: 700;
        }

        .timeline-header .period {
          font-size: 0.9rem;
          font-weight: 900;
          color: #0f172a;
          background: rgba(8, 145, 178, 0.1);
          padding: 6px 12px;
          border-radius: 6px;
          white-space: nowrap;
        }

        .details-list {
          margin: 0;
          padding-left: 20px;
          display: grid;
          gap: 10px;
          color: #475467;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .details-list li {
          margin-bottom: 4px;
        }

        /* Education Styles */
        .education-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .edu-card {
          position: relative;
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: rgba(255, 255, 255, 0.82);
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 16px 48px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(18px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 160px;
          transition: transform 180ms ease;
        }

        .edu-card:hover {
          transform: translateY(-2px);
          border-color: rgba(8, 145, 178, 0.3);
        }

        .edu-badge {
          position: absolute;
          top: 24px;
          right: 24px;
          font-size: 0.76rem;
          font-weight: 900;
          text-transform: uppercase;
          background: rgba(34, 197, 94, 0.12);
          color: #22c55e;
          padding: 4px 8px;
          border-radius: 4px;
        }

        .edu-card h3 {
          margin: 0 0 8px;
          font-size: 1.15rem;
          color: #0f172a;
          line-height: 1.3;
          max-width: 80%;
        }

        .edu-card .school {
          margin: 0 0 12px;
          color: #475467;
          font-size: 0.95rem;
          font-weight: 700;
        }

        .edu-card .period {
          font-size: 0.86rem;
          font-weight: 800;
          color: #0891b2;
        }

        /* Certifications Styles */
        .certs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .cert-card {
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: rgba(255, 255, 255, 0.82);
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 16px 48px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(18px);
          transition: transform 180ms ease;
        }

        .cert-card:hover {
          transform: translateY(-2px);
          border-color: rgba(8, 145, 178, 0.3);
        }

        .cert-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .cert-header h3 {
          margin: 0;
          font-size: 1.25rem;
          color: #0f172a;
        }

        .cert-header .period {
          font-size: 0.86rem;
          font-weight: 900;
          background: #0f172a;
          color: #ffffff;
          padding: 4px 10px;
          border-radius: 4px;
        }

        .cert-card .provider {
          margin: 0 0 12px;
          color: #0891b2;
          font-weight: 800;
          font-size: 0.95rem;
        }

        .cert-card .desc {
          margin: 0;
          color: #475467;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .about-section {
            padding: 86px 24px;
          }

          .about-shell,
          .about-highlights {
            grid-template-columns: 1fr;
          }

          .about-copy h2 {
            line-height: 1.05;
          }

          .timeline-header {
            flex-direction: column;
            gap: 12px;
          }
          
          .timeline-header .period {
            align-self: flex-start;
          }
          
          .education-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 620px) {
          .about-section {
            padding: 76px 18px;
          }

          .profile-card,
          .highlight-card {
            padding: 22px;
          }

          .about-metrics {
            grid-template-columns: 1fr;
          }

          .metric-card {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
