"use client";

import { useState } from "react";
import LegalModal from "./LegalModals";

export default function Footer() {
  const [modalType, setModalType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <>
      <footer className="border-t border-zinc-200 dark:border-white/5 bg-zinc-100/50 dark:bg-[#0a0b0d] py-12 font-mono">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 text-xs text-zinc-500">
          <p className="tracking-widest text-zinc-600 dark:text-zinc-400 mb-4 uppercase">
            OXYPACE APEX ARCHIVES // EVENT HORIZON
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <button onClick={() => openModal("privacy")} className="hover:text-foreground transition-colors">
              [ Gizlilik Politikası ]
            </button>
            <button onClick={() => openModal("terms")} className="hover:text-foreground transition-colors">
              [ Kullanım Şartları ]
            </button>
            <button onClick={() => openModal("contact")} className="hover:text-foreground transition-colors">
              [ İletişim / Künye ]
            </button>
          </div>
          <p>
            © {new Date().getFullYear()} EVENT HORIZON. Halka açık popüler bilim ve ekstrem doğa arşivi. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Legal Modals */}
      <LegalModal
        isOpen={isModalOpen}
        type={modalType}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
