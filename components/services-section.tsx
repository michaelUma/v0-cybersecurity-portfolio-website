import { Search, ShieldCheck, Bug } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Search,
    title: "Website Security Scan",
    description:
      "Comprehensive scanning of your website to identify security vulnerabilities, misconfigurations, and potential entry points for attackers.",
    features: [
      "Automated vulnerability scanning",
      "Manual verification of findings",
      "Detailed security report",
      "Remediation recommendations",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Vulnerability Assessment",
    description:
      "Systematic evaluation of your systems and applications to identify, quantify, and prioritize security weaknesses.",
    features: [
      "Asset discovery",
      "Vulnerability identification",
      "Risk prioritization",
      "Actionable insights",
    ],
  },
  {
    icon: Bug,
    title: "Basic Penetration Testing",
    description:
      "Simulated cyber attacks on your systems to evaluate security measures and identify exploitable vulnerabilities.",
    features: [
      "Black/gray box testing",
      "Exploitation attempts",
      "Security gap analysis",
      "Executive summary report",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
              Services
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional security services to help identify and address vulnerabilities in your digital infrastructure.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="bg-card border-border hover:border-primary/50 transition-colors group">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
