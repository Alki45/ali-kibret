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
    { icon: Award, label: "Great Distinction", value: "Graduation", color: "text-yellow-500" },
    { icon: Target, label: "Projects", value: "6+", color: "text-primary" },
    { icon: Users, label: "Research Assistant", value: "ASTU", color: "text-secondary" },
    { icon: Zap, label: "Technologies", value: "15+", color: "text-purple-500" },
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
                <span className="font-semibold text-primary"> Data Scientist</span> and 
                <span className="font-semibold text-secondary"> Python Developer</span> with dual BSc degrees 
                in Computer Science & Engineering and Electronics & Communication Engineering from 
                Adama Science and Technology University.
              </p>
              <p>
                Currently serving as an <span className="font-semibold text-primary">Academic Research Assistant</span> at ASTU, 
                I specialize in AI, computer vision, and networking research. My experience includes developing 
                real-world projects like an Amharic Sign Language Transcription system and building autonomous 
                quadruped robots with advanced object detection capabilities.
              </p>
              <p>
                I'm passionate about <span className="font-semibold text-secondary">machine learning</span>, 
                <span className="font-semibold text-primary"> computer vision</span>, and 
                <span className="font-semibold text-purple-500"> algorithmic problem solving</span>. 
                Currently enhancing my competitive programming skills through A2SV's intensive training program.
              </p>
            </div>

            {/* Skills Progress */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Technical Expertise</h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
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
                  className="card-professional p-6 text-center group hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-0">
                    <achievement.icon className={`w-8 h-8 mx-auto mb-3 ${achievement.color} group-hover:scale-110 transition-transform`} />
                    <div className="text-2xl font-bold text-foreground mb-1">
                      <AnimatedCounter 
                        end={achievement.value === "6+" ? 6 : achievement.value === "15+" ? 15 : 0} 
                        duration={2}
                      />
                      {achievement.value.includes("+") ? "+" : ""}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {achievement.label}
                    </div>
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
                onClick={() => window.open("https://linkedin.com/in/ali-kibret", "_blank")}
              >
                <Mail className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
