import { Play, Download, MoreHorizontal, Flame } from "lucide-react";

const HeroSection = ({ heroData }) => {
  return (
    <div className="relative h-[400px] sm:h-[450px] md:h-[500px] rounded-xl md:rounded-2xl overflow-hidden mb-6 md:mb-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroData.image})` }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#0f0f1e] via-[#0f0f1e]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#0f0f1e] via-transparent to-transparent"></div>
      </div>

      <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-12">
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <div className="flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-orange-500/30">
            <Flame className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500" />
            <span className="text-orange-500 text-xs md:text-sm font-semibold">
              {heroData.badge}
            </span>
          </div>
        </div>

        <div className="flex gap-2 mb-3 md:mb-4">
          {heroData.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-0.5 md:px-3 md:py-1 bg-[#20192b]/60 backdrop-blur-sm rounded-full text-xs md:text-sm text-gray-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 max-w-2xl leading-tight">
          {heroData.title}
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 md:mb-6 max-w-xl leading-relaxed line-clamp-2 sm:line-clamp-3">
          {heroData.description}
        </p>

        <div className="flex flex-wrap gap-2 md:gap-4">
          <button className="flex items-center gap-2 bg-[#ac8dd4] hover:bg-[#9d7ec5] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base font-semibold transition-all transform hover:scale-105 shadow-lg shadow-[#ac8dd4]/30">
            <Play className="w-4 h-4 md:w-5 md:h-5 fill-white" />
            <span className="hidden sm:inline cursor-pointer">Watch Now</span>
            <span className="sm:hidden">Watch</span>
          </button>
          <button className="flex items-center gap-2 bg-[#20192b]/60 backdrop-blur-md hover:bg-[#20192b]/80 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base font-semibold transition-all border border-white/10">
            <Download className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline cursor-pointer">Download</span>
          </button>
          <button className="flex items-center justify-center bg-[#20192b]/60 backdrop-blur-md hover:bg-[#20192b]/80 text-white px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all border border-white/10">
            <MoreHorizontal className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        <div className="flex gap-2 mt-4 md:mt-6">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-600 rounded-full"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
