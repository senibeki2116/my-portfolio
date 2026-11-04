import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Mail,
  Menu,
  X,
  Server,
  Cloud,
  BrainCircuit,
  ExternalLink,
} from "lucide-react";
import "./App.css";
import hotelBookingScreenshot from "./assets/projects/hotelbookingapp-homepage.png";
import ecommerceScreenshot from "./assets/projects/ecommerce-homepage.png";

const github = "https://github.com/senibeki2116";
const email = "senaitendeshaw143@gmail.com";

const projects = [
  {
    number: "01",
    name: "Stayora",
    category: "SOLO PROJECT",
    subtitle: "Hotel Booking & Management System",
    description:
      "A full-stack hotel booking platform where customers can discover hotels, manage reservations, create wishlists, and submit reviews. Includes hotel admin and super admin dashboards.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
    status: "In Progress",
    link: "https://github.com/senibeki2116/HotelBookingApp",
    visual: "stayora",
    screenshot: hotelBookingScreenshot,
  },
  {
    number: "02",
    name: "Ecommerce System",
    category: "FULL-STACK PROJECT",
    subtitle: "Modern Online Shopping Platform",
    description:
      "A modern ecommerce application designed to deliver a smooth online shopping experience, featuring product browsing, responsive interfaces, and a scalable full-stack architecture.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    status: "In Progress",
    link: "https://github.com/senibeki2116/Ecommerce-System",
    visual: "commerce",
    screenshot: ecommerceScreenshot,
  },
];

const skillGroups = [
  {
    title: "FRONTEND",
    items: ["JavaScript", "React", "Tailwind CSS", "React Router", "Axios"],
  },
  {
    title: "BACKEND",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "Zod"],
  },
  {
    title: "DATABASE",
    items: ["MongoDB", "Mongoose", "PostgreSQL"],
  },
  {
    title: "TOOLS & DEPLOYMENT",
    items: ["Git", "GitHub", "Vercel", "Render"],
  },
  {
    title: "ENGINEERING CONCEPTS",
    items: [
      "System Design",
      "API Design",
      "Database Design",
      "Auth & Authorization",
    ],
  },
];

