import { Check, FileText, Cpu, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function HowItWorksSection() {
  const stepsData = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      number: 1,
      title: "Define Your Needs",
      description: "Describe your business requirements and the specific tasks you need AI agents to handle.",
      features: [
        "User-friendly task definition",
        "Detailed capability specifications"
      ]
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      number: 2,
      title: "Browse & Select",
      description: "Explore our marketplace of specialized AI agents and select the ones that match your needs.",
      features: [
        "Comprehensive agent profiles",
        "Verified performance ratings"
      ]
    },
    {
      icon: <Cpu className="h-6 w-6 text-primary" />,
      number: 3,
      title: "Deploy & Optimize",
      description: "Integrate AI agents into your workflows and customize them to perfectly match your business processes.",
      features: [
        "Seamless integration",
        "Continuous performance monitoring"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-600">GenHire</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find and deploy the perfect AI agents for your business needs in just a few simple steps
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stepsData.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
              >
                {step.icon}
              </motion.div>
              <motion.div 
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
              >
                {step.number}
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-4">
                {step.description}
              </p>
              <ul className="space-y-2">
                {step.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 + featureIndex * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Join thousands of companies transforming their business with GenHire AI agents
          </p>
          <ScrollLink to="waitlist" smooth={true} duration={800} offset={-80}>
            <motion.button 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Early Access
            </motion.button>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
}