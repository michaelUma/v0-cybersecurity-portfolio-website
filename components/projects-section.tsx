import { ExternalLink, Terminal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "DVWA Security Testing",
    description:
      "Tested the Damn Vulnerable Web Application (DVWA) to practice identifying and exploiting common web vulnerabilities in a controlled environment.",
    findings: [
      "Identified SQL injection vulnerabilities",
      "Exploited XSS flaws at multiple security levels",
      "Performed CSRF attacks",
      "Documented findings and remediation steps",
    ],
    tags: ["DVWA", "SQL Injection", "XSS", "CSRF"],
  },
  {
    title: "Network Reconnaissance with Nmap",
    description:
      "Conducted comprehensive network scans on authorized test networks to identify live hosts, open ports, and running services.",
    findings: [
      "Mapped network topology",
      "Identified 20+ services across multiple hosts",
      "Detected outdated software versions",
      "Created detailed network documentation",
    ],
    tags: ["Nmap", "Network Scanning", "Port Analysis", "Service Detection"],
  },
  {
    title: "XSS Vulnerability Discovery",
    description:
      "Identified and documented Cross-Site Scripting (XSS) vulnerabilities in a test web application environment using manual testing and automated tools.",
    findings: [
      "Found reflected XSS in search functionality",
      "Discovered stored XSS in user comments",
      "Tested DOM-based XSS vectors",
      "Provided secure coding recommendations",
    ],
    tags: ["XSS", "Burp Suite", "Web Security", "OWASP"],
  },
  {
    title: "Metasploit Framework Practice",
    description:
      "Self-study project practicing the exploitation workflow against intentionally vulnerable lab machines (e.g. Metasploitable2) in an isolated personal Kali Linux lab — no real or third-party systems involved.",
    findings: [
      "Practiced target enumeration into exploit selection workflow",
      "Worked through common vulnerable-service exploitation paths",
      "Documented each step to build a repeatable personal methodology",
      "Confirmed lab isolation before running any exploit",
    ],
    tags: ["Metasploit", "Kali Linux", "Personal Lab", "Self-Study"],
  },
  {
    title: "AI-Assisted Recon Automation",
    description:
      "Built a small AI-assisted automation tool on Kali Linux to speed up repetitive parts of the reconnaissance workflow (parsing scan output, drafting initial notes) during personal lab practice.",
    findings: [
      "Automated repetitive scan-output parsing",
      "Used AI assistance to draft first-pass recon notes for review",
      "Kept a human-in-the-loop review step before acting on any output",
    ],
    tags: ["Automation", "Kali Linux", "Personal Lab", "Python"],
  },
  {
    title: "Phishing Simulation Lab",
    description:
      "Built a simulated phishing page in an isolated personal lab to study social-engineering techniques and how they can be detected — never deployed against real people or systems.",
    findings: [
      "Studied common phishing page structures and red flags",
      "Practiced identifying the same techniques from a defender's perspective",
      "Kept the exercise fully contained to a local/isolated lab environment",
    ],
    tags: ["Social Engineering", "Personal Lab", "Security Awareness"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
              Projects
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Hands-on security projects demonstrating practical experience with vulnerability identification and ethical hacking techniques.
          </p>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary font-mono text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <CardTitle className="text-foreground flex items-center gap-2">
                          {project.title}
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </CardTitle>
                      </div>
                    </div>
                    <Terminal className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <CardDescription className="text-muted-foreground mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Key Findings</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {project.findings.map((finding) => (
                          <li key={finding} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {finding}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
