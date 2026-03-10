import { motion } from "framer-motion";

const FashionBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Vertical editorial lines */}
      <div
        className="absolute left-12 top-0 bottom-0 w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent, hsl(0 0% 5% / 0.07) 20%, hsl(0 0% 5% / 0.07) 80%, transparent)",
        }}
      />
      <div
        className="absolute right-12 top-0 bottom-0 w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent, hsl(0 0% 5% / 0.07) 20%, hsl(0 0% 5% / 0.07) 80%, transparent)",
        }}
      />

      {/* Corner crop marks — fashion lookbook style */}
      {[
        { top: 24, left: 24, borderTop: true, borderLeft: true },
        { top: 24, right: 24, borderTop: true, borderRight: true },
        { bottom: 24, left: 24, borderBottom: true, borderLeft: true },
        { bottom: 24, right: 24, borderBottom: true, borderRight: true },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-6 h-6"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom,
            borderTop: pos.borderTop ? "1px solid hsl(0 0% 5% / 0.1)" : "none",
            borderLeft: pos.borderLeft ? "1px solid hsl(0 0% 5% / 0.1)" : "none",
            borderRight: pos.borderRight ? "1px solid hsl(0 0% 5% / 0.1)" : "none",
            borderBottom: pos.borderBottom ? "1px solid hsl(0 0% 5% / 0.1)" : "none",
          }}
        />
      ))}

      {/* Subtle diagonal watermark text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: "rotate(-35deg)" }}
      >
        <span
          className="font-display text-[12vw] font-bold tracking-[0.15em] uppercase select-none whitespace-nowrap"
          style={{ color: "hsl(0 0% 5% / 0.02)" }}
        >
          CDIP
        </span>
      </motion.div>

      {/* Small editorial dots */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full"
            style={{ background: "hsl(0 0% 5% / 0.12)" }}
          />
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full"
            style={{ background: "hsl(0 0% 5% / 0.12)" }}
          />
        ))}
      </div>
    </div>
  );
};

export default FashionBackground;
