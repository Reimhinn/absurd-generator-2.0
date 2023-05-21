import React from 'react'
import MainNavbar from '../components/MainNavbar'
import WordsSection from '../components/WordsSection'
import '../styles/homepage.css'
import GenerationSection from '../components/GenerationSection'

function HomePage() {
  return (
    <div id='homepage'>
        <MainNavbar />
        <WordsSection />
        <GenerationSection />
    </div>
  )
}

export default HomePage