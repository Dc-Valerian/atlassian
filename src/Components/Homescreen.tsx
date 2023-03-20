import React from 'react'
import { NavLink } from 'react-router-dom'
import Career from './Career/Career'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import Join from './Join/Join'
import Solutions from './Solutions/Solutions'
import Team from './Team/Team'

const Homescreen = () => {
  return (
    <div>
        <Hero />
        <Solutions />
        <Join />
        <Team />
        <Career />
        <Footer />
    </div>
  )
}

export default Homescreen