/* jshint ignore:start */
/* eslint-env es6 */
import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'
import portfolioPhoto from '../image/portfolio-image.png'
import '../styles/Home.css'

const Home = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="home">
      <div className="home-container">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="home-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="highlight">Garima Jain</span>
          </motion.h1>
          <motion.h2
            className="home-subtitle"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Engineer
          </motion.h2>
          <motion.p
            className="home-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I create beautiful and functional web experiences
            that make a difference.
          </motion.p>
          <motion.div
            className="home-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#work"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('work')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="image-wrapper">
            <motion.img
              src={portfolioPhoto}
              alt="Garima Jain"
              className="profile-image"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
            />
            <div className="image-glow"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={scrollToAbout}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  )
}

export default Home

