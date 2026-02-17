import { getWhatsAppLink } from "@/lib/salonData";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-gradient-gold text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-gold-lg hover:scale-110 transition-transform animate-float"
      aria-label="تواصلي واتساب"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
