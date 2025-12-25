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
  Video,
  Menu,
  X,
} from "lucide-react";

const Sidebar = ({ isMinimized, onToggle, isMobile }) => {
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
    <div
      className={`${
        isMinimized && !isMobile ? "w-20" : "w-64"
      } bg-[#20192b]/40 backdrop-blur-2xl h-screen fixed rounded-3xl left-0 top-0 flex flex-col ${
        isMinimized && !isMobile ? "p-3" : "p-5"
      } z-50 overflow-y-auto border-r border-white/5 transition-all duration-300`}
    >
      <div
        className={`flex items-center ${
          isMinimized && !isMobile ? "justify-center" : "justify-between"
        } mb-10 shrink-0`}
      >
        {isMinimized && !isMobile ? (
          <div className="w-10 h-10 bg-[#ac8dd4] rounded-lg flex items-center justify-center shrink-0">
            <Video className="w-5 h-5 text-white" />
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#ac8dd4] rounded-lg flex items-center justify-center shrink-0">
                <Video className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white whitespace-nowrap">
                Drameeo
              </span>
            </div>
            <button
              onClick={onToggle}
              className="text-gray-400 hover:text-white transition-colors shrink-0"
            >
              {isMobile ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto space-y-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center cursor-pointer ${
              isMinimized && !isMobile ? "justify-center" : "gap-4"
            } px-3 py-3 rounded-lg transition-all group relative ${
              item.active ? "text-white" : "text-gray-400 hover:text-white"
            }`}
            title={isMinimized && !isMobile ? item.label : ""}
          >
            <item.icon
              className={`w-5 h-5 shrink-0 ${
                item.active ? "text-[#ac8dd4] fill-[#ac8dd4]" : ""
              }`}
            />
            {(!isMinimized || isMobile) && (
              <span className="text-[15px] font-normal whitespace-nowrap">
                {item.label}
              </span>
            )}

            {isMinimized && !isMobile && (
              <div className="absolute left-full ml-2 px-3 py-2 bg-[#20192b] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-white/10">
                {item.label}
              </div>
            )}
          </button>
        ))}

        <div className="border-b border-white/5 my-4"></div>

        {libraryItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center cursor-pointer ${
              isMinimized && !isMobile ? "justify-center" : "gap-4"
            } px-3 py-3 rounded-lg text-gray-400 hover:text-white transition-all group relative`}
            title={isMinimized && !isMobile ? item.label : ""}
          >
            <item.icon className="w-5 h-5 shrink-0" />
            {(!isMinimized || isMobile) && (
              <span className="text-[15px] font-normal whitespace-nowrap">
                {item.label}
              </span>
            )}

            {isMinimized && !isMobile && (
              <div className="absolute left-full ml-2 px-3 py-2 bg-[#20192b] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-white/10">
                {item.label}
              </div>
            )}
          </button>
        ))}

        <div className="border-b border-white/5 my-4"></div>
      </nav>

      <div className="space-y-1 pt-2 shrink-0">
        <button
          className={`w-full flex items-center cursor-pointer ${
            isMinimized && !isMobile ? "justify-center" : "gap-4"
          } px-3 py-3 rounded-lg text-gray-400 hover:text-white transition-all group relative`}
          title={isMinimized && !isMobile ? "Settings" : ""}
        >
          <Settings className="w-5 h-5 shrink-0" />
          {(!isMinimized || isMobile) && (
            <span className="text-[15px] font-normal whitespace-nowrap">
              Settings
            </span>
          )}

          {isMinimized && !isMobile && (
            <div className="absolute left-full ml-2 px-3 py-2 bg-[#20192b] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-white/10">
              Settings
            </div>
          )}
        </button>
        <button
          className={`w-full flex items-center cursor-pointer ${
            isMinimized && !isMobile ? "justify-center" : "gap-4"
          } px-3 py-3 rounded-lg text-gray-400 hover:text-white transition-all group relative`}
          title={isMinimized && !isMobile ? "Logout" : ""}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {(!isMinimized || isMobile) && (
            <span className="text-[15px] font-normal whitespace-nowrap">
              Logout
            </span>
          )}

          {isMinimized && !isMobile && (
            <div className="absolute left-full ml-2 px-3 py-2 bg-[#20192b] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 border border-white/10">
              Logout
            </div>
          )}
        </button>
      </div>

      {isMinimized && !isMobile && (
        <button
          onClick={onToggle}
          className="mt-4 w-full flex items-center justify-center py-3 text-gray-400 hover:text-white transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
