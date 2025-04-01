import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { waitlistValidationSchema } from "@shared/schema";
import { z } from "zod";
import { Clock, DollarSign, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { queryClient } from "@/lib/queryClient";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

type FormData = z.infer<typeof waitlistValidationSchema>;

export default function WaitlistSection() {
  const { toast } = useToast();
  const [agreed, setAgreed] = useState(false);

  // Get waitlist count
  const { data: countData } = useQuery<{ count: number }>({
    queryKey: ["/api/waitlist/count"],
  });

  const waitlistCount = countData?.count || 1200;
  
  // Form definition
  const form = useForm<FormData>({
    resolver: zodResolver(waitlistValidationSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  // Submit mutation
  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("POST", "/api/waitlist", data);
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        toast({
          title: "Success!",
          description: "You've been added to our waitlist.",
          variant: "default",
        });
        
        form.reset();
        setAgreed(false);
        
        // Update the count cache
        queryClient.setQueryData(["/api/waitlist/count"], { count: data.count });
      } else {
        toast({
          title: "Error",
          description: data.message,
          variant: "destructive",
        });
      }
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Form submit handler
  function onSubmit(data: FormData) {
    if (!agreed) {
      toast({
        title: "Please agree to receive updates",
        description: "You must agree to receive updates about GenHire.",
        variant: "destructive",
      });
      return;
    }
    
    mutation.mutate(data);
  }

  const benefitItems = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Early Access",
      description: "Be the first to experience GenHire with exclusive early access."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Special Pricing",
      description: "Waitlist members receive 50% off for the first 6 months."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Premium Support",
      description: "Dedicated onboarding and priority support for early adopters."
    }
  ];

  return (
    <section id="waitlist" className="bg-gradient-to-br from-primary to-violet-600 py-16 md:py-24 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Waitlist</h2>
          <p className="text-lg text-white/90 mb-8">
            Be among the first to experience GenHire when we launch. Early access members will receive exclusive benefits and premium features.
          </p>
          
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-8"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="text-left space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name" 
                            {...field} 
                            className="focus:ring-primary focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="you@example.com" 
                            type="email" 
                            {...field} 
                            className="focus:ring-primary focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center h-5">
                    <Checkbox 
                      id="agree" 
                      checked={agreed}
                      onCheckedChange={(checked) => setAgreed(checked === true)}
                      className="text-primary focus:ring-primary"
                    />
                  </div>
                  <label 
                    htmlFor="agree" 
                    className="ml-2 text-sm text-gray-600 cursor-pointer"
                  >
                    I agree to receive updates about GenHire
                  </label>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Join Waitlist"
                    )}
                  </Button>
                </motion.div>
              </form>
            </Form>
            
            <motion.div 
              className="mt-6 flex items-center justify-center space-x-4 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-500">
                Join <span id="waitlistCount">{waitlistCount.toLocaleString()}+</span> others on the waitlist
              </span>
              <span className="h-1 w-1 rounded-full bg-gray-300"></span>
              <span className="text-gray-500">Early access Q2 2024</span>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefitItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1), type: "spring" }}
                viewport={{ once: true }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-white/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
