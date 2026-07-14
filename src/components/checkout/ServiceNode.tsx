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
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      animate={
        active
          ? {
              scale: [1, 1.06, 1],
              boxShadow: [
                "0px 0px 0px rgba(59,130,246,0)",
                "0px 0px 35px rgba(59,130,246,.35)",
                "0px 0px 0px rgba(59,130,246,0)",
              ],
            }
          : {}
      }
      transition={{
        duration: 1,
        repeat: active ? Infinity : 0,
      }}
      onClick={onClick}
      className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 shadow-md"
    >
      <div
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl"
        style={{ backgroundColor: color }}
      >
        <Icon size={28} className="text-white" />
      </div>

      <h3 className="text-lg font-bold text-gray-900">{title}</h3>

      {subtitle && <p className="mt-2 text-sm text-gray-500">{subtitle}</p>}
    </motion.div>
  );
};

export default ServiceNode;
