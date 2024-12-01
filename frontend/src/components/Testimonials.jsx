import { motion } from "framer-motion"

const testimonials = [
  {
    title: "Unmatched in Proactive Defense",
    content: "VRV Security has redefined cybersecurity for us. Their proactive threat monitoring has significantly reduced potential vulnerabilities, and their team's expertise is unmatched. We feel secure knowing they're constantly one step ahead.",
    author: "CIO, Global Financial Services Firm"
  },
  {
    title: "A Trusted Partner in Security",
    content: "With VRV Security, we have a reliable partner we can count on. Their deep industry knowledge and 24/7 monitoring give us the peace of mind to focus on our core business. They've consistently exceeded our expectations.",
    author: "CTO, Fortune 500 Tech Company"
  },
  {
    title: "Swift Response, Exceptional Expertise",
    content: "VRV Security's SOC team responded quickly during a critical threat event, demonstrating exceptional expertise. Their swift actions saved us from potential data breaches and ensured our systems stayed resilient.",
    author: "Head of IT, Healthcare Provider"
  },
  {
    title: "Innovation Meets Reliability",
    content: "VRV Security has become integral to our infrastructure. Their innovative AI-driven solutions and managed VAPT services have transformed our cybersecurity. We're confident we have the best defenses in place.",
    author: "CISO, Leading Retail Chain"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const quoteVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.5
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-white font-sans">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          Here's What our
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold text-[#FF5C00]">
          Customers Are Saying
        </h2>
      </div>

      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 }
            }}
            className="relative bg-[#FFF9F6] p-8 rounded-xl"
          >
            <motion.div
              variants={quoteVariants}
              className="absolute right-8 top-8 text-[#FF5C00] text-8xl font-serif"
            >
              "
            </motion.div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {testimonial.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {testimonial.content}
              </p>
              <p className="text-xs text-gray-500 font-medium text-right">
                — {testimonial.author}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

