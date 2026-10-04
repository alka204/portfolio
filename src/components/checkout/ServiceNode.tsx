import { motion } from "framer-motion";
import { type ElementType } from "react";

interface ServiceNodeProps {
  title: string;
  subtitle?: string;
  icon: ElementType;
  color: string;
  active?: boolean;
  onClick?: () => void;
}

const ServiceNode = ({
  title,
  subtitle,
  icon: Icon,
  color,
  active = false,
  onClick,
}: ServiceNodeProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.98 }}
      animate={
        active
          ? {
              scale: [1, 1.04, 1],
              boxShadow: [
                "0px 0px 0px rgba(0,188,212,0)",
                "0px 0px 30px rgba(0,188,212,.35)",
                "0px 0px 0px rgba(0,188,212,0)",
              ],
            }
          : {}
      }
      transition={{
        duration: 1.2,
        repeat: active ? Infinity : 0,
      }}
      onClick={onClick}
      className={`w-full max-w-sm cursor-pointer rounded-2xl border p-4 shadow-lg backdrop-blur-md transition-all duration-300 sm:p-5 ${
        active
          ? "border-accent bg-accent/15 text-white"
          : "border-border bg-surface-card hover:border-accent/40 hover:bg-surface-raised"
      }`}
    >
      <div
        className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl sm:mb-4 sm:h-14 sm:w-14"
        style={{ backgroundColor: color }}
      >
        <Icon size={24} className="text-black sm:h-7 sm:w-7" />
      </div>

      <h3 className="text-base font-bold text-white sm:text-lg">{title}</h3>

      {subtitle && <p className="mt-1 text-xs text-muted sm:mt-2 sm:text-sm">{subtitle}</p>}
    </motion.div>
  );
};

export default ServiceNode;
