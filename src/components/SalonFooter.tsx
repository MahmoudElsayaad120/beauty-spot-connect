import { salonInfo } from "@/lib/salonData";

const SalonFooter = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container text-center">
        <p className="text-gradient-gold font-bold text-lg mb-2">{salonInfo.name}</p>
        <p className="text-muted-foreground text-sm mb-4">
          {salonInfo.city}، {salonInfo.district}
        </p>
        <div className="flex justify-center gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} {salonInfo.name}. جميع الحقوق محفوظة</span>
          <span>|</span>
          <button
            onClick={() => {
              const el = document.getElementById("privacy-modal");
              if (el) el.classList.toggle("hidden");
            }}
            className="hover:text-primary transition-colors"
          >
            سياسة الخصوصية
          </button>
        </div>

        {/* Privacy modal */}
        <div
          id="privacy-modal"
          className="hidden fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              (e.currentTarget as HTMLElement).classList.add("hidden");
            }
          }}
        >
          <div className="bg-card border border-border rounded-2xl p-8 max-w-lg max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">سياسة الخصوصية</h3>
            <div className="text-muted-foreground text-sm space-y-3 text-right">
              <p>نحن في {salonInfo.name} نحرص على حماية خصوصيتكِ وبياناتكِ الشخصية.</p>
              <p>نجمع فقط البيانات الضرورية لتقديم خدماتنا مثل الاسم ورقم التواصل.</p>
              <p>لا نشارك بياناتكِ مع أي طرف ثالث بدون موافقتكِ المسبقة.</p>
              <p>يمكنكِ طلب حذف بياناتكِ في أي وقت بالتواصل معنا عبر واتساب.</p>
              <p>نستخدم ملفات تعريف الارتباط لتحسين تجربتكِ على الموقع.</p>
            </div>
            <button
              onClick={() => document.getElementById("privacy-modal")?.classList.add("hidden")}
              className="mt-6 bg-gradient-gold text-primary-foreground px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform"
            >
              فهمت
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SalonFooter;
