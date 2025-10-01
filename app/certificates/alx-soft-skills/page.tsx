"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Globe, Calendar, MapPin, ExternalLink, Award, Users, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ALXSoftSkillsCertificate() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-xl text-primary">
              Ali Kibret
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">ALX Africa Tech Soft Skills Certificate</h1>
            <p className="text-xl text-muted-foreground">
              Professional Development in Digital Communication & Leadership
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Program Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Completed ALX Africa's comprehensive Tech Soft Skills program, designed to develop essential
                    professional skills for success in the technology industry. This program focused on building
                    communication, leadership, and collaborative skills crucial for tech professionals.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The curriculum emphasized practical application of soft skills in tech environments, including
                    remote work dynamics, cross-cultural communication, and effective project management in diverse
                    teams.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-secondary" />
                    Core Competencies Developed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-card-foreground">Communication Skills</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Digital Communication Best Practices</li>
                        <li>• Technical Writing & Documentation</li>
                        <li>• Presentation Skills for Tech Audiences</li>
                        <li>• Cross-Cultural Communication</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-card-foreground">Leadership & Collaboration</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Team Leadership in Tech Projects</li>
                        <li>• Agile Project Management</li>
                        <li>• Conflict Resolution</li>
                        <li>• Remote Team Collaboration</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Professional Development Areas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-card-foreground">Digital Workplace Skills</h4>
                      <p className="text-muted-foreground text-sm">
                        Mastered effective communication tools and practices for remote and hybrid work environments in
                        tech companies.
                      </p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold text-card-foreground">Project Management</h4>
                      <p className="text-muted-foreground text-sm">
                        Learned agile methodologies, sprint planning, and effective coordination of technical projects
                        with diverse stakeholders.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-card-foreground">Professional Networking</h4>
                      <p className="text-muted-foreground text-sm">
                        Developed skills for building professional relationships, mentoring, and contributing to tech
                        communities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Certificate Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Completion</p>
                      <p className="text-sm text-muted-foreground">August 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Format</p>
                      <p className="text-sm text-muted-foreground">Online/Remote</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Status</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Certified
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Skills Developed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Communication
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Leadership
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Project Management
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Team Collaboration
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Digital Workplace
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Agile Methodology
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">External Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    onClick={() => window.open("https://alxafrica.com", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    ALX Africa Website
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                    onClick={() => window.open("https://alxafrica.com", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
