"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Code, 
  Database, 
  BarChart3, 
  Globe, 
  Server,
  Cpu,
  Zap,
  Target,
  Layers,
  Sparkles,
  TrendingUp
} from "lucide-react"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)
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

  const skillCategories = [
    {
      name: "Programming",
      icon: Code,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      skills: [
        { name: "Python", level: 95, description: "Advanced Python development" },
        { name: "JavaScript", level: 85, description: "Modern ES6+ development" },
        { name: "TypeScript", level: 80, description: "Type-safe development" },
        { name: "SQL", level: 90, description: "Database querying & optimization" },
        { name: "Git", level: 88, description: "Version control & collaboration" },
        { name: "Bash/Shell", level: 75, description: "Scripting & automation" },
      ]
    },
    {
      name: "Data Science",
      icon: Brain,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      skills: [
        { name: "Pandas", level: 95, description: "Data manipulation & analysis" },
        { name: "NumPy", level: 90, description: "Numerical computing" },
        { name: "Scikit-learn", level: 88, description: "Machine learning algorithms" },
        { name: "TensorFlow", level: 85, description: "Deep learning frameworks" },
        { name: "PyTorch", level: 80, description: "Neural network development" },
        { name: "Jupyter", level: 92, description: "Interactive development" },
      ]
    },
    {
      name: "Data Visualization",
      icon: BarChart3,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      skills: [
        { name: "Matplotlib", level: 90, description: "Static visualizations" },
        { name: "Seaborn", level: 88, description: "Statistical visualizations" },
        { name: "Plotly", level: 85, description: "Interactive dashboards" },
        { name: "Power BI", level: 80, description: "Business intelligence" },
        { name: "Tableau", level: 75, description: "Data storytelling" },
        { name: "D3.js", level: 70, description: "Custom visualizations" },
      ]
    },
    {
      name: "Web Development",
      icon: Globe,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      skills: [
        { name: "Django", level: 90, description: "Full-stack Python framework" },
        { name: "React", level: 85, description: "Frontend development" },
        { name: "Next.js", level: 80, description: "React framework" },
        { name: "REST APIs", level: 88, description: "API development" },
        { name: "Tailwind CSS", level: 85, description: "Utility-first CSS" },
        { name: "Docker", level: 75, description: "Containerization" },
      ]
    },
    {
      name: "Databases",
      icon: Database,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      skills: [
        { name: "PostgreSQL", level: 90, description: "Relational database" },
        { name: "MySQL", level: 85, description: "Database management" },
        { name: "MongoDB", level: 80, description: "NoSQL database" },
        { name: "SQLite", level: 88, description: "Lightweight database" },
        { name: "Redis", level: 75, description: "In-memory caching" },
        { name: "Elasticsearch", level: 70, description: "Search & analytics" },
      ]
    },
    {
      name: "Data Collection & Storage",
      icon: Database,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      skills: [
        { name: "Web Scraping", level: 90, description: "BeautifulSoup, Scrapy, Selenium" },
        { name: "Data Warehousing", level: 85, description: "ETL processes and data pipelines" },
        { name: "Information Retrieval", level: 88, description: "Search and data management" },
        { name: "APIs Integration", level: 85, description: "RESTful and GraphQL APIs" },
        { name: "Data Mining", level: 82, description: "Pattern discovery and extraction" },
        { name: "Cloud Storage", level: 80, description: "AWS S3, Google Cloud Storage" },
      ]
    },
    {
      name: "Cloud & DevOps",
      icon: Server,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      skills: [
        { name: "AWS", level: 80, description: "Cloud computing" },
        { name: "Linux", level: 85, description: "System administration" },
        { name: "Docker", level: 75, description: "Containerization" },
        { name: "Kubernetes", level: 70, description: "Container orchestration" },
        { name: "CI/CD", level: 75, description: "Automated deployment" },
        { name: "Monitoring", level: 80, description: "System monitoring" },
      ]
    }
  ]

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card/20 via-background to-card/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-in-top' : 'opacity-0'}`}>
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/20 text-primary bg-primary/5 mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Technical Skills
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-display gradient-text-primary mb-6">
            Expertise & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent solutions and data-driven applications
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-slide-in-top' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? `${category.bgColor} ${category.color} ${category.borderColor} border-2`
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <category.icon className="w-4 h-4 mr-2 inline" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <Card 
              key={skill.name}
              className="card-professional group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </CardTitle>
                  <Badge 
                    variant="secondary" 
                    className={`${skillCategories[activeCategory].bgColor} ${skillCategories[activeCategory].color} border-0`}
                  >
                    {skill.level}%
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-medium text-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full ${skillCategories[activeCategory].color.replace('text-', 'bg-')} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 150}ms`
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-slide-in-bottom' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <Card className="card-professional p-8 max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold font-display gradient-text-primary">
                  Continuous Learning & Growth
                </h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm constantly expanding my skill set through hands-on projects, online courses, 
                and staying up-to-date with the latest technologies in data science and web development.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="px-4 py-2 border-primary/20 text-primary bg-primary/5">
                  <Target className="w-4 h-4 mr-2" />
                  Always Learning
                </Badge>
                <Badge variant="outline" className="px-4 py-2 border-secondary/20 text-secondary bg-secondary/5">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Skill Growth
                </Badge>
                <Badge variant="outline" className="px-4 py-2 border-purple-500/20 text-purple-500 bg-purple-500/5">
                  <Layers className="w-4 h-4 mr-2" />
                  Full-Stack
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
