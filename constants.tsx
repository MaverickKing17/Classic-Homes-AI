import React from 'react';
import { PricingTier, ValueProp, DomainStat } from './types';

export const DOMAIN_NAME = "ClassicHomesRemodeling.com";

export const PRICING_TIERS: PricingTier[] = [
  {
    title: "Outright Acquisition",
    subtitle: "(Best Value)",
    price: "$40,000",
    priceSubtext: "Asking Price (OBO)",
    features: [
      "Capital Asset: Consult CPA for 15-Year Amortization",
      "Immediate and Full Ownership Transfer",
      "Secure Escrow.com transfer",
      "No monthly payments",
      "Full resale rights immediately"
    ],
    ctaText: "Submit Your Offer",
    ctaColor: "gold",
    highlight: true
  },
  {
    title: "Broker-Assisted Installment",
    subtitle: "(0% Financing)",
    price: "$8,000",
    priceSubtext: "Initial Payment, 0% Interest",
    features: [
      "12-Month Term: $2,666.67/month",
      "24-Month Term: $1,333.33/month",
      "36-Month Term: $888.89/month (Lowest monthly cost)",
      "Contract-backed payment plan",
      "Immediate domain forwarding"
    ],
    ctaText: "Secure Purchase Plan",
    ctaColor: "navy",
    highlight: false
  },
  {
    title: "Lease to Own",
    subtitle: "Low Barrier Entry",
    price: "$1,500",
    priceSubtext: "/month",
    features: [
      "Defined Initial Lease Fee Required",
      "Low initial capital outlay",
      "Payments apply to purchase",
      "Immediate domain usage",
      "Cancel anytime option"
    ],
    ctaText: "Start Lease",
    ctaColor: "navy",
    highlight: false
  }
];

export const DOMAIN_STATS: DomainStat[] = [
  {
    label: "Domain Age",
    value: "19 Years",
    subtext: "Registered Dec 25, 2006"
  },
  {
    label: "Valuation Range",
    value: "$38,995 - $49,995",
    subtext: "Premium Market Appraisal"
  },
  {
    label: "Match Type",
    value: "Exact Match",
    subtext: "High Commercial Intent"
  }
];

export const LEGAL_DISCLAIMER = `All purchase plans are subject to final contract and third-party escrow verification. Monthly installment payments assume a 0% interest rate on the remaining principal balance of $32,000. This is not a financing offer, and transfer of the domain is contingent upon final payment. Consult your financial and tax advisor for asset treatment and amortization schedules.`;
