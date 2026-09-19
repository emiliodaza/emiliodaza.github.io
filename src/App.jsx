import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Download, Menu, X } from 'lucide-react'

const resumeUrl = '/cv.pdf'

// Copy follows the September 2026 résumé supplied by Emilio.
const experience = [
  {
    company: 'Izipay',
    role: 'Machine Learning Engineer Intern',
    period: 'Jun. 2026 – Aug. 2026',
    location: 'Lima, Peru',
    details: [
      'Developed and evaluated an RL-based intelligent payment-routing prototype in a synthetic simulator for Izipay, a leading Peruvian processor serving 1.2M+ merchants; now adapting the architecture by querying transaction-node data from an AWS-hosted ClickHouse instance using SQL.',
      'Modeled processor selection under outages, latency variation, technical failures, and payment rejection as a Markov decision process; developed a custom Gymnasium environment and PyTorch Double DQN agent over a NetworkX topology with action masking, experience replay, and target networks.',
      'Evaluated the learned policy across 1,000 seeded episodes generated from synthetic routing probabilities: 92.3% simulated approval and 178.4 ms mean latency; automated JSON/Matplotlib reporting and presented results to senior strategy and business-solutions leaders.',
    ],
  },
  {
    company: 'Algoverse AI Research Program',
    role: 'Machine Learning Researcher',
    period: 'Jun. 2026 – Sep. 2026',
    location: 'Remote',
    details: [
      'Developing a formal research project on whether finite prefixes of ordinary RL training can distinguish reward misspecification from task-relevant observation insufficiency, and what minimum diagnostic interventions make the failure modes identifiable.',
      'Collaborating with a three-person ML research team under the mentorship of a Google Cloud AI & Infrastructure Software Engineer; selected for a 12-week publication-oriented program with a competitive 30% tuition scholarship.',
    ],
  },
  {
    company: 'Dartmouth Center for Technology and Behavioral Health',
    role: 'Software Engineer, Cross-Platform App',
    period: 'Nov. 2025 – Mar. 2026',
    location: 'Hanover, NH',
    details: [
      'Implemented and validated Flutter desktop functionality on Arch Linux for Evergreen, a research-backed platform supporting personalized student well-being.',
      'Designed a dual-mode interface separating internal diagnostic and developer workflows from the participant-facing user experience.',
    ],
  },
  {
    company: 'Dartmouth College, E.E. Just Research Program',
    role: 'Funded Machine Learning Research Intern',
    period: 'Jun. 2024 – Aug. 2024',
    location: 'Hanover, NH',
    details: [
      'Selected as 1 of 8 first-year students for a funded summer program; built PyTorch feedforward and CNN pipelines for heart-disease prediction and four-class brain-tumor MRI classification, then presented the research at the largest math conference in the world: the Joint Mathematics Meeting in 2025.',
    ],
  },
]

const projects = [
  {
    number: '01',
    eyebrow: 'Product engineering / AI',
    title: 'Thyme',
    subtitle: 'Co-Founder & Founding Software Engineer',
    period: 'Apr. 2026 – Present',
    description: 'A cross-platform nutrition product with a backend and multimodal AI capabilities.',
    details: [
      'Built a TypeScript React Native/Expo application for iOS and Android with design and public-health teammates; distributed an iOS beta through TestFlight and an Android APK for internal testing.',
      'Designed a Supabase/PostgreSQL backend with authentication, row-level security, Edge Functions, community and menu data, and remote version controls; implemented persistent profiles, settings, and nutrition logs.',
      'Integrated OpenAI APIs for multimodal meal and menu analysis, bilingual speech transcription and text-to-speech, and generated cooking guidance; developed location-aware dining discovery using Google Places and campus-menu data sources.',
    ],
    stack: ['TypeScript', 'React Native', 'Expo', 'Supabase', 'PostgreSQL', 'OpenAI APIs'],
    visual: 'thyme',
  },
  {
    number: '02',
    eyebrow: 'Robotics / perception',
    title: 'Robotics Mapping, Planning, and Perception Systems',
    period: 'Spring 2026',
    description: 'From LiDAR mapping and search to camera-based perception in simulated robot environments.',
    details: [
      'Implemented ROS 2 systems in Gazebo and Stage for odometry, coordinate transforms, LiDAR processing, and occupancy-grid mapping; a YOLO11n and FastSAM perception pipeline producing target bounding boxes and segmentation masks from camera video streams; BFS, DFS, and A* planners plus a LiDAR mapper using Bresenham raycasting, log-odds updates, and dynamically expanding occupancy grids.',
    ],
    stack: ['ROS 2', 'Gazebo', 'YOLO11n', 'FastSAM', 'LiDAR', 'Python'],
    visual: 'robotics',
  },
]

