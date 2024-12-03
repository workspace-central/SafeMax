import { motion } from "framer-motion"
import joa from "../assets/joa.png"
import amit from "../assets/amit.png"
import anand from "../assets/anand.png"
import pan from "../assets/pan.png"


const testimonials = [
  {
    title: "Industrial Control Systems Security and VAPT",
    content: "SafeMax's expertise in industrial control systems security was invaluable. Their thorough VAPT assessments identified critical vulnerabilities in our SCADA systems, allowing us to proactively address potential threats and ensure the safety of our operations.",
    cmp: "L&T Technology Services",
    author: "Amit Chadha (CEO, MD)",
    img: {amit}
  },
  {
    title: "Secure Software Development Lifecycle",
    content: "SafeMax's SDLC implementation services have significantly improved our software development process. By seamlessly integrating security into every phase, we've effectively reduced the risk of security breaches and ensured the timely delivery of secure applications.",
    cmp: "Persistent Systems",
    author: "Anand Deshpande (Chairman and MD)",
    img: {anand}
  },
  {
    title: "Swift Response, Exceptional Expertise",
    content: "Their rapid incident response services were instrumental in containing a recent cyberattack. SafeMax's team swiftly assessed the situation, implemented effective mitigation strategies, and minimized the impact on our business.",
    cmp: "Frasers Property",
    author: "Panote Sirivadhanabhakdi (CEO)",
    img: {pan}
  },
  {
    title: "Innovation Meets Reliability",
    content: "Their comprehensive incident response planning has given us confidence in our ability to respond effectively to security incidents. SafeMax's guidance has helped us develop a robust incident response plan that minimizes downtime and financial loss.",
    cmp: "Sartorius AG",
    author: "Joachim Kreuzburg (CEO and Executive Board Chair)",
    img: {joa}
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
          Here&apos;s What our
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
              &quot;
            </motion.div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {testimonial.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {testimonial.content}
              </p>
              {/* <p className="text-xs text-gray-500 font-medium text-right">
                — {testimonial.author}
              </p> */}
            </div>
            <div className="flex items-center justify-end">
              <div className="flex flex-col text-xs text-gray-500 font-medium justify-end items-end">
                <p className="text-gray-900 text-base">{testimonial.author}</p>
                <p>{testimonial.cmp}</p>
              </div>
              <img
                src={testimonial.img}
                alt={testimonial.author}
                className="w-10 h-10 rounded-full ml-4"
              />
            </div>
          </motion.div>

        ))}




      </motion.div>
    </section>
  )
}

