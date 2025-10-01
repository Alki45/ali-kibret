"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Brain, 
  Code, 
  Database, 
  Mail, 
  Github, 
  Download, 
  ArrowRight,
  Award,
  Target,
  Users,
  Zap,
  Lightbulb,
  CheckCircle
} from "lucide-react"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { DataVisualization } from "@/components/features/DataVisualization"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const achievements = [
    { 
      icon: Award, 
      label: "Great Distinction", 
      value: "Great Distinction", 
      displayValue: "🎓 BSc", 
      numeric: false, 
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      description: "Dual degree graduation"
    },
    { 
      icon: Target, 
      label: "Projects Completed", 
      value: "6+", 
      displayValue: 6, 
      numeric: true, 
      color: "text-primary",
      bgColor: "bg-primary/10",
      description: "Real-world applications"
    },
    { 
      icon: Users, 
      label: "Research Assistant", 
      value: "ASTU", 
      displayValue: "ASTU", 
      numeric: false, 
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      description: "Since Oct 2024"
    },
    { 
      icon: Zap, 
      label: "Technologies", 
      value: "15+", 
      displayValue: 15, 
      numeric: true, 
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      description: "Languages & frameworks"
    },
  ]

  const skills = [
    { name: "Python", level: 95, color: "bg-primary" },
    { name: "Machine Learning", level: 90, color: "bg-secondary" },
    { name: "Data Analysis", level: 88, color: "bg-purple-500" },
    { name: "Django", level: 85, color: "bg-green-500" },
    { name: "TensorFlow", level: 82, color: "bg-orange-500" },
    { name: "React", level: 80, color: "bg-blue-500" },
  ]

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card/30 to-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            {/* Header */}
            <div className="space-y-4">
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/20 text-primary bg-primary/5">
                <Lightbulb className="w-4 h-4 mr-2" />
                About Me
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold font-display gradient-text-primary">
                Passionate Data Scientist & Python Developer
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transforming complex data into actionable insights that drive business success
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="font-semibold text-foreground">Ali Kibret Muhamed</span>, a detail-oriented 
                <span className="font-semibold text-primary"> Junior Data Analyst</span> and 
                <span className="font-semibold text-secondary"> Python Developer</span> with dual BSc degrees 
                in <span className="font-semibold text-foreground">Computer Science & Engineering</span> and 
                <span className="font-semibold text-foreground">Electronics & Communication Engineering</span> from 
                Adama Science and Technology University, graduated with <span className="font-semibold text-yellow-500">Great Distinction</span> in July 2024.
              </p>
              <p>
                Currently serving as an <span className="font-semibold text-primary">Academic Research Assistant</span> at ASTU since October 2024, 
                I specialize in AI, computer vision, and networking research. My experience includes developing 
                real-world projects like an <span className="font-semibold text-secondary">Amharic Sign Language Transcription system</span> using deep learning, 
                and building <span className="font-semibold text-primary">autonomous quadruped robots</span> with advanced object detection capabilities using Python and OpenCV.
              </p>
              <p>
                I'm passionate about <span className="font-semibold text-secondary">machine learning</span>, 
                <span className="font-semibold text-primary"> computer vision</span>, 
                <span className="font-semibold text-purple-500"> data analysis</span>, and 
                <span className="font-semibold text-orange-500"> algorithmic problem solving</span>. 
                Currently enhancing my competitive programming skills through <span className="font-semibold text-primary">A2SV's intensive Data Structures & Algorithms training program</span>, 
                solving challenges on LeetCode and Codeforces while mentoring peers.
              </p>
            </div>

            {/* Technical Expertise */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Technical Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill.name}
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-professional text-white group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Collaborate
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/20 text-primary hover:bg-primary hover:text-white bg-transparent group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {/* Profile Picture */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl group hover:scale-105 transition-all duration-300">
                  <img 
                    src="/profile-picture.jpg" 
                    alt="Ali Kibret Muhamed - Data Scientist & Python Developer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={achievement.label}
                  className={`card-professional p-6 text-center group hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden ${achievement.bgColor}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  title={achievement.description}
                >
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-0 relative z-10">
                    {/* Icon with animated background */}
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${achievement.bgColor} flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}>
                      <achievement.icon className={`w-8 h-8 ${achievement.color} group-hover:scale-125 transition-transform duration-300`} />
                    </div>
                    
                    {/* Counter/Value Display */}
                    <div className="text-3xl font-black text-foreground mb-2 group-hover:scale-110 transition-transform duration-300">
                      {achievement.numeric && typeof achievement.displayValue === 'number' ? (
                        <>
                          {isVisible && <AnimatedCounter end={achievement.displayValue} duration={2} />}
                          {achievement.value.includes("+") && <span className={achievement.color}>+</span>}
                        </>
                      ) : (
                        <span className="text-xl font-extrabold">{achievement.displayValue}</span>
                      )}
                    </div>
                    
                    {/* Label */}
                    <div className="text-sm text-muted-foreground font-semibold mb-1">
                      {achievement.label}
                    </div>
                    
                    {/* Description on hover */}
                    <div className="text-xs text-muted-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                      {achievement.description}
                    </div>
                    
                    {/* Decorative shine effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Interactive Data Visualization */}
            <DataVisualization />

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary/20 text-primary hover:bg-primary hover:text-white bg-transparent"
                onClick={() => window.open("https://github.com/alki45", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-secondary/20 text-secondary hover:bg-secondary hover:text-white bg-transparent"
                onClick={() => window.open("mailto:alikibretmuhamed@gmail.com")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
