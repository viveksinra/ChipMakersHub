'use client';

import Box from '@mui/material/Box';
import { LegalHero } from './Comp/legal-hero';
import { LegalContent } from './Comp/legal-content';

// ----------------------------------------------------------------------

export function LegalView({ contentType }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ position: 'relative', zIndex: 10 }}>
        <LegalHero contentType={contentType} />
      </Box>
      <Box sx={{ position: 'relative', zIndex: 5 }}>
        <LegalContent contentType={contentType} />
      </Box>
    </Box>
  );
} 