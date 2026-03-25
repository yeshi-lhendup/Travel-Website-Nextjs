"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { 
  Users,
  Globe,
  Award,
  Heart,
  MapPin,
  Clock,
  Shield,
  ThumbsUp
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [missionRef, missionInView] = useInView({ triggerOnce: true });
  const [statsRef, statsInView] = useInView({ triggerOnce: true });
  const [teamRef, teamInView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About Drukjourney
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Creating unforgettable travel experiences since 2024
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        ref={missionRef}
        initial="hidden"
        animate={missionInView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At Drukjourney, we believe that travel has the power to transform lives. 
                Our mission is to create authentic, meaningful travel experiences that 
                connect people with diverse cultures, breathtaking landscapes, and 
                unforgettable moments.
              </p>
              <p className="text-gray-600 mb-6">
                We are committed to sustainable tourism practices and supporting local 
                communities while providing our travelers with exceptional service and 
                carefully curated experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span>Passionate Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Safe Travel</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Award Winning</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="relative">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
                alt="Travel Experience"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-primary">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "50K+", label: "Happy Travelers" },
              { icon: MapPin, number: "100+", label: "Destinations" },
              { icon: Clock, number: "15K+", label: "Tours Completed" },
              { icon: ThumbsUp, number: "99%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-12"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "Travel Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                bio: "Travel enthusiast with 15 years of experience in the tourism industry."
              },
              {
                name: "Hmd Kamrul",
                role: "CEO & Founder",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EvsAlFJXNQLG4HwCEeDglyEJJsB5DOHLCQ&s",
                bio: "Expert in crafting unique travel experiences and cultural immersion."
              },
              {
                name: "Michael Chen",
                role: "Customer Experience",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                bio: "Dedicated to ensuring every traveler has an exceptional journey."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Customer First",
                description: "We prioritize our travelers' needs and satisfaction above all else."
              },
              {
                title: "Sustainability",
                description: "Committed to responsible tourism and environmental conservation."
              },
              {
                title: "Innovation",
                description: "Constantly improving our services with the latest travel technology."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you create unforgettable travel memories.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>
    </div>
  );
}