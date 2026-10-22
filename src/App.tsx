import { useState } from 'react';
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { projects, type Project } from './content/projects';

const navigation = [
  { href: '#work', label: 'Work' },
  { href: '#practice', label: 'Capabilities' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const capabilities = [
  {
    id: 'acquisition',
    number: '01',
    title: 'Acquisition',
    summary: 'Bring the right people into the journey.',
    detail: 'Audience research, paid campaign planning, lead generation and acquisition economics. The starting point is understanding who the offer is for and where intent begins.',
  },
  {
    id: 'conversion',
    number: '02',
    title: 'Conversion',
    summary: 'Make the next step clear and useful.',
    detail: 'Landing pages, user experience, funnel friction and lead qualification. Improve the journey by finding where people hesitate, then making a focused change.',
  },
  {
    id: 'systems',
    number: '03',
    title: 'Systems',
    summary: 'Make good work easier to repeat.',
    detail: 'CRM integrations, AI-assisted workflows, automation and internal tools. Put the operational detail in place so a qualified lead can move forward reliably.',
  },
  {
    id: 'measurement',
    number: '04',
    title: 'Measurement',
    summary: 'Learn from what actually happens.',
    detail: 'Analytics, attribution, funnel analysis, acquisition cost and experiments. Measurement connects the customer journey back to a decision about what to improve.',
  },
];

const skillGroups = [
  { title: 'Growth & analytics', skills: 'Acquisition strategy, lead generation, conversion optimisation, funnel analysis, CAC, campaign measurement' },
  { title: 'Engineering', skills: 'AngularJS, Angular, React, Next.js, JavaScript, Node.js, Express, HTML, CSS, API integrations' },
  { title: 'AI & automation', skills: 'LLM integration, structured information extraction, AI-assisted workflows, CRM automation' },
  { title: 'Product & design', skills: 'UX/UI, Figma, wireframing, prototyping, branding, graphic design, video editing' },
  { title: 'Data & delivery', skills: 'Excel exports, dashboard development, Git, deployment and hosting workflows' },
];

const principles = [
  'Start with the business problem.',
  'Understand the user journey before optimising it.',
  'Build the smallest useful solution.',
  'Measure behaviour, not assumptions.',
  'Automate repetition where it creates value.',
  'Iterate when the evidence gives you a reason.',
];

// Replace these placeholders with verified destinations before publishing.
const CONTACT_EMAIL = 'ahaq7805@gmail.com';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCapability, setActiveCapability] = useState(capabilities[0]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#top" aria-label="Abdul Haq, home"><span className="wordmark-mark">AH</span><span>Abdul Haq</span></a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="header-contact" href="#contact">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        <nav id="mobile-navigation" className={`mobile-nav${menuOpen ? ' is-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
          {navigation.map((item) => <a key={item.href} href={item.href} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={16} /></a>)}
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-inner page-width">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" /> Growth engineer <span className="eyebrow-divider">/</span> Abdul Haq</p>
              <h1 id="hero-title">I build the<br />systems <span>behind</span><br />growth<span className="hero-period">.</span></h1>
              <p className="hero-description">Connecting acquisition, product, automation and engineering to make growth work beyond the first click.</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17} /></a>
                <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="hero-graphic" aria-label="A growth system connecting acquisition, conversion, systems and measurement">
              <div className="graphic-topline"><span>GROWTH / 001</span><span>CONNECTED PRACTICE</span></div>
              <div className="system-orbit orbit-one" />
              <div className="system-orbit orbit-two" />
              <div className="system-core"><span>THE</span><strong>GROWTH<br />SYSTEM</strong><small>LEARN / BUILD / REPEAT</small></div>
              <span className="orbit-label orbit-acquisition"><i /> Acquisition</span>
              <span className="orbit-label orbit-conversion"><i /> Conversion</span>
              <span className="orbit-label orbit-systems"><i /> Systems</span>
              <span className="orbit-label orbit-measurement"><i /> Measurement</span>
              <span className="graphic-index index-a">01</span><span className="graphic-index index-b">04</span>
              <div className="graphic-foot"><span>ONE JOURNEY</span><ArrowRight size={14} /><span>CONTINUOUS FEEDBACK</span></div>
            </div>
              <div className="hero-bottom"><span>GROWTH ENGINEERING <b>·</b> MULTIDISCIPLINARY BY DESIGN</span><a href="#work">Scroll to explore <ArrowDown size={14} /></a></div>
          </div>
        </section>

        <section className="work-section section-pad" id="work" aria-labelledby="work-title">
          <div className="page-width">
            <div className="section-heading work-heading">
              <div><p className="eyebrow">Selected work <span className="eyebrow-divider">/</span> 2020—now</p><h2 id="work-title">Work that connects<br /><em>the whole journey.</em></h2></div>
              <p className="section-intro">A mix of shipped contributions, internal tools and product work. No invented metrics; just the problem, the work and what is known.</p>
            </div>
            <div className="project-list">
              {projects.map((project) => <Project key={project.number} project={project} />)}
            </div>
          </div>
        </section>

        <section className="practice-section section-pad" id="practice" aria-labelledby="practice-title">
          <div className="page-width">
            <div className="section-heading practice-heading">
              <div><p className="eyebrow">How I think about growth <span className="eyebrow-divider">/</span> 04 parts</p><h2 id="practice-title">Not a funnel.<br /><em>A working system.</em></h2></div>
              <p className="section-intro">Each part changes the others. Better measurement informs the next campaign; better systems give people a more consistent journey.</p>
            </div>
            <div className="practice-layout">
              <div className="capability-map" role="group" aria-label="Explore the four parts of my growth practice">
                <div className="map-connector connector-horizontal" /><div className="map-connector connector-vertical" />
                {capabilities.map((capability) => <button key={capability.id} className={`capability-node node-${capability.id}${activeCapability.id === capability.id ? ' is-active' : ''}`} type="button" aria-pressed={activeCapability.id === capability.id} onClick={() => setActiveCapability(capability)}><span>{capability.number}</span><strong>{capability.title}</strong><small>{capability.summary}</small></button>)}
                <span className="map-center">THE<br />JOURNEY</span>
              </div>
              <div className="capability-detail" aria-live="polite"><span className="detail-number">{activeCapability.number} / 04</span><h3>{activeCapability.title}</h3><p>{activeCapability.detail}</p><span className="detail-rule" /></div>
            </div>
          </div>
        </section>

        <section className="capabilities-section section-pad" aria-labelledby="skills-title">
          <div className="page-width skills-layout">
            <div className="skills-intro"><p className="eyebrow">Tools & disciplines <span className="eyebrow-divider">/</span> Applied in context</p><h2 id="skills-title">Broad enough<br />to <em>connect.</em></h2><p>I work across disciplines where they meet in a real problem. This is a practical toolkit, not a claim to expert depth in everything.</p></div>
            <div className="skill-list">{skillGroups.map((group, index) => <div className="skill-row" key={group.title}><span className="skill-index">0{index + 1}</span><h3>{group.title}</h3><p>{group.skills}</p></div>)}</div>
          </div>
        </section>

        <section className="about-section section-pad" id="about" aria-labelledby="about-title">
          <div className="page-width about-layout">
            <div className="about-marker"><span>AH</span><small>DESIGN →<br />SYSTEMS →<br />GROWTH</small></div>
            <div className="about-copy"><p className="eyebrow">A little context <span className="eyebrow-divider">/</span> About</p><h2 id="about-title">Visual thinking.<br /><em>Built to work.</em></h2><p className="about-lead">I came to digital work through visual design. More than six years in graphic design taught me how much a clear visual decision can change the way a message lands.</p><p>Over time, that practice moved into websites, product interfaces, automation and growth systems. I like being close to the whole problem: understanding the journey, shaping the experience, building what is needed and learning from how it is used.</p><p>The common thread is practical curiosity: make the complex easier to act on, then improve it with evidence.</p></div>
          </div>
        </section>

        <section className="principles-section section-pad" aria-labelledby="principles-title">
          <div className="page-width principles-layout"><div className="principles-heading"><p className="eyebrow">Working principles <span className="eyebrow-divider">/</span> A repeatable practice</p><h2 id="principles-title">A way of<br /><em>working.</em></h2></div><ol className="principle-list">{principles.map((principle, index) => <li key={principle}><span>0{index + 1}</span><p>{principle}</p><ArrowUpRight size={15} aria-hidden="true" /></li>)}</ol></div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="page-width contact-inner"><p className="eyebrow"><span className="status-dot" /> Contact <span className="eyebrow-divider">/</span> Abdul Haq</p><h2 id="contact-title">Have a growth<br />problem worth <em>solving?</em></h2><p>Founders, product teams, marketing leaders and thoughtful collaborators: tell me what you’re working through.</p><a className="button button-lime" href={`mailto:${CONTACT_EMAIL}?subject=Let%E2%80%99s%20talk%20growth`}>Email Abdul <ArrowUpRight size={17} /></a><div className="contact-links"><a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><a className="contact-email" href="https://www.linkedin.com/in/ab7781dul/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a></div></div>
        </section>
      </main>
      <footer className="site-footer"><div className="page-width footer-inner"><a className="wordmark" href="#top"><span className="wordmark-mark">AH</span><span>Abdul Haq</span></a><span>Growth Engineer <b>·</b> Design, systems & growth</span><a href="#top">Back to top <ArrowUpRight size={14} /></a><span>© {new Date().getFullYear()} Abdul Haq</span></div></footer>
    </>
  );
}

