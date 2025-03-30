'use client';

import { CompanyHero } from "./Comp/company-hero";
import { CompanyVision } from "./Comp/company-vision";
import { CompanyWhat } from "./Comp/company-what";



// ----------------------------------------------------------------------

export function CompanyView() {
  return (
    <>
<CompanyHero />
<CompanyWhat />
<CompanyVision />
    </>
  );
}
