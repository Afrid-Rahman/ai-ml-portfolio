import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  index: number;
}

export const TimelineItem = ({
  title,
  subtitle,
  date,
  description,
  index,
}: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      
      {/* Dot */}
      <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 rounded-full bg-primary glow-primary" />

      {/* Content */}
      <div className="bg-card rounded-xl border border-border p-5 hover-lift">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded w-fit">
            {date}
          </span>
        </div>
        <p className="text-primary text-sm font-medium mb-2">{subtitle}</p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </motion.div>
  );
};
