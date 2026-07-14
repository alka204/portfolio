import { motion } from "framer-motion";

interface Props {
  horizontal?: boolean;
  active?: boolean;
}

const ConnectionLine = ({ horizontal = false, active = false }: Props) => {
  return (
    <div
      className={`relative ${
        horizontal ? "h-0.5 w-24" : "h-16 w-0.5"
      } bg-gray-300`}
    >
      {active && (
        <motion.div
          initial={horizontal ? { x: "-100%" } : { y: "-100%" }}
          animate={horizontal ? { x: "100%" } : { y: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.3,
            ease: "linear",
          }}
          className={`absolute rounded-full bg-blue-500 ${
            horizontal ? "h-0.5 w-8" : "h-8 w-0.5"
          }`}
        />
      )}
    </div>
  );
};

export default ConnectionLine;
