import { motion } from "framer-motion";
import { faqItems } from "@/lib/salonData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-medium">الأسئلة الشائعة</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gradient-gold">عندك سؤال؟</h2>
          <p className="text-muted-foreground mt-3">هنا تلقين أكثر الأسئلة اللي تجينا</p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-gradient-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-gold transition-all"
            >
              <AccordionTrigger className="text-foreground hover:text-primary text-right font-medium py-5 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
