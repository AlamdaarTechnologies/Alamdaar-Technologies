import { motion } from "motion/react";
import { ArrowRight, Code2, Shield, TrendingUp, Cpu, Sparkles, Zap } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-500/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-500"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 backdrop-blur-sm border border-violet-500/20 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-violet-300 text-sm">Next-Gen Digital Solutions</span>
            </motion.div>

            <h1 className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-6xl md:text-7xl lg:text-8xl text-white mb-4"
              >
                Build The
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent relative inline-block"
              >
                Future
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -right-8 -top-8 w-16 h-16 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full blur-xl opacity-50"
                ></motion.div>
              </motion.div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl"
            >
              Alamdaar Tech Services crafts exceptional digital experiences through cutting-edge 
              web development, strategic SEO, robust security, and intelligent management solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:from-violet-700 hover:via-indigo-700 hover:to-purple-700 text-lg px-10 py-7 rounded-2xl shadow-2xl shadow-violet-500/50 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={scrollToServices}
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 rounded-2xl border-2 border-white bg-white text-black"
              >
                Explore Services
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { number: "5+", label: "Projects Delivered" },
                { number: "98%", label: "Client Retention" },
                { number: "24/7", label: "Expert Support" }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                    <div className="text-3xl text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[600px]">
              {/* Web Development - Large */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="col-span-4 row-span-3 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Code2 className="w-12 h-12 text-violet-400 mb-4" />
                <h3 className="text-2xl text-white mb-2">Web Development</h3>
                <p className="text-gray-300 text-sm">Cutting-edge solutions built with modern frameworks</p>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-violet-500/20 to-transparent rounded-tl-full"></div>
              </motion.div>

              {/* SEO - Tall */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="col-span-2 row-span-4 bg-gradient-to-br from-emerald-600/20 to-green-600/20 backdrop-blur-xl border border-white/20 rounded-3xl p-6 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <TrendingUp className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-xl text-white mb-2">SEO Services</h3>
                <p className="text-gray-300 text-sm">Dominate search rankings</p>
                <div className="mt-auto pt-4">
                  <div className="space-y-2">
                    {[85, 92, 78].map((value, i) => (
                      <div key={i} className="bg-white/10 h-2 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          transition={{ delay: 1 + i * 0.2, duration: 1 }}
                          className="h-full bg-gradient-to-r from-emerald-400 to-green-400"
                        ></motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Security - Wide */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="col-span-4 row-span-2 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-white/20 rounded-3xl p-6 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Shield className="w-10 h-10 text-purple-400 mb-3" />
                <h3 className="text-xl text-white mb-2">Security</h3>
                <p className="text-gray-300 text-sm">Enterprise-grade protection</p>
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
              </motion.div>

              {/* Management - Square */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="col-span-2 row-span-2 bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-xl border border-white/20 rounded-3xl p-6 relative overflow-hidden group flex flex-col items-center justify-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Cpu className="w-10 h-10 text-orange-400 mb-3" />
                <h3 className="text-lg text-white mb-1">Management</h3>
                <p className="text-gray-300 text-xs">IT Infrastructure</p>
              </motion.div>

              {/* Accent - Small */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="col-span-2 row-span-1 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center"
              >
                <Zap className="w-8 h-8 text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -100],
            x: Math.random() * 100 - 50,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        ></motion.div>
      ))}
    </section>
  );
}