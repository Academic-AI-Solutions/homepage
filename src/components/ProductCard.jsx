import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import FallbackCard from '@/components/ui/fallback-card';

const ProductCard = ({
  title,
  description,
  icon,
  delay = 0,
  previewPalette = 'gold',
  previewIcon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        y: -5,
      }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden rounded-xl border-border/60 bg-card shadow-lg transition-all duration-300 hover:shadow-2xl">
        <div className="hidden md:block">
          <FallbackCard
            palette={previewPalette}
            message={title}
            icon={previewIcon}
            className="h-48"
          />
        </div>
        <CardContent className="p-6 md:p-8 flex flex-col flex-grow">
          <div className="mb-6 flex items-start">
            <div className="rounded-lg bg-primary/10 p-3">{icon}</div>
          </div>
          <h3 className="mb-4 text-xl sm:text-2xl font-bold text-foreground">{title}</h3>
          <p className="mb-6 leading-relaxed text-muted-foreground">{description}</p>
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center font-semibold text-primary"
          >
            Learn More <ArrowRight className="ml-2" size={18} />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
