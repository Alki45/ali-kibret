"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Code } from "lucide-react"

interface NavigationProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  scrollToSection: (sectionId: string) => void
}

export function Navigation({ isMenuOpen, setIsMenuOpen, scrollToSection }: NavigationProps) {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-foreground">Ali Kibret</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
