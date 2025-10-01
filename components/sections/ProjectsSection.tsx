"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { 
  Brain, 
  Cpu, 
  TrendingUp, 
  BarChart3, 
  Database, 
  GraduationCap,
  Github,
  ExternalLink,
  Eye,
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Award
} from "lucide-react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [isDemoRunning, setIsDemoRunning] = useState(false)
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

  const projects = [
    {
      id: 1,
      title: "Amharic Sign Language Transcription",
      description: "Real-time sign language recognition system using deep learning and computer vision to bridge communication gaps for the deaf community in Ethiopia. My favorite project!",
      longDescription: "Developed a comprehensive sign language transcription system that can recognize Amharic sign language in real-time. The system uses advanced computer vision techniques combined with deep learning models to accurately translate hand gestures into text. Built with Python, OpenCV, and TensorFlow, it achieves high accuracy in various lighting conditions and hand positions. This project represents my passion for using AI to solve accessibility challenges in Ethiopia.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning", "Computer Vision", "Real-time Processing"],
      github: "https://github.com/Alki45/Amharic-sign-Language-Transcription.git",
      demo: "#",
      metrics: "⭐ Favorite Project",
      icon: <Brain className="w-6 h-6" />,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      features: [
        "Real-time gesture recognition",
        "Multi-hand tracking",
        "Lighting adaptation",
        "Mobile-friendly interface",
        "Offline processing capability"
      ],
      challenges: [
        "Complex hand gesture variations",
        "Lighting condition changes",
        "Real-time processing requirements",
        "Ethiopian sign language complexity"
      ],
      results: [
        "85% accuracy in controlled environments",
        "85% accuracy in varying lighting",
        "Real-time processing under 100ms",
        "Successfully deployed for testing"
      ]
    },
    {
      id: 2,
      title: "Solar Data Discovery",
      description: "Week 0 challenge for 10 Academy's AI Mastery Program. Analyzing solar energy data from Benin, Sierra Leone, and Togo to uncover insights for sustainable solar energy development.",
      longDescription: "Comprehensive exploratory data analysis on solar radiation datasets from three African countries. The project focuses on data cleaning, profiling, and comparative analytics to provide preliminary insights into solar power potential and environmental impacts. Built with Python and advanced visualization libraries to deliver actionable insights for solar energy planning.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
      github: "https://github.com/Alki45/solar-data-discovery-Week0.git",
      demo: "#",
      metrics: "10 Academy Week 0",
      icon: <Target className="w-6 h-6" />,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
      features: [
        "Multi-country data analysis",
        "Solar radiation profiling",
        "Environmental impact assessment",
        "Interactive visualizations",
        "Comparative analytics"
      ],
      challenges: [
        "Multi-source data integration",
        "Data quality assurance",
        "Cross-country comparison",
        "Meaningful insight extraction"
      ],
      results: [
        "Comprehensive EDA completed",
        "Solar potential insights identified",
        "Country-wise comparative analysis",
        "Actionable recommendations provided"
      ]
    },
    {
      id: 3,
      title: "Stock Prediction with NLP",
      description: "Week 1 challenge applying Natural Language Processing techniques to analyze financial news sentiment and predict stock price movements using advanced ML models.",
      longDescription: "Developed a sophisticated stock price prediction system that combines NLP sentiment analysis with time-series forecasting. The project analyzes financial news headlines to extract sentiment scores and correlates them with stock price movements. Features include sentiment scoring, technical indicator calculation, and predictive modeling using LSTM and ARIMA models.",
      technologies: ["Python", "NLP", "NLTK", "TextBlob", "Pandas", "TensorFlow", "LSTM"],
      github: "https://github.com/Alki45/stock-prediction-nlp-week1.git",
      demo: "#",
      metrics: "10 Academy Week 1",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      features: [
        "News sentiment analysis",
        "Financial NLP processing",
        "Technical indicator calculation",
        "LSTM price prediction",
        "Correlation analysis"
      ],
      challenges: [
        "Sentiment accuracy",
        "Feature engineering",
        "Model overfitting prevention",
        "Real-time data integration"
      ],
      results: [
        "Accurate sentiment scoring",
        "Strong sentiment-price correlation",
        "Improved prediction accuracy",
        "Comprehensive feature set"
      ]
    },
    {
      id: 4,
      title: "Insurance Risk Analytics & Predictive Modeling",
      description: "Advanced predictive modeling for insurance risk assessment using machine learning to optimize premium calculations and identify high-risk profiles.",
      longDescription: "Comprehensive insurance analytics project that uses machine learning to predict claim risks and optimize insurance pricing. The system analyzes historical insurance data, customer demographics, and claim patterns to build predictive models. Features include risk scoring, customer segmentation, and automated premium recommendations based on risk profiles.",
      technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Random Forest", "Feature Engineering"],
      github: "https://github.com/Alki45/insurance-risk-analytics-predictive-modeling.git",
      demo: "#",
      metrics: "Risk Prediction",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      features: [
        "Risk score calculation",
        "Customer segmentation",
        "Claim prediction models",
        "Premium optimization",
        "Interactive dashboards"
      ],
      challenges: [
        "Imbalanced dataset handling",
        "Feature engineering",
        "Model interpretability",
        "Real-world deployment"
      ],
      results: [
        "High prediction accuracy",
        "Effective risk stratification",
        "Optimized premium calculation",
        "Actionable business insights"
      ]
    },
    {
      id: 5,
      title: "Book-Family: AI-Powered Book Community",
      description: "Advanced Book Community Website built with Vue.js, Golang, and Python featuring AI-powered recommendations, advanced search, and engaging user experience.",
      longDescription: "Book-family is a comprehensive book community platform that brings together book enthusiasts with cutting-edge technology. Built with a modern tech stack including Vue.js for the frontend, Golang for high-performance backend services, and Python for AI-powered recommendation engine. The platform features advanced search capabilities, personalized book recommendations, user reviews, and a vibrant community experience.",
      technologies: ["Vue.js", "Golang", "Python", "AI/ML", "REST API", "PostgreSQL"],
      github: "https://github.com/Alki45/book_family.git",
      demo: "https://alki45.github.io/book_family/",
      metrics: "Live Demo Available",
      icon: <Brain className="w-6 h-6" />,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      features: [
        "AI-powered book recommendations",
        "Advanced search functionality",
        "User reviews and ratings",
        "Community discussions",
        "Responsive modern UI"
      ],
      challenges: [
        "Recommendation algorithm design",
        "Frontend-backend integration",
        "Performance optimization",
        "User experience design"
      ],
      results: [
        "Fully functional platform",
        "AI recommendation system",
        "Engaging user interface",
        "Live deployment successful"
      ]
    },
    {
      id: 6,
      title: "Lab Schedule Management System",
      description: "Interactive web-based laboratory schedule management system for efficient resource allocation and time management in academic settings.",
      longDescription: "Developed a comprehensive lab schedule management system designed for academic institutions. The web-based application provides an intuitive interface for managing laboratory sessions, resource allocation, and schedule conflicts. Features include calendar views, automated conflict detection, resource booking, and email notifications for students and faculty.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "GitHub Pages"],
      github: "https://github.com/Alki45/Lab_schedule",
      demo: "https://alki45.github.io/Lab_schedule/",
      metrics: "Live & Deployed",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      features: [
        "Interactive calendar interface",
        "Resource booking system",
        "Conflict detection",
        "User notifications",
        "Mobile-responsive design"
      ],
      challenges: [
        "Schedule conflict resolution",
        "User interface design",
        "Real-time updates",
        "Cross-device compatibility"
      ],
      results: [
        "Deployed and in use",
        "Efficient schedule management",
        "Reduced booking conflicts",
        "Positive user feedback"
      ]
    }
  ]

  const startDemo = (projectId: number) => {
    setIsDemoRunning(true)
    // Simulate demo running
    setTimeout(() => {
      setIsDemoRunning(false)
    }, 3000)
  }

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card/20 to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-in-top' : 'opacity-0'}`}>
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/20 text-primary bg-primary/5 mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Featured Projects
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-display gradient-text-primary mb-6">
            Innovative Solutions & Real-World Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my portfolio of data science projects, machine learning solutions, and full-stack applications that solve real-world problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`}>
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="card-professional group hover:scale-105 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedProject(project.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${project.bgColor} ${project.color} group-hover:scale-110 transition-transform`}>
                    {project.icon}
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`${project.bgColor} ${project.color} border-0`}
                  >
                    {project.metrics}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs border-muted-foreground/20 text-muted-foreground">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/20 text-primary hover:bg-primary hover:text-white bg-transparent group"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.github, '_blank')
                    }}
                  >
                    <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-secondary/20 text-secondary hover:bg-secondary hover:text-white bg-transparent group"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProject(project.id)
                    }}
                  >
                    <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              {(() => {
                const project = projects.find(p => p.id === selectedProject)
                if (!project) return null

                return (
                  <>
                    <DialogHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-lg ${project.bgColor} ${project.color}`}>
                          {project.icon}
                        </div>
                        <div>
                          <DialogTitle className="text-2xl font-bold text-foreground">
                            {project.title}
                          </DialogTitle>
                          <DialogDescription className="text-muted-foreground">
                            {project.metrics} • {project.technologies.length} Technologies
                          </DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>

                    <div className="space-y-6">
                      {/* Description */}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Project Overview</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
                      </div>

                      {/* Features */}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Results & Impact</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {project.results.map((result, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Award className="w-4 h-4 text-secondary" />
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Demo Section */}
                      <div className="bg-card/50 p-6 rounded-lg border">
                        <h3 className="text-lg font-semibold text-foreground mb-4">Live Demo</h3>
                        <div className="flex items-center justify-center h-32 bg-muted/50 rounded-lg mb-4">
                          {isDemoRunning ? (
                            <div className="text-center">
                              <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
                              <p className="text-sm text-muted-foreground">Running demo...</p>
                            </div>
                          ) : (
                            <div className="text-center">
                              <Play className="w-12 h-12 text-primary mx-auto mb-2" />
                              <p className="text-sm text-muted-foreground">Click to start demo</p>
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => startDemo(project.id)}
                            disabled={isDemoRunning}
                            className="btn-professional text-white"
                          >
                            {isDemoRunning ? (
                              <>
                                <Pause className="w-4 h-4 mr-2" />
                                Running...
                              </>
                            ) : (
                              <>
                                <Play className="w-4 h-4 mr-2" />
                                Start Demo
                              </>
                            )}
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => window.open(project.github, '_blank')}
                            className="border-primary/20 text-primary hover:bg-primary hover:text-white"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <Button
                          onClick={() => window.open(project.github, '_blank')}
                          className="btn-professional text-white flex-1"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => window.open(project.demo, '_blank')}
                          className="border-secondary/20 text-secondary hover:bg-secondary hover:text-white flex-1"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </>
                )
              })()}
            </DialogContent>
          </Dialog>
        )}

        {/* CTA Section */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <Card className="card-professional p-8 max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold font-display gradient-text-primary">
                  Ready to Build Something Amazing?
                </h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Let's collaborate on your next data science project or web application. 
                I'm always excited to work on innovative solutions that make a real impact.
              </p>
              <Button 
                size="lg" 
                className="btn-professional text-white group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
