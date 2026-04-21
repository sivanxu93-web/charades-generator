"use client";

import { useState, useEffect } from "react";

export interface ProStatus {
  isPro: boolean;
  plan: "party" | "pro" | null;
  loaded: boolean;
}

/**
 * Hook to manage Pro user status based on localStorage.
 */
export function usePro(): ProStatus {
  const [status, setStatus] = useState<ProStatus>({
    isPro: false,
    plan: null,
    loaded: false,
  });

  useEffect(() => {
    const tokenId = localStorage.getItem("cg_token");
    const expires = localStorage.getItem("cg_token_expires");

    // No token found
    if (!tokenId) {
      setStatus({ isPro: false, plan: null, loaded: true });
      return;
    }

    // Check expiration for Party Pass
    if (expires) {
      const expirationTime = parseInt(expires, 10);
      if (Date.now() > expirationTime) {
        // Token expired
        localStorage.removeItem("cg_token");
        localStorage.removeItem("cg_token_expires");
        setStatus({ isPro: false, plan: null, loaded: true });
        return;
      }
      
      // Valid Party Pass
      setStatus({ isPro: true, plan: "party", loaded: true });
    } else {
      // Pro Forever has no expiration field in local
      setStatus({ isPro: true, plan: "pro", loaded: true });
    }
  }, []);

  return status;
}
