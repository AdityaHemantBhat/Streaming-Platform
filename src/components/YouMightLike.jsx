import { useState, useEffect, useRef } from "react";
import { Star, Plus } from "lucide-react";

const YouMightLike = ({ data }) => {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef(null);
  const itemsPerPage = 8;

  useEffect(() => {
    loadMoreItems();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMoreItems();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [hasMore, loading, page]);

  const loadMoreItems = () => {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const newItems = data.slice(startIndex, endIndex);

      if (newItems.length > 0) {
        setDisplayedItems((prev) => [...prev, ...newItems]);
        setPage((prev) => prev + 1);
      }

      if (endIndex >= data.length) {
        setHasMore(false);
      }

      setLoading(false);
    }, 500);
  };

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          You Might Like
        </h2>
        <button className="text-white hover:text-white text-sm font-medium transition-colors bg-[#2c2638] backdrop-blur-md px-3 py-1 rounded border border-white/10">
          See All
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-xl overflow-hidden bg-[#20192b]/60 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer border border-white/5"
          >
            <div className="relative aspect-2/3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-12 h-12 bg-[#ac8dd4] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform shadow-lg shadow-[#ac8dd4]/50">
                  <Plus className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span className="text-white text-xs font-semibold">
                  {item.rating}
                </span>
              </div>
            </div>

            <div className="p-3">
              <h3 className="text-white font-medium text-sm line-clamp-2 leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="w-8 h-8 border-4 border-[#ac8dd4] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {hasMore && <div ref={observerTarget} className="h-10"></div>}

      {!hasMore && displayedItems.length > 0 && (
        <div className="text-center py-8 text-gray-500">
          Load More.....
        </div>
      )}
    </section>
  );
};

export default YouMightLike;
