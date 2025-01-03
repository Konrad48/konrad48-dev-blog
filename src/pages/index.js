import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

// react-icons examples
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaDocker } from 'react-icons/fa';

export default function Home() {
  // State for hovered technology
  const [hoveredTech, setHoveredTech] = useState(null);

  // Data for your technologies
  const technologies = [
    {
      id: 'react',
      icon: <FaReact size={28} color="#fff" />,
      bigIcon: <FaReact />,
      description: 'React is my go-to library for building UIs quickly.'
    },
    {
      id: 'nodejs',
      icon: <FaNodeJs size={28} color="#fff" />,
      bigIcon: <FaNodeJs />,
      description: 'Node.js for fast and scalable backend apps.'
    },
    {
      id: 'python',
      icon: <FaPython size={28} color="#fff" />,
      bigIcon: <FaPython />,
      description: 'Python for data scripts, automation, and quick prototypes.'
    },
    {
      id: 'database',
      icon: <FaDatabase size={28} color="#fff" />,
      bigIcon: <FaDatabase />,
      description: 'SQL and NoSQL for storing and querying application data.'
    },
    {
      id: 'aws',
      icon: <FaAws size={28} color="#fff" />,
      bigIcon: <FaAws />,
      description: 'Deploying solutions in the cloud with AWS.'
    },
    {
      id: 'docker',
      icon: <FaDocker size={28} color="#fff" />,
      bigIcon: <FaDocker />,
      description: 'Containerization for consistent dev and production environments.'
    },
  ];

  // Data for your projects
  const projects = [
    {
      img: 'https://via.placeholder.com/300x180?text=Project+1',
      title: 'Project 1',
      description: 'Short description of Project 1',
      link: '/docs/project1'
    },
    {
      img: 'https://via.placeholder.com/300x180?text=Project+2',
      title: 'Project 2',
      description: 'Short description of Project 2',
      link: '/docs/project2'
    },
    {
      img: 'https://via.placeholder.com/300x180?text=Project+3',
      title: 'Project 3',
      description: 'Short description of Project 3',
      link: '/docs/project3'
    },
  ];

  // The technology object that is currently hovered, or fallback to first item
  const currentTech = technologies.find((t) => t.id === hoveredTech) || technologies[0];

  return (
    <Layout
      title="Home"
      description="Personal homepage of Konrad"
    >
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Hi, I'm Konrad</h1>
          <p className={styles.heroSubtitle}>
            I am turning ideas into money-making SaaS solutions, 
            and love to create things.
          </p>
        </div>
        <div className={styles.heroImage}>
          <img
            src="/img/konrad_foto2.jpg"
            alt="Konrad's portrait"
          />
        </div>
      </section>

      {/* MY PROJECTS */}
      <section className={styles.projectsSection}>
        <h2>My Projects</h2>
        <div className={styles.projectCards}>
          {projects.map((proj, idx) => (
            <div key={idx} className={styles.projectCard}>
              <img src={proj.img} alt={proj.title} />
              <div className="description">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <Link to={proj.link}>Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className={styles.technologiesSection}>
        <h2>I use these technologies in my projects</h2>
        <div className={styles.technologiesLeft}>
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className={styles.techIconWrapper}
              onMouseEnter={() => setHoveredTech(tech.id)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {tech.icon}
            </div>
          ))}
        </div>
        <div className={styles.technologiesRight}>
          <div className={styles.techBigIcon}>{currentTech.bigIcon}</div>
          <div className={styles.techDescription}>{currentTech.description}</div>
        </div>
      </section>

      {/* CONTACT ME */}
      <section className={styles.contactSection}>
        <h2>Contact Me</h2>
        <p>If you'd like to discuss ideas, collaborations, or anything else, reach out at:</p>
        <p><strong>Email:</strong> youremail@example.com</p>
        <p>
          Also, feel free to check out my <Link to="/blog">blog</Link> for more insights!
        </p>
      </section>
    </Layout>
  );
}
