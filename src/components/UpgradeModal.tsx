"use client";

import React, { useState } from "react";
import type { Dictionary } from "@/i18n/dictionary";
import { useLocale } from "@/contexts/LocaleContext";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  dictionary: Dictionary["pricing"]["upgrade"];
  paymentUnderDevelopment: string;
}

const PRODUCTS = {
  party: process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID_PARTY || "",
  pro: process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID_PRO || "",
};

export default function UpgradeModal({
  isOpen,
  onClose,
  dictionary,
  paymentUnderDevelopment,
}: UpgradeModalProps) {
  const { locale } = useLocale();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePlanClick = async (plan: "party" | "pro") => {
    const productId = PRODUCTS[plan];
    if (!productId || loading) return;
    setError(null);

    // VALIDATION
    if (plan === "pro" && (!email || !email.includes("@"))) {
      setError(locale === 'es' ? "Se requiere un correo válido para el acceso de por vida." : "A valid email is required for lifetime access.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          metadata: { plan, email },
        }),
      });

      const data = await response.json();
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        setError(data.details || data.error || "Checkout failed");
        setLoading(false);
      }
    } catch (e) {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="relative flex w-full max-w-lg max-h-[90vh] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
          </div>
        )}
        
        {/* Header */}
        <div className="shrink-0 bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 text-center text-white">
          <div className="mb-2 inline-block rounded-full bg-yellow-400 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-900 shadow-sm">
            Launch Special — Limited Time
          </div>
          <h2 className="text-2xl font-bold">{dictionary.title}</h2>
          <p className="mt-1 text-sm text-indigo-100">{dictionary.subtitle}</p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <ul className="space-y-2 mb-5 text-sm">
            {dictionary.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-xl bg-gray-50 p-4 mb-6 border border-gray-100">
            <p className="text-[11px] leading-relaxed text-gray-500 text-center">
              <span className="font-bold text-gray-700">Why the upgrade?</span> {dictionary.adNotice}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="upgrade-email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                {dictionary.emailPlaceholder} <span className="text-gray-400 font-normal">({locale === 'es' ? "Opcional para Pase 24h" : "Optional for 24h Pass"})</span>
              </label>
              <input
                id="upgrade-email"
                type="email"
                placeholder="you@example.com"
                className={`w-full rounded-xl border px-4 py-2.5 focus:outline-none transition-all ${
                  error ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                }`}
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(null); }}
                disabled={loading}
              />
              {error && <p className="mt-1.5 text-[11px] font-semibold text-red-600">⚠️ {error}</p>}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-1">
              <button
                onClick={() => handlePlanClick("party")}
                disabled={loading}
                className="flex flex-col items-center justify-center rounded-2xl border-2 border-indigo-50 p-4 transition-all hover:border-indigo-500 hover:bg-indigo-50 disabled:opacity-50"
              >
                <span className="text-[10px] font-bold text-gray-400 line-through mb-0.5">{dictionary.partyPassOriginal}</span>
                <span className="text-2xl font-black text-gray-900">{dictionary.partyPassPrice}</span>
                <span className="font-bold text-indigo-600 text-sm">{dictionary.partyPass}</span>
                <span className="text-center text-[10px] text-gray-400 leading-tight mt-1">{dictionary.partyPassDesc}</span>
              </button>

              <button
                onClick={() => handlePlanClick("pro")}
                disabled={loading}
                className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-indigo-500 bg-white p-4 transition-all hover:bg-indigo-50 disabled:opacity-50 shadow-md shadow-indigo-100"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-2 py-0.5 text-[10px] font-black text-indigo-900 uppercase shadow-sm">
                  Save 70%
                </div>
                <span className="text-[10px] font-bold text-indigo-300 line-through mb-0.5">{dictionary.proForeverOriginal}</span>
                <span className="text-2xl font-black text-gray-900">{dictionary.proForeverPrice}</span>
                <span className="font-bold text-indigo-600 text-sm">{dictionary.proForever}</span>
                <span className="text-center text-[10px] text-red-600 font-bold leading-tight mt-1">({locale === 'es' ? "Acceso Permanente" : "Lifetime Access"})</span>
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full py-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-gray-600 transition-colors"
            disabled={loading}
          >
            {dictionary.maybeLater}
          </button>
        </div>
      </div>
    </div>
  );
}