function Project({ project }: { project: Project }) {
  return (
    <article className={`project project-${project.visual}`}>
      <div className="project-topline"><span>{project.number} <b>/</b> {project.client}</span><span>{project.category}</span></div>
      <div className="project-main">
        <div className="project-copy"><p className="project-label">CASE STUDY <span>·</span> CONTRIBUTION</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><dl className="project-notes"><div><dt>Context</dt><dd>{project.context}</dd></div><div><dt>My role</dt><dd>{project.role}</dd></div><div><dt>Approach & execution</dt><dd>{project.execution}</dd></div><div><dt>Outcome & reflection</dt><dd>{project.outcome} {project.reflection}</dd></div></dl></div>
        <ProjectVisual type={project.visual} label={project.label} />
      </div>
    </article>
  );
}

function ProjectVisual({ type, label }: { type: string; label: string }) {
  return <div className={`project-visual visual-${type}`} aria-label={label} role="img"><div className="visual-label">{label}</div>
    {type === 'system' && <div className="system-visual"><div className="system-route"><span>01 / DISCOVER</span><i /><span>02 / ATTRACT</span><i /><span>03 / QUALIFY</span><i /><span>04 / FOLLOW UP</span></div><div className="system-visual-core">ONE CONNECTED<br />LEAD JOURNEY</div><div className="system-visual-foot"><span>CAMPAIGN</span><span>WEBSITE</span><span>CRM</span><span>SALES TOOL</span></div></div>}
    {type === 'resume' && <div className="resume-visual"><div className="resume-file"><span className="file-type">PDF</span><strong>Candidate<br />resume</strong><small>UNSTRUCTURED INPUT</small><div className="file-lines"><i /><i /><i /></div></div><ArrowRight className="resume-arrow" size={25} /><div className="resume-record"><span className="record-head">CANDIDATE RECORD <b>→</b></span><span>Name <i>Structured field</i></span><span>Contact <i>Normalised</i></span><span>Experience <i>Extracted</i></span><span>Export <i>.xlsx</i></span></div></div>}
    {type === 'dashboard' && <div className="dash-visual"><div className="dash-head"><span>TEAM OVERVIEW</span><span>PERIOD <b>MONTH TO DATE</b></span></div><div className="dash-summary"><div><small>COUNSELLOR ACTIVITY</small><strong>Performance</strong></div><div><small>ADMISSIONS</small><strong>Progress</strong></div><div><small>SALES PIPELINE</small><strong>Visibility</strong></div></div><div className="dash-table"><div><b>COUNSELLOR</b><b>LEADS</b><b>ADMISSIONS</b><b>STAGE</b></div><div><span>Team member</span><span>—</span><span>—</span><span>In progress</span></div><div><span>Team member</span><span>—</span><span>—</span><span>In progress</span></div><div><span>Team member</span><span>—</span><span>—</span><span>In progress</span></div></div></div>}
    {type === 'web' && <div className="web-visual"><div className="web-browser"><div className="browser-bar"><i /><i /><i /><span>EDUCATION / WEB EXPERIENCE 01</span></div><div className="web-page"><span>LEARN WITH PURPOSE</span><strong>Make the<br />next step clear.</strong><i /><div className="web-page-bottom"><b>PROGRAMME OVERVIEW</b><b>ENQUIRE ↗</b></div></div></div><span className="web-caption">WEBSITE PROJECT / 01 OF 02</span></div>}
    {type === 'web-two' && <div className="web-two-visual"><div className="web-two-window"><div className="web-two-nav"><span className="web-two-mark">S.</span><span>STUDY <b>PROGRAMMES</b> ABOUT</span><i>ENQUIRE ↗</i></div><div className="web-two-hero"><div><small>FIND YOUR NEXT DIRECTION</small><strong>Build what<br /><em>comes next.</em></strong><span>Explore programmes designed around your ambitions.</span><b>EXPLORE PROGRAMMES <ArrowRight size={11} /></b></div><div className="web-two-shape"><span>LEARN<br />FORWARD</span><i /></div></div><div className="web-two-bottom"><span>PROGRAMMES</span><span>SUPPORT</span><span>YOUR NEXT STEP →</span></div></div><span className="web-caption">WEBSITE PROJECT / 02 OF 02</span></div>}
    {type === 'brand' && <div className="identity-board"><div className="identity-main"><div className="identity-heading"><span>IDENTITY STUDY / 01</span><span>SELF-DIRECTED</span></div><div className="identity-logo"><span className="identity-symbol"><i /><i /><i /></span><strong>FORM<span>/</span>FIELD</strong></div><div className="identity-tagline">A visual language for ideas in motion.</div><div className="identity-rule" /><div className="identity-wordmark">Ff <span>PRIMARY MARK / WORDMARK</span></div><div className="identity-colors"><i /><i /><i /><i /><span>COLOUR SYSTEM / TYPE / MARK</span></div></div><div className="identity-campaign"><span>CAMPAIGN APPLICATION / A</span><strong>MAKE<br />ROOM<br /><em>TO GROW.</em></strong><div className="campaign-shape"><i /><b>01</b></div><small>CONCEPT ARTWORK<br />NOT A CLIENT CAMPAIGN</small></div></div>}
  </div>;
}
