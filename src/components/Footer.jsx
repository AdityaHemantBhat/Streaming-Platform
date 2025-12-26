import {
  Video,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Company: ["About Us", "Careers", "Press", "Blog"],
    Support: [
      "Help Center",
      "Contact Us",
      "Privacy Policy",
      "Terms of Service",
    ],
    Content: ["Movies", "TV Shows", "Originals", "Coming Soon"],
    Account: [
      "My List",
      "Account Settings",
      "Redeem Gift Card",
      "Buy Gift Card",
    ],
  };

  return (
    <footer className="bg-linear-to-b from-[#0f0f1e] to-[#1a1a2e] border-t border-white/5 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#ac8dd4] rounded-lg flex items-center justify-center">
                <Video className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Drameeo</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your ultimate destination for unlimited entertainment. Stream
              thousands of movies and shows.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-linear-to-r from-[#20192b]/60 to-[#1a1a2e]/60 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 border border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-2 flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-5 h-5 text-white" />
                Stay Updated
              </h3>
              <p className="text-gray-400 text-sm">
                Subscribe to get special offers and updates
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 bg-[#0f0f1e]/60 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 placeholder-gray-500 border border-white/5 text-sm"
              />
              <button className="px-6 py-3 bg-[#ac8dd4] text-white rounded-xl font-medium hover:bg-[#ac8dd4]/90 transition-all duration-300 text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© 2024 Drameeo. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
