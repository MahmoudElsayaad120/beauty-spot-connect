import { motion } from "framer-motion";
import { salonInfo, getWhatsAppLink } from "@/lib/salonData";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium">تواصلي معنا</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gradient-gold">نسعد بخدمتكِ</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact cards */}
          <div className="space-y-4">
            <motion.a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-gradient-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-gold transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">واتساب</p>
                <p className="text-muted-foreground text-sm" dir="ltr">+{salonInfo.whatsapp}</p>
              </div>
            </motion.a>

            <motion.a
              href={`tel:+${salonInfo.phone}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 bg-gradient-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-gold transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">اتصلي فينا</p>
                <p className="text-muted-foreground text-sm" dir="ltr">+{salonInfo.phone}</p>
              </div>
            </motion.a>

            <motion.a
              href={salonInfo.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 bg-gradient-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-gold transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">الموقع</p>
                <p className="text-muted-foreground text-sm">{salonInfo.city}، {salonInfo.district}</p>
              </div>
            </motion.a>
          </div>

          {/* Working hours + social */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">ساعات العمل</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">الأحد - الخميس</span>
                  <span className="text-foreground font-medium">{salonInfo.workingHours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">الجمعة</span>
                  <span className="text-foreground font-medium">{salonInfo.workingHours.friday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">السبت</span>
                  <span className="text-foreground font-medium">{salonInfo.workingHours.saturday}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-card border border-border rounded-xl p-6"
            >
              <h3 className="font-bold text-foreground mb-4">تابعينا</h3>
              <div className="flex gap-3">
                <a
                  href={salonInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a
                  href={salonInfo.snapchat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M5.829 4.533c-.6 1.344-.363 3.752-.267 4.606-.167.108-.371.235-.544.335-.684.398-1.366.793-1.638 1.598-.143.424-.141.884.02 1.318.208.556.686.995 1.308 1.236.099.038.187.075.269.112-.051.14-.092.263-.119.378-.103.44-.042.876.222 1.246.193.27.464.474.777.603.08.033.166.06.254.084-.068.182-.137.342-.221.488-.157.275-.344.518-.564.727-.402.383-.87.649-1.381.829a3.68 3.68 0 01-.442.125 1.022 1.022 0 00-.645.476c-.162.293-.098.684.16.943.182.182.413.282.598.372.414.2.854.334 1.29.44.101.025.185.072.265.153.126.127.234.359.391.565.169.22.418.473.834.59.25.07.514.082.788.052.275-.031.591-.11.975-.252a4.19 4.19 0 011.513-.198c.528.027 1.02.174 1.5.35.512.188 1.04.429 1.7.532.348.054.724.065 1.114-.035.404-.103.712-.364.92-.608.154-.18.276-.376.392-.565.08-.129.128-.19.153-.207.013-.008.044-.015.08-.022.434-.106.874-.24 1.29-.44.184-.089.413-.19.596-.37.258-.26.322-.65.16-.943a1.022 1.022 0 00-.644-.476 3.68 3.68 0 01-.443-.125 4.41 4.41 0 01-1.381-.83 3.54 3.54 0 01-.564-.726 4.43 4.43 0 01-.221-.488c.088-.024.174-.051.254-.084.313-.129.584-.333.777-.603.264-.37.325-.807.222-1.246a2.62 2.62 0 00-.119-.378c.082-.037.17-.074.269-.112.622-.241 1.1-.68 1.308-1.236.161-.434.163-.894.02-1.318-.272-.805-.954-1.2-1.638-1.598a4.95 4.95 0 00-.544-.335c.096-.854.333-3.262-.267-4.606C18.069 1.888 15.56 0 12.011 0S5.951 1.888 5.829 4.533z"/></svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
