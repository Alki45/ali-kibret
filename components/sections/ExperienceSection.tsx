"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card/20 via-background to-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/20 text-primary bg-primary/5">
            <Briefcase className="w-4 h-4 mr-2" />
            Experience
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-display gradient-text-primary mt-4">
            Professional Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-xl">Academic Research Assistant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" /> Oct 2024 – Present
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" /> Adama Science and Technology University, Ethiopia
              </div>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Research support in AI, computer vision, and networking</li>
                <li>Guided labs and debugged technical issues for students</li>
                <li>Reviewed papers and organized research documentation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-xl">Quad Dog Robot Development Intern</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" /> Jul 2023 – Oct 2023
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" /> ASTU - CSE, Ethiopia
              </div>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Built quadruped robot with Python and OpenCV</li>
                <li>Improved object detection accuracy using ML models</li>
                <li>Integrated real-time sensor processing and navigation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-professional md:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">IT Support and Maintenance Intern</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" /> Jul 2022 – Sep 2022
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" /> ICT Center – ASTU, Ethiopia
              </div>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Maintained campus computer and network systems</li>
                <li>Supported software setup and account configuration</li>
                <li>Contributed to 99% uptime of university systems</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


