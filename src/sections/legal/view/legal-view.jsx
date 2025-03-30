'use client';

import { LegalHero } from '../legal-hero';
import { LegalContent } from '../legal-content';

// ----------------------------------------------------------------------

export function LegalView({ contentType }) {
  return (
    <>
      <LegalHero contentType={contentType} />
      <LegalContent contentType={contentType} />
    </>
  );
} 