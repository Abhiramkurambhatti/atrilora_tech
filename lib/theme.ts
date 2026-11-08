// Atrilora Design Tokens
export const theme = {
  colors: {
    ivory: '#FBF7F1',
    sand: '#F3EBDD',
    richBlack: '#0E0E0E',
    gold: '#9A7B4F',
    goldLight: '#C9A66B',
    goldDark: '#8A6A3C',
    white: '#FFFFFF',
  },
  fonts: {
    display: 'Cormorant Garamond',
    body: 'Plus Jakarta Sans',
  },
  radius: {
    card: '28px',
    button: '100px',
    section: '32px',
  },
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
  goldGradient: 'linear-gradient(135deg, #C9A66B 0%, #8A6A3C 100%)',
} as const;

export const services = [
  {
    id: 'web',
    title: 'Website Development',
    description: 'Fast, beautiful websites that convert visitors into customers. From landing pages to complex web apps.',
    icon: 'monitor',
    color: '#FBF7F1',
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps your users will actually enjoy using, day after day.',
    icon: 'smartphone',
    color: '#F3EBDD',
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    description: 'Cut repetitive work and unlock new capabilities with smart automations and LLM-powered tools.',
    icon: 'sparkles',
    color: '#FBF7F1',
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    description: 'A brand that speaks before you do — logo, identity, guidelines, and design systems that last.',
    icon: 'layers',
    color: '#F3EBDD',
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description: 'Paid ads, SEO and content that bring the right people to your door and keep them coming back.',
    icon: 'megaphone',
    color: '#FBF7F1',
  },
];

export const processSteps = [
  { step: '01', title: 'Discover', desc: 'We listen first. Deep-dive calls, competitor research, and goal-setting.' },
  { step: '02', title: 'Design', desc: 'Wireframes, mood boards and prototypes that feel exactly right.' },
  { step: '03', title: 'Develop', desc: 'Clean, performant code built on modern stacks. No shortcuts.' },
  { step: '04', title: 'Automate', desc: 'Smart workflows so your business runs while you focus on what matters.' },
  { step: '05', title: 'Grow', desc: 'Launch, measure, optimise. We stay with you after go-live.' },
];

export const testimonials = [
  {
    name: 'Rahul Mehta',
    role: 'Founder, NovaBite',
    text: 'Atrilora delivered our entire web platform in three weeks — design, development and all. The quality was well above what I expected from any agency at this price point.',
    img: '/images/testimonial-1.jpg',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'CEO, Leafy Commerce',
    text: 'They genuinely understood what our brand needed. The new site went live and within a month our conversion rate had nearly doubled. Highly recommend.',
    img: '/images/testimonial-2.jpg',
    rating: 5,
  },
  {
    name: 'Arjun Sharma',
    role: 'Co-founder, FlowDesk',
    text: 'The AI automation they built for our ops team saves us roughly 15 hours a week. ROI was visible within the first month.',
    img: '/images/testimonial-3.jpg',
    rating: 5,
  },
];

export const portfolioItems = [
  {
    id: 'novabite',
    title: 'NovaBite',
    category: 'E-commerce · Web',
    desc: 'Full-stack online ordering platform for a fast-growing restaurant chain.',
    img: '/images/mockup-ecommerce.jpg',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
  },
  {
    id: 'flowdesk',
    title: 'FlowDesk',
    category: 'SaaS · Web App',
    desc: 'Operations dashboard with AI-driven task routing and analytics.',
    img: '/images/mockup-saas.jpg',
    tags: ['React', 'Node.js', 'AI'],
  },
  {
    id: 'leafy',
    title: 'Leafy Commerce',
    category: 'Mobile · Branding',
    desc: 'Cross-platform grocery app with smart cart and delivery tracking.',
    img: '/images/team-collab-1.jpg',
    tags: ['Flutter', 'Firebase', 'Design'],
  },
  {
    id: 'brand',
    title: 'VentureMark',
    category: 'Branding · Identity',
    desc: 'Complete brand identity for a Series-A startup entering three markets.',
    img: '/images/team-collab-2.jpg',
    tags: ['Brand', 'Strategy', 'Motion'],
  },
];
