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
      description: "Real-time sign language recognition system using deep learning and computer vision to bridge communication gaps for the deaf community in Ethiopia.",
      longDescription: "Developed a comprehensive sign language transcription system that can recognize Amharic sign language in real-time. The system uses advanced computer vision techniques combined with deep learning models to accurately translate hand gestures into text. Built with Python, OpenCV, and TensorFlow, it achieves high accuracy in various lighting conditions and hand positions.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning", "Computer Vision", "Real-time Processing"],
      github: "https://github.com/alki45/sign-language-transcription",
      demo: "#",
      metrics: "95% Accuracy",
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
        "95% accuracy in controlled environments",
        "85% accuracy in varying lighting",
        "Real-time processing under 100ms",
        "Successfully deployed for testing"
      ]
    },
    {
      id: 2,
      title: "Quadruped Autonomous Robot",
      description: "Built an intelligent quadruped robot with object detection and autonomous navigation capabilities using Python and OpenCV.",
      longDescription: "Developed a sophisticated quadruped robot during my internship at ASTU. The robot features advanced object detection using machine learning models and autonomous navigation algorithms. It can identify obstacles, plan paths, and navigate complex environments independently. The system integrates computer vision, machine learning, and robotics principles.",
      technologies: ["Python", "OpenCV", "Machine Learning", "Robotics", "Computer Vision", "Autonomous Systems"],
      github: "https://github.com/alki45/quadruped-robot",
      demo: "#",
      metrics: "Autonomous Navigation",
      icon: <Cpu className="w-6 h-6" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      features: [
        "Autonomous navigation",
        "Object detection and avoidance",
        "Path planning algorithms",
        "Real-time sensor processing",
        "Stable locomotion control"
      ],
      challenges: [
        "Complex locomotion mechanics",
        "Real-time sensor fusion",
        "Obstacle detection accuracy",
        "Power management"
      ],
      results: [
        "Successful autonomous navigation",
        "90% obstacle detection accuracy",
        "Stable locomotion on various terrains",
        "Real-time processing capability"
      ]
    },
    {
      id: 3,
      title: "Stock Price Analysis & Forecasting",
      description: "Advanced time-series machine learning models using LSTM and ARIMA to predict stock prices with high accuracy and interactive dashboards.",
      longDescription: "Developed a comprehensive stock price prediction system using advanced time-series analysis and machine learning techniques. The system combines LSTM neural networks with ARIMA models to provide accurate price predictions. Features an interactive dashboard with real-time data visualization, technical indicators, and risk assessment tools.",
      technologies: ["Python", "TensorFlow", "Pandas", "Plotly", "LSTM", "Time Series"],
      github: "https://github.com/alki45/stock-forecasting",
      demo: "#",
      metrics: "85% Accuracy",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      features: [
        "LSTM neural network predictions",
        "ARIMA time series analysis",
        "Interactive dashboards",
        "Real-time data processing",
        "Risk assessment tools"
      ],
      challenges: [
        "Market volatility modeling",
        "Feature engineering",
        "Model overfitting prevention",
        "Real-time data integration"
      ],
      results: [
        "85% prediction accuracy",
        "Real-time dashboard updates",
        "Multiple model ensemble",
        "Successful backtesting"
      ]
    },
    {
      id: 4,
      title: "Telecom User Behavior Analytics",
      description: "Implemented clustering algorithms and predictive modeling to analyze user behavior patterns and predict churn with high precision.",
      longDescription: "Developed a comprehensive analytics platform for telecom companies to understand user behavior and predict customer churn. The system uses advanced clustering algorithms (K-means) and machine learning models (Random Forest) to segment users and predict churn probability. Features include interactive visualizations, automated reporting, and actionable insights for business decisions.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn", "K-means", "Random Forest"],
      github: "https://github.com/alki45/telecom-analytics",
      demo: "#",
      metrics: "92% Precision",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      features: [
        "Customer segmentation",
        "Churn prediction models",
        "Behavior pattern analysis",
        "Interactive visualizations",
        "Automated reporting"
      ],
      challenges: [
        "Large dataset processing",
        "Feature selection",
        "Model interpretability",
        "Real-time predictions"
      ],
      results: [
        "92% churn prediction precision",
        "Effective customer segmentation",
        "Actionable business insights",
        "Reduced customer churn by 15%"
      ]
    },
    {
      id: 5,
      title: "Land Registration Management System",
      description: "Comprehensive web application using Django framework with MySQL database for automated land registration and document management.",
      longDescription: "Built a full-stack web application for land registration management using Django and MySQL. The system includes user authentication, document management, automated report generation, and a modern responsive UI. Features include role-based access control, document upload and processing, automated notifications, and comprehensive reporting capabilities.",
      technologies: ["Django", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap", "Python"],
      github: "https://github.com/alki45/land-registration",
      demo: "#",
      metrics: "Full-Stack Solution",
      icon: <Database className="w-6 h-6" />,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      features: [
        "User authentication system",
        "Document management",
        "Automated reporting",
        "Role-based access control",
        "Responsive design"
      ],
      challenges: [
        "Complex data relationships",
        "File upload handling",
        "Security implementation",
        "Performance optimization"
      ],
      results: [
        "Successful deployment",
        "User-friendly interface",
        "Efficient data management",
        "Automated workflow"
      ]
    },
    {
      id: 6,
      title: "Exit Exam Management System",
      description: "Automated examination system with Django and MySQL featuring question bank management, automated grading, and comprehensive analytics.",
      longDescription: "Developed a comprehensive examination management system for educational institutions. The system includes question bank management, automated exam generation, real-time grading, result analytics, and comprehensive reporting. Features include multiple question types, time management, plagiarism detection, and detailed performance analytics.",
      technologies: ["Django", "MySQL", "Python", "HTML/CSS", "JavaScript", "Chart.js"],
      github: "https://github.com/alki45/exam-management",
      demo: "#",
      metrics: "Automated Grading",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      features: [
        "Question bank management",
        "Automated exam generation",
        "Real-time grading",
        "Performance analytics",
        "Plagiarism detection"
      ],
      challenges: [
        "Complex grading algorithms",
        "Security measures",
        "Performance optimization",
        "User experience design"
      ],
      results: [
        "Automated grading system",
        "Comprehensive analytics",
        "Improved exam efficiency",
        "Enhanced security"
      ]
    },
    {
      id: 7,
      title: "Intelligent Web Scraping & Data Pipeline",
      description: "Advanced web scraping system with automated data collection, processing, and storage for research and business intelligence applications.",
      longDescription: "Developed a sophisticated web scraping and data pipeline system that can extract, process, and store large amounts of data from various web sources. The system includes intelligent parsing, data cleaning, duplicate detection, and automated storage in multiple database formats. Features include rate limiting, proxy rotation, and robust error handling.",
      technologies: ["Python", "BeautifulSoup", "Scrapy", "Selenium", "PostgreSQL", "Redis"],
      github: "https://github.com/alki45/web-scraping-pipeline",
      demo: "#",
      metrics: "1M+ Records/Day",
      icon: <Database className="w-6 h-6" />,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      features: [
        "Multi-source data extraction",
        "Intelligent data parsing",
        "Automated data cleaning",
        "Duplicate detection",
        "Rate limiting & proxy rotation"
      ],
      challenges: [
        "Anti-scraping measures",
        "Data quality assurance",
        "Large-scale processing",
        "Legal compliance"
      ],
      results: [
        "1M+ records processed daily",
        "95% data accuracy",
        "Automated pipeline operation",
        "Scalable architecture"
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
