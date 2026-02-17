import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryCategories = ["الكل", "شعر", "أظافر", "مكياج"];

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80", cat: "شعر", alt: "تسريحة شعر" },
  { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80", cat: "أظافر", alt: "مناكير" },
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80", cat: "مكياج", alt: "مكياج" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80", cat: "شعر", alt: "صبغة شعر" },
  { src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80", cat: "أظافر", alt: "تصميم أظافر" },
  { src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80", cat: "مكياج", alt: "مكياج عروس" },
  { src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80", cat: "شعر", alt: "بروتين" },
  { src: "https://images.unsplash.com/photo-1457972851104-2d36f180e3dc?w=600&q=80", cat: "أظافر", alt: "بديكير" },
  { src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80", cat: "مكياج", alt: "مكياج سهرة" },
];

const GallerySection = () => {
  const [filter, setFilter] = useState("الكل");
  const filtered = filter === "الكل" ? galleryItems : galleryItems.filter((i) => i.cat === filter);

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium">معرض أعمالنا</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gradient-gold">شوفي شغلنا بنفسك</h2>
        </motion.div>

        <div className="flex justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-gradient-gold text-primary-foreground shadow-gold"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-primary font-bold">{item.cat}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
