"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Trophy, Calendar, MapPin, ExternalLink, Award, Users, Target } from "lucide-react"
import Link from "next/link"

export default function ICPCCertificate() {
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
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">ICPC ACPC Certificate of Achievement</h1>
            <p className="text-xl text-muted-foreground">
              International Collegiate Programming Contest - Africa & Arab Collegiate Programming Contest
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Competition Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Participated in the prestigious International Collegiate Programming Contest (ICPC) Africa & 
                    Arab Collegiate Programming Contest (ACPC), representing my university in this globally recognized 
                    competitive programming competition.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    ICPC is the premier global programming competition conducted by and for the world's universities. 
                    The contest fosters creativity, teamwork, and innovation in building new software programs, and 
                    enables students to test their ability to perform under pressure.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-secondary" />
                    Competition Format & Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-card-foreground">Team Collaboration</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• 3-person team competition</li>
                        <li>• Collaborative problem solving</li>
                        <li>• Strategic task distribution</li>
                        <li>• Time management under pressure</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-card-foreground">Technical Skills</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Advanced Algorithms</li>
                        <li>• Data Structures</li>
                        <li>• Problem Analysis</li>
                        <li>• Code Optimization</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Competition Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-semibold text-card-foreground">Algorithmic Challenges</h4>
                      <p className="text-muted-foreground text-sm">
                        Solved complex algorithmic problems involving graph theory, dynamic programming, and 
                        computational geometry within a 5-hour time limit.
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-card-foreground">Team Strategy</h4>
                      <p className="text-muted-foreground text-sm">
                        Developed effective teamwork strategies for problem distribution, code review, and 
                        debugging under competitive pressure.
                      </p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-semibold text-card-foreground">Competitive Environment</h4>
                      <p className="text-muted-foreground text-sm">
                        Competed against top universities from Africa and the Arab region, gaining valuable 
                        experience in high-stakes problem solving.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Competition Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Year</p>
                      <p className="text-sm text-muted-foreground">2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Region</p>
                      <p className="text-sm text-muted-foreground">Africa & Arab</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Status</p>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        Participant
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Team Size</p>
                      <p className="text-sm text-muted-foreground">3 Members</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Problem Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Graph Theory
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Dynamic Programming
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Greedy Algorithms
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Data Structures
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Math
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Geometry
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Key Takeaways</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                      <p className="text-sm text-muted-foreground">Enhanced problem-solving speed</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                      <p className="text-sm text-muted-foreground">Improved team collaboration</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                      <p className="text-sm text-muted-foreground">Competitive programming experience</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                      <p className="text-sm text-muted-foreground">Advanced algorithm mastery</p>
                    </div>
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
                    onClick={() => window.open("https://icpc.global", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    ICPC Official Website
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white bg-transparent"
                    onClick={() => window.open("https://drive.google.com/file/d/1GQcsoPU4a9X6iA2bsD8ltgYEoCP77kfx/view?usp=sharing", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
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


