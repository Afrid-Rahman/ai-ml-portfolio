import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  features,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-xl overflow-hidden border border-border hover-lift"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>

        <ul className="space-y-1">
          {features.slice(0, 3).map((feature) => (
            <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
              <ArrowRight className="w-3 h-3 text-primary" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex gap-3 pt-2">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="glow" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
};