const navItems = [
  ["about", "About"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["contact", "Contact"],
];

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      {number && <span className="section-number">{number}</span>}
      <span>{children}</span>
      <i />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const year = new Date().getFullYear();

  const closeMenu = () => setMenuOpen(false);

  // Cursor-following background glow.
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");

    if (!finePointer.matches) return;

    let frameId;

    const handlePointerMove = (event) => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          "--mouse-x",
          `${event.clientX}px`,
        );
        document.documentElement.style.setProperty(
          "--mouse-y",
          `${event.clientY}px`,
        );
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  // Highlight the navigation item for the visible section.
  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "projects",
      "experience",
      "skills",
      "education",
      "contact",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Reveal elements as they enter the viewport.
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <div className="cursor-glow" aria-hidden="true" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* NAVIGATION */}
      <header className="topbar">
        <a href="#home" className="wordmark" onClick={closeMenu}>
          Senait<span>.</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}

          <a
            className="nav-github"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={14} />
          </a>
        </nav>

        <a href="#contact" className="availability">
          <span className="pulse-dot" />
          AVAILABLE FOR OPPORTUNITIES
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              SOFTWARE ENGINEER & FULL-STACK DEVELOPER
            </div>

            <h1>
              I build software
              <br />
              that solves
              <br />
              <span>real problems.</span>
            </h1>

            <p className="hero-description">
              I'm Senait Endeshw, a Full-Stack Developer focused on building
              practical web applications and backend systems. I care about clean
              architecture and useful software.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                View my work <ArrowUpRight size={17} />
              </a>

              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="button button-quiet"
              >
                <Github size={16} />
                GitHub
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="hero-badges">
              <span>⌖ Ethiopia</span>
              <span>◎ Open to remote</span>
            </div>
          </div>

          <div className="hero-side">
            <div className="architecture-window">
              <div className="architecture-titlebar">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>system-architecture</span>
              </div>

              <div className="architecture-flow">
                <div className="architecture-node client">
                  <b>Client</b>
                  <small>React / Next.js</small>
                </div>

                <span className="flow-dot blue" />

                <div className="architecture-node gateway">
                  <b>API Gateway</b>
                  <small>REST API</small>
                </div>

                <span className="flow-dot green" />

                <div className="architecture-branches">
                  <div className="architecture-node auth">
                    <b>Auth</b>
                    <small>JWT</small>
                  </div>

                  <div className="architecture-node services">
                    <b>Services</b>
                    <small>Node.js / Express</small>
                  </div>
                </div>

                <span className="flow-dot purple" />

                <div className="architecture-node database">
                  <b>Database</b>
                  <small>MongoDB / PostgreSQL</small>
                </div>
              </div>
            </div>

            <div className="hero-side-note">
              <span>FULL-STACK DEVELOPMENT</span>
              <span>
                SCROLL TO EXPLORE <ArrowDown size={13} />
              </span>
            </div>
          </div>

          <div className="hero-index">PORTFOLIO — {year}</div>
        </section>

        {/* INTRO STRIP */}
        <section className="intro-strip">
          <span>DESIGN-MINDED DEVELOPMENT</span>
          <b>✳</b>
          <span>FRONTEND & BACKEND</span>
          <b>✳</b>
          <span>ALWAYS LEARNING</span>
          <b>✳</b>
          <span>BUILT WITH PURPOSE</span>
        </section>

        {/* ABOUT */}
        <section className="about section-wrap section-pad" id="about">
          <SectionLabel number="01">ABOUT</SectionLabel>

          <div className="about-heading reveal">
            <h2>
              I enjoy turning problems
              <br />
              <span>into practical software.</span>
            </h2>
          </div>

          <div className="about-details">
            <div className="about-description reveal">
              <p>
                I'm Senait Endeshw, a Full-Stack Developer based in Ethiopia. My
                focus is on building practical, scalable web applications that
                solve real problems rather than just looking good on paper.
              </p>

              <p>
                I'm especially interested in backend development — API design,
                database modeling, authentication, and building reliable
                systems. At the same time, I enjoy creating responsive frontend
                experiences and connecting both sides into complete
                applications.
              </p>

              <p>
                I'm looking forward to opportunities where I can contribute my
                skills, collaborate with other developers, work on meaningful
                projects, and continue growing as a Full-Stack Developer.
              </p>
            </div>

            <div className="interest-panel reveal">
              <span className="interest-heading">AREAS OF INTEREST</span>

              <div className="interest-item">
                <Server size={16} />
                <span>Backend & System Design</span>
              </div>

              <div className="interest-item">
                <Cloud size={16} />
                <span>Cloud & Deployment</span>
              </div>

              <div className="interest-item">
                <BrainCircuit size={16} />
                <span>AI Integration</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects section-wrap section-pad" id="projects">
          <SectionLabel number="02">SELECTED WORK</SectionLabel>

          <div className="projects-heading reveal">
            <h2>
              Projects I've built to
              <br />
              <span>solve real problems.</span>
            </h2>

            <p>
              Full-stack systems, backend APIs, and frontend applications built
              across solo and team projects.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className={`work-card reveal reveal-delay-${index + 1}`}
                key={project.number}
              >
                <div className={`work-preview ${project.visual}-preview`}>
                  <img
                    className="project-screenshot"
                    src={project.screenshot}
                    alt={`${project.name} project homepage screenshot`}
                    loading="lazy"
                  />
                  <span className="work-status">
                    <i /> {project.status}
                  </span>
                </div>

                <div className="work-info">
                  <div className="work-category">{project.category}</div>
                  <h3>{project.name}</h3>
                  <div className="work-subtitle">{project.subtitle}</div>
                  <p>{project.description}</p>

                  <div className="work-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="work-actions">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="case-study"
                    >
                      View on GitHub <ArrowUpRight size={15} />
                    </a>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-arrow"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <ExternalLink size={17} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          className="experience section-wrap section-pad"
          id="experience"
        >
          <SectionLabel number="03">EXPERIENCE</SectionLabel>

          <h2 className="experience-heading reveal">
            How I've built my experience.
          </h2>

          <div className="experience-timeline reveal">
            <article className="experience-card">
              <div className="experience-card-header">
                <div>
                  <h3>Full-Stack Developer</h3>

                  <div className="experience-company">
                    Independent Development Projects
                    <span>·</span>
                    Ethiopia
                  </div>
                </div>

                <span className="experience-date">ONGOING</span>
              </div>

              <ul className="experience-points">
                <li>
                  Designed and developed Stayora, a full-stack hotel booking and
                  management platform with customer, hotel admin, and super
                  admin features.
                </li>
                <li>
                  Built frontend interfaces using React and developed backend
                  functionality using Node.js and Express.
                </li>
                <li>
                  Worked with MongoDB, REST APIs, authentication, booking
                  management, and database integration.
                </li>
                <li>
                  Developed an Ecommerce System using Next.js, TypeScript,
                  Tailwind CSS, and PostgreSQL.
                </li>
                <li>
                  Focused on responsive UI, reusable components, clean code, and
                  practical problem-solving.
                </li>
              </ul>

              <div className="experience-divider" />

              <div className="experience-skills">
                {[
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Next.js",
                  "TypeScript",
                  "PostgreSQL",
                ].map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* SKILLS */}
        <section
          className="skills-section section-wrap section-pad"
          id="skills"
        >
          <SectionLabel number="04">SKILLS</SectionLabel>

          <div className="skills-heading reveal">
            <h2>What I work with.</h2>
            <p>
              Technologies I use regularly and concepts I apply when designing
              systems.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <div
                className={`skill-card reveal reveal-delay-${(index % 3) + 1}`}
                key={group.title}
              >
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section
          className="education-section section-wrap section-pad"
          id="education"
        >
          <SectionLabel number="05">EDUCATION</SectionLabel>

          <h2 className="education-heading reveal">Academic background.</h2>

          <div className="education-grid">
            <article className="education-card reveal">
              <span className="education-type">DEGREE</span>

              <h3>
                Bachelor of Science in
                <br />
                Software Engineering
              </h3>

              <p className="education-institution">Arba Minch University</p>

              <div className="education-divider" />

              <div className="education-footer">
                <span>2022 – 2026</span>
                <span className="education-dot" />
              </div>
            </article>

            <article className="education-card reveal reveal-delay-1">
              <span className="education-type">CERTIFICATE</span>

              <h3>
                Programming Fundamentals
                <br />
                Nanodegree
              </h3>

              <p className="education-institution">Udacity</p>

              <p className="education-description">
                Via the 5 Million Ethiopian Coders program.
              </p>

              <div className="education-divider" />

              <div className="education-footer">
                <span>September 2024</span>
                <span className="education-dot" />
              </div>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section section-wrap" id="contact">
          <SectionLabel number="06">CONTACT</SectionLabel>

          <div className="contact-card reveal">
            <span className="contact-kicker">HAVE A PROJECT IN MIND?</span>

            <h2>
              Let's build something
              <br />
              <span>useful.</span>
            </h2>

            <p className="contact-description">
              I'm open to software engineering opportunities, collaborations,
              and interesting projects.
            </p>

            <div className="contact-buttons">
              <a href={`mailto:${email}`} className="contact-email-button">
                <Mail size={19} />
                <span>{email}</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-github-button"
              >
                <Github size={19} />
                <span>GitHub</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="portfolio-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#home">
              Senait<span>.</span>
            </a>
            <p>Full-Stack Developer</p>
          </div>

          <div className="footer-right">
            <div className="footer-socials">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a href={`mailto:${email}`} aria-label="Email">
                <Mail size={20} />
              </a>
            </div>

            <div className="footer-copyright">© {year} Senait Endeshw</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
