import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MobileMenu from "./components/MobileMenu";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ContinueWatching from "./components/ContinueWatching";
import YouMightLike from "./components/YouMightLike";
import Footer from "./components/Footer";

//data for all things
const heroData = {
  title: "Dimensional Kids on an Adventure",
  description:
    "When two curious kids stumble into a hidden portal, they travel across magical dimensions while trying to find their way home...",
  image:
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=600&fit=crop",
  tags: ["Drama", "Fantasy"],
  badge: "Now Trending",
};

const continueWatchingData = [
  {
    id: 1,
    title: "Midnight Mischief Squad",
    episode: "Ep.3",
    duration: "30min 55sec",
    progress: 45,
    image:
      "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Legends of the Emerald Mist",
    episode: "S1 Ep.3",
    duration: "30min 55sec",
    progress: 60,
    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Rise of the Last Guardian",
    episode: "S1 Ep.3",
    duration: "30min 55sec",
    progress: 30,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/778b4cd438166a931c36c0438d6da852059d4c4ae682ae7eba2917cf0d4e9928.jpg",
  },
  {
    id: 4,
    title: "The Broken Crown",
    episode: "S1 Ep.5",
    duration: "30min 55sec",
    progress: 75,
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=250&fit=crop",
  },
];

const youMightLikeData = [
  {
    id: 1,
    title: "Shadow Realm Chronicles",
    image:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1534939678i/41432179.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Joker: The Dark Knight",
    image:
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=400&fit=crop",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Ocean's Mystery",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=400&fit=crop",
    rating: 4.5,
  },
  {
    id: 4,
    title: "Disney+ Originals",
    image:
      "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?w=300&h=400&fit=crop",
    rating: 4.7,
  },
  {
    id: 5,
    title: "Cosmic Adventures",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&h=400&fit=crop",
    rating: 4.6,
  },
  {
    id: 6,
    title: "The Last Frontier",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop",
    rating: 4.4,
  },
  {
    id: 7,
    title: "Neon Nights",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop",
    rating: 4.3,
  },
  {
    id: 8,
    title: "Ancient Legends",
    image:
      "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?w=300&h=400&fit=crop",
    rating: 4.8,
  },
  {
    id: 9,
    title: "Future Wars",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop",
    rating: 4.5,
  },
  {
    id: 10,
    title: "Mystery Island",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
    rating: 4.7,
  },
  {
    id: 11,
    title: "Dragon's Lair",
    image:
      "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=400&fit=crop",
    rating: 4.9,
  },
  {
    id: 12,
    title: "Starlight Symphony",
    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300&h=400&fit=crop",
    rating: 4.6,
  },
  {
    id: 13,
    title: "Urban Legends",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Urban_Legend_film.jpg/250px-Urban_Legend_film.jpg",
    rating: 4.4,
  },
  {
    id: 14,
    title: "The Enchanted Forest",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=400&fit=crop",
    rating: 4.8,
  },
  {
    id: 15,
    title: "Cyber Revolution",
    image: "https://i.scdn.co/image/ab6765630000ba8a16affadb80af819a9e5be1bc",
    rating: 4.5,
  },
  {
    id: 16,
    title: "Time Travelers",
    image:
      "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=400&fit=crop",
    rating: 4.7,
  },
  {
    id: 17,
    title: "Phantom Protocol",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=400&fit=crop",
    rating: 4.6,
  },
  {
    id: 18,
    title: "Galactic Empire",
    image:
      "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?w=300&h=400&fit=crop",
    rating: 4.9,
  },
  {
    id: 19,
    title: "Silent Shadows",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&h=400&fit=crop",
    rating: 4.3,
  },
  {
    id: 20,
    title: "Eternal Quest",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop",
    rating: 4.8,
  },
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#0f0f1e]">
      <div className="hidden lg:block">
        <Sidebar
          isMinimized={isSidebarMinimized}
          onToggle={handleSidebarToggle}
          isMobile={false}
        />
      </div>

      <div className="lg:hidden">
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={handleMobileMenuToggle}
        />
      </div>

      <div
        className={`${
          isSidebarMinimized ? "lg:ml-20" : "lg:ml-64"
        } min-h-screen transition-all duration-300`}
      >
        <Header
          onMobileMenuClick={handleMobileMenuToggle}
          isMinimized={isSidebarMinimized}
        />

        <main className="pt-20 md:pt-24 px-4 md:px-8 pb-8">
          <HeroSection heroData={heroData} />
          <ContinueWatching data={continueWatchingData} />
          <YouMightLike data={youMightLikeData} />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
