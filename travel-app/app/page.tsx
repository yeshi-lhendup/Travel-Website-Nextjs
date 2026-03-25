"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Star, 
  Clock, 
  Shield, 
  Heart,
  Plane,
  Hotel,
  Car,
  Coffee,
  Camera,
  Award
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

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [destinationsRef, destinationsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [experiencesRef, experiencesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/home-banner.jpg')",
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
            Discover Your Next Adventure
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Explore breathtaking destinations and create unforgettable memories with
            Drukjourney.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button size="lg" asChild>
              <Link href="/booking">Start Your Adventure</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 -mt-20 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Destination</label>
                <div className="flex items-center border rounded-md p-2">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                  <input 
                    type="text" 
                    placeholder="Where to?"
                    className="w-full focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Check-in</label>
                <div className="flex items-center border rounded-md p-2">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <input 
                    type="date" 
                    className="w-full focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Check-out</label>
                <div className="flex items-center border rounded-md p-2">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <input 
                    type="date" 
                    className="w-full focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Guests</label>
                <div className="flex items-center border rounded-md p-2">
                  <Users className="h-5 w-5 text-gray-400 mr-2" />
                  <select className="w-full focus:outline-none">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button size="lg">Search Destinations</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <motion.section 
        ref={destinationsRef}
        initial="hidden"
        animate={destinationsInView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.h2 
          variants={fadeIn}
          className="text-3xl font-bold text-center mb-12"
        >
          Popular Destinations
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Paro Taktsang, Bhutan",
              image: "/paro-taktsang.png",
              description: "Experience the breathtaking Tiger's Nest Monastery, perched dramatically on a cliffside.",
              price: "$1,199",
              rating: 4.9,
              duration: "5 days"
            },
            {
              title: "Punakha, Bhutan",
              image: "/punakha.jpg",
              description: "Explore the ancient capital of Bhutan, featuring the majestic Punakha Dzong and lush valleys.",
              price: "$1,099",
              rating: 4.8,
              duration: "5 days"
            },
            {
              title: "Bumthang, Bhutan",
              image: "/bumthang.png",
              description: "Discover the spiritual heartland of Bhutan, featuring ancient temples and picturesque valleys.",
              price: "$1,399",
              rating: 4.9,
              duration: "6 days"
            },
          ].map((destination, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 text-sm font-semibold">
                  {destination.price}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {destination.title}
                </h3>
                <p className="text-white/90 text-sm mb-4">
                  {destination.description}
                </p>
                <div className="flex items-center justify-between text-white/90">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm">{destination.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Plane, title: "Flights" },
              { icon: Hotel, title: "Hotels" },
              { icon: Car, title: "Car Rentals" },
              { icon: Coffee, title: "Experiences" },
              { icon: Camera, title: "Tours" },
              { icon: Shield, title: "Insurance" },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <service.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Travel Experiences */}
      <motion.section 
        ref={experiencesRef}
        initial="hidden"
        animate={experiencesInView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-12"
          >
            Unforgettable Experiences
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cultural Tours",
                image: "/cultural-tours.jpg",
                description: "Immerse yourself in local traditions and customs."
              },
              {
                title: "Adventure Sports",
                image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833",
                description: "Get your adrenaline pumping with exciting activities."
              },
              {
                title: "Bhutanese Dish",
                image: "/bhutanese-dish.png",
                description: "Savor local cuisines and fine wines."
              },
              {
                title: "Wellness Retreats",
                image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
                description: "Rejuvenate your mind, body, and soul."
              }
            ].map((experience, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden rounded-lg">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
                    <p className="text-white/90 text-sm">{experience.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              { number: "50K+", label: "Happy Travelers" },
              { number: "100+", label: "Destinations" },
              { number: "150+", label: "Hotels" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-12"
          >
            What Our Travelers Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Hmd Kamrul",
                location: "Dhaka, BD",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EvsAlFJXNQLG4HwCEeDglyEJJsB5DOHLCQ&s",
                text: "An incredible experience! The team at Drukjourney made our dream vacation a reality. Every detail was perfectly planned."
              },
              {
                name: "Michael Chen",
                location: "Toronto, Canada",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                text: "Professional service and amazing destinations. Will definitely book with them again for our next adventure!"
              },
              {
                name: "Emma Wilson",
                location: "London, UK",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                text: "Outstanding customer service and attention to detail. Our trip to Bali was absolutely perfect thanks to Drukjourney."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f7f1f6]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Get Travel Updates
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss our latest travel deals, updates, and tips.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have discovered their dream
            destinations with Drukjourney.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/booking">Book Your Trip Now</Link>
          </Button>
        </div>
      </section>
    </>
  );
}