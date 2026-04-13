"use client";

import React from "react";

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
  paymentUnderDevelopment: string;
}

export default function PricingTable({ tiers, paymentUnderDevelopment }: PricingTableProps) {
  const handlePaymentClick = () => {
    alert(paymentUnderDevelopment);
  };

  return (
    <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:max-w-4xl lg:mx-auto">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white border ${
            tier.popular ? "border-indigo-500 ring-2 ring-indigo-500" : "border-gray-200"
          }`}
        >
          {tier.popular && (
            <div className="bg-indigo-500 text-white text-center text-sm font-semibold py-2 uppercase tracking-wide">
              Most Popular
            </div>
          )}
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900" id={`tier-${tier.name.toLowerCase()}`}>
                {tier.name}
              </h3>
            </div>
            <div className="mt-4 flex items-baseline text-6xl font-extrabold">
              {tier.price}
              <span className="ml-1 text-2xl font-medium text-gray-500">
                {tier.duration === "one-time" ? "" : ` / ${tier.duration}`}
              </span>
            </div>
            <p className="mt-5 text-lg text-gray-500">{tier.description}</p>
          </div>
          <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
            <ul className="space-y-4">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">{feature}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <button
                onClick={handlePaymentClick}
                className={`block w-full text-center rounded-lg px-6 py-4 text-xl font-semibold transition-colors ${
                  tier.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                }`}
              >
                {tier.button}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
