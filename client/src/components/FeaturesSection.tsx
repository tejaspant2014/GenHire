import { 
  BarChart3, Users, Zap, Clipboard, 
  Shield, Puzzle 
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    title: "Smart Analytics",
    description: "Gain deep insights into your workflow with real-time analytics and customizable dashboards.",
    color: "bg-primary-100",
    textColor: "text-primary"
  },
  {
    icon: <Users className="h-6 w-6 text-violet-600" />,
    title: "Team Collaboration",
    description: "Seamlessly work together with integrated messaging, file sharing, and real-time document editing.",
    color: "bg-violet-100",
    textColor: "text-violet-600"
  },
  {
    icon: <Zap className="h-6 w-6 text-green-600" />,
    title: "Automated Workflows",
    description: "Create custom automation rules to handle repetitive tasks and streamline your processes.",
    color: "bg-green-100",
    textColor: "text-green-600"
  },
  {
    icon: <Clipboard className="h-6 w-6 text-yellow-600" />,
    title: "Advanced Task Management",
    description: "Prioritize, assign, and track tasks with customizable boards, lists, and Gantt charts.",
    color: "bg-yellow-100",
    textColor: "text-yellow-600"
  },
  {
    icon: <Shield className="h-6 w-6 text-red-600" />,
    title: "Enterprise-Grade Security",
    description: "Rest easy with robust security features including encryption, single sign-on, and role-based access control.",
    color: "bg-red-100",
    textColor: "text-red-600"
  },
  {
    icon: <Puzzle className="h-6 w-6 text-purple-600" />,
    title: "Powerful Integrations",
    description: "Connect with the tools you already use with our extensive library of over 100 app integrations.",
    color: "bg-purple-100",
    textColor: "text-purple-600"
  }
];

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GenHire?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform brings together everything you need to find, customize, and deploy AI agents to revolutionize your workflow.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
