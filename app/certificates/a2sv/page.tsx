"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Code, Calendar, MapPin, ExternalLink, Award, Users, Target } from "lucide-react"
import Link from "next/link"

export default function A2SVCertificate() {
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
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">A2SV Data Structures & Algorithms Program</h1>
            <p className="text-xl text-muted-foreground">Africa to Silicon Valley - Competitive Programming Training</p>
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
                    Currently enrolled in A2SV's intensive Data Structures & Algorithms program, designed to prepare
                    African students for top-tier tech companies in Silicon Valley. This comprehensive program focuses
                    on competitive programming, algorithmic problem-solving, and technical interview preparation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The program combines peer learning, mentorship, and hands-on practice through platforms like
                    LeetCode and CodeForces. Students work on complex algorithmic challenges while developing the
                    problem-solving mindset required for technical interviews at major tech companies.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-secondary" />
                    Key Learning Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-card-foreground">Core Algorithms</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Dynamic Programming</li>
                        <li>• Graph Algorithms</li>
                        <li>• Greedy Algorithms</li>
                        <li>• Divide & Conquer</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-card-foreground">Data Structures</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Trees & Binary Search Trees</li>
                        <li>• Heaps & Priority Queues</li>
                        <li>• Hash Tables & Maps</li>
                        <li>• Advanced Graph Structures</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Program Methodology
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Peer Learning</h4>
                      <p className="text-muted-foreground text-sm">
                        Collaborative problem-solving sessions with fellow students, fostering knowledge sharing and
                        diverse problem-solving approaches.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Mentorship</h4>
                      <p className="text-muted-foreground text-sm">
                        Guidance from experienced software engineers who have successfully transitioned to Silicon
                        Valley companies.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Practice Platforms</h4>
                      <p className="text-muted-foreground text-sm">
                        Regular challenges on LeetCode, CodeForces, and other competitive programming platforms to build
                        proficiency.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Mock Interviews</h4>
                      <p className="text-muted-foreground text-sm">
                        Technical interview preparation with real-world scenarios from top tech companies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Program Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Duration</p>
                      <p className="text-sm text-muted-foreground">Jan 2025 - Present</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Format</p>
                      <p className="text-sm text-muted-foreground">Remote/Online</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Status</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        In Progress
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
                      Algorithms
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Data Structures
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Problem Solving
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Competitive Programming
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Technical Interviews
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Code Optimization
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
                    onClick={() => window.open("https://a2sv.org", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    A2SV Official Website
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                    onClick={() => window.open("https://leetcode.com/alki45", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    My LeetCode Profile
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
