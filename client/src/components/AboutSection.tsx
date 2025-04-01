import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About GenHire</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2024, GenHire was born from a simple observation: businesses need better ways to find and utilize AI agents to enhance their productivity.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to create a marketplace of specialized AI agents that adapt to your business needs, making advanced AI accessible to everyone.
            </p>
            
            <motion.div 
              className="bg-gray-50 rounded-xl p-6 mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600">AC</span>
                </div>
                <div>
                  <h4 className="font-medium">Alex Chen</h4>
                  <p className="text-sm text-gray-500">Founder & CEO</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                "We're building GenHire to revolutionize how businesses find and deploy AI agents – powerful enough to transform workflows, simple enough that anyone can use it."
              </blockquote>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                "$2.5M in Seed Funding",
                "Team of 15 experts",
                "Early access coming Q2 2024"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center rounded-full bg-primary-100">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -top-6 -left-6 w-24 h-24 bg-violet-100 rounded-lg z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-100 rounded-lg z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              ></motion.div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="p-4 text-gray-500">Professional business people in a meeting</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
