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
  import styles from './styles.module.css';

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
      description: 'Nuxt.js for quickly building MVPs and scalable applications, that require server-side rendering or static site generation.',
    },
    {
      id: 'vuejs',
      icon: <SiVuedotjs />,
      description: 'Vue.js is my go-to library for building UIs.',
    },
    {
      id: 'react',
      icon: <SiReact />,
      description: 'I also create apps with React if the project requires ir',
    },
    {
      id: 'javascript',
      icon: <SiJavascript />,
      description: 'If the project is small I go with vanilla JavaScript.',
    },
    {
      id: 'typescript',
      icon: <SiTypescript />,
      description: 'I use TypeScript in more complex projects to improve maintainability of the code.',
    },
    {
      id: 'npm',
      icon: <SiNpm />,
      description: 'npm for package management and automation scripts.',
    },
    {
      id: 'php',
      icon: <SiPhp />,
      description: "PHP for building API's",
    },
    {
      id: 'laravel',
      icon: <SiLaravel />,
      description: 'Laravel is a mature frameowork that I use in 99% of my PHP projects. It is very well documented and has a large librarie\'s ecosystem. It is also very well supported by the  community.',
    },
    {
      id: 'stripe',
      icon: <SiStripe />,
      description: 'Stripe for secure and flexible payment solutions. It is easiest to implement and scale later.',
    },
    {
      id: 'digitalocean',
      icon: <SiDigitalocean />,
      description: 'DigitalOcean for scalable and affordable cloud  hosting.',
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
      icon: <SiOpenai />,
      description: 'OpenAI for state-of-the-art language models and AI solutions.',
    },
    {
      id: 'anthropic',
      icon: <FaMagic />,
      description: 'Anthropic for content and text generation.',
    },
    {
      id: 'langchain',
      icon: <FaLink />,
      description: 'LangChain for building advanced apps around LLMs, AI workflows, AI chatbots, RAGs and Agents.',
    },
  ];

  export default function TechnologiesSection() {
    const [hoveredTech, setHoveredTech] = useState(null);
  
    const currentTech = technologies.find((t) => t.id === hoveredTech) || technologies[0];
    const currentColor = techColors[currentTech.id] || '#9ca3af';
  
    return (
      <section className={styles.section}>
        <h2 className={styles.title}>
          I use these technologies in my projects
        </h2>
  
        <div className={styles.container}>
          {/* Tech icons (left) */}
          <div className={styles.techGrid}>
            {technologies.map((tech) => {
              const isHovered = hoveredTech === tech.id;
              const color = isHovered ? techColors[tech.id] : '#9ca3af';
              return (
                <div
                  key={tech.id}
                  onMouseEnter={() => setHoveredTech(tech.id)}
                  className={styles.techIcon}
                  style={{ color }}
                >
                  {tech.icon}
                </div>
              );
            })}
          </div>
  
          {/* Big icon + description (right) */}
          <div className={styles.previewContainer}>
            <div
              className={styles.bigIcon}
              style={{ color: currentColor }}
            >
              {currentTech.icon}
            </div>
            <div className={styles.description}>
              {currentTech.description}
            </div>
          </div>
        </div>
      </section>
    );
  }
