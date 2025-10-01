"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Rocket, Calendar, MapPin, ExternalLink, Award, Target, Zap } from "lucide-react"
import Link from "next/link"

export default function KAIMCertificate() {
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
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">10 Academy KAIM AI Mastery</h1>
            <p className="text-xl text-muted-foreground">
              Advanced AI & Machine Learning Intensive Training
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
                    Completed the intensive KAIM (Kifiya AI Mastery) program at 10 Academy, a rigorous bootcamp designed to 
                    develop world-class AI engineers. The program focused on practical, hands-on experience with cutting-edge 
                    AI technologies and real-world industry projects.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Through a project-based learning approach, the curriculum covered end-to-end AI development from 
                    problem definition to deployment, emphasizing production-ready solutions and industry best practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-secondary" />
                    Core Curriculum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-card-foreground">AI/ML Engineering</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Deep Learning & Neural Networks</li>
                        <li>• Computer Vision & Image Processing</li>
                        <li>• Natural Language Processing</li>
                        <li>• MLOps & Model Deployment</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-card-foreground">Software Engineering</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Python Programming & Best Practices</li>
                        <li>• Git & Version Control</li>
                        <li>• CI/CD Pipelines</li>
                        <li>• Cloud Deployment (AWS/GCP)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Key Projects & Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-card-foreground">Financial Analytics AI</h4>
                      <p className="text-muted-foreground text-sm">
                        Built machine learning models for financial forecasting and risk analysis using real banking data.
                      </p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold text-card-foreground">Computer Vision System</h4>
                      <p className="text-muted-foreground text-sm">
                        Developed object detection and classification systems for real-world applications.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-card-foreground">NLP Text Processing</h4>
                      <p className="text-muted-foreground text-sm">
                        Implemented sentiment analysis and text classification models using transformers.
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
                      <p className="text-sm text-muted-foreground">6 Months Intensive</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Format</p>
                      <p className="text-sm text-muted-foreground">Hybrid (Online/In-person)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Status</p>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Completed
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Technical Skills Gained</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      PyTorch
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      TensorFlow
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Keras
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      FastAPI
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Docker
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      AWS
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      MLflow
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Git
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
                    onClick={() => window.open("https://www.10academy.org", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    10 Academy Website
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                    onClick={() => window.open("https://drive.google.com/file/d/14XulDaSwaGjd2oosu8bpTIoa96Igh97B/view?usp=sharing", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white bg-transparent"
                    onClick={() => window.open("https://drive.google.com/file/d/1VTKqlDtebEbMS1SNq-QU0k7zJCy03d7f/view?usp=sharing", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Program Details
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


