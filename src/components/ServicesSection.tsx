import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/salonData";
import { Scissors, Sparkles, Palette, Heart } from "lucide-react";

const categories = [
  { key: "all" as const, label: "الكل", icon: Sparkles },
  { key: "hair" as const, label: "شعر", icon: Scissors },
  { key: "nails" as const, label: "أظافر", icon: Palette },
  { key: "makeup" as const, label: "مكياج", icon: Palette },
  { key: "skincare" as const, label: "بشرة", icon: Heart },
];

const ServicesSection = () => {
  const [active, setActive] = useState<string>("all");
  const filtered = active === "all" ? services : services.filter((s) => s.category === active);

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium">خدماتنا</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gradient-gold">كل اللي تحتاجينه في مكان واحد</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">نقدم لكِ أفضل خدمات التجميل بأيدي خبيرات محترفات ومنتجات عالمية</p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === cat.key
                  ? "bg-gradient-gold text-primary-foreground shadow-gold"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-gold transition-all group"
            >
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{service.name}</h3>
              <p className="text-muted-foreground text-sm mt-2">{service.description}</p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                {service.price && <span className="text-primary font-bold text-sm">{service.price}</span>}
                {service.duration && <span className="text-muted-foreground text-xs">{service.duration}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
