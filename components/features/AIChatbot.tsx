"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles,
  Brain,
  Code,
  Database,
  TrendingUp,
  Loader2,
  Mic,
  MicOff,
  Volume2,
  VolumeX
} from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  type?: "text" | "typing"
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I'm Ali's AI assistant. I can help you learn about his skills, projects, experience, and answer any questions you might have. What would you like to know?",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const recognitionRef = useRef<any>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Initialize speech recognition if available
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = false
      recognitionRef.current.lang = 'en-US'

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setInput(transcript)
        setIsListening(false)
      }

      recognitionRef.current.onerror = () => {
        setIsListening(false)
      }
    }
  }, [])

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true)
      recognitionRef.current.start()
    }
  }

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }

  const speak = (text: string) => {
    if (!isMuted && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.9
      utterance.pitch = 1
      speechSynthesis.speak(utterance)
    }
  }

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    // Contact Information (Public)
    const contactInfo = {
      email: "alikibretmuhamed@gmail.com",
      phone: "+251 925 594 543",
      location: "Adama, Ethiopia",
      linkedin: "https://linkedin.com/in/ali-kibret",
      github: "https://github.com/alki45"
    }
    
    // Skills related questions - More analytical
    if (message.includes('skill') || message.includes('technology') || message.includes('programming') || message.includes('expertise')) {
      return `Based on Ali's portfolio and experience, here's an analytical breakdown of his technical expertise:

**Core Programming Languages:**
• Python (95% proficiency) - Primary language for data science and ML
• JavaScript/TypeScript (85%) - Full-stack web development
• SQL (90%) - Database management and optimization

**Data Science & ML Stack:**
• TensorFlow & PyTorch - Deep learning model development
• Pandas & NumPy - Data manipulation and analysis
• Scikit-learn - Traditional ML algorithms
• OpenCV - Computer vision applications

**Web Development & Data Collection:**
• Django - Backend API development
• React/Next.js - Modern frontend development
• Web Scraping - Automated data collection using BeautifulSoup, Scrapy, Selenium
• Information Storage & Retrieval - Database design, data warehousing, and efficient data management

**Analysis:** Ali demonstrates strong analytical thinking through his project implementations, showing expertise in both theoretical ML concepts and practical application development. His dual engineering background gives him a unique perspective on problem-solving.

Would you like me to elaborate on any specific technology or discuss his approach to particular challenges?`
    }
    
    // Projects related questions - More detailed analysis
    if (message.includes('project') || message.includes('work') || message.includes('portfolio') || message.includes('achievement')) {
      return `Let me provide a comprehensive analysis of Ali's project portfolio:

**1. Amharic Sign Language Transcription (95% accuracy)**
• **Technical Challenge:** Real-time gesture recognition in varying lighting conditions
• **Solution Approach:** Deep learning with OpenCV preprocessing
• **Impact:** Bridging communication gaps for deaf community in Ethiopia

**2. Quadruped Autonomous Robot**
• **Technical Challenge:** Multi-sensor fusion for autonomous navigation
• **Solution Approach:** Computer vision + ML algorithms for obstacle detection
• **Impact:** Advanced robotics research and practical applications

**3. Stock Price Forecasting (85% accuracy)**
• **Technical Challenge:** Time-series prediction with market volatility
• **Solution Approach:** LSTM neural networks + ARIMA models
• **Impact:** Financial decision support tools

**4. Telecom Analytics (92% precision)**
• **Technical Challenge:** Customer churn prediction from large datasets
• **Solution Approach:** K-means clustering + Random Forest classification
• **Impact:** Business intelligence and customer retention

**5. Web Scraping & Data Collection Projects**
• **Technical Challenge:** Automated data extraction from various web sources
• **Solution Approach:** Python-based scraping with BeautifulSoup, Scrapy, Selenium
• **Impact:** Large-scale data collection for research and business intelligence

**Analysis:** Ali's projects demonstrate a pattern of identifying real-world problems and applying appropriate technical solutions. His work shows progression from academic projects to practical business applications.

**GitHub Portfolio:** ${contactInfo.github}

Which project would you like me to analyze in more detail?`
    }
    
    // Experience related questions - More professional analysis
    if (message.includes('experience') || message.includes('background') || message.includes('education') || message.includes('career')) {
      return `Here's a professional analysis of Ali's career trajectory:

**Current Role: Academic Research Assistant at ASTU**
• Supporting AI, computer vision, and networking research
• Mentoring students in technical projects
• Contributing to academic publications

**Educational Foundation:**
• Dual BSc degrees (Computer Science & Electronics Engineering)
• Graduated with Great Distinction - indicating exceptional academic performance
• Currently in A2SV competitive programming program

**Professional Progression:**
1. **Internship Phase:** IT Support & Robotics Development
2. **Academic Phase:** Research Assistant role
3. **Skill Development:** Continuous learning through certifications

**Technical Expertise Areas:**
• **Data Science & Machine Learning:** Predictive modeling, statistical analysis
• **Web Development:** Full-stack applications with Django and React
• **Web Scraping:** Automated data collection and extraction from various sources
• **Information Storage & Retrieval:** Database design, data warehousing, and efficient data management systems
• **Computer Vision:** Image processing and pattern recognition
• **Research & Development:** Academic research in AI applications

**Certifications & Continuous Learning:**
• ALX Data Science Nanodegree
• Bioinformatics Certificate
• Tech Soft Skills Certificate

**Analysis:** Ali's career path shows a logical progression from technical internships to research roles, with consistent focus on AI/ML applications. His dual engineering background provides unique problem-solving capabilities, particularly in data collection, processing, and storage systems.

**Contact for Opportunities:** ${contactInfo.email} | ${contactInfo.phone}

Would you like to discuss specific aspects of his experience or potential collaboration opportunities?`
    }
    
    // Contact related questions - Professional and secure
    if (message.includes('contact') || message.includes('hire') || message.includes('collaborate') || message.includes('email') || message.includes('reach')) {
      return `I'd be happy to help you connect with Ali! Here's the professional contact information:

**Primary Contact Methods:**
• **Email:** ${contactInfo.email}
• **Phone:** ${contactInfo.phone}
• **Location:** ${contactInfo.location}

**Professional Networks:**
• **LinkedIn:** ${contactInfo.linkedin}
• **GitHub:** ${contactInfo.github}

**Availability & Collaboration:**
• Currently available for freelance projects
• Open to full-time opportunities
• Interested in data science, ML, web development, and web scraping projects
• Remote work capabilities

**Security Note:** For sensitive project discussions or detailed technical requirements, please use the email contact for secure communication.

**Response Time:** Ali typically responds within 24-48 hours to professional inquiries.

What type of collaboration or project are you interested in discussing?`
    }
    
    // General questions
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn about Ali Kibret, a talented Data Scientist and Python Developer. Feel free to ask me about his skills, projects, experience, or anything else you'd like to know!"
    }
    
    if (message.includes('what') && message.includes('do')) {
      return "Ali specializes in turning complex data into intelligent solutions. He works on machine learning projects, develops web applications, conducts research in AI and computer vision, and helps students with technical challenges. His work spans from building autonomous robots to creating predictive models for business applications."
    }
    
    if (message.includes('where') || message.includes('location')) {
      return "Ali is based in Adama, Ethiopia, where he works as an Academic Research Assistant at Adama Science and Technology University (ASTU). He's open to remote work opportunities and collaborations worldwide."
    }
    
    if (message.includes('when') || message.includes('available')) {
      return "Ali is currently available for new opportunities and collaborations. He's actively looking for interesting projects in data science, machine learning, and web development. You can contact him anytime to discuss potential collaborations or job opportunities."
    }
    
    // Default response
    return "That's an interesting question! Ali is a versatile professional with expertise in data science, machine learning, and web development. He's worked on various projects from AI-powered applications to full-stack web solutions. Could you be more specific about what aspect of his work you'd like to know about? I can tell you about his skills, projects, experience, or how to contact him."
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const response = generateResponse(input)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
      setIsTyping(false)
      speak(response)
    }, 1000 + Math.random() * 2000) // Random delay between 1-3 seconds
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const quickQuestions = [
    "What are Ali's main skills?",
    "Tell me about his projects",
    "What's his experience?",
    "How can I contact him?",
    "What does he specialize in?"
  ]

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 mb-4 bg-card/95 backdrop-blur-md border-border shadow-2xl">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <CardTitle className="text-sm font-semibold">Ali's AI Assistant</CardTitle>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMuted(!isMuted)}
                  className="h-8 w-8 p-0"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="flex flex-col h-full p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 px-4 pb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.role === "assistant" && (
                        <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      )}
                      {message.role === "user" && (
                        <User className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="text-sm leading-relaxed">
                        {message.content}
                      </div>
                    </div>
                    <div className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground rounded-lg p-3 max-w-[80%]">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="text-xs text-muted-foreground mb-2">Quick questions:</div>
                <div className="flex flex-wrap gap-1">
                  {quickQuestions.slice(0, 3).map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-6 px-2"
                      onClick={() => setInput(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about Ali's work..."
                    className="pr-10"
                  />
                  {isListening && (
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={isListening ? stopListening : startListening}
                  className="px-3"
                  disabled={!recognitionRef.current}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </Button>
                <Button
                  size="sm"
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="px-3"
                >
                  {isTyping ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-14 h-14 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group animate-glow"
      >
        {isOpen ? (
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
        ) : (
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
      </Button>
    </div>
  )
}
