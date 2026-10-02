import React from 'react';
import {
  CloudSun, Film, Users, Trophy, Newspaper, ClipboardList, Coffee, Laptop,
  Package, Globe, ShoppingCart, MessageSquare, Database, Code2, Layout,
  Palette, Smartphone, CodeXml, Zap, Server, Shield,
} from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiDaisyui, SiMui, SiNextdotjs, SiTypescript } from 'react-icons/si';

// Maps icon name string → Lucide component
export const lucideIconMap = {
  CloudSun, Film, Users, Trophy, Newspaper, ClipboardList, Coffee,
  Laptop, Package, Globe, ShoppingCart, MessageSquare, Database,
  Code2, Layout, Palette, Smartphone, CodeXml, Zap, Server, Shield,
};

// Maps tech name string → { icon, name }
export const techBadgeMap = {
  HTML:      { icon: <FaHtml5 className="text-orange-600" />,  name: 'HTML' },
  CSS:       { icon: <FaCss3Alt className="text-blue-500" />,  name: 'CSS' },
  JS:        { icon: <FaJs className="text-yellow-400" />,     name: 'JS' },
  Bootstrap: { icon: <FaBootstrap className="text-purple-600" />, name: 'Bootstrap' },
  React:     { icon: <FaReact className="text-blue-400" />,    name: 'React' },
  Tailwind:  { icon: <SiTailwindcss className="text-cyan-400" />, name: 'Tailwind' },
  DaisyUI:   { icon: <SiDaisyui className="text-teal-500" />,  name: 'DaisyUI' },
  MUI:       { icon: <SiMui className="text-blue-600" />,      name: 'MUI' },
  'Next.js': { icon: <SiNextdotjs className="text-black" />,   name: 'Next.js' },
  TS:        { icon: <SiTypescript className="text-blue-700" />, name: 'TS' },
};
