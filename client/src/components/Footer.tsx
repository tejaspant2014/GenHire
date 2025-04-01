import { Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "wouter";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import genhireLogo from "@/assets/genhire-logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <motion.img 
                src={genhireLogo} 
                alt="GenHire Logo" 
                className="w-9 h-9 rounded-md object-cover" 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              />
              <span className="text-xl font-semibold">GenHire</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              The premier marketplace for finding, customizing, and deploying AI agents to enhance your business workflows and productivity.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/company/thegenhire/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
              >
                <Github className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink 
                  to="about" 
                  smooth={true} 
                  duration={800}
                  offset={-80}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </ScrollLink>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink 
                  to="how-it-works" 
                  smooth={true} 
                  duration={800}
                  offset={-80}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </ScrollLink>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500">© 2025 GenHire. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
