"use client";

export default function LegalModal({ isOpen, type, onClose }) {
  if (!isOpen) return null;

  const content = {
    privacy: {
      title: "GİZLİLİK POLİTİKASI // PRIVACY POLICY",
      body: `
        <p class="mb-4">Bu Gizlilik Politikası, Event Horizon ("Site") üzerinde toplanan verilerin türlerini, bunların nasıl kullanıldığını ve güvenliğinin nasıl sağlandığını açıklamaktadır.</p>
        <h3 class="text-white font-bold font-mono text-sm mt-6 mb-2">[ 1. VERİ TOPLAMA VE ÇEREZLER ]</h3>
        <p class="mb-4">Sitemiz, ziyaretçi trafiğini analiz etmek ve Google AdSense gibi üçüncü taraf reklam iş ortaklarımızın kişiselleştirilmiş reklamlar sunabilmesi için çerezler (cookies) kullanmaktadır. Bu çerezler tarayıcınızda geçici veya kalıcı olarak saklanabilir.</p>
        <h3 class="text-white font-bold font-mono text-sm mt-6 mb-2">[ 2. ÜÇÜNCÜ TARAF SERVİSLER ]</h3>
        <p class="mb-4">Google dahil üçüncü taraf tedarikçiler, kullanıcıların web sitenize yaptığı önceki ziyaretlere dayalı olarak reklam sunmak üzere çerez kullanır. Google'ın reklam çerezlerini kullanması, onun ve iş ortaklarının kullanıcılarınıza sitenize ve/veya internetteki diğer sitelere yaptıkları ziyaretlere dayalı olarak reklam sunmasına olanak tanır.</p>
        <h3 class="text-white font-bold font-mono text-sm mt-6 mb-2">[ 3. VERİ GÜVENLİĞİ ]</h3>
        <p class="mb-4">Toplanan tüm anonim analiz verileri şifrelenmiş protokoller üzerinden iletilir ve saklanır. Kullanıcı haklarınızı korumak ana önceliğimizdir.</p>
      `
    },
    terms: {
      title: "KULLANIM ŞARTLARI // TERMS OF SERVICE",
      body: `
        <p class="mb-4">Event Horizon portalını ziyaret ederek ve içerikleri okuyarak aşağıdaki şartları kabul etmiş sayılırsınız:</p>
        <h3 class="text-white font-bold font-mono text-sm mt-6 mb-2">[ 1. FİKRİ MÜLKİYET VE TELİF HAKKI ]</h3>
        <p class="mb-4">Event Horizon bünyesinde yayınlanan tüm makaleler, grafikler ve simülasyon kodları telif hakkıyla korunmaktadır. Kaynak gösterilmeksizin ticari amaçlarla kopyalanamaz veya dağıtılamaz.</p>
        <h3 class="text-white font-bold font-mono text-sm mt-6 mb-2">[ 2. BİLİMSEL SORUMLULUK REDDİ ]</h3>
        <p class="mb-4">Sitede yayınlanan analizler, simülatörler ve bilimsel teoriler eğitim ve bilgilendirme amaçlıdır. Ekstrem dağcılık veya tıbbi hipoksi gibi konulardaki veriler hayati tavsiye niteliği taşımaz. Uygulamalardaki riskler tamamen kullanıcıya aittir.</p>
        <h3 class="text-white font-bold font-mono text-sm mt-6 mb-2">[ 3. KULLANIM SINIRLANDIRMALARI ]</h3>
        <p class="mb-4">Sitenin sunucu altyapısına zarar verecek veri kazıma (scraping) ve benzeri otomatik saldırı girişimlerinde bulunmak yasaktır.</p>
      `
    },
    contact: {
      title: "İLETİŞİM VE KÜNYE // MASTHEAD",
      body: `
        <p class="mb-4">Event Horizon popüler bilim arşivi, evrenin ve doğanın en ekstrem noktalarını araştıran açık kaynaklı bir yayın projesidir.</p>
        <h3 class="text-white font-bold font-mono text-sm mt-6 mb-2">[ EDİTÖR VE YAYIN SORUMLUSU ]</h3>
        <p class="mb-4">N. Kohlei<br/>E-posta: support@nkohlei.blog<br/>GitHub: @nkohlei</p>
        <h3 class="text-white font-bold font-mono text-sm mt-6 mb-2">[ ALTYAPI VE DESTEK ]</h3>
        <p class="mb-4">Bu site Next.js mimarisiyle oluşturulmuş olup Koyeb ağında barındırılmaktadır. Teknik destek ve geri bildirim için doğrudan GitHub veya e-posta kanallarıyla iletişime geçebilirsiniz.</p>
      `
    }
  };

  const current = content[type] || { title: "DOKÜMAN", body: "" };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up">
      <div className="glass-panel w-full max-w-2xl rounded-xl p-6 md:p-8 shadow-2xl relative bg-background border border-zinc-500/10 text-foreground">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-mono text-zinc-500 hover:text-foreground text-xs"
        >
          [ KAPAT / CLOSE ]
        </button>

        {/* Modal Title */}
        <h2 className="text-xl font-bold font-mono text-foreground mb-6 border-b border-white/5 pb-4 uppercase tracking-wider">
          {current.title}
        </h2>

        {/* Modal Body */}
        <div
          className="text-sm text-foreground/80 leading-relaxed max-h-[60vh] overflow-y-auto pr-2"
          dangerouslySetInnerHTML={{ __html: current.body }}
        />
      </div>
    </div>
  );
}
