"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus("success");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        
        {/* Info Blocks */}
        <div className="space-y-4">
          <div className="p-6 bg-card rounded-lg border border-border">
            <h4 className="font-semibold text-foreground">Email</h4>
            <p className="text-sm text-muted-foreground mt-1">Send me an email anytime</p>
            <p className="text-primary mt-4 text-sm font-medium">umambauma4@gmail.com</p>
          </div>
          
          <div className="p-6 bg-card rounded-lg border border-border">
            <h4 className="font-semibold text-foreground">WhatsApp</h4>
            <p className="text-sm text-muted-foreground mt-1">Quick response guaranteed</p>
            <p className="text-primary mt-4 text-sm font-medium">+2349069438958</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 p-6 bg-card rounded-lg border border-border">
          <h3 className="text-xl font-bold text-foreground mb-1">Send a Message</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Fill out the form below and I'll get back to you as soon as possible.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  required
                  className="w-full p-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="your@email.com"
                  required
                  className="w-full p-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What is this regarding?"
                required
                className="w-full p-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your project or security needs..."
                required
                className="w-full p-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-primary text-primary-foreground py-2.5 rounded-md font-medium hover:opacity-95 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-emerald-500 text-sm text-center font-medium mt-2">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-destructive text-sm text-center font-medium mt-2">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
