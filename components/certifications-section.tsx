import { GraduationCap, ShieldCheck, Network, Lock, FileCheck2, BrainCircuit, Award } from "lucide-react"

const certifications = [
  {
    title: "B.Eng, Electrical/Electronics Engineering",
    issuer: "Michael Okpara University of Agriculture, Umudike",
    icon: GraduationCap,
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Academy",
    icon: ShieldCheck,
  },
  {
    title: "Ethical Hacking",
    issuer: "Cisco Academy",
    icon: Lock,
  },
  {
    title: "Network Defense",
    issuer: "Cisco Academy — in progress",
    icon: Network,
  },
  {
    title: "Interconnecting Cisco Networking Devices (ICND1) v3",
    issuer: "Alison",
    icon: FileCheck2,
  },
  {
    title: "Information Management: Strategy & Data Protection",
    issuer: "Alison",
    icon: Award,
  },
  {
    title: "Emotional Intelligence for Software Developers",
    issuer: "Udemy",
    icon: BrainCircuit,
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
              Certifications & Education
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert) => {
              const Icon = cert.icon
              return (
                <div
                  key={cert.title}
                  className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-md bg-primary/10 shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
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
