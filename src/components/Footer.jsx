const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Shivam-2807" },
  { label: "LinkedIn", href: "https://linkedin.com/in/shivamsaini2807" },
  { label: "Email", href: "mailto:shivamsaini28.07.04@gmail.com" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-brand">
          <a href="#home">Shivam<span>.</span></a>
          <p>
            Frontend developer building responsive, animated, and polished web
            experiences with React.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-socials">
          {socialLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>Designed and built by Shivam Saini</span>
        <span>© 2026 All rights reserved</span>
      </div>

      <style>{`
        .footer {
          position: relative;
          padding: 54px 7vw 28px;
          background: #020617;
          color: #ffffff;
          overflow: hidden;
        }

        .footer::before {
          content: "";
          position: absolute;
          inset: 0 0 auto;
          height: 1px;
          background: linear-gradient(90deg, transparent, #67e8f9, #22c55e, transparent);
        }

        .footer-shell {
          position: relative;
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) auto auto;
          gap: 36px;
          align-items: start;
        }

        .footer-brand a {
          display: inline-flex;
          color: #ffffff;
          font-size: 1.45rem;
          font-weight: 950;
          text-decoration: none;
        }

        .footer-brand a span {
          color: #22c55e;
        }

        .footer-brand p {
          max-width: 430px;
          margin: 14px 0 0;
          color: #94a3b8;
          line-height: 1.7;
        }

        .footer-nav,
        .footer-socials {
          display: grid;
          gap: 12px;
        }

        .footer a {
          color: #cbd5e1;
          font-size: 0.95rem;
          font-weight: 800;
          text-decoration: none;
          transition: color 180ms ease, transform 180ms ease;
        }

        .footer a:hover {
          color: #67e8f9;
          transform: translateX(3px);
        }

        .footer-bottom {
          max-width: 1180px;
          margin: 38px auto 0;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          gap: 16px;
          color: #64748b;
          font-size: 0.9rem;
          font-weight: 700;
        }

        @media (max-width: 820px) {
          .footer {
            padding: 46px 24px 26px;
          }

          .footer-shell {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .footer-nav,
          .footer-socials {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .footer-bottom {
            flex-direction: column;
          }
        }

        @media (max-width: 560px) {
          .footer {
            padding: 42px 18px 24px;
          }

          .footer-nav,
          .footer-socials {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
