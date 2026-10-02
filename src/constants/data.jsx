import React from 'react';
import { Home, User, Cpu, Briefcase, Mail, Layout, Palette, Code2, Smartphone, CodeXml, Zap, Rocket, Film, Users, Newspaper, Coffee, Laptop, Package, Database, Award, GraduationCap } from 'lucide-react';
import { FaJs, FaReact } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiDaisyui } from 'react-icons/si';

// ─── Identity ────────────────────────────────────────────────────────────────

export const PERSONAL_INFO = {
  name: 'Abdullah Bacha',
  navBadge: 'Frontend React.js & Next.js Developer',
  footerTagline:
    'Frontend Developer with 2+ years building responsive, scalable web applications. Specialized in React.js, Next.js, admin dashboards, and REST API integrations with production-ready code.',
};

// ─── Contact & Social ────────────────────────────────────────────────────────

export const CONTACT_INFO = {
  phone: '+92 310 1773357',
  email: 'bacha141998@gmail.com',
  location: 'Lahore, Pakistan',
};

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/abdullah-bacha-24266826b/',
  github: 'https://github.com/Abdullah-Bacha',
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export const HERO_TYPE_SEQUENCE = [
  'React Developer', 2000,
  'Next.js Specialist', 2000,
  'Performance Engineer', 2000,
  'Full Stack Builder', 2000,
];

export const HERO_BIO =
  "Frontend Developer with 2+ years of hands-on experience building responsive, scalable web applications using React.js, Next.js, JavaScript, and TypeScript. Shipped 15+ live projects end to end, developed complex admin dashboards with role-based systems, integrated REST APIs with authentication workflows, and optimized performance through code splitting and lazy loading.";

// ─── About ───────────────────────────────────────────────────────────────────

export const ABOUT_STATS = {
  yearsExperience: '2+',
  projectsCompleted: '15+',
};

export const ABOUT_BIO = [
  'Frontend Developer with 2+ years of hands-on experience building responsive, scalable, and user-focused web applications using React.js, Next.js, JavaScript, TypeScript, HTML5, and CSS3. I specialize in developing modern user interfaces, complex admin dashboards, role-based systems, reusable components, REST API integrations, and authentication workflows. My expertise spans Tailwind CSS, Bootstrap, Material UI, Redux Toolkit, Zustand, React Query, and performance optimization techniques.',
  'I have shipped 15+ live projects end-to-end from design to Vercel deployment, with expertise in building production-ready applications across various domains including e-commerce, food delivery, automotive marketplaces, educational platforms, and enterprise solutions. Currently expanding full-stack capabilities with Node.js, Express.js, and MongoDB. I\'m committed to writing clean, maintainable code while following Agile methodologies, code reviews, and best practices.',
];

