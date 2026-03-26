
'use client';
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Users,
  Star,
  Clock,
  Heart,
  Share2,
  Check,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";


const destinations = [
    {
      id: 1,
      name: "Paro Taktsang, Bhutan",
      image: "/paro-taktsang.png",
      description: "Experience the breathtaking Tiger's Nest Monastery, perched dramatically on a cliffside.",
      longDescription: "Discover the magic of Paro Taktsang (Tiger's Nest), a revered Buddhist site perched 900 meters above the Paro Valley in Bhutan. Hike through scenic trails adorned with prayer flags to reach this sacred 8th-century architectural marvel where Guru Rinpoche meditated.",
      price: 1199,
      rating: 4.9,
      duration: "5 days",
      activities: ["Monastery Hike", "Cultural Tours", "Meditation", "Photography"],
      highlights: ["Tiger's Nest", "Paro Valley Views", "Guru Rinpoche's Cave", "Cafeteria Viewpoint"],
      included: [
        "Luxury accommodation",
        "Daily breakfast",
        "Guided tours",
        "Airport transfers",
        "Welcome drink",
        "Trekking sticks"
      ],
      gallery: [
        "/paro-taktsang.png",
        "/taktsang-gallery-1.jpg",
        "/taktsang-gallery-2.jpg",
        "/taktsang-gallery-3.jpg"
      ],
      reviews: [
        {
          name: "Sarah Johnson",
          rating: 5,
          comment: "Absolutely breathtaking! The hike was totally worth the view.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        },
        {
          name: "Michael Chen",
          rating: 4.8,
          comment: "A deeply spiritual and incredible experience.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
        }
      ]
    },
    {
      id: 2,
      name: "Punakha, Bhutan",
      image: "/punakha.jpg",
      description: "Explore the ancient capital of Bhutan, featuring the majestic Punakha Dzong and lush valleys.",
      longDescription: "Discover Punakha, the ancient capital of Bhutan, nestled amidst lush valleys and stunning landscapes. Visit the majestic Punakha Dzong, hike to the beautiful Khamsum Yulley Namgyal Chorten, and experience the thrill of walking across one of the longest suspension bridges over the Mo Chhu river.",
      price: 1099,
      rating: 4.8,
      duration: "5 days",
      activities: ["Dzong Tour", "River Rafting", "Hiking", "Cultural Experiences"],
      highlights: ["Punakha Dzong", "Suspension Bridge", "Khamsum Yulley Chorten", "Mo Chhu River"],
      included: [
        "Luxury accommodation",
        "Daily breakfast",
        "Airport transfers",
        "Cultural tours",
        "River rafting session",
        "Local guide"
      ],
      gallery: [
        "/punakha.jpg",
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
        "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8",
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1"
      ],
      reviews: [
        {
          name: "Emma Wilson",
          rating: 4.9,
          comment: "A serene and incredibly beautiful place. The Dzong is magnificent!",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
        },
        {
          name: "David Thompson",
          rating: 4.7,
          comment: "Incredible cultural experience and beautiful river views.",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        }
      ]
    },
    {
      id: 3,
      name: "Bumthang, Bhutan",
      image: "/bumthang.png",
      description: "Discover the spiritual heartland of Bhutan, featuring ancient temples and picturesque valleys.",
      longDescription: "Explore Bumthang, known as the spiritual heartland of Bhutan. Discover ancient Buddhist temples like Jambay Lhakhang, visit the sacred Burning Lake (Mebar Tsho), and experience the serene and culturally rich landscapes of the Choekhor, Chumey, Tang, and Ura valleys.",
      price: 1399,
      rating: 4.9,
      duration: "6 days",
      activities: ["Temple Visits", "Cultural Tours", "Trekking", "Local Cheese Tasting"],
      highlights: ["Jambay Lhakhang", "Mebar Tsho", "Jakar Dzong", "Ura Valley"],
      included: [
        "Lodge accommodation",
        "All meals",
        "Expert guides",
        "Transport",
        "Entrance fees",
        "Cultural experiences"
      ],
      gallery: [
        "/bumthang.png",
        "https://images.unsplash.com/photo-1526392060635-9d6019884377",
        "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4",
        "https://images.unsplash.com/photo-1620768237794-f3bfe964f9f6"
      ],
      reviews: [
        {
          name: "John Martinez",
          rating: 5.0,
          comment: "A deeply spiritual journey! The temples were exceptional.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
        },
        {
          name: "Lisa Chen",
          rating: 4.8,
          comment: "Perfectly organized tour with stunning valleys throughout.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        }
      ]
    },
    {
      id: 4,
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      description: "Immerse yourself in the perfect blend of tradition and modernity.",
      longDescription:
        "Tokyo, Japan's bustling capital, offers an extraordinary mix of ancient culture and cutting-edge innovation. Explore iconic landmarks, serene temples, and savor authentic Japanese cuisine during your visit to this vibrant city.",
      price: 1799,
      rating: 4.8,
      duration: "6 days",
      activities: ["City Tours", "Tea Ceremonies", "Sushi Making", "Temple Visits"],
      highlights: ["Shibuya", "Senso-ji", "Mount Fuji", "Akihabara"],
      included: [
        "Hotel accommodation",
        "Daily breakfast",
        "Local transportation",
        "Entrance fees",
        "Expert guides"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        "https://images.unsplash.com/photo-1523875194681-bedd468c58bf",
        "https://images.unsplash.com/photo-1513407030348-c983a97b98d8"
      ],
      reviews: [
        {
          name: "Hiro Tanaka",
          rating: 5.0,
          comment: "An unforgettable cultural experience with so much to see!",
          image: "https://images.unsplash.com/photo-1504593811423-6dd665756598"
        },
        {
          name: "Samantha Lee",
          rating: 4.7,
          comment: "Tokyo is a mesmerizing mix of the old and the new. Loved it!",
          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
        }
      ]
    },
    {
      id: 5,
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
      description: "Experience luxury and tranquility in overwater bungalows.",
      longDescription:
        "Escape to the Maldives, a tropical paradise known for its pristine beaches, crystal-clear waters, and unparalleled luxury. Relax in overwater villas, indulge in world-class cuisine, and enjoy endless water activities.",
      price: 2499,
      rating: 4.9,
      duration: "5 days",
      activities: ["Snorkeling", "Spa Treatments", "Sunset Cruises", "Water Sports"],
      highlights: ["Male", "Maafushi", "Hulhumale", "Biyadhoo"],
      included: [
        "Overwater bungalow stay",
        "All-inclusive meals",
        "Airport transfers",
        "Snorkeling gear rental",
        "Island excursions"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
        "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6"
      ],
      reviews: [
        {
          name: "Emily Carter",
          rating: 5.0,
          comment: "Pure paradise! The bungalows were breathtaking.",
          image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
        },
        {
          name: "Michael Davis",
          rating: 4.9,
          comment: "Amazing hospitality and stunning natural beauty.",
          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
        }
      ]
    },
    {
      id: 6,
      name: "Swiss Alps",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
      description: "Discover breathtaking mountain landscapes and charming villages.",
      longDescription:
        "The Swiss Alps, a haven for nature lovers, boast stunning peaks, picturesque villages, and exciting outdoor adventures. Enjoy world-class skiing, scenic hikes, and unique cultural experiences.",
      price: 1899,
      rating: 4.8,
      duration: "7 days",
      activities: ["Skiing", "Hiking", "Cable Car Rides", "Cheese Tasting"],
      highlights: ["Zermatt", "Interlaken", "Lucerne", "Jungfraujoch"],
      included: [
        "Chalet accommodation",
        "Daily breakfast and dinner",
        "Ski pass and equipment",
        "Cable car tickets",
        "Expert mountain guides"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
        "https://plus.unsplash.com/premium_photo-1689084892324-fd8822cb97c1",
        "https://plus.unsplash.com/premium_photo-1664298150089-c28f06834283",
        "https://images.unsplash.com/photo-1593186344142-ef775a6e596f"
      ],
      reviews: [
        {
          name: "Sarah Johnson",
          rating: 4.8,
          comment: "Breathtaking views and unforgettable skiing adventures.",
          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
        },
        {
          name: "Daniel Weber",
          rating: 4.7,
          comment: "The perfect mix of adventure and relaxation. Loved it!",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
        }
      ]
    }
  ];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const BookingCard: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [isBooking, setIsBooking] = useState(false);

  // Find the destination based on the ID from the URL
  const destination = destinations.find(d => d.id === Number(params.id));

  if (!destination) {
    router.push("/404");
    return null;
  }

  const handleBooking = async () => {
    if (!selectedDate) {
      toast({
        title: "Please select a date",
        variant: "destructive"
      });
      return;
    }

    setIsBooking(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Booking Confirmed!",
        description: "Check your email for booking details.",
      });
      
      // Reset form
      setSelectedDate("");
      setGuests(1);
    } catch (error) {
      toast({
        title: "Booking failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{destination.name}</h1>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{destination.duration}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>{destination.rating}/5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.section
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-bold mb-4">About This Trip</h2>
              <p className="text-gray-600 mb-6">{destination.longDescription}</p>
              
              <h3 className="font-semibold mb-3">What&apos;s Included:</h3>
              <ul className="grid grid-cols-2 gap-2">
                {destination.included.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Activities and Highlights */}
            <motion.section
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Activities</h3>
                  <div className="space-y-2">
                    {destination.activities.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-50 p-3 rounded-lg"
                      >
                        <Check className="h-5 w-5 text-primary mr-2" />
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Highlights</h3>
                  <div className="space-y-2">
                    {destination.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-50 p-3 rounded-lg"
                      >
                        <MapPin className="h-5 w-5 text-primary mr-2" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Gallery */}
            <motion.section
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {destination.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={image}
                      alt={`${destination.name} gallery ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Reviews */}
            <motion.section
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Traveler Reviews</h3>
              <div className="space-y-4">
                {destination.reviews.map((review, index) => (
                  <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center mb-2">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className="ml-1 text-sm">{review.rating}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Booking Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-3xl font-bold">${destination.price}</span>
                  <span className="text-gray-600">/ person</span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Number of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full p-2 border rounded-md"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Price ({guests} {guests === 1 ? 'guest' : 'guests'})</span>
                    <span>${destination.price * guests}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Service fee</span>
                    <span>${Math.round(destination.price * guests * 0.1)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total</span>
                    <span>
                      ${destination.price * guests + Math.round(destination.price * guests * 0.1)}
                    </span>
                  </div>
                </div>

                <Button 
                  className="w-full"
                  onClick={handleBooking}
                  disabled={isBooking}
                >
                  {isBooking ? "Confirming Booking..." : "Book Now"}
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  You won&apos;t be charged yet
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;