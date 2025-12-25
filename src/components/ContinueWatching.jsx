import { Play } from "lucide-react";

const ContinueWatching = ({ data }) => {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          Continue Watching
        </h2>
        <button className="text-white hover:text-white text-sm font-medium transition-colors bg-[#2c2638] backdrop-blur-md px-3 py-1 rounded border border-white/10">
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-xl overflow-hidden bg-[#20192b]/60 backdrop-blur-sm hover:scale-105 transition-transform duration-300 cursor-pointer border border-white/5"
          >
            <div className="relative aspect-video">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                <div className="w-14 h-14 bg-[#ac8dd4] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg shadow-[#ac8dd4]/50 z-10">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 px-4 pb-7 z-0">
                <h3 className="text-white font-semibold text-base mb-2 drop-shadow-lg line-clamp-1">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white font-medium border border-white/10">
                    {item.episode}
                  </span>
                  <span className="text-white/90 text-md">{item.duration}</span>
                </div>

                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#ac8dd4] rounded-full transition-all duration-300"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContinueWatching;
