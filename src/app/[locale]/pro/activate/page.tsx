"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { buildLocalePath } from "@/utils/localePaths";

function ActivateContent() {
  const { locale } = useLocale();
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    async function verifyAndActivate() {
      if (!token) {
        setStatus("error");
        return;
      }

      try {
        // Validate token with backend
        const res = await fetch(`/api/verify-token?token=${token}`);
        const data = await res.json();

        if (data.valid) {
          localStorage.setItem("cg_token", token);
          if (data.expiresAt) {
            localStorage.setItem("cg_token_expires", String(data.expiresAt));
          }
          setStatus("success");
          
          setTimeout(() => {
            router.push(buildLocalePath(locale, "/"));
          }, 3000);
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Token verification error:", error);
        setStatus("error");
      }
    }

    verifyAndActivate();
  }, [token, locale, router]);

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
        <p className="text-lg font-medium text-gray-700">Verifying your token...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Invalid or Expired Token</h1>
        <p className="mt-2 text-gray-600">The activation link you followed is invalid or has expired. Please contact support if you believe this is an error.</p>
        <div className="mt-8">
          <Link href={buildLocalePath(locale, "/contact")} className="rounded-md bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 transition-colors">
            Contact Support
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
      <h1 className="mt-6 text-3xl font-bold text-gray-900">Pro Activated! 🎉</h1>
      <p className="mt-4 text-lg text-gray-600">Your Pro Forever access has been activated on this device.</p>
      <p className="mt-2 text-sm text-gray-400 italic">Redirecting to generator...</p>
      <div className="mt-10">
        <Link href={buildLocalePath(locale, "/")} className="text-indigo-600 font-semibold hover:underline">
          Go to Generator Now &rarr;
        </Link>
      </div>
    </div>
  );
}

export default function ProActivatePage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <Suspense fallback={<div>Loading...</div>}>
        <ActivateContent />
      </Suspense>
    </div>
  );
}
