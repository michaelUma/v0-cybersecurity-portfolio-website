"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Terminal, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,200,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_30px_rgba(0,255,200,0.15)]">
              <Image
                src="/IMG_20260721_030650_479.jpg"
                alt="Kelechi Michael Uma"
                fill
                sizes="144px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Terminal-style intro */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground font-mono">
              {">"} security_analyst --active
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Kelechi Michael Uma
          </h1>
          
          <p className="text-lg md:text-xl text-primary font-medium mb-6">
            Cybersecurity Analyst | Ethical Hacker | Pen Tester
          </p>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            I help businesses secure their websites and protect against cyber threats through comprehensive security assessments and ethical hacking.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="px-8">
              <Link href="#contact">Hire Me</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about" aria-label="Scroll to about section">
            <ChevronDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  )
}
