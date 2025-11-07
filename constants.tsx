

import React from 'react';
import { Project, Service, Testimonial, ProjectCategory } from './types';

// Icons
export const BuildingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375M9 12h6.375m-6.375 5.25h6.375M5.25 6h.008v.008H5.25V6Zm.75 5.25h.008v.008H6v-5.25Zm-.75 5.25h.008v.008H5.25v-5.25Zm12.75-5.25h.008v.008h-.008V6Zm.75 5.25h.008v.008h-.008v-5.25Zm-.75 5.25h.008v.008h-.008v-5.25Z" />
  </svg>
);

export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

export const WrenchScrewdriverIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.527-1.042.213-2.38-.63-3.218-.843-.844-2.176-1.158-3.218-.63l-3.03 2.496m4.38 4.38 3.218-.63.63 3.218m-8.6-8.6 3.218-.63.63 3.218" />
    </svg>
);

export const ClipboardDocumentListIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 5.25 6h.008a2.25 2.25 0 0 1 2.242 2.15 2.25 2.25 0 0 0 2.25 2.25h.75A2.25 2.25 0 0 0 15 8.25v6a2.25 2.25 0 0 1-2.25 2.25m-3-1.5-1.5.75-1.5-.75" />
  </svg>
);

// Mock Data
export const HERO_SLIDES_DATA = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1621287042302-e2a445a44344?q=80&w=2070&auto=format&fit=crop'
    },
     {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1581358925036-7c385b01518b?q=80&w=2070&auto=format&fit=crop'
    },
];

export const SERVICES_DATA: Service[] = [
  {
    title: 'Smart Residential Construction',
    description: 'Future-ready homes with integrated IoT systems, sustainable materials, and energy-efficient designs that adapt to modern living.',
    icon: HomeIcon,
  },
  {
    title: 'Commercial Mega Projects',
    description: 'Revolutionary commercial spaces featuring smart building technologies, biophilic design, and adaptive architecture.',
    icon: BuildingIcon,
  },
  {
    title: 'Industrial Infrastructure 4.0',
    description: 'Next-generation industrial facilities with automated systems, sustainable power solutions, and modular construction.',
    icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402a3.75 3.75 0 0 0-5.304-5.304L4.098 14.6a3.75 3.75 0 0 0 0 5.304Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5 14.25 9.75" /></svg>,
  },
  {
    title: 'Green Retrofit Solutions',
    description: 'Transforming existing structures with cutting-edge sustainable technologies and smart renovation techniques.',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Futuristic Architecture',
    description: 'Pioneering architectural designs that merge aesthetic innovation with structural intelligence and environmental consciousness.',
    icon: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg>,
  },
  {
    title: 'AI-Powered Project Management',
    description: 'Advanced project coordination using artificial intelligence, real-time monitoring, and predictive analytics for optimal outcomes.',
    icon: ClipboardDocumentListIcon,
  },
];

export const PROJECTS_DATA: Project[] = [
  { 
    id: 1, 
    title: 'Metropolitan Smart Tower', 
    category: ProjectCategory.Commercial, 
    description: 'A 50-story AI-integrated skyscraper with vertical gardens, smart glass facades, and renewable energy systems defining the modern cityscape.', 
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 2, 
    title: 'Eco-Sphere Residential Complex', 
    category: ProjectCategory.Residential, 
    description: 'Luxury sustainable homes with integrated IoT systems, rainwater harvesting, solar power, and biophilic architecture in premium location.', 
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    title: 'IndustrialTech Manufacturing Hub', 
    category: ProjectCategory.Industrial, 
    description: 'Next-gen automated manufacturing facility with Industry 4.0 integration, robotic systems, and zero-waste production capabilities.', 
    imageUrl: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 4, 
    title: 'FutureMall Experience Center', 
    category: ProjectCategory.Commercial, 
    description: 'Revolutionary retail space with AR/VR integration, smart logistics, adaptive lighting, and immersive customer experiences.', 
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 5, 
    title: 'GreenTech Residential Towers', 
    category: ProjectCategory.Residential, 
    description: 'Carbon-neutral high-rise apartments with vertical farming, energy-positive design, and smart home automation throughout.', 
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 6, 
    title: 'Quantum Data Center Complex', 
    category: ProjectCategory.Industrial, 
    description: 'Ultra-modern data center with quantum cooling systems, renewable energy infrastructure, and advanced security protocols.', 
    imageUrl: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 7, 
    title: 'Smart City Central Plaza', 
    category: ProjectCategory.Commercial, 
    description: 'Integrated urban development with smart infrastructure, autonomous vehicle support, and sustainable urban planning.', 
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 8, 
    title: 'Heritage Tech Campus', 
    category: ProjectCategory.Commercial, 
    description: 'Modern technology campus blending traditional architecture with futuristic smart building systems and collaborative spaces.', 
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    id: 9, 
    title: 'Eco-Industrial Park', 
    category: ProjectCategory.Industrial, 
    description: 'Sustainable industrial complex with circular economy principles, waste-to-energy systems, and green manufacturing processes.', 
    imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=600&auto=format&fit=crop' 
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        id: 1,
        quote: "Demo Builders transformed our vision into a stunning reality. Their attention to detail and commitment to quality is unparalleled. The entire process was seamless, professional, and completed ahead of schedule.",
        clientName: "John & Jane Smith",
        projectName: "Lakeside Luxury Villas",
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
        id: 2,
        quote: "For our new corporate headquarters, we needed a builder who understood the complexities of a large-scale commercial project. Demo Builders delivered exceptional results, on budget and with incredible craftsmanship.",
        clientName: "Sarah Lee, CEO of Innovate Corp",
        projectName: "Downtown Corporate Tower",
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3'
    },
    {
        id: 3,
        quote: "The team's professionalism and communication were top-notch. They handled every challenge with expertise and kept us informed every step of the way. We couldn't be happier with our new home.",
        clientName: "Michael Brown",
        projectName: "Greenwich Modern Homes",
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3'
    }
];