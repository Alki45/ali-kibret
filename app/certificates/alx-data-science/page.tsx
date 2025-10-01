"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Brain, Calendar, MapPin, ExternalLink, Award, BarChart3, Database } from "lucide-react"
import Link from "next/link"

export default function ALXDataScienceCertificate() {
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
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">ALX Africa Data Science Nanodegree</h1>
            <p className="text-xl text-muted-foreground">Comprehensive Data Science Training Program</p>
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
                    Completed ALX Africa's comprehensive Data Science Nanodegree program, a rigorous 15-month training
                    designed to develop industry-ready data science professionals. The program combined theoretical
                    foundations with hands-on practical projects using real-world datasets.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The curriculum covered the entire data science pipeline from data collection and cleaning to
                    advanced machine learning model deployment. All projects underwent peer review processes to ensure
                    quality and industry standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-secondary" />
                    Core Curriculum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-card-foreground">Data Analysis & Visualization</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Python for Data Analysis (Pandas, NumPy)</li>
                        <li>• Statistical Analysis & Hypothesis Testing</li>
                        <li>• Data Visualization (Matplotlib, Seaborn, Plotly)</li>
                        <li>• Exploratory Data Analysis (EDA)</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-card-foreground">Machine Learning</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Supervised Learning (Regression, Classification)</li>
                        <li>• Unsupervised Learning (Clustering, PCA)</li>
                        <li>• Model Evaluation & Validation</li>
                        <li>• Feature Engineering & Selection</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    Key Projects Completed
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-card-foreground">Customer Segmentation Analysis</h4>
                      <p className="text-muted-foreground text-sm">
                        Applied K-means clustering to segment customers based on purchasing behavior, resulting in
                        actionable marketing insights.
                      </p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold text-card-foreground">Predictive Sales Forecasting</h4>
                      <p className="text-muted-foreground text-sm">
                        Built time-series models using ARIMA and LSTM to forecast sales with 87% accuracy for retail
                        business optimization.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-card-foreground">Healthcare Data Analysis</h4>
                      <p className="text-muted-foreground text-sm">
                        Analyzed patient data to identify risk factors and built classification models for early disease
                        detection.
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
                      <p className="font-medium text-card-foreground">Duration</p>
                      <p className="text-sm text-muted-foreground">May 2023 - Aug 2024</p>
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
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
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
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Pandas
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      NumPy
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Scikit-learn
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Matplotlib
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Seaborn
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Statistics
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Machine Learning
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
