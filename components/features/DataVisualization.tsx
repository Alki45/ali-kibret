"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  LineChart,
  Activity,
  Zap,
  Target,
  Award,
  Play,
  Pause,
  RotateCcw
} from "lucide-react"

interface DataPoint {
  x: number
  y: number
  label: string
  value: number
}

export function DataVisualization() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentChart, setCurrentChart] = useState<'bar' | 'line' | 'pie'>('bar')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const data = {
    bar: [
      { label: 'Python', value: 95, color: '#0891b2' },
      { label: 'ML/DL', value: 90, color: '#10b981' },
      { label: 'Django', value: 85, color: '#8b5cf6' },
      { label: 'React', value: 80, color: '#f59e0b' },
      { label: 'SQL', value: 88, color: '#ef4444' },
      { label: 'Docker', value: 75, color: '#06b6d4' }
    ],
    line: [
      { x: 0, y: 20, label: 'Jan', value: 20 },
      { x: 1, y: 35, label: 'Feb', value: 35 },
      { x: 2, y: 28, label: 'Mar', value: 28 },
      { x: 3, y: 45, label: 'Apr', value: 45 },
      { x: 4, y: 52, label: 'May', value: 52 },
      { x: 5, y: 38, label: 'Jun', value: 38 },
      { x: 6, y: 65, label: 'Jul', value: 65 },
      { x: 7, y: 72, label: 'Aug', value: 72 },
      { x: 8, y: 58, label: 'Sep', value: 58 },
      { x: 9, y: 80, label: 'Oct', value: 80 },
      { x: 10, y: 85, label: 'Nov', value: 85 },
      { x: 11, y: 92, label: 'Dec', value: 92 }
    ],
    pie: [
      { label: 'Data Science', value: 35, color: '#0891b2' },
      { label: 'Web Development', value: 25, color: '#10b981' },
      { label: 'Machine Learning', value: 20, color: '#8b5cf6' },
      { label: 'Research', value: 15, color: '#f59e0b' },
      { label: 'Other', value: 5, color: '#ef4444' }
    ]
  }

  const drawBarChart = (ctx: CanvasRenderingContext2D, data: any[], progress: number) => {
    const canvas = ctx.canvas
    const width = canvas.width
    const height = canvas.height
    const padding = 40
    const chartWidth = width - 2 * padding
    const chartHeight = height - 2 * padding
    const barWidth = chartWidth / data.length * 0.8
    const barSpacing = chartWidth / data.length * 0.2

    ctx.clearRect(0, 0, width, height)

    // Draw axes
    ctx.strokeStyle = '#334155'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.stroke()

    // Draw bars
    data.forEach((item, index) => {
      const x = padding + index * (barWidth + barSpacing) + barSpacing / 2
      const barHeight = (item.value * progress / 100) * (chartHeight / 100)
      const y = height - padding - barHeight

      // Bar background
      ctx.fillStyle = item.color + '20'
      ctx.fillRect(x, height - padding, barWidth, -chartHeight)

      // Bar
      ctx.fillStyle = item.color
      ctx.fillRect(x, y, barWidth, barHeight)

      // Bar value
      ctx.fillStyle = '#f1f5f9'
      ctx.font = '12px Inter'
      ctx.textAlign = 'center'
      ctx.fillText(`${Math.round(item.value * progress / 100)}%`, x + barWidth / 2, y - 5)

      // Label
      ctx.fillStyle = '#94a3b8'
      ctx.font = '10px Inter'
      ctx.fillText(item.label, x + barWidth / 2, height - padding + 15)
    })
  }

  const drawLineChart = (ctx: CanvasRenderingContext2D, data: any[], progress: number) => {
    const canvas = ctx.canvas
    const width = canvas.width
    const height = canvas.height
    const padding = 40
    const chartWidth = width - 2 * padding
    const chartHeight = height - 2 * padding

    ctx.clearRect(0, 0, width, height)

    // Draw axes
    ctx.strokeStyle = '#334155'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.stroke()

    // Draw grid lines
    ctx.strokeStyle = '#33415540'
    ctx.lineWidth = 1
    for (let i = 0; i <= 10; i++) {
      const y = padding + (chartHeight / 10) * i
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.stroke()
    }

    // Draw line
    const pointsToDraw = Math.floor((data.length * progress) / 100)
    if (pointsToDraw > 1) {
      ctx.strokeStyle = '#0891b2'
      ctx.lineWidth = 3
      ctx.beginPath()

      for (let i = 0; i < pointsToDraw; i++) {
        const x = padding + (chartWidth / (data.length - 1)) * i
        const y = height - padding - (data[i].value / 100) * chartHeight

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      // Draw points
      ctx.fillStyle = '#0891b2'
      for (let i = 0; i < pointsToDraw; i++) {
        const x = padding + (chartWidth / (data.length - 1)) * i
        const y = height - padding - (data[i].value / 100) * chartHeight

        ctx.beginPath()
        ctx.arc(x, y, 4, 0, 2 * Math.PI)
        ctx.fill()
      }
    }

    // Draw labels
    ctx.fillStyle = '#94a3b8'
    ctx.font = '10px Inter'
    ctx.textAlign = 'center'
    data.forEach((item, index) => {
      const x = padding + (chartWidth / (data.length - 1)) * index
      ctx.fillText(item.label, x, height - padding + 15)
    })
  }

  const drawPieChart = (ctx: CanvasRenderingContext2D, data: any[], progress: number) => {
    const canvas = ctx.canvas
    const width = canvas.width
    const height = canvas.height
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) / 2 - 40

    ctx.clearRect(0, 0, width, height)

    let currentAngle = 0
    const totalValue = data.reduce((sum, item) => sum + item.value, 0)
    const progressValue = (totalValue * progress) / 100

    let accumulatedValue = 0
    data.forEach((item, index) => {
      const sliceAngle = (item.value / totalValue) * 2 * Math.PI * (progress / 100)
      
      if (accumulatedValue < progressValue) {
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle)
        ctx.closePath()
        ctx.fillStyle = item.color
        ctx.fill()

        // Draw label
        const labelAngle = currentAngle + sliceAngle / 2
        const labelX = centerX + Math.cos(labelAngle) * (radius + 20)
        const labelY = centerY + Math.sin(labelAngle) * (radius + 20)

        ctx.fillStyle = '#f1f5f9'
        ctx.font = '12px Inter'
        ctx.textAlign = 'center'
        ctx.fillText(item.label, labelX, labelY)
        ctx.fillText(`${item.value}%`, labelX, labelY + 15)
      }

      currentAngle += sliceAngle
      accumulatedValue += item.value
    })
  }

  const animateChart = () => {
    setIsAnimating(true)
    let progress = 0
    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      progress = Math.min((elapsed / duration) * 100, 100)

      const canvas = canvasRef.current
      if (canvas) {
        const ctx = canvas.getContext('2d')
        if (ctx) {
          if (currentChart === 'bar') {
            drawBarChart(ctx, data.bar, progress)
          } else if (currentChart === 'line') {
            drawLineChart(ctx, data.line, progress)
          } else if (currentChart === 'pie') {
            drawPieChart(ctx, data.pie, progress)
          }
        }
      }

      if (progress < 100) {
        requestAnimationFrame(animate)
      } else {
        setIsAnimating(false)
      }
    }

    animate()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        canvas.width = canvas.offsetWidth * 2
        canvas.height = canvas.offsetHeight * 2
        ctx.scale(2, 2)
        animateChart()
      }
    }
  }, [currentChart])

  const chartTypes = [
    { id: 'bar', label: 'Skills', icon: BarChart3 },
    { id: 'line', label: 'Growth', icon: TrendingUp },
    { id: 'pie', label: 'Focus', icon: PieChart }
  ]

  return (
    <Card className="card-professional p-6">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-lg">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">Interactive Data Visualization</CardTitle>
              <p className="text-sm text-muted-foreground">Real-time animated charts</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={animateChart}
              disabled={isAnimating}
              className="h-8 px-3"
            >
              {isAnimating ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setCurrentChart(currentChart === 'bar' ? 'line' : currentChart === 'line' ? 'pie' : 'bar')
              }}
              className="h-8 px-3"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Chart Type Selector */}
        <div className="flex gap-2">
          {chartTypes.map((type) => (
            <Button
              key={type.id}
              variant={currentChart === type.id ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentChart(type.id as any)}
              className="flex-1"
            >
              <type.icon className="w-4 h-4 mr-2" />
              {type.label}
            </Button>
          ))}
        </div>

        {/* Canvas */}
        <div className="relative">
          <canvas
            ref={canvasRef}
            className="w-full h-64 bg-gradient-to-br from-card/50 to-card/30 rounded-lg border border-border/50"
            style={{ imageRendering: 'pixelated' }}
          />
          {isAnimating && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-lg">
              <div className="text-center">
                <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
                <p className="text-sm text-muted-foreground">Animating...</p>
              </div>
            </div>
          )}
        </div>

        {/* Chart Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">Current Chart:</span>
            </div>
            <Badge variant="outline" className="text-xs">
              {chartTypes.find(t => t.id === currentChart)?.label}
            </Badge>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-muted-foreground">Status:</span>
            </div>
            <Badge variant={isAnimating ? "default" : "secondary"} className="text-xs">
              {isAnimating ? "Animating" : "Ready"}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
