"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { Navigation } from "@/components/layout/Navigation"
import { AIChatbot } from "@/components/features/AIChatbot"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollToSection={scrollToSection} 
      />
      
      <HeroSection isVisible={isVisible} scrollToSection={scrollToSection} />
      
      <AboutSection />
      
      <SkillsSection />
      
      <ProjectsSection />

      <AIChatbot />
    </div>
  )
}
