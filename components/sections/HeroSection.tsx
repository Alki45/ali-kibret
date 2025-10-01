"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Download, ArrowRight, Sparkles, Zap } from "lucide-react"
import { TypewriterText } from "@/components/ui/TypewriterText"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"

interface HeroSectionProps {
  isVisible: boolean
  scrollToSection: (sectionId: string) => void
}

export function HeroSection({ isVisible, scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(8,145,178,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(8,145,178,0.05),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-ping" />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/50 rounded-full animate-bounce" />
        <div className="absolute top-60 right-40 w-1 h-1 bg-secondary/70 rounded-full animate-pulse" />
        <div className="absolute bottom-60 right-10 w-2 h-2 bg-primary/30 rounded-full animate-ping" />
      </div>

      <div className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Status Badge */}
            <div className="mb-8 animate-float">
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/20 text-primary bg-primary/5 hover:bg-primary/10 transition-colors">
                <Sparkles className="w-4 h-4 mr-2" />
                Available for Opportunities
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Ali Kibret</span>
            </h1>
        
        <div className="text-xl sm:text-2xl lg:text-3xl mb-4 text-muted-foreground font-medium">
          <TypewriterText 
            texts={[
              "Data Scientist & Python Developer",
              "Machine Learning Engineer", 
              "AI Research Assistant",
              "Full-Stack Developer",
              "Data Visualization Expert"
            ]}
            speed={100}
            deleteSpeed={50}
            delay={2000}
          />
        </div>

        {/* Subtitle with typing effect */}
        <div className="text-lg sm:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
          <TypewriterText 
            texts={[
              "Turning complex data into intelligent solutions that drive business growth",
              "Building scalable machine learning models and data-driven applications",
              "Creating innovative AI solutions for real-world problems",
              "Transforming raw data into actionable insights and predictions"
            ]}
            speed={50}
            deleteSpeed={30}
            delay={3000}
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">
              <AnimatedCounter end={6} duration={2} />+
            </div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-1">
              <AnimatedCounter end={2} duration={2} />+
            </div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">
              <AnimatedCounter end={6} duration={2} />+
            </div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>

        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-primary/20 text-primary hover:bg-primary hover:text-white bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={() => scrollToSection("contact")}
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Get In Touch
          </Button>
        </div>

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["Python", "Django", "TensorFlow", "Pandas", "React", "PostgreSQL"].map((tech) => (
            <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm bg-muted/50 hover:bg-muted transition-colors">
              {tech}
            </Badge>
          ))}
        </div>

          </div>

          {/* Right Column - Profile Picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl group hover:scale-105 transition-all duration-500">
                <img 
                  src="/profile-picture.jpg" 
                  alt="Ali Kibret Muhamed - Data Scientist & Python Developer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Floating Elements around profile picture */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/80 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
