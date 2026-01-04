/* jshint ignore:start */
/* eslint-env es6 */
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaReact,
  FaNode,
  FaJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaAws,
  FaCode,
  FaCog,
  FaServer,
  FaProjectDiagram,
  FaCoffee,
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiMongodb, 
  SiMysql, 
  SiHtml5, 
  SiCss3, 
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiPostman,
  SiBootstrap,
  SiDotnet,
  SiAmazonaws,
  SiFirebase,
  SiRedis,
  SiGithub,
  SiJson
} from 'react-icons/si'
import '../styles/Skills.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss3 },
        { name: 'Javascript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Java', icon: FaCode },
      ],
    },
    {
      title: 'Frameworks & Tools',
      // description: 'Frameworks and development tools',
      skills: [
        { name: 'ReactJS', icon: SiReact },
        { name: 'NodeJS', icon: SiNodedotjs },
        { name: 'ExpressJS', icon: SiExpress },
        { name: 'NextJS', icon: SiNextdotjs },
        { name: 'Redux', icon: SiRedux },
        { name: 'Tailwind', icon: SiTailwindcss },
        { name: 'Bootstrap', icon: SiBootstrap },
        { name: '.NET Core', icon: SiDotnet },
      ],
    },
    {
      title: 'Cloud & Databases',
      // description: 'Cloud platforms & Databases',
      skills: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'AWS', icon: SiAmazonaws },
        { name: 'MySQL', icon: SiMysql },
        { name: 'Postman', icon: SiPostman },
      ],
    },
    {
      title: 'Core Engineering',
      // description: 'Academic & Core Engineering',
      skills: [
        { name: 'DSA', icon: FaCode },
        { name: 'OS', icon: FaServer },
        { name: 'Networking', icon: FaProjectDiagram },
        { name: 'Github', icon: SiGithub },
        { name: 'OOPS', icon: FaCog },
      ],
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

  const categoryVariants = {
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
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={categoryVariants}>
            Skills
          </motion.h2>
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="skill-category"
                variants={categoryVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <div className="category-header">
                  <h3 className="category-title">{category.title}</h3>
                  {/* <p className="category-description">{category.description}</p> */}
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{
                        delay: categoryIndex * 0.15 + skillIndex * 0.08,
                        duration: 0.4,
                        ease: 'easeOut',
                      }}
                    >
                      <div className="skill-header">
                        <div className="skill-icon">
                          <skill.icon />
                        </div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

