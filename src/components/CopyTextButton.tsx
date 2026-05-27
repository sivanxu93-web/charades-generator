"use client";

import { useState } from "react";

interface CopyTextButtonProps {
  text: string;
  label: string;
  copiedLabel?: string;
  className?: string;
}

export default function CopyTextButton({
  text,
  label,
  copiedLabel = "Copied",
  className,
}: CopyTextButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={className ?? "inline-flex items-center rounded-md border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"}
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
