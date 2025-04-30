'use client'

import React, { useEffect, useState } from 'react'
import './about.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AutoFlipCard from "@/component/cart"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='about-container'>
      {/* 🆕 AutoFlipCard placed at the top */}
    

      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <h1 className="title">About Us</h1>
          <p className="subtitle">The team that turns your dreams into reality</p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <h2 className="sectionTitle">Our Mission</h2>
          <p className="text">
            We are committed to providing high-quality construction services that are completed on time and within budget.
          </p>
        </div>
      </section>
      <AutoFlipCard />
      
      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2 className="sectionTitle">Our Team</h2>
          <div className="teamGrid">
            <div className="teamMember">
              <Image
                src="https://images.unsplash.com/photo-1745770998338-eb50b0c89b16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                alt="Ajay Kumar - CEO"
                width={150}
                height={150}
                className="teamImage"
              />
              <h3>Ajay Kumar</h3>
              <p>CEO</p>
            </div>
            <div className="teamMember">
              <Image
                src="https://images.unsplash.com/photo-1745770998338-eb50b0c89b16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                alt="Sima Sharma - Project Manager"
                width={150}
                height={150}
                className="teamImage"
              />
              <h3>Sima Sharma</h3>
              <p>Project Manager</p>
            </div>
            {/* Add more team members if needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      
    </div>
  )
}
