import { Briefcase, Wrench, Shield } from "lucide-react"

const experience = [
  {
    role: "QA Intern",
    org: "Famous Holding",
    period: "Feb 2026 — Present",
    icon: Briefcase,
    points: [
      "Support software quality activities across functional, regression, and security testing.",
      "Identify, document, and communicate application issues clearly to technical and non-technical stakeholders.",
      "Apply a security-aware lens to QA work — testing for common web vulnerabilities alongside standard functional coverage.",
    ],
  },
  {
    role: "Independent Contract Security Testing",
    org: "Freelance",
    period: "Ongoing, alongside main role",
    icon: Shield,
    points: [
      "Perform website security reviews for private clients, including a confidential engagement testing a client's site for data exposure and leak risks.",
      "Scope testing to client authorization, then document findings and recommended fixes in plain language.",
    ],
  },
  {
    role: "IT Support",
    org: "Elmas",
    period: "Dec 2023 — Feb 2026",
    icon: Wrench,
    points: [
      "Supported day-to-day IT operations and troubleshooting, maintaining reliable system uptime for users.",
      "Assisted users with technical issues, translating vague symptom reports into clear, actionable problem statements.",
    ],
  },
  {
    role: "IT Support",
    org: "19 Empire",
    period: "Dec 2021 — Dec 2023",
    icon: Wrench,
    points: [
      "Provided technical support and troubleshooting for end users and computer systems.",
      "Resolved connectivity, software, and general IT issues under time pressure.",
      "Applied networking and systems knowledge to diagnose root causes of technical problems.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
              Experience
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Practical experience across QA, IT support, and troubleshooting — the foundation my
            security testing work builds on.
          </p>

          <div className="relative space-y-8">
            {/* vertical timeline line */}
            <div className="absolute left-5 top-2 bottom-2 w-px bg-border hidden sm:block" />

            {experience.map((job, index) => {
              const Icon = job.icon
              return (
                <div key={`${job.role}-${job.org}`} className="relative flex gap-6">
                  <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-border shrink-0 z-10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>

                  <div className="flex-1 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                      <h3 className="font-medium text-foreground">
                        {job.role} <span className="text-muted-foreground">— {job.org}</span>
                      </h3>
                      {job.period && (
                        <span className="text-xs font-mono text-primary">{job.period}</span>
                      )}
                    </div>
                    <ul className="space-y-2">
                      {job.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
