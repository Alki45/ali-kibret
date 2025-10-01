"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Code2, Calendar, MapPin, ExternalLink, Award, Trophy, Target } from "lucide-react"
import Link from "next/link"

export default function HackerRankCertificate() {
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
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <Code2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">HackerRank Problem Solving (Intermediate)</h1>
            <p className="text-xl text-muted-foreground">
              Algorithmic Thinking & Data Structures Proficiency
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Certification Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Achieved HackerRank Problem Solving (Intermediate) certification by demonstrating proficiency 
                    in algorithmic thinking, data structures, and problem-solving techniques. This certification 
                    validates intermediate-level skills in competitive programming and coding challenges.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The assessment covered a wide range of algorithmic concepts including dynamic programming, 
                    graph theory, advanced data structures, and optimization techniques under time constraints.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-secondary" />
                    Skills Demonstrated
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-card-foreground">Data Structures</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Arrays & Linked Lists</li>
                        <li>• Stacks, Queues & Heaps</li>
                        <li>• Trees & Binary Search Trees</li>
                        <li>• Hash Tables & Graphs</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-card-foreground">Algorithms</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Dynamic Programming</li>
                        <li>• Greedy Algorithms</li>
                        <li>• Graph Algorithms (BFS/DFS)</li>
                        <li>• Sorting & Searching</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    Problem Categories Covered
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-card-foreground">String Manipulation</h4>
                      <p className="text-muted-foreground text-sm">
                        Advanced string algorithms including pattern matching, string transformations, and text processing.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-card-foreground">Graph Theory</h4>
                      <p className="text-muted-foreground text-sm">
                        Shortest path algorithms, minimum spanning trees, and graph traversal techniques.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-card-foreground">Dynamic Programming</h4>
                      <p className="text-muted-foreground text-sm">
                        Optimization problems, memoization, and bottom-up approaches to complex challenges.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Certification Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Earned</p>
                      <p className="text-sm text-muted-foreground">2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Platform</p>
                      <p className="text-sm text-muted-foreground">HackerRank</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Level</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Intermediate
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Programming Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      C++
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Java
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      JavaScript
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Key Competencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <p className="text-sm text-muted-foreground">Time & Space Complexity Analysis</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                      <p className="text-sm text-muted-foreground">Algorithm Optimization</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                      <p className="text-sm text-muted-foreground">Problem Decomposition</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                      <p className="text-sm text-muted-foreground">Code Quality & Best Practices</p>
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
                    onClick={() => window.open("https://www.hackerrank.com", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    HackerRank Profile
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start border-green-500 text-green-500 hover:bg-green-500 hover:text-white bg-transparent"
                    onClick={() => window.open("https://drive.google.com/file/d/1RhEhGNUJbAxOLp0SyO50XFkbNxrqo3Mw/view?usp=sharing", "_blank")}
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


