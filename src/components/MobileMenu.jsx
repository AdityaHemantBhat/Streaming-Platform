import {
  Home,
  Compass,
  Layers,
  Heart,
  Play,
  Clock,
  FolderOpen,
  Download,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const MobileMenu = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Compass, label: "Explore" },
    { icon: Layers, label: "Genres" },
    { icon: Heart, label: "Favourites" },
  ];

  const libraryItems = [
    { icon: Play, label: "Continue Watching" },
    { icon: Clock, label: "Recently Added" },
    { icon: FolderOpen, label: "My Collections" },
    { icon: Download, label: "Downloads" },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-0 right-0 w-80 max-w-[85vw] h-screen bg-[#20192b]/95 backdrop-blur-2xl z-50 border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto space-y-2">
            <div className="space-y-1">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                    item.active
                      ? "bg-[#ac8dd4] text-white shadow-lg shadow-[#ac8dd4]/30"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 ${item.active ? "fill-white" : ""}`}
                  />
                  <span className="text-[15px] font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="border-b border-white/10 my-4"></div>

            <div className="space-y-1">
              {libraryItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-[15px] font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="border-b border-white/10 my-4"></div>

            <div className="space-y-1">
              <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all">
                <Settings className="w-5 h-5" />
                <span className="text-[15px] font-medium">Settings</span>
              </button>
              <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all">
                <LogOut className="w-5 h-5" />
                <span className="text-[15px] font-medium">Logout</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
