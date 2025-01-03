// ./src/components/TechnologiesSection/index.jsx
import React, { useState } from 'react';
import {
    SiNuxtdotjs,
    SiVuedotjs,
    SiReact,
    SiJavascript,
    SiTypescript,
    SiNpm,
    SiPhp,
    SiLaravel,
    SiStripe,
    SiDigitalocean,
    SiDocker,
    SiPython,
    SiOpenai, // Only valid if your version of react-icons supports SiOpenai
  } from 'react-icons/si';

  import { FaLink, FaMagic  } from "react-icons/fa";

/** A mapping of technology => brand color (or any color you like). */
const techColors = {
    nuxtjs: '#00DC82',
    vuejs: '#42b883',
    react: '#61dafb',
    javascript: '#f7df1e',
    typescript: '#3178c6',
    npm: '#cb3837',
    php: '#777bb3',
    laravel: '#ff2d20',
    stripe: '#635bff',
    digitalocean: '#0080ff',
    docker: '#0db7ed',
    python: '#3776AB',
    openai: '#0ea5e9',     // arbitrary color for OpenAI
    anthropic: '#f97316',  // arbitrary color for Anthropic
    langchain: '#059669',  // arbitrary color for LangChain
  };

/** Your list of technologies with icons and descriptions */
const technologies = [
    {
      id: 'nuxtjs',
      icon: <SiNuxtdotjs />,
      description: 'Nuxt.js for building server-side rendered Vue apps easily.',
    },
    {
      id: 'vuejs',
      icon: <SiVuedotjs />,
      description: 'Vue.js for approachable, versatile front-end development.',
    },
    {
      id: 'react',
      icon: <SiReact />,
      description: 'React is my go-to library for building UIs quickly.',
    },
    {
      id: 'javascript',
      icon: <SiJavascript />,
      description: 'JavaScript for client-side logic and dynamic experiences.',
    },
    {
      id: 'typescript',
      icon: <SiTypescript />,
      description: 'TypeScript for safer and more scalable JavaScript.',
    },
    {
      id: 'npm',
      icon: <SiNpm />,
      description: 'npm for package management and automation scripts.',
    },
    {
      id: 'php',
      icon: <SiPhp />,
      description: 'PHP for server-side scripting and rapid web prototyping.',
    },
    {
      id: 'laravel',
      icon: <SiLaravel />,
      description: 'Laravel for elegant PHP frameworks with built-in tooling.',
    },
    {
      id: 'stripe',
      icon: <SiStripe />,
      description: 'Stripe for secure and flexible payment solutions.',
    },
    {
      id: 'digitalocean',
      icon: <SiDigitalocean />,
      description: 'DigitalOcean for scalable, developer-friendly hosting.',
    },
    {
      id: 'docker',
      icon: <SiDocker />,
      description: 'Docker for containerization and consistent deployments.',
    },
    {
      id: 'python',
      icon: <SiPython />,
      description: 'Python for data scripts, automation, and quick prototypes.',
    },
    {
      id: 'openai',
      icon: <SiOpenai />, // Will only work if your react-icons version includes SiOpenai
      description: 'OpenAI for state-of-the-art language models and AI solutions.',
    },
    {
      id: 'anthropic',
      icon: <FaMagic />,
      description: 'Anthropic for cutting-edge large language models and research.',
    },
    {
      id: 'langchain',
      icon: <FaLink />,
      description: 'LangChain for building advanced apps around LLMs and AI workflows.',
    },
  ];

  export default function TechnologiesSection() {
    const [hoveredTech, setHoveredTech] = useState(null);
  
    // Find the tech being hovered, or default to the first item if none
    const currentTech = technologies.find((t) => t.id === hoveredTech) || technologies[0];
    const currentColor = techColors[currentTech.id] || '#9ca3af'; // fallback gray
  
    return (
      <section className="my-16 mx-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          I use these technologies in my projects
        </h2>
  
        {/* 
          We align items at the start so that if the right side grows in 
          height, the grid on the left doesn't shift.
        */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          {/* Tech icons (left) */}
          <div className="grid grid-cols-5 gap-4 text-4xl text-gray-400 md:w-1/2 justify-items-center">
            {technologies.map((tech) => {
              const isHovered = hoveredTech === tech.id;
              const color = isHovered ? techColors[tech.id] : '#9ca3af'; // #9ca3af is gray-400
              return (
                <div
                  key={tech.id}
                  onMouseEnter={() => setHoveredTech(tech.id)}
                  // No onMouseLeave => stays on last hovered
                  className="cursor-pointer transition-colors"
                  style={{ color }}
                >
                  {tech.icon}
                </div>
              );
            })}
          </div>
  
          {/* Big icon + description (right) */}
          <div className="flex flex-col items-center md:w-1/2">
            {/* Big icon */}
            <div
              className="text-9xl mb-4 transition-colors"
              style={{ color: currentColor }}
            >
              {currentTech.icon}
            </div>
            {/* Description */}
            <div className="text-xl text-center max-w-md">
              {currentTech.description}
            </div>
          </div>
        </div>
      </section>
    );
  }
