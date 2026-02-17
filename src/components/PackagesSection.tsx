import { motion } from "framer-motion";
import { packages, getWhatsAppLink } from "@/lib/salonData";
import { Check, Crown } from "lucide-react";

const PackagesSection = () => {
  return (
    <section id="packages" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium">باقاتنا</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gradient-gold">اختاري الباقة اللي تناسبك</h2>
          <p className="text-muted-foreground mt-3">وفري أكثر مع باقاتنا المميزة</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.nameEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 border transition-all ${
                pkg.popular
                  ? "bg-gradient-card border-primary/50 shadow-gold-lg scale-105"
                  : "bg-gradient-card border-border hover:border-primary/30"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  الأكثر طلباً
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
                <p className="text-3xl font-black text-gradient-gold mt-3">{pkg.price}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={getWhatsAppLink(`السلام عليكم، أبغى أحجز ${pkg.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-full font-bold text-sm transition-all ${
                  pkg.popular
                    ? "bg-gradient-gold text-primary-foreground shadow-gold hover:scale-105"
                    : "border border-primary/30 text-primary hover:bg-primary/10"
                }`}
              >
                احجزي الآن
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
