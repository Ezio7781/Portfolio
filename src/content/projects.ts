export type ProjectVisual = 'system' | 'resume' | 'dashboard' | 'web' | 'web-two' | 'brand';

export interface Project {
  number: string;
  title: string;
  client: string;
  category: string;
  description: string;
  context: string;
  role: string;
  execution: string;
  outcome: string;
  reflection: string;
  visual: ProjectVisual;
  label: string;
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Growth & digital infrastructure',
    client: 'Skyrise Education',
    category: 'Growth · Product · Systems',
    description: 'A connected set of contributions across the website, brand, acquisition, lead operations and internal sales tools.',
    context: 'Education teams need more than a campaign or a redesigned page. The experience from first visit through lead follow-up has to work as a connected system.',
    role: 'Website redesign and development, brand identity, lead-generation initiatives, CRM integrations and internal sales-performance tools.',
    execution: 'Worked across web experiences, campaign planning, lead-management workflows and operational visibility for the sales team.',
    outcome: 'Contributions span digital and operational work. Verified performance metrics and a detailed feature inventory are not supplied.',
    reflection: 'The next useful step is to connect campaign source, lead quality and follow-up outcomes in one measurable view.',
    visual: 'system',
    label: 'SYSTEM MAP · ILLUSTRATIVE',
  },
  {
    number: '02',
    title: 'Resume parsing & candidate management',
    client: 'Workflow application',
    category: 'Full-stack · Automation · Data',
    description: 'Turn unstructured resumes into searchable candidate records and a more manageable review workflow.',
    context: 'Candidate details arrive inside documents, which makes sorting, comparing and reusing information slower than it needs to be.',
    role: 'Application design and implementation across resume extraction, candidate management and data export.',
    execution: 'The workflow extracts structured candidate details, normalises contact information, and supports search, filtering and Excel export.',
    outcome: 'A practical candidate-management workflow. Usage and time-saved figures are not available.',
    reflection: 'Extraction quality should be reviewed against real resume formats, with confidence and correction paths made visible to users.',
    visual: 'resume',
    label: 'WORKFLOW SCHEMATIC · NOT A SCREENSHOT',
  },
  {
    number: '03',
    title: 'Sales performance dashboard',
    client: 'Internal sales tool',
    category: 'Product · Operations · Measurement',
    description: 'A management-facing view of counsellor activity, admissions progress and sales performance.',
    context: 'Operational information is most useful when managers can see activity and progress together, without losing the detail behind a number.',
    role: 'Internal tool contribution focused on performance visibility and admissions tracking.',
    execution: 'The dashboard concept organises counsellor-level performance, admissions status and sales visibility around operational questions.',
    outcome: 'Internal sales-performance tooling is part of the work. The production status of individual features and verified business impact need confirmation.',
    reflection: 'A useful next iteration would validate definitions with the team so every metric supports a clear decision.',
    visual: 'dashboard',
    label: 'DASHBOARD CONCEPT · SCHEMATIC',
  },
  {
    number: '04',
    title: 'Education website one',
    client: 'ADD WEBSITE NAME · 01 OF 02',
    category: 'Web design · Frontend · UX',
    description: 'One of two websites Abdul has built, bringing education-focused content and a clear enquiry journey together.',
    context: 'A brand website needs to explain an offer clearly and give prospective learners a direct route to take the next step.',
    role: 'Website design and development. Project-specific scope and technology details can be added when confirmed.',
    execution: 'A website experience built for an education brand. The preview is an illustrative layout study, not a screenshot of the live site.',
    outcome: 'PLACEHOLDER: add the live URL, real screenshots and verified outcomes.',
    reflection: 'Pairing the live experience with analytics and lead-quality feedback is the best way to guide the next improvement.',
    visual: 'web',
    label: 'WEBSITE 01 · ILLUSTRATIVE PREVIEW',
  },
  {
    number: '05',
    title: 'Education website two',
    client: 'ADD WEBSITE NAME · 02 OF 02',
    category: 'Web design · Frontend · UX',
    description: 'A second education website project, showing web development as a core part of Abdul’s multidisciplinary practice.',
    context: 'The details of this site can tell a more specific story once its audience, content goals and design decisions are documented.',
    role: 'Website design and development. Add the exact contribution and implementation details here.',
    execution: 'A second, distinct preview treatment makes space for this project without inventing its real content or appearance.',
    outcome: 'PLACEHOLDER: add the live URL, real screenshots and verified outcomes.',
    reflection: 'Documenting the decisions behind each website will make the work more useful to prospective clients and teams.',
    visual: 'web-two',
    label: 'WEBSITE 02 · ILLUSTRATIVE PREVIEW',
  },
  {
    number: '06',
    title: 'Identity & campaign design',
    client: 'Graphic design · 6+ years',
    category: 'Logos · Visual identity · Campaigns',
    description: 'A visual-design practice spanning logo development, identity systems, campaign creative and communication design.',
    context: 'A strong identity needs a recognisable mark, a flexible visual language and a clear idea that carries across formats.',
    role: 'Graphic design, brand identity work and marketing campaign creative, alongside website and growth contributions.',
    execution: 'This visual board demonstrates the kinds of identity components involved: logo construction, wordmark, palette and campaign composition. It is a self-directed portfolio study, not a client identity.',
    outcome: 'Add selected commissioned logos, campaign artwork and the associated project context when those assets are available.',
    reflection: 'Showing the brief, iterations and final applications will help connect visual craft to the commercial communication goal.',
    visual: 'brand',
    label: 'SELF-DIRECTED IDENTITY STUDY · NOT CLIENT WORK',
  },
];