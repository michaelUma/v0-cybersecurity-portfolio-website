const skills = [
  {
    name: "Burp Suite",
    description: "Web vulnerability scanner and proxy tool for security testing",
    level: 75,
  },
  {
    name: "Nmap",
    description: "Network discovery and security auditing tool",
    level: 80,
  },
  {
    name: "Wireshark",
    description: "Network protocol analyzer for traffic inspection",
    level: 70,
  },
  {
    name: "OWASP Top 10",
    description: "Understanding and testing for top web security risks",
    level: 85,
  },
  {
    name: "Basic Penetration Testing",
    description: "Systematic testing methodologies and reporting",
    level: 65,
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
              Skills & Tools
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I work with industry-standard tools and continuously expand my technical skillset to stay ahead of emerging threats.
          </p>

          <div className="grid gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                  <span className="text-sm font-mono text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-lg bg-card border border-border">
            <h3 className="font-medium text-foreground mb-4">Additional Knowledge</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Linux",
                "Kali Linux",
                "Metasploit",
                "SQL Injection",
                "XSS",
                "CSRF",
                "Network Security",
                "CTF Challenges",
                "Security Reports",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
