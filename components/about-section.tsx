import { Shield, Target, Lock } from "lucide-react"

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
                Passionate about securing the digital world
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m a dedicated cybersecurity enthusiast with a strong focus on web application security and vulnerability assessment. My journey in cybersecurity began with a curiosity about how systems can be protected and fortified against malicious attacks.
                </p>
                <p>
                  As an aspiring ethical hacker, I continuously expand my knowledge through hands-on practice, online labs, and real-world security assessments. I believe in responsible disclosure and ethical approaches to identifying and mitigating security vulnerabilities.
                </p>
                <p>
                  My goal is to help businesses of all sizes understand their security posture and implement effective measures to protect their digital assets from cyber threats.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