const skillGroups = [
  { label: 'Languages', value: 'Python, TypeScript, JavaScript, SQL, Java, C, C++, Dart, R' },
  { label: 'Frameworks', value: 'React Native, Expo, Flutter, React, PyTorch, Gymnasium, R-Studio' },
  { label: 'Backend / Data', value: 'ClickHouse, PostgreSQL, Supabase, Firebase, REST APIs, Edge Functions, row-level security' },
  { label: 'Tools / Systems', value: 'AWS, Docker, Linux, Git, GitHub, NetworkX, ROS 2, Gazebo' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [['#work', 'Selected work'], ['#experience', 'Experience'], ['#about', 'About'], ['#contact', 'Contact']]
  return <header className="site-header"><div className="shell header-inner">
    <a className="wordmark" href="#top" aria-label="Emilio Daza, back to top">Emilio Daza<span>.</span></a>
    <nav className={'site-nav' + (menuOpen ? ' open' : '')} aria-label="Primary navigation">
      {links.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      <a className="mobile-resume" href={resumeUrl} download>Download résumé</a>
    </nav>
    <a className="header-resume" href={resumeUrl} download><Download size={15} aria-hidden="true" /> Résumé</a>
    <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
  </div></header>
}

function Hero() {
  return <section className="hero" id="top"><div className="shell hero-grid">
    <div className="hero-copy">
      <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Dartmouth College · Computer Science + Statistics</p>
      <h1>Building intelligent systems <em>that work.</em></h1>
      <p className="hero-description">Dartmouth computer science student graduating June 2027 with experience building cross-platform applications, backend systems, intelligent payment-routing models, and healthcare ML pipelines for heart-disease prediction and brain-tumor MRI classification.</p>
      <div className="hero-actions"><a className="button button-light" href="#work">Explore my work <ArrowRight size={18} aria-hidden="true" /></a><a className="button button-outline" href={resumeUrl} download><Download size={17} aria-hidden="true" /> Download résumé</a></div>
      <p className="hero-availability"><span aria-hidden="true" /> Seeking 2027 new-grad roles · NYC first choice, open to relocation</p>
    </div>
    <div className="hero-portrait-wrap"><div className="hero-portrait-frame"><img src="/profile.jpeg" alt="Portrait of Emilio Daza" fetchPriority="high" /></div><div className="portrait-caption"><span>Emilio Daza</span><span>Hanover, New Hampshire</span></div></div>
  </div><div className="shell hero-bottom"><span>Software engineering / Applied machine learning / Product</span><a href="#proof">Scroll to explore <ArrowDown size={15} aria-hidden="true" /></a></div></section>
}

function Proof() {
  return <section className="proof" id="proof" aria-label="Izipay prototype results"><div className="shell proof-grid">
    <div className="proof-intro"><span className="eyebrow">Selected result / Izipay</span><p>Reinforcement learning for intelligent payment routing.</p></div>
    <div className="proof-stat"><strong>92.3<span>%</span></strong><span>Simulated approval</span></div>
    <div className="proof-stat"><strong>178.4<span>ms</span></strong><span>Mean latency</span></div>
    <div className="proof-stat"><strong>1,000</strong><span>Seeded episodes</span></div>
  </div><div className="shell proof-note">Results were generated from synthetic routing probabilities in a simulator, not production traffic.</div></section>
}

function SectionHeading({ number, label, title, intro }) {
  return <div className="section-heading"><div className="section-kicker"><span>{number}</span><span>{label}</span></div><div><h2>{title}</h2>{intro && <p>{intro}</p>}</div></div>
}

function RouteVisual() {
  return <div className="route-visual" aria-hidden="true"><div className="route-grid" /><div className="route-head"><span>ROUTING MODEL</span><span>SIMULATED ENVIRONMENT</span></div><div className="route-path"><span className="route-node">Transaction</span><span className="route-line" /><span className="route-node route-decision">Double DQN</span><span className="route-line" /><span className="route-node">Processor</span></div><div className="route-foot"><span>outages</span><span>latency</span><span>technical failures</span><span>rejection</span></div></div>
}

function ProjectVisual({ type }) {
  if (type === 'thyme') return <div className="project-visual thyme-visual" aria-hidden="true"><div className="thyme-orbit orbit-one" /><div className="thyme-orbit orbit-two" /><div className="thyme-center"><span>THYME</span><span>iOS · Android</span></div><div className="visual-corner top">Multimodal AI</div><div className="visual-corner bottom">Nutrition × discovery</div></div>
  return <div className="project-visual robotics-visual" aria-hidden="true"><div className="robot-grid" /><div className="robot-scan" /><span className="robot-target target-one" /><span className="robot-target target-two" /><span className="robot-target target-three" /><div className="robot-overlay">MAPPING / PLANNING / PERCEPTION</div></div>
}

function Work() {
  return <section className="section work-section" id="work"><div className="shell">
    <SectionHeading number="01" label="Selected work" title={<>The work behind <em>the résumé.</em></>} intro="Engineering across payment infrastructure, shipped AI products, and robotics systems." />
    <article className="featured-work"><div className="featured-copy"><div className="work-topline"><span>Featured case / 2026</span><span>Izipay · Lima, Peru</span></div><h3>Intelligent payment routing</h3><p className="work-lede">A reinforcement learning prototype for processor selection under outages, latency variation, technical failures, and payment rejection.</p><ul className="detail-list">{experience[0].details.map((detail) => <li key={detail}>{detail}</li>)}</ul><div className="tech-line">Python <span>/</span> PyTorch <span>/</span> Gymnasium <span>/</span> NetworkX <span>/</span> ClickHouse <span>/</span> SQL</div></div><RouteVisual /></article>
    <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><ProjectVisual type={project.visual} /><div className="project-content"><div className="project-meta"><span>{project.number} / {project.eyebrow}</span><span>{project.period}</span></div><h3>{project.title}</h3>{project.subtitle && <p className="project-role">{project.subtitle}</p>}<p className="project-description">{project.description}</p><ul className="detail-list">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><div className="tag-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div></article>)}</div>
  </div></section>
}

function Experience() {
  return <section className="section experience-section" id="experience"><div className="shell"><SectionHeading number="02" label="Experience" title={<>Applied research. <em>Real systems.</em></>} intro="Work and research spanning fintech, reinforcement learning, health technology, and medical AI." /><div className="experience-list">{experience.map((item) => <article className="experience-item" key={item.company}><div className="experience-date"><span>{item.period}</span><span>{item.location}</span></div><div className="experience-body"><h3>{item.company}</h3><p className="experience-role">{item.role}</p><ul className="detail-list">{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div></article>)}</div></div></section>
}

function About() {
  return <section className="section about-section" id="about"><div className="shell"><SectionHeading number="03" label="Foundation" title={<>Curiosity with <em>technical depth.</em></>} /><div className="about-grid"><div className="about-story"><p className="eyebrow">Education</p><h3>Dartmouth College</h3><p className="about-degree">B.A. in Computer Science, Minor in Statistics <span>Expected Jun. 2027</span></p><p><strong>Relevant Coursework:</strong> Computer Architecture, Compilers, Discrete Mathematics, Robotics Design &amp; Programming, Computer Vision, Multivariate Statistics &amp; Statistical Learning, and Probability &amp; Statistical Inference.</p><p><strong>Beca Cometa Scholar (2023):</strong> 1 of 2 students selected nationwide in Peru for a full undergraduate scholarship at a top U.S. university.</p><div className="about-rule" /><p className="about-note">I work where software engineering, machine learning, and product thinking meet. My experience ranges from a payment-routing agent to a mobile product in beta and perception systems for robots.</p></div><div className="skills-panel"><p className="eyebrow">Technical skills</p>{skillGroups.map((group) => <div className="skill-row" key={group.label}><h4>{group.label}</h4><p>{group.value}</p></div>)}</div></div></div></section>
}

function Contact() {
  return <footer className="contact-section" id="contact"><div className="shell contact-grid"><div><p className="eyebrow">04 / Get in touch</p><h2>Let’s build what’s <em>next.</em></h2><p className="contact-description">I’m exploring 2027 new-grad software engineering, AI/ML engineering, and research engineering roles. New York City is my first choice; I’m open to relocating for the right opportunity.</p></div><div className="contact-actions"><a className="contact-email" href="mailto:emidaz138@gmail.com">emidaz138@gmail.com <ArrowUpRight size={24} aria-hidden="true" /></a><div className="contact-links"><a href={resumeUrl} download>Résumé <ArrowUpRight size={16} aria-hidden="true" /></a><a href="https://github.com/emiliodaza" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a><a href="https://www.linkedin.com/in/emilio-sebastian-daza-vigo-48197b31b/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a></div></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Emilio Daza</span><span>Hanover, NH · NYC first choice · Open to relocation</span><a href="#top">Back to top ↑</a></div></footer>
}

function App() {
  return <><a className="skip-link" href="#work">Skip to content</a><Header /><main><Hero /><Proof /><Work /><Experience /><About /></main><Contact /></>
}

export default App
