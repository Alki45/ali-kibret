"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Github, Linkedin, Send } from "lucide-react"

export function ContactSection() {
  const open = (url: string) => window.open(url, "_blank")

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card/20 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/20 text-primary bg-primary/5">
            <Send className="w-4 h-4 mr-2" />
            Contact
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-display gradient-text-primary mt-4">
            Let's Talk
          </h2>
          <p className="text-muted-foreground mt-3">I’m open to opportunities, collaborations, and interesting ideas.</p>
        </div>

        <Card className="card-professional p-8">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button 
                className="btn-professional text-white"
                onClick={() => (window.location.href = "mailto:alikibretmuhamed@gmail.com")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
              <Button 
                variant="outline"
                className="border-primary/20 text-primary hover:bg-primary hover:text-white"
                onClick={() => open("https://github.com/Alki45")}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline"
                className="border-secondary/20 text-secondary hover:bg-secondary hover:text-white"
                onClick={() => open("https://linkedin.com/in/ali-kibret")}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button 
                variant="outline"
                className="border-muted-foreground/20 text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Browse Projects
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


