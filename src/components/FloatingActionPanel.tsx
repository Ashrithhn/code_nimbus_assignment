import { ShoppingCart, Circle } from "lucide-react";

export function FloatingActionPanel() {
  return (
    <div className="fixed right-0 top-[29%] -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">

      <button
        className="flex items-center gap-3
                   w-[150px] h-[44px]
                   bg-[#ee2852]
                   text-white
                   text-xs font-medium uppercase tracking-widest
                   px-4
                   shadow-md
                   hover:bg-[#d81f45]
                   transition-all duration-300"
      >
        <Circle className="w-4 h-4 fill-white text-white" />
        <span>RELATED</span>
      </button>

      <button
        className="flex items-center gap-3
                   w-[150px] h-[44px]
                   bg-white
                   text-[#111111]
                   text-xs font-medium uppercase tracking-widest
                   px-4
                   shadow-md
                   hover:bg-[#f5f5f5]
                   transition-all duration-300"
      >
        <ShoppingCart className="w-4 h-4 text-[#ee2852]" />
        <span>BUY NOW</span>
      </button>

    </div>
  );
}
