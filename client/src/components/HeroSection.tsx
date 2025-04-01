import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0"
          >
            <motion.h1 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4"
            >
              Discover and Deploy AI Agents with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-600">
                GenHire
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              The premier marketplace for finding, customizing, and deploying AI agents to revolutionize your workflow and boost productivity.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ScrollLink to="waitlist" smooth={true} duration={800} offset={-80}>
                <Button size="lg" className="gap-2">
                  Join the Waitlist
                  <ChevronRightIcon className="h-4 w-4" />
                </Button>
              </ScrollLink>
              <ScrollLink to="about" smooth={true} duration={800} offset={-80}>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </ScrollLink>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 flex items-center text-sm text-gray-500"
            >
              <div className="flex -space-x-2 mr-3">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                  <span className="text-xs">👤</span>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                  <span className="text-xs">👤</span>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                  <span className="text-xs">👤</span>
                </div>
              </div>
              <span>Join 1,200+ professionals already on the waitlist</span>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 lg:pl-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="p-4 text-gray-500">Modern startup office environment</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/60 to-gray-900/0"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L48 105C96 90 192 60 288 55C384 50 480 70 576 80C672 90 768 90 864 85C960 80 1056 70 1152 70C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  );
}
