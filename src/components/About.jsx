/* jshint ignore:start */
/* eslint-env es6 */
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import '../styles/About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
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
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>
          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                I'm a full-stack developer with experience in both backend and frontend
                development. I specialize in building scalable web applications using
                modern technologies and best practices.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                On the frontend, I create responsive and interactive user interfaces
                using React and modern JavaScript frameworks. I focus on delivering
                exceptional user experiences with clean, maintainable code.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                On the backend, I design and implement robust server-side solutions,
                RESTful APIs, and database architectures. I'm experienced with Node.js,
                Python, and various database systems, ensuring efficient data management
                and seamless integration between frontend and backend systems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                I'm passionate about continuous learning and staying updated with the
                latest industry trends. I believe in writing code that is not only
                functional but also maintainable, scalable, and follows best practices.
              </motion.p>
              <motion.div
                className="about-stats"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <motion.div
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1.2, duration: 0.5, type: 'spring', stiffness: 100 }}
                  whileHover={{ scale: 1.08, y: -8, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.h3
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1.4, duration: 0.5, type: 'spring', stiffness: 200 }}
                  >
                    20+
                  </motion.h3>
                  <p>Technologies</p>
                </motion.div>
                <motion.div
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1.3, duration: 0.5, type: 'spring', stiffness: 100 }}
                  whileHover={{ scale: 1.08, y: -8, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.h3
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1.5, duration: 0.5, type: 'spring', stiffness: 200 }}
                  >
                    3+
                  </motion.h3>
                  <p>Years Experience</p>
                </motion.div>
                <motion.div
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1.4, duration: 0.5, type: 'spring', stiffness: 100 }}
                  whileHover={{ scale: 1.08, y: -8, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.h3
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 1.6, duration: 0.5, type: 'spring', stiffness: 200 }}
                  >
                    4
                  </motion.h3>
                  <p>Specializations</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

