import Link from "next/link"
import { Shield, Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Kelechi Michael Uma</span>
            </div>

            <nav className="flex items-center gap-6">
              <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/michaelUma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://ng.linkedin.com/in/michael-kelechi-a9465719b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/ExceedingpP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Kelechi Michael Uma. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Securing the digital world, one vulnerability at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
