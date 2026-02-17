import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems, getWhatsAppLink, services } from "@/lib/salonData";
import { Bot, X, Send } from "lucide-react";

interface Message {
  from: "bot" | "user";
  text: string;
  quickReplies?: string[];
}

const welcomeMessage: Message = {
  from: "bot",
  text: "أهلاً فيكِ في صالون لمسة جمال! 💕 كيف أقدر أساعدك؟",
  quickReplies: ["وش الأسعار؟", "وش الخدمات؟", "أبغى أحجز موعد"],
};

const findAnswer = (input: string): Message => {
  const lower = input.trim();

  // Check for booking/consultation intent
  if (lower.includes("حجز") || lower.includes("موعد") || lower.includes("استشارة")) {
    return {
      from: "bot",
      text: "يسعدنا نحجز لك! تواصلي معنا واتساب وبنحدد لك الموعد المناسب 💅",
      quickReplies: ["تواصلي مع موظفة"],
    };
  }

  // Check for specific service
  if (lower.includes("عندكم خدمة") || lower.includes("عندكم")) {
    const serviceMatch = services.find((s) => lower.includes(s.name) || lower.includes(s.category));
    if (serviceMatch) {
      return {
        from: "bot",
        text: `أكيد عندنا ${serviceMatch.name}! ${serviceMatch.description}${serviceMatch.price ? ` - السعر: ${serviceMatch.price}` : ""}${serviceMatch.duration ? ` - المدة: ${serviceMatch.duration}` : ""}`,
        quickReplies: ["أبغى أحجز موعد", "وش الباقات؟"],
      };
    }
    return {
      from: "bot",
      text: "ممكن توضحين أكثر وش الخدمة اللي تبينها؟ أو تواصلي مع موظفاتنا وبيساعدونك 😊",
      quickReplies: ["وش الخدمات؟", "تواصلي مع موظفة"],
    };
  }

  // Check FAQ
  for (const faq of faqItems) {
    const keywords = faq.q.split(" ").filter((w) => w.length > 2);
    const matchCount = keywords.filter((kw) => lower.includes(kw)).length;
    if (matchCount >= 2 || lower.includes(faq.q.replace("؟", ""))) {
      return {
        from: "bot",
        text: faq.a,
        quickReplies: ["أبغى أحجز موعد", "عندكم عروض؟"],
      };
    }
  }

  // Keyword matching
  if (lower.includes("سعر") || lower.includes("أسعار") || lower.includes("كم")) {
    return { from: "bot", text: faqItems[0].a, quickReplies: ["وش الباقات؟", "أبغى أحجز موعد"] };
  }
  if (lower.includes("باقة") || lower.includes("باقات")) {
    return { from: "bot", text: faqItems[1].a, quickReplies: ["أبغى أحجز موعد", "وش الخدمات؟"] };
  }
  if (lower.includes("خدم")) {
    return { from: "bot", text: faqItems[2].a, quickReplies: ["وش الأسعار؟", "أبغى أحجز موعد"] };
  }
  if (lower.includes("موقع") || lower.includes("وين") || lower.includes("عنوان")) {
    return { from: "bot", text: faqItems[3].a, quickReplies: ["وش أوقات العمل؟"] };
  }
  if (lower.includes("وقت") || lower.includes("ساعات") || lower.includes("دوام")) {
    return { from: "bot", text: faqItems[4].a, quickReplies: ["كيف أتواصل؟"] };
  }
  if (lower.includes("تواصل") || lower.includes("رقم")) {
    return { from: "bot", text: faqItems[5].a, quickReplies: ["وش أوقات العمل؟"] };
  }
  if (lower.includes("عرض") || lower.includes("خصم") || lower.includes("تخفيض")) {
    return { from: "bot", text: faqItems[6].a, quickReplies: ["أبغى أحجز موعد"] };
  }

  // Fallback
  return {
    from: "bot",
    text: "ما فهمت سؤالك تماماً 😅 جربي تسألين بطريقة ثانية، أو تواصلي مع موظفاتنا مباشرة!",
    quickReplies: ["وش الخدمات؟", "تواصلي مع موظفة"],
  };
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const messagesEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    if (text === "تواصلي مع موظفة") {
      window.open(getWhatsAppLink("السلام عليكم، أبغى أتواصل مع موظفة"), "_blank");
      return;
    }

    const userMsg: Message = { from: "user", text };
    const botReply = findAnswer(text);

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 600);
  };

  return (
    <>
      {/* Toggle button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-gradient-gold text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-gold-lg hover:scale-110 transition-transform"
            aria-label="فتح المساعد"
          >
            <Bot className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-4 right-4 z-50 w-[340px] sm:w-[380px] h-[500px] bg-card border border-border rounded-2xl shadow-gold-lg flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-gold p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-primary-foreground" />
                <span className="font-bold text-primary-foreground text-sm">مساعدة لمسة جمال</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.from === "bot"
                        ? "bg-muted text-foreground rounded-tr-sm ml-auto"
                        : "bg-primary text-primary-foreground rounded-tl-sm mr-auto"
                    }`}
                    style={{ marginLeft: msg.from === "user" ? "auto" : undefined, marginRight: msg.from === "bot" ? "auto" : undefined }}
                  >
                    {msg.text}
                  </div>
                  {msg.quickReplies && msg.from === "bot" && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {msg.quickReplies.map((qr) => (
                        <button
                          key={qr}
                          onClick={() => handleSend(qr)}
                          className="text-xs border border-primary/30 text-primary px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEnd} />
            </div>

            {/* Input */}
            <div className="border-t border-border p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="اكتبي سؤالك هنا..."
                  className="flex-1 bg-muted text-foreground rounded-full px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-gradient-gold text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
