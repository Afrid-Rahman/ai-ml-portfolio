import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  image?: string;
  index: number;
}

export const CertificateCard = ({
  title,
  issuer,
  year,
  credentialUrl,
  image,
  index,
}: CertificateCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-card rounded-xl border border-border p-6 hover-lift"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

      <div className="relative flex items-start gap-4">
        {/* Icon or Image */}
        <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
          {image ? (
            <img src={image} alt={issuer} className="w-10 h-10 object-contain" />
          ) : (
            <Award className="w-7 h-7 text-primary" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mt-1">{issuer}</p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
              {year}
            </span>
            {credentialUrl && (
              <a
                href={credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
