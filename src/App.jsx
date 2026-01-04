import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Home />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </ThemeProvider>
  )
}

export default App

