import { Shield, Target, Lock, Bug, Crosshair } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
              About Me
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground text-balance">
                From electrical engineering to defending the digital world
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m a Quality Assurance (QA) and Cybersecurity professional based in Lagos, currently working as a QA Intern at Famous Holding, where I test software for functional correctness and security weaknesses side by side. My background is actually in Electrical/Electronics Engineering (B.Eng, Michael Okpara University of Agriculture) — the shift into tech started with IT support work, and curiosity about *why* systems fail turned into a real focus on how they get broken into.
                </p>
                <p>
                  Since then I&apos;ve built hands-on skill through Cisco Academy training (Introduction to Cybersecurity, Ethical Hacking, and ongoing Network Defense), practical labs in a personal Kali Linux environment, and real testing work — including confidential freelance engagements checking client websites for data exposure and leaks, alongside my day-to-day QA role.
                </p>
                <p>
                  I believe in responsible disclosure and testing only within clear authorization — every lab project on this site, from vulnerability discovery to social-engineering simulations, was run in an isolated environment I control, never against real targets. That discipline is the same one I bring to client work.
                </p>
                <p>
                  My goal is straightforward: help businesses actually understand their security posture — not just get a checklist — and build the kind of quality-first, security-aware engineering practice I&apos;d want protecting my own systems.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Web Security</h4>
                    <p className="text-sm text-muted-foreground">
                      Specializing in identifying and mitigating common web vulnerabilities including OWASP Top 10.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Vulnerability Assessment</h4>
                    <p className="text-sm text-muted-foreground">
                      Systematic evaluation of security weaknesses in systems and applications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Ethical Hacking</h4>
                    <p className="text-sm text-muted-foreground">
                      Legal and authorized testing to identify vulnerabilities before malicious actors do.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Bug className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Software Testing</h4>
                    <p className="text-sm text-muted-foreground">
                      Functional, regression, and exploratory testing to catch bugs before users ever see them.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Crosshair className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Penetration Testing</h4>
                    <p className="text-sm text-muted-foreground">
                      Hands-on offensive testing in personal lab environments — from network reconnaissance to exploitation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
