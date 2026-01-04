import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import '../styles/Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'garimajain120403@gmail.com',
      link: 'mailto:garimajain120403@gmail.com',
    },
    // {
    //   icon: FaPhone,
    //   title: 'Phone',
    //   value: '+1 (555) 123-4567',
    //   link: 'tel:+15551234567',
    // },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Bengaluru, India',
      // link: '#',
    },
  ]

  const socialLinks = [
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/garima-jain-6852311a9/', label: 'LinkedIn' },
    { icon: FaGithub, link: 'https://github.com/garimajain12', label: 'GitHub' },
    { icon: SiLeetcode, link: 'https://leetcode.com/u/garimajain12/', label: 'LeetCode' },
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
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Get In Touch
          </motion.h2>
          <div className="contact-content">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Let's Connect</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="contact-item"
                    whileHover={{ scale: 1.05, x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className="contact-icon">
                      <info.icon />
                    </div>
                    <div className="contact-text">
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              variants={itemVariants}
            >
              <motion.div
                className="form-group"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.3 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div
                className="form-group"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.4 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div
                className="form-group"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.5 }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

