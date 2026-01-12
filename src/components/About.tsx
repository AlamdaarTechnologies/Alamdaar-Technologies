import { motion } from "motion/react";
import { Target, Users, Award, Zap, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Delivering solutions that create measurable business impact"
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our primary objective and motivation"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Uncompromising quality in every project we deliver"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Pioneering tomorrow's technologies today"
  }
];

const achievements = [
  { number: "3+", label: "Months of Excellence" },
  { number: "5+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "1-10", label: "Team Members" }
];

export function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-100 rounded-full">
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
              <span className="text-purple-600 text-sm">About Alamdaar</span>
            </div>

            <h2 className="text-5xl md:text-6xl text-gray-900 mb-8">
              Building Digital
              <span className="block bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Alamdaar Tech Services stands at the forefront of digital innovation, empowering 
              businesses to thrive in an ever-evolving technological landscape.
            </p>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              With a passionate team of experts and a proven track record of successful 
              transformations, we deliver solutions that don't just meet expectations — 
              they redefine what's possible.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 mb-10">
              {["Award-Winning Team", "ISO Certified", "24/7 Support"].map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">{badge}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-white rounded-2xl shadow-lg shadow-violet-500/30"
            >
              <span className="text-lg">Discover Our Story</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Content - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[600px]">
              {/* Main large image */}
              <div className="col-span-3 row-span-3 rounded-3xl overflow-hidden relative group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjI0NTEzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent"></div>
              </div>

              {/* Small accent boxes */}
              <div className="col-span-1 row-span-2 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-3xl p-6 flex flex-col justify-center items-center text-center">
                <Award className="w-10 h-10 text-white mb-2" />
                <div className="text-2xl text-white">3+</div>
                <div className="text-xs text-white/80">Months</div>
              </div>

              <div className="col-span-2 row-span-1 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">5+</div>
                  <div className="text-xs text-gray-600">Projects</div>
                </div>
              </div>

              <div className="col-span-1 row-span-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 flex flex-col justify-center items-center text-center">
                <Users className="w-10 h-10 text-white mb-2" />
                <div className="text-2xl text-white">1-10</div>
                <div className="text-xs text-white/80">Experts</div>
              </div>

              <div className="col-span-3 row-span-1 bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-4 flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <Zap className="w-8 h-8 text-orange-600" />
                  <div>
                    <div className="text-sm text-gray-900">Lightning Fast Delivery</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-violet-300/30 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-10 -left-10 w-40 h-40 bg-indigo-300/30 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-4xl text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative bg-white border-2 border-gray-200 group-hover:border-violet-300 rounded-2xl p-8 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 rounded-3xl blur-2xl opacity-90"></div>
          <div className="relative bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 rounded-3xl p-12 lg:p-16 overflow-hidden">
            {/* Decorative grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            <div className="relative z-10 grid md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-5xl md:text-6xl bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                    {achievement.number}
                  </div>
                  <div className="text-gray-400">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
