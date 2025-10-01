"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Activity, Calendar, MapPin, ExternalLink, Award, Dna, Microscope } from "lucide-react"
import Link from "next/link"

export default function BioinformaticsCertificate() {
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
              <Activity className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">Bioinformatics Certificate</h1>
            <p className="text-xl text-muted-foreground">Data Ocean - Computational Biology Training</p>
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
                    Completed specialized bioinformatics training at Data Ocean, focusing on computational biology,
                    genomics data analysis, and bioinformatics tools for biological research applications. This
                    intensive program bridged the gap between computer science and biological sciences.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The course covered essential bioinformatics algorithms, sequence analysis, phylogenetic analysis,
                    and the use of popular bioinformatics software and databases for genomic research and drug discovery
                    applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dna className="w-5 h-5 text-secondary" />
                    Core Learning Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-card-foreground">Sequence Analysis</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• DNA/RNA/Protein Sequence Analysis</li>
                        <li>• Multiple Sequence Alignment</li>
                        <li>• BLAST and Database Searching</li>
                        <li>• Gene Prediction and Annotation</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-card-foreground">Genomics & Tools</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Phylogenetic Analysis</li>
                        <li>• Structural Bioinformatics</li>
                        <li>• Bioinformatics Databases (NCBI, UniProt)</li>
                        <li>• Python/R for Bioinformatics</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Microscope className="w-5 h-5 text-primary" />
                    Practical Applications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-card-foreground">Genomic Data Analysis</h4>
                      <p className="text-muted-foreground text-sm">
                        Analyzed large-scale genomic datasets using computational tools to identify genetic variations
                        and their biological significance.
                      </p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold text-card-foreground">Protein Structure Prediction</h4>
                      <p className="text-muted-foreground text-sm">
                        Applied computational methods to predict protein structures and analyze protein-protein
                        interactions for drug discovery.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-card-foreground">Phylogenetic Analysis</h4>
                      <p className="text-muted-foreground text-sm">
                        Constructed evolutionary trees and analyzed species relationships using molecular data and
                        bioinformatics algorithms.
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
                      <p className="text-sm text-muted-foreground">June 2024</p>
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
                  <CardTitle className="text-lg">Skills & Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Bioinformatics
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Genomics
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      BLAST
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      R
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      NCBI
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Phylogenetics
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Sequence Analysis
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
                    onClick={() => window.open("https://dataocean.org", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Data Ocean Website
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
