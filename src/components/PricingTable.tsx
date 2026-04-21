"use client";

import React, { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";

interface PricingTier {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  button: string;
  popular: boolean;
}

interface PricingTableProps {
  tiers: PricingTier[];
}

const PRODUCTS = {
  "24-Hour Pass": { id: process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID_PARTY || "", plan: "party" },
  "Pase de 24 Horas": { id: process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID_PARTY || "", plan: "party" },
  "Lifetime Member": { id: process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID_PRO || "", plan: "pro" },
  "Miembro de Por Vida": { id: process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID_PRO || "", plan: "pro" },
};

export default function PricingTable({ tiers }: PricingTableProps) {
  const { locale, dictionary } = useLocale();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const upgradeDict = dictionary.pricing.upgrade;

  const handleInitialClick = (tierName: string) => {
    setSelectedTier(tierName);
    setError(null);
    setIsEmailModalOpen(true);
  };

  const handleFinalCheckout = async () => {
    const product = PRODUCTS[selectedTier as keyof typeof PRODUCTS];
    if (!product || !product.id || loading) return;
    setError(null);

    // VALIDATION FOR PRO FOREVER
    if (product.plan === "pro" && (!email || !email.includes("@"))) {
      setError(locale === 'es' ? "Correo electrónico obligatorio para el acceso de por vida." : "Email is required for lifetime access.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          metadata: { plan: product.plan, email },
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
      setError("Network error. Please check your connection.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Launch Banner */}
      <div className="mt-8 text-center animate-bounce">
        <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-sm font-bold text-indigo-700 border border-indigo-200">
           🚀 PRO LAUNCH SPECIAL: Save up to 70% today!
        </span>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 lg:max-w-4xl lg:mx-auto mt-12">
        {tiers.map((tier) => {
          const isPro = tier.name.toLowerCase().includes('lifetime') || tier.name.toLowerCase().includes('vida');
          const originalPrice = isPro ? upgradeDict.proForeverOriginal : upgradeDict.partyPassOriginal;

          return (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl shadow-xl overflow-hidden bg-white border-2 transition-all hover:shadow-2xl ${
                tier.popular ? "border-indigo-500 ring-4 ring-indigo-50 scale-105 z-10" : "border-gray-100"
              }`}
            >
              {tier.popular && (
                <div className="bg-indigo-500 text-white text-center text-sm font-bold py-2 uppercase tracking-widest">
                  Best Value — 70% OFF
                </div>
              )}
              <div className="px-6 py-10 sm:p-12 sm:pb-8">
                <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-xl text-gray-300 line-through font-medium">{originalPrice}</span>
                  <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Save Big</div>
                </div>
                <div className="mt-2 flex items-baseline text-6xl font-black text-indigo-600">
                  {tier.price}
                  <span className="ml-2 text-xl font-medium text-gray-400">
                    {tier.duration === "one-time" || tier.duration === "pago único" ? "" : ` / ${tier.duration}`}
                  </span>
                </div>
                <p className="mt-6 text-lg text-gray-500 leading-relaxed">{tier.description}</p>
              </div>
              <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-10 bg-gray-50/50 sm:px-12 sm:pb-12">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <button
                    onClick={() => handleInitialClick(tier.name)}
                    className={`block w-full text-center rounded-2xl px-6 py-4 text-xl font-bold transition-all shadow-lg active:scale-95 ${
                      tier.popular
                        ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200"
                        : "bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50 shadow-gray-100"
                    }`}
                  >
                    {tier.button}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 max-w-2xl mx-auto text-center">
         <div className="inline-flex items-center gap-2 text-gray-400 text-xs bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100">
           <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
           <p className="leading-relaxed">
             {upgradeDict.adNotice}
           </p>
         </div>
      </div>

      {/* Confirmation & Email Modal */}
      {isEmailModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => !loading && setIsEmailModalOpen(false)}>
          <div 
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl p-8 animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {loading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
              </div>
            )}

            <div className="text-center mb-6">
              <div className="mb-2 inline-block rounded-full bg-indigo-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-600">
                Secure Checkout
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{upgradeDict.title}</h2>
            </div>
            
            <p className="text-sm text-gray-500 text-center mb-8">
              {locale === 'es' 
                ? "Introduce tu correo para recibir tu acceso Pro y soporte prioritario." 
                : "Enter your email to receive your Pro access and priority support."}
            </p>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="modal-email" className="block text-xs font-bold text-gray-700 uppercase tracking-widest">
                    {upgradeDict.emailPlaceholder}
                  </label>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${PRODUCTS[selectedTier as keyof typeof PRODUCTS]?.plan === "pro" ? "bg-red-50 text-red-600" : "bg-gray-100 text-gray-400"}`}>
                    {PRODUCTS[selectedTier as keyof typeof PRODUCTS]?.plan === "pro" 
                      ? (locale === 'es' ? "REQUERIDO" : "REQUIRED") 
                      : (locale === 'es' ? "OPCIONAL" : "OPTIONAL")}
                  </span>
                </div>
                <input
                  id="modal-email"
                  type="email"
                  autoFocus
                  placeholder="you@example.com"
                  className={`w-full rounded-xl border-2 px-4 py-3 focus:outline-none transition-all text-lg ${
                    error ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-indigo-50 focus:border-indigo-500'
                  }`}
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(null); }}
                  disabled={loading}
                />
                {error && (
                  <p className="mt-3 text-sm font-semibold text-red-600 animate-in slide-in-from-top-1 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                  </p>
                )}
              </div>

              <button
                onClick={handleFinalCheckout}
                disabled={loading}
                className="w-full bg-indigo-600 text-white rounded-2xl py-4 text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95 disabled:opacity-50"
              >
                {locale === 'es' ? "Confirmar y Pagar" : "Confirm & Pay"}
              </button>

              <button
                onClick={() => setIsEmailModalOpen(false)}
                className="w-full text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors"
                disabled={loading}
              >
                {upgradeDict.maybeLater || "Back"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
