import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

import eventBajajBooth from "@/assets/event-bajaj-booth.jpeg";
import eventBajajTeam from "@/assets/event-bajaj-team.jpeg";
import eventTataTech from "@/assets/event-tata-technologies.jpeg";

const galleryItems = [
  {
    src: eventBajajBooth,
    title: "Bajaj Auto – PIECC Expo",
    description: "Representing Bajaj Chetak EV at the Pune International Exhibition Centre, Moshi",
  },
  {
    src: eventBajajTeam,
    title: "Bajaj Auto – Team Achievement",
    description: "Team photo with award at the PIECC exhibition booth",
  },
  {
    src: eventTataTech,
    title: "Tata Technologies – Corporate Event",
    description: "At Tata Technologies Office, Hinjewadi Phase 1, Pune",
  },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="py-24 px-6" ref={ref}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading font-heading">
              Event <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Moments captured from corporate events and exhibitions I coordinated
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className="glass-card overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-sm text-foreground font-medium">{item.description}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full glass-card text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={galleryItems[selectedImage].src}
            alt={galleryItems[selectedImage].title}
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;
