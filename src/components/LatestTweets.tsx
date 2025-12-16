import { Twitter } from "lucide-react";
import bg from "@/assets/h1-parallax-3.jpg";

export const LatestTweets = () => {
  return (
    <section
      className="relative w-full h-[420px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        {/* Twitter Icon */}
        <Twitter className="w-6 h-6 mb-4 opacity-90" />

        {/* Title */}
        <h2 className="text-sm tracking-[0.35em] uppercase mb-4">
          Latest Tweets
        </h2>

        {/* Divider */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-8 h-px bg-white/40"></span>
          <span className="w-1 h-1 rounded-full bg-white/60"></span>
          <span className="w-8 h-px bg-white/40"></span>
        </div>

        {/* Message */}
        <p className="text-sm text-white/70 italic">
          Couldn't connect with Twitter
        </p>
      </div>
    </section>
  );
};
