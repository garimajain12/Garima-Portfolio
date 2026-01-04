/* jshint ignore:start */
/* eslint-env es6 */
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import '../styles/Work.css'
import project1 from '../image/project1.png'
import project2 from '../image/project2.png'
import project3 from '../image/project3.png'
import project4 from '../image/project4.png'
import project5 from '../image/project5.png'

const Work = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      id: 1,
      title: 'Job Hunt Platform',
      description: 'Built a Job Hunt Portal using MERN stack with authentication, job filtering, applicant tracking, and role-based access control.',
      tech: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind', 'Shadcn/UI'],
      image: project1,
      github: 'https://github.com/garimajain12/Job-Hunt',
      live: 'https://getmyjob.vercel.app/',
    },
    {
      id: 2,
      title: 'Electronic Store',
      description: 'A secure e-commerce platform built with MERN stack, featuring JWT authentication, admin panel, and Stripe payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'Tailwind', 'Express.js'],
      image: project2,
      github: 'https://github.com/garimajain12/Electronic-Store',
      live: 'https://electronicsstore-frontend.netlify.app/',
    },
    {
      id: 3,
      title: 'Blogging Application',
      description: 'A dynamic blog platform built with React and Redux, featuring create, edit, delete, and like functionality.',
      tech: ['React', 'Redux', 'Tailwind', 'JavaScript', 'Redux'],
      image: project3,
      github: 'https://github.com/garimajain12/Myblogs',
      live: 'https://my-blogs-12.netlify.app/',
    },
    {
      id: 4,
      title: 'Snake Game',
      description: 'A classic Snake game built with HTML, CSS, and JavaScript featuring smooth animations and keyboard controls.',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      image: project4,
      github: 'https://github.com/garimajain12/Snake_Game',
      live: 'https://reversingsnake.netlify.app/',
    },
     {
      id: 5,
      title: 'Password Generator Application',
      description: 'A secure password generator built with HTML, CSS, and JavaScript, allowing users to create strong passwords with customizable length and character options.',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      image: project5,
      github: 'https://github.com/garimajain12/Password-Generator',
      live: 'https://password-generator-50.vercel.app/',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="work" className="work" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={cardVariants}>
            My Work
          </motion.h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={cardVariants}
                whileHover={{ y: -10 }}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <div className="project-image">
                  {project.image === 'project2' || project.image === 'project3' || project.image === 'project4' || project.image === 'project5' ? (
                    <div className={`project-placeholder ${project.image}`}>
                      <div className="project-overlay">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      </div>
                    </div>
                  ) : (
                    <div className="project-image-wrapper">
                      <img src={project.image} alt={project.title} className="project-img" />
                      <div className="project-overlay">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                      </div>
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Work

