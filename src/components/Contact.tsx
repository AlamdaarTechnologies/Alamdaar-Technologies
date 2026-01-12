import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

// Replace 'YOUR_FORM_ID' with your actual Formspree form ID
// Get it from: https://formspree.io/forms -> Create a new form
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xanrbwra";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name} - ${formData.service}`,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        const data = await response.json();
        if (data.errors) {
          toast.error("There was an error sending your message. Please try again.");
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-violet-100 rounded-full">
            <MessageCircle className="w-4 h-4 text-violet-600" />
            <span className="text-violet-600 text-sm">Get In Touch</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6">
            Let's Create
            <span className="block bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your digital presence? Our team is here to help bring your vision to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-10"></div>
              <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-10 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-700 mb-3">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className="w-full h-14 rounded-xl border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="mail@gmail.com"
                        required
                        className="w-full h-14 rounded-xl border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-700 mb-3">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000-00000"
                        className="w-full h-14 rounded-xl border-gray-300 focus:border-violet-500 focus:ring-violet-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm text-gray-700 mb-3">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full h-14 px-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="seo">SEO Services</option>
                        <option value="security">Security</option>
                        <option value="management">Management</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-3">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project and how we can help..."
                      required
                      rows={6}
                      className="w-full rounded-xl border-gray-300 focus:border-violet-500 focus:ring-violet-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:from-violet-700 hover:via-indigo-700 hover:to-purple-700 py-7 rounded-xl text-lg shadow-lg shadow-violet-500/30 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl mb-8">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Mail className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-violet-200 mb-1">Email Us</div>
                        <div className="text-white">alamdaartechnologies@gmail.com</div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Phone className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-violet-200 mb-1">Call Us</div>
                        <div className="text-white">+91 94286 57252 <br /> +91 84017 42763</div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <MapPin className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-violet-200 mb-1">Visit Us</div>
                        <div className="text-white">Dummy Address<br />Vadodara,Gujarat,India-390002</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl text-gray-900">Business Hours</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-900">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-900">Closed</span>
                </div>
                <div className="pt-4 border-t-2 border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-violet-600">24/7 Emergency Support Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Badge */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-3xl p-6 text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-lg text-gray-900 mb-1">Quick Response</div>
              <div className="text-sm text-gray-600">We typically respond within 2 hours during business hours</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
