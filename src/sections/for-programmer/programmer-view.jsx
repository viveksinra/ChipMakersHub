'use client';

import { ProgrammerHero } from "./Comp/programmer-hero";
import { ProgrammerVision } from "./Comp/programmer-vision";
import { ProgrammerWhat } from "./Comp/programmer-what";



// ----------------------------------------------------------------------

export function ProgrammerView() {
  return (
    <>
<ProgrammerHero />
{/* <ProgrammerWhat /> */}
<ProgrammerVision />
    </>
  );
}
