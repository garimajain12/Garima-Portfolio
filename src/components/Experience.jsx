/* jshint ignore:start */
/* eslint-env es6 */
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import '../styles/Experience.css'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedId, setExpandedId] = useState(null)

  // Helper function to format period string
  const formatPeriod = (startDate, endDate) => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const start = new Date(startDate)
    const startMonth = monthNames[start.getMonth()]
    const startYear = start.getFullYear()
    
    if (endDate === 'Present') {
      return `${startMonth} ${startYear} - Present`
    } else {
      const end = new Date(endDate)
      const endMonth = monthNames[end.getMonth()]
      const endYear = end.getFullYear()
      return `${startMonth} ${startYear} - ${endMonth} ${endYear}`
    }
  }

  // Helper function to calculate duration
  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate)
    const end = endDate === 'Present' ? new Date() : new Date(endDate)
    const years = end.getFullYear() - start.getFullYear()
    const months = end.getMonth() - start.getMonth()
    const totalMonths = years * 12 + months
    
    if (totalMonths < 12) {
      return `${totalMonths} months`
    } else {
      const y = Math.floor(totalMonths / 12)
      const m = totalMonths % 12
      return m > 0 ? `${y} years ${m} months` : `${y} years`
    }
  }

  const experiences = [
    {
      id: 1,
      title: 'Software Development Engineer - 1',
      company: 'KYCHub',
      startDate: '2025-05-21',
      endDate: 'Present',
      description: [
        'Developed and enhanced scalable React-based frontend applications using React, TypeScript, and JavaScript, building responsive and interactive user interfaces for KYC compliance and customer onboarding workflows that improved user experience by 40%.',
        'Implemented complex React components with hooks, context API, and state management, creating reusable UI libraries and component systems that increased development efficiency and code maintainability across the team.',
        'Collaborated with UI/UX designers and product managers to translate design mockups into pixel-perfect React applications, building interactive user journey dashboards and analytics features that contributed to a 25% increase in user engagement and onboarding completion rates.',
      ],
      // location: 'Remote',
      technologies: ['React', 'Node.js', 'TypeScript', 'JavaScript', 'Redux'],
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Nirvana Solutions',
      startDate: '2023-01-01',
      endDate: '2024-08-31',
      description: [
        'Developed and maintained full-stack financial applications using React.js for frontend and .NET Framework for backend, ensuring high performance and scalability. Contributed to implementing T+1 settlement cycle by automating processes using FIX connections, reducing settlement time and ensuring compliance with new stock market regulations.',
        'Optimized system performance through strategic code refactoring and integrated SonarQube for advanced logging and monitoring, resulting in 30% improvement in system stability and streamlined debugging processes.',
        'Migrated legacy modules to modern React and .NET architectures, minimizing technical debt and improving overall system reliability. Collaborated with cross-functional teams to deliver high-performing solutions that streamlined financial operations.',
      ],
      // location: 'Remote',
      technologies: ['React', 'JavaScript', 'C#', '.NET Framework', '.NET Core',],
    },
    {
      id: 3,
      title: 'Frontend Developer Intern',
      company: 'ThoughtStream Innovation Pvt. Ltd. ',
      startDate: '2022-07-01',
      endDate: '2022-09-30',
      description: [
        'Collaborated with a team of six to develop an interior design website, focusing on building responsive and user-friendly UI  components using HTML, CSS, and JavaScript.',
        'Strengthened frontend development and teamwork skills by delivering a polished, cross-device compatible interface.',
      ],
      // location: 'New York, NY',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
  ]

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Experience
          </motion.h2>
          <div className="experience-list">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id
              const duration = calculateDuration(exp.startDate, exp.endDate)
              const period = formatPeriod(exp.startDate, exp.endDate)
              
              return (
                <motion.div
                  key={exp.id}
                  className="experience-card"
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                >
                  <div className="experience-card-header" onClick={() => toggleExpand(exp.id)}>
                    <div className="experience-card-main">
                      <div className="company-logo">
                        {exp.company.charAt(0)}
                      </div>
                      <div className="experience-card-info">
                        <h3 className="company-name">{exp.company}</h3>
                        <div className="job-title-badge">{exp.title}</div>
                        <p className="experience-period">
                          {period} <span className="duration-separator">●</span> {duration}
                        </p>
                      </div>
                    </div>
                    <motion.button
                      className="expand-button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                    </motion.button>
                  </div>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        className="experience-card-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="experience-details">
                          <p className="experience-location">{exp.location}</p>
                          <div className="experience-description">
                            {Array.isArray(exp.description) ? (
                              <ul className="description-list">
                                {exp.description.map((point, idx) => (
                                  <li key={idx}>{point}</li>
                                ))}
                              </ul>
                            ) : (
                              <p>{exp.description}</p>
                            )}
                          </div>
                          {exp.technologies && exp.technologies.length > 0 && (
                            <div className="experience-technologies">
                              <h4>Technologies & Skills</h4>
                              <div className="tech-tags">
                                {exp.technologies.map((tech, techIndex) => (
                                  <span key={techIndex} className="tech-tag">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

