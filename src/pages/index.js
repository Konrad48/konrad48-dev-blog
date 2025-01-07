import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import TechnologiesSection from '@site/src/components/TechnologiesSection';
import styles from './index.module.css';

export default function Home() {

  const projects = [
    {
      img: 'img/kaizen_showcase.png',
      title: 'Kaizen AI',
      description: 'Create a MVP version of AI powered solution for production companies',
      link: 'https://leantrix.com/en/',
    },
    {
      img: 'img/slajd1.png',
      title: 'Selliplus',
      description: 'LinkedIn automation SaaS application',
      link: 'https://selliplus.com',
    },
    {
      img: 'img/rtb-baner.jpg',
      title: 'RTB House',
      description: 'Crafted numerous of inernal solutions for largest Polish retargeting company',
      link: 'https://www.rtbhouse.com/',
    }
  ];

  return (
    <Layout title="Home" description="Personal homepage of Konrad">
      {/* HERO SECTION */}
      <section className={styles.heroSectionNew}>
        <div className={styles.heroTextNew}>
          <h1 className={styles.heroTitle}>Hi, I'm Konrad</h1>
          <p className={styles.heroDescription}>
            I am turning ideas into money-making, AI-powered SaaS apps. I have pasion for creating solutions and I am always looking for new challenges.
          </p>
        </div>
        <div className={styles.heroImageContainer}>
          <div className={styles.imageWrapper}>
            <img
              src="img/konrad_foto2.jpg"
              alt="Konrad's portrait"
              className={styles.profileImage}
            />
          </div>
        </div>
      </section>

      {/* MY PROJECTS */}
      <section className={styles.projectsSectionNew}>
        <h2 className={styles.projectsTitle}>My Projects</h2>
        <div className={styles.projectsContainer}>
          {projects.map((proj, idx) => (
            <div key={idx} className={styles.projectCard}>
              <img src={proj.img} alt={proj.title} className={styles.projectImage} />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{proj.title}</h3>
                <p className={styles.projectDescription}>{proj.description}</p>
                <Link
                  to={proj.link}
                  className={styles.projectLink}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <TechnologiesSection />

      {/* CONTACT ME */}
      <section className={styles.contactSectionNew}>
        <h2 className={styles.contactTitle}>Contact Me</h2>
        <p className={styles.contactText}>
          If you'd like to discuss ideas, collaborations, or anything else, reach out at:
        </p>
        <p className={styles.contactEmail}>k.janecki184@gmail.com</p>
        <p>
          Also, feel free to check out my{' '}
          <Link to="/blog" className={styles.contactLink}>
            blog
          </Link>{' '}
          for more insights!
        </p>
      </section>
    </Layout>
  );
}
