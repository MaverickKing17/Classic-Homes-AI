import React from 'react';

export interface PricingTier {
  title: string;
  subtitle?: string;
  price: string;
  priceSubtext?: string;
  features: string[];
  ctaText: string;
  ctaColor: 'navy' | 'gold';
  highlight?: boolean;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface DomainStat {
  label: string;
  value: string;
  subtext?: string;
}