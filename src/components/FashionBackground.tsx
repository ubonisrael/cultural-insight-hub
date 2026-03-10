import { motion } from "framer-motion";

const FashionBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Warm cream/beige base wash */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, #f5f0e8 0%, #faf7f2 40%, #f0ebe3 70%, #e8e0d4 100%)",
        }}
      />

      {/* Subtle fabric texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gold accent line — top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, transparent 10%, #c9a96e 30%, #d4b87a 50%, #c9a96e 70%, transparent 90%)",
        }}
      />

      {/* Gold accent line — bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 10%, #c9a96e40 30%, #c9a96e60 50%, #c9a96e40 70%, transparent 90%)",
        }}
      />

      {/* Vertical editorial lines */}
      <div
        className="absolute left-16 top-0 bottom-0 w-px"
        style={{
          background: "linear-gradient(to bottom, transparent, #c9a96e30 20%, #c9a96e30 80%, transparent)",
        }}
      />
      <div
        className="absolute right-16 top-0 bottom-0 w-px"
        style={{
          background: "linear-gradient(to bottom, transparent, #c9a96e30 20%, #c9a96e30 80%, transparent)",
        }}
      />

      {/* Corner crop marks — fashion lookbook style */}
      {[
        { top: 20, left: 20, borderTop: true, borderLeft: true },
        { top: 20, right: 20, borderTop: true, borderRight: true },
        { bottom: 20, left: 20, borderBottom: true, borderLeft: true },
        { bottom: 20, right: 20, borderBottom: true, borderRight: true },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-8 h-8"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom,
            borderTop: pos.borderTop ? "1px solid #c9a96e50" : "none",
            borderLeft: pos.borderLeft ? "1px solid #c9a96e50" : "none",
            borderRight: pos.borderRight ? "1px solid #c9a96e50" : "none",
            borderBottom: pos.borderBottom ? "1px solid #c9a96e50" : "none",
          }}
        />
      ))}

      {/* Large diagonal watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: "rotate(-35deg)" }}
      >
        <span
          className="font-display text-[14vw] font-bold tracking-[0.2em] uppercase select-none whitespace-nowrap"
          style={{ color: "#c9a96e08" }}
        >
          SOORENTE
        </span>
      </motion.div>

      {/* Decorative dots — top center */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full"
            style={{ background: "#c9a96e40" }}
          />
        ))}
      </div>
    </div>
  );
};

export default FashionBackground;
