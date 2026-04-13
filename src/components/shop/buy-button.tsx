"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";

interface BuyButtonProps {
  slug: string;
  price: string;
  label?: string;
  className?: string;
}

export function BuyButton({ slug, price, label, className }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleBuy() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok || !data.url) {
        setError(data.error ?? "Checkout konnte nicht gestartet werden.");
        return;
      }
      window.location.href = data.url;
    } catch {
      setError("Netzwerkfehler — bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-2">
      <button
        onClick={handleBuy}
        disabled={loading}
        className={className ?? "btn btn-primary w-full justify-center"}
      >
        {loading ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <Download size={16} />
        )}
        {loading ? "Weiterleitung..." : (label ?? `${price} — Jetzt kaufen`)}
      </button>
      {error && (
        <p className="text-xs text-red-500 dark:text-red-400 text-center">{error}</p>
      )}
    </div>
  );
}
