"use client"

import { useState } from "react"
import { Mail, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-sm font-medium tracking-widest text-primary uppercase">
              Contact
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Interested in working together? Let&apos;s discuss how I can help secure your digital assets.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">Email</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Send me an email anytime
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:kelechi.uma@example.com"
                    className="text-primary hover:underline break-all"
                  >
                    kelechi.uma@example.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">WhatsApp</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Quick response guaranteed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    +1 (234) 567-890
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Send a Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">
                      <Send className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for reaching out. I&apos;ll respond within 24 hours.
                    </p>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <FieldGroup>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field>
                          <FieldLabel>Name</FieldLabel>
                          <Input
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </Field>
                        <Field>
                          <FieldLabel>Email</FieldLabel>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </Field>
                      </div>
                      <Field>
                        <FieldLabel>Subject</FieldLabel>
                        <Input
                          placeholder="What is this regarding?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel>Message</FieldLabel>
                        <Textarea
                          placeholder="Tell me about your project or security needs..."
                          className="min-h-[120px] resize-none"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </Field>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </FieldGroup>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
