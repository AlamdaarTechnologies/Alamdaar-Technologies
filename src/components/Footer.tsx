import { Facebook, Twitter, Linkedin, Instagram, Github, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-gray-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl blur-lg opacity-50"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                </div>
                <span className="text-2xl">
                  <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Alamdaar
                  </span>
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Empowering businesses through innovative technology solutions. We transform visions into digital realities with excellence and dedication.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Github, href: "#" }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-11 h-11 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 border border-white/10 flex items-center justify-center transition-all group"
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["home", "services", "about", "portfolio", "testimonials", "contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-gray-400 hover:text-violet-400 transition-colors capitalize group inline-flex items-center gap-2"
                  >
                    <span>{link}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "SEO Optimization",
                "Cybersecurity",
                "IT Management",
                "Cloud Solutions",
                "Consulting"
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg mb-6">Stay Connected</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for the latest tech insights and exclusive updates.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-gray-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 rounded-xl transition-all flex items-center justify-center gap-2 text-white"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Subscribe</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Alamdaar Technologies. All rights reserved.
            </div>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/50"
        >
          <ArrowUpRight className="w-5 h-5 text-white rotate-45" />
        </motion.button>
      </div>
    </footer>
  );
}