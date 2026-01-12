import { motion } from "motion/react";
import { Code2, TrendingUp, Shield, Cpu, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Transform your vision into stunning, high-performance digital experiences",
    features: [
      "React & Next.js Applications",
      "Responsive Design Systems",
      "E-commerce Platforms",
      "Progressive Web Apps",
      "API Development & Integration",
      "Performance Optimization"
    ],
    gradient: "from-violet-500 via-indigo-500 to-purple-500",
    accentColor: "violet"
  },
  {
    icon: TrendingUp,
    title: "SEO Services",
    description: "Elevate your digital presence and dominate search engine rankings",
    features: [
      "Advanced Keyword Research",
      "On-Page Optimization",
      "Technical SEO Audits",
      "Content Strategy & Marketing",
      "Authority Link Building",
      "Performance Analytics"
    ],
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    accentColor: "emerald"
  },
  {
    icon: Shield,
    title: "Security",
    description: "Safeguard your digital assets with military-grade cybersecurity",
    features: [
      "Comprehensive Security Audits",
      "Penetration Testing",
      "SSL/TLS Implementation",
      "DDoS Protection Systems",
      "End-to-End Encryption",
      "Compliance & Governance"
    ],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    accentColor: "purple"
  },
  {
    icon: Cpu,
    title: "Management",
    description: "Intelligent IT infrastructure management for seamless operations",
    features: [
      "Cloud Infrastructure",
      "Server Administration",
      "Database Optimization",
      "DevOps & CI/CD",
      "24/7 System Monitoring",
      "Disaster Recovery Planning"
    ],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    accentColor: "orange"
  }
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-violet-100 rounded-full">
            <Sparkles className="w-4 h-4 text-violet-600" />
            <span className="text-violet-600 text-sm">Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            Tech Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end technology services designed to accelerate your business growth
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative h-full bg-white border-2 border-gray-200 group-hover:border-transparent rounded-3xl p-8 lg:p-10 transition-all duration-500 overflow-hidden">
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                      <div className={`relative w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    <h3 className="text-3xl text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-8 text-lg">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + featureIndex * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <Button
                      onClick={scrollToContact}
                      variant="ghost"
                      className={`group/btn w-full justify-between text-lg py-6 rounded-xl bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:bg-gray-50`}
                    >
                      <span>Explore This Service</span>
                      <ArrowUpRight className={`w-5 h-5 text-${service.accentColor}-600 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform`} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 rounded-3xl p-12 lg:p-16 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl text-white mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto">
                Let's collaborate to build something extraordinary together
              </p>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-violet-600 hover:bg-gray-100 px-12 py-7 rounded-2xl text-lg shadow-2xl group"
              >
                Start Your Project Today
                <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
