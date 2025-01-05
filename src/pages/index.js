import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import TechnologiesSection from '@site/src/components/TechnologiesSection';

export default function Home() {

  const projects = [
    {
      img: 'https://via.placeholder.com/300x180?text=Project+1',
      title: 'Project 1',
      description: 'Short description of Project 1',
      link: 'https://selliplus.com',
    },
    {
      img: 'https://via.placeholder.com/300x180?text=Project+2',
      title: 'Project 2',
      description: 'Short description of Project 2',
      link: 'https://selliplus.com',
    },
    {
      img: 'https://via.placeholder.com/300x180?text=Project+3',
      title: 'Project 3',
      description: 'Short description of Project 3',
      link: 'https://selliplus.com',
    },
  ];

  return (
    <Layout title="Home" description="Personal homepage of Konrad">
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-gradient-to-r from-blue-700 to-orange-400 text-white rounded-xl m-8">
        {/* Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Konrad</h1>
          <p className="text-lg">
            I am turning ideas into money-making SaaS solutions, and love to create things.
          </p>
        </div>
        {/* Profile Image with "chaotic" border */}
        <div className="md:w-1/2 flex justify-center">
          <div
            className="relative w-64 h-64 p-2 border-4 border-dashed border-white rounded-full"
          >
            <img
              src="/img/konrad_foto2.jpg" // or wherever your image is in /static
              alt="Konrad's portrait"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </section>

      {/* MY PROJECTS */}
      <section className="my-16 mx-8">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs mx-auto"
            >
              <img src={proj.img} alt={proj.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-gray-600 mb-2">{proj.description}</p>
                <Link
                  to={proj.link}
                  className="text-blue-600 hover:underline font-medium"
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
      <section className="my-16 mx-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-2">
          If you'd like to discuss ideas, collaborations, or anything else, reach out at:
        </p>
        <p className="font-semibold mb-4">youremail@example.com</p>
        <p>
          Also, feel free to check out my{' '}
          <Link to="/blog" className="text-blue-600 hover:underline">
            blog
          </Link>{' '}
          for more insights!
        </p>
      </section>
    </Layout>
  );
}
