import { motion } from "motion/react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Moiz Saherwala",
    role: "Owner",
    company: "Saheri Hardware Centre",
    content: "Alamdaar Technologies has created what we asked for an informational website for our business and we are very happy with the results. The website is user-friendly and easy to navigate. The team at Alamdaar Technologies is professional and responsive. I would highly recommend their services to anyone looking for a website for their business.",
    rating: 5,
  },
  {
    name: "Aliakbar Saherwala",
    role: "CEO",
    company: "MAT Overseas",
    content: "The website they built for us is amazing and very user-friendly. The team at Alamdaar Technologies is professional and responsive. I would highly recommend their services to anyone looking for a website for their business.",
    rating: 5,
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-violet-500/10 backdrop-blur-sm border border-violet-500/20 rounded-full">
            <Star className="w-4 h-4 text-violet-400 fill-violet-400" />
            <span className="text-violet-300 text-sm">Client Success Stories</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Trusted By
            <span className="block bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it — hear from businesses that have transformed with our solutions
          </p>
        </motion.div>

        {/* Featured Testimonial - Large Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 lg:p-12">
              <Quote className="w-10 h-10 md:w-12 md:h-12 text-violet-400 mb-6" />

              <div className="flex gap-2 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center gap-6">
                <div>
                  <div className="text-xl text-white mb-1">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-violet-300">{testimonials[currentIndex].role}</div>
                  <div className="text-sm text-gray-400">{testimonials[currentIndex].company}</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all"
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                      aria-current={index === currentIndex ? "true" : undefined}
                      className={`h-2 rounded-full transition-all ${index === currentIndex
                        ? "w-8 bg-violet-400"
                        : "w-2 bg-white/30 hover:bg-white/50"
                        }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Grid - Smaller Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-200 mb-6 line-clamp-3 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div>
                  <div className="text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "5/5", label: "Average Rating" },
              { number: "5+", label: "Happy Clients" },
              { number: "100%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 blur-xl opacity-50"></div>
                  <div className="relative text-5xl bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