export const ABOUT_TECH_BADGES = [
  { name: 'JavaScript',  icon: <FaJs className="text-yellow-400" /> },
  { name: 'TypeScript',  icon: <SiTypescript className="text-blue-700" /> },
  { name: 'React',       icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js',     icon: <SiNextdotjs className="text-white" /> },
  { name: 'Tailwind',    icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'Redux',       icon: <FaReact className="text-purple-600" /> },
  { name: 'Node.js',     icon: <FaJs className="text-green-500" /> },
  { name: 'MongoDB',     icon: <Database className="text-green-600" /> },
  { name: 'Vercel',      icon: <SiNextdotjs className="text-black" /> },
  { name: 'GSAP',        icon: <SiTailwindcss className="text-green-400" /> },
];

// ─── Navbar ──────────────────────────────────────────────────────────────────

export const navLinks = [
  { name: 'Home',     to: 'home',     icon: <Home size={18} /> },
  { name: 'About',    to: 'about',    icon: <User size={18} /> },
  { name: 'Education',    to: 'education',    icon: <GraduationCap size={18} /> },
  { name: 'Skills',   to: 'skills',   icon: <Cpu size={18} /> },
  { name: 'Experience', to: 'experience', icon: <Award size={18} /> },
  { name: 'Projects', to: 'projects', icon: <Code2 size={18} /> },
  { name: 'Testimonials', to: 'testimonials', icon: <Users size={18} /> },
  { name: 'Contact',  to: 'contact',  icon: <Mail size={18} /> },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skillsConfig = [
  {
    name: 'React.js & Next.js',
    iconName: 'Layout',
    desc: 'React 19, Next.js 16 (App Router, SSR, SSG, ISR, Server Components, API Routes, Image & Font Optimization)',
    details: 'Building scalable web applications with React.js and Next.js. Expert in App Router, Server-Side Rendering for SEO, Static Site Generation for performance, and Incremental Static Regeneration for dynamic content. Mastered comprehensive tech stack spanning frontend frameworks and advanced optimization techniques. Proficient with Image & Font Optimization for improved Core Web Vitals.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    proficiency: 95,
  },
  {
    name: 'State Management',
    iconName: 'Palette',
    desc: 'Redux Toolkit, RTK Query, Zustand, Context API, React Query',
    details: 'Crafting high-performance, SEO-friendly web experiences with strategic state management solutions. Redux Toolkit and Zustand for complex state management across production applications. RTK Query for efficient server state caching. Context API for theme and authentication. React Query for intelligent data synchronization and real-time updates.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    proficiency: 88,
  },
  {
    name: 'Styling & UI',
    iconName: 'Smartphone',
    desc: 'Tailwind CSS, Material UI, Bootstrap 5, DaisyUI, Framer Motion, GSAP',
    details: 'Responsive UI design with Tailwind CSS for rapid, scalable development. Advanced animations with GSAP for cinematic, scroll-triggered effects and Framer Motion for smooth React interactions. Component libraries including Material UI, Bootstrap 5, and DaisyUI. Building pixel-perfect, accessible layouts optimized for all devices.',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
    proficiency: 92,
  },
  {
    name: 'Performance & Optimization',
    iconName: 'Zap',
    desc: 'Core Web Vitals, Lighthouse, Code Splitting, Lazy Loading, Memoization, Bundle Analysis',
    details: 'Every project optimized for Core Web Vitals and accessibility standards. Expert in Lighthouse audits, bundle analysis, and route-level code splitting. Advanced memoization with useMemo and useCallback to prevent unnecessary renders. Reduced redundant API calls by up to 60% through intelligent caching and lazy loading strategies.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    proficiency: 85,
  },
  {
    name: 'Backend & APIs',
    iconName: 'Code2',
    desc: 'Node.js, Express.js, REST APIs, Axios, JWT, Next.js API Routes, MongoDB, PostgreSQL',
    details: 'Backend integration with Node.js and databases like MongoDB and PostgreSQL. RESTful API design and integration using Axios and Next.js API Routes. Secure JWT authentication for role-based access control. Full-stack development experience from responsive UI design to scalable backend services. Production-ready deployment on Vercel or VPS.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
    proficiency: 76,
  },
  {
    name: 'Tools & Deployment',
    iconName: 'CodeXml',
    desc: 'Git, GitHub, Vercel, VPS Deployment, VS Code, Chrome DevTools, npm, yarn, Postman',
    details: 'Production-ready deployment on Vercel and VPS. Proficient with Git and GitHub for version control and collaborative workflows. Deployed 8+ live projects end-to-end with CI/CD pipelines. Expert debugging with Chrome DevTools and API testing with Postman. Agile/Scrum methodologies with sprint planning, code reviews, and feature branching.',
    color: 'text-slate-300',
    bg: 'bg-slate-300/10',
    proficiency: 90,
  },
];

// ─── Education ───────────────────────────────────────────────────────────────

export const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science (BSCS)',
    institution: 'Abdul Wali Khan University Mardan',
    field: 'Computer Science',
    year: '2020 - 2024',
    location: 'Mardan, KPK',
    cgpa: '3.30/4.00',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Database Systems',
      'Operating Systems',
      'Software Engineering',
      'Software Development Life Cycle (SDLC)',
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export const projectsData = [
  {
    title: 'Wolt - Food & Delivery Platform',
    description:
      'Responsive food and local-commerce platform with user-facing discovery portal, and dedicated Restaurant and Branch Management Dashboards for managing operations, branches, orders, and workflows.',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'REST API', 'Redux Toolkit'],
    iconName: 'Coffee',
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-red-600',
    cardGradient: 'from-orange-500 to-red-600',
    demo: 'https://wolt.com/en/discovery',
  },
  {
    title: 'Carwow - Car Marketplace Platform',
    description:
      'Responsive automotive marketplace featuring live user-facing vehicle portal and Admin Dashboard for managing vehicles, listings, users, and platform content with seamless browsing and management.',
    tags: ['React.js', 'Next.js', 'Material UI', 'REST API', 'Tailwind CSS'],
    iconName: 'Package',
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-cyan-700',
    cardGradient: 'from-blue-600 to-cyan-700',
    demo: 'https://www.carwow.co.uk',
  },
  {
    title: 'EduSphere - Educational Platform',
    description:
      'Complete educational platform with public-facing website and dedicated Student, Teacher, and Admin Dashboards. Enables role-specific workflows for learning, teaching, and platform management.',
    tags: ['Next.js', 'React.js', 'MongoDB', 'Node.js', 'JWT Auth', 'Tailwind CSS'],
    iconName: 'Users',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-emerald-700',
    cardGradient: 'from-green-500 to-emerald-700',
    demo: 'https://edu-sphere-the-ultimate-educational.vercel.app/',
  },
  {
    title: 'Keydevs Technologies Corporate Website',
    description:
      'Official company website and primary digital face of the business. Interactive services showcase, portfolio of 16 projects with detail pages, and smart mega menu navigation driven from central data layer.',
    tags: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'Framer Motion'],
    iconName: 'Laptop',
    gradientFrom: 'from-indigo-500',
    gradientTo: 'to-purple-700',
    cardGradient: 'from-indigo-500 to-purple-700',
    demo: 'https://keydevs.pk/',
  },
  {
    title: 'Dev Studio Agency Portfolio',
    description:
      'Agency style portfolio website with cinematic page transitions and scroll triggered GSAP animations. Built from reusable layout components and optimized against Lighthouse metrics.',
    tags: ['React.js', 'GSAP', 'Tailwind CSS', 'DaisyUI', 'React Router'],
    iconName: 'Palette',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-600',
    cardGradient: 'from-purple-500 to-pink-600',
    github: 'https://github.com/Abdullah-Bacha/ANA-DevStudio',
    demo: 'https://ana-dev-studio.vercel.app/',
  },
  {
    title: 'Movie Discovery App',
    description:
      'Search any film, view ratings, cast, and trending titles, save favorites to personal watchlist. Custom React hooks keep the interface fast with no unnecessary refreshes.',
    tags: ['React.js', 'Context API', 'Tailwind CSS', 'TMDB API'],
    iconName: 'Film',
    gradientFrom: 'from-red-600',
    gradientTo: 'to-black',
    cardGradient: 'from-red-600 to-black',
    github: 'https://github.com/Abdullah-Bacha/Movie--App',
    demo: 'https://movie-app-blond-pi.vercel.app/',
  },
  {
    title: 'News Discovery Platform',
    description:
      'Live news platform with category browsing and instant search. Intelligent RTK Query caching reduced repeated server requests by ~60%, so users see articles faster and app uses less data.',
    tags: ['React.js', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS', 'News API'],
    iconName: 'Newspaper',
    gradientFrom: 'from-gray-700',
    gradientTo: 'to-slate-900',
    cardGradient: 'from-gray-700 to-slate-900',
    github: 'https://github.com/Abdullah-Bacha/News-App',
    demo: 'https://news-app-two-bice.vercel.app/',
  },
  {
    title: 'MyBindle Social Platform',
    description:
      'Modern, fully responsive landing page for a social connection platform. Built with reusable sections, smooth animations, and mobile first layout optimized for all devices.',
    tags: ['React.js', 'Tailwind CSS'],
    iconName: 'Package',
    gradientFrom: 'from-teal-400',
    gradientTo: 'to-emerald-600',
    cardGradient: 'from-teal-400 to-emerald-600',
    github: 'https://github.com/Abdullah-Bacha/mybindle',
    demo: 'https://mybindle-eosin.vercel.app/',
  },
  {
    title: 'Employee Management System',
    description:
      'HR style internal tool for maintaining employee records: add, view, update, and remove employees through a clean, validated interface with responsive table layout and persistent data storage.',
    tags: ['React.js', 'Tailwind CSS', 'Bootstrap', 'React Icons'],
    iconName: 'Users',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-teal-700',
    cardGradient: 'from-emerald-500 to-teal-700',
    github: 'https://github.com/Abdullah-Bacha/EMS-App',
    demo: 'https://ems-app-beta.vercel.app/',
  },
];
