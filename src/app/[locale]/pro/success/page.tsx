"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { buildLocalePath } from "@/utils/localePaths";

function SuccessContent() {
  const { locale } = useLocale();
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Fix: Get all customer_id params and find the one that isn't the placeholder "{customer_id}"
  const allIds = searchParams.getAll("customer_id");
  const customerId = allIds.find(id => id !== "{customer_id}" && !id.includes("{"));
  
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const retryCount = useRef(0);
  const MAX_RETRIES = 3;

  useEffect(() => {
    async function activate() {
      if (!customerId) {
        console.error("[Activation] Missing customer_id in URL");
        setStatus("error");
        return;
      }

      try {
        console.log(`[Activation] Attempt ${retryCount.current + 1} for ID: ${customerId}`);
        const res = await fetch(`/api/activate?customer_id=${customerId}`);
        
        if (res.status === 404 && retryCount.current < MAX_RETRIES) {
          // If not found, wait and retry (KV might be delayed)
          retryCount.current += 1;
          setTimeout(activate, 2000);
          return;
        }

        const data = await res.json();

        if (data.token) {
          localStorage.setItem("cg_token", data.token);
          if (data.expiresAt) {
            localStorage.setItem("cg_token_expires", String(data.expiresAt));
          }
          setStatus("success");
          
          setTimeout(() => {
            router.push(buildLocalePath(locale, "/"));
          }, 3000);
        } else {
          console.error("[Activation] No token returned:", data);
          setStatus("error");
        }
      } catch (error) {
        console.error("[Activation] Fetch error:", error);
        setStatus("error");
      }
    }

    activate();
  }, [customerId, locale, router]);

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
        <p className="text-lg font-medium text-gray-700">
          {retryCount.current > 0 ? `Verifying payment (Retry ${retryCount.current})...` : "Activating your Pro access..."}
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
          <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Activation Failed</h1>
        <p className="mt-2 text-gray-600">We couldn't find your payment record yet.</p>
        <p className="text-sm text-gray-400 mt-1">ID: {customerId || "unknown"}</p>
        <div className="mt-8 flex flex-col gap-3 items-center">
          <button onClick={() => window.location.reload()} className="w-full max-w-xs rounded-md bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 font-semibold">
            Retry Activation
          </button>
          <Link href={buildLocalePath(locale, "/contact")} className="text-sm text-gray-500 hover:underline">
            Still having issues? Contact Support
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center animate-in fade-in zoom-in duration-500">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
        <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="mt-6 text-3xl font-bold text-gray-900">You're Pro! 🎉</h1>
      <p className="mt-4 text-lg text-gray-600">Thank you for your purchase. All premium features are now unlocked.</p>
      <div className="mt-10">
        <Link href={buildLocalePath(locale, "/")} className="text-indigo-600 font-semibold hover:underline">
          Go to Generator Now &rarr;
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <Suspense fallback={<div>Loading...</div>}>
        <SuccessContent />
      </Suspense>
    </div>
  );
}
