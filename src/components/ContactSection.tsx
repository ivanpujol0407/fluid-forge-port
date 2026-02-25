import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder: replace action URL with Formspree/EmailJS endpoint
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">
              Let's build something great together.
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have a question about my portfolio or want to discuss a potential collaboration? I am currently available for roles in R&D and Mechanical Engineering. Drop me a message below or send me an email, and I'll get back to you shortly.
            </p>

            <div className="space-y-4 mb-8">
              <a href="mailto:ivanpujol0407@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">ivanpujol0407@gmail.com</span>
              </a>
              <a href="tel:+4555264952" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+45 55 26 49 52</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Copenhagen, Denmark</span>
              </div>
              <a
                href="https://www.linkedin.com/in/ivanpujolvidal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                <span className="text-sm">LinkedIn Profile</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm text-muted-foreground">Open to Opportunities</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                <CheckCircle className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="Subject" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." rows={5} required className="mt-1" />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
