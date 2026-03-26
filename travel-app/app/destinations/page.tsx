"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import Link from "next/link";

const destinations = [
  {
    id: 1,
    name: "Paro Taktsang, Bhutan",
    image: "/paro-taktsang.png",
    description: "Experience the breathtaking Tiger's Nest Monastery, perched dramatically on a cliffside.",
    price: "$1,199",
    rating: 4.9,
    duration: "5 days",
    activities: ["Monastery Hike", "Cultural Tours", "Meditation", "Photography"],
    highlights: ["Tiger's Nest", "Paro Valley Views", "Guru Rinpoche's Cave", "Cafeteria Viewpoint"],
  },
  {
    id: 2,
    name: "Punakha, Bhutan",
    image: "/punakha.jpg",
    description: "Explore the ancient capital of Bhutan, featuring the majestic Punakha Dzong and lush valleys.",
    price: "$1,099",
    rating: 4.8,
    duration: "5 days",
    activities: ["Dzong Tour", "River Rafting", "Hiking", "Cultural Experiences"],
    highlights: ["Punakha Dzong", "Suspension Bridge", "Khamsum Yulley Chorten", "Mo Chhu River"],
  },
  {
    id: 3,
    name: "Bumthang, Bhutan",
    image: "/bumthang.png",
    description: "Discover the spiritual heartland of Bhutan, featuring ancient temples and picturesque valleys.",
    price: "$1,399",
    rating: 4.9,
    duration: "6 days",
    activities: ["Temple Visits", "Cultural Tours", "Trekking", "Local Cheese Tasting"],
    highlights: ["Jambay Lhakhang", "Mebar Tsho", "Jakar Dzong", "Ura Valley"],
  },
  {
    id: 4,
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    description: "Immerse yourself in the perfect blend of tradition and modernity.",
    price: "$1,799",
    rating: 4.8,
    duration: "6 days",
    activities: ["City Tours", "Tea Ceremonies", "Sushi Making", "Temple Visits"],
    highlights: ["Shibuya", "Senso-ji", "Mount Fuji", "Akihabara"],
  },
  {
    id: 5,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    description: "Experience luxury and tranquility in overwater bungalows.",
    price: "$2,499",
    rating: 4.9,
    duration: "5 days",
    activities: ["Snorkeling", "Spa Treatments", "Sunset Cruises", "Water Sports"],
    highlights: ["Male", "Maafushi", "Hulhumale", "Biyadhoo"],
  },
  {
    id: 6,
    name: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
    description: "Discover breathtaking mountain landscapes and charming villages.",
    price: "$1,899",
    rating: 4.8,
    duration: "7 days",
    activities: ["Skiing", "Hiking", "Cable Car Rides", "Cheese Tasting"],
    highlights: ["Zermatt", "Interlaken", "Lucerne", "Jungfraujoch"],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDuration = !selectedDuration || destination.duration.includes(selectedDuration);
    const matchesPrice = !selectedPrice || destination.price >= selectedPrice;
    return matchesSearch && matchesDuration && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative h-[40vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Destinations</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Discover your next great adventure
          </p>
        </div>
      </motion.section>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-md py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div>
              <select
                className="w-full p-2 border rounded-md"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
              >
                <option value="">Duration</option>
                <option value="5">5 days</option>
                <option value="6">6 days</option>
                <option value="7">7 days</option>
                <option value="8">8 days</option>
              </select>
            </div>
            <div>
              <select
                className="w-full p-2 border rounded-md"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
              >
                <option value="">Price Range</option>
                <option value="999">Under $1000</option>
                <option value="1500">Under $1500</option>
                <option value="2000">Under $2000</option>
                <option value="2500">Under $2500</option>
              </select>
            </div>
            <Button className="w-full">
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4  right-4 bg-white/90 rounded-full px-3 py-1 text-sm font-semibold">
                  {destination.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-600">{destination.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-yellow-500 mr-1">{destination.rating}</span>
                    <span className="text-sm text-gray-600">/ 5.0</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Activities</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.activities.map((activity, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button 
                    className="w-full"
                    asChild
                  >
                    <Link href={`/destinations/${destination.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}