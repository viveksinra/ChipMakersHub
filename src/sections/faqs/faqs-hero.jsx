import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';
import { alpha } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { varFade, AnimateText, MotionContainer, animateTextClasses } from 'src/components/animate';

// ----------------------------------------------------------------------

export function FaqsHero({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          backgroundImage: `url(/myAssets/gif/landscape/chip.gif)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: { md: 400 },
          py: { xs: 10, md: 0 },
          overflow: 'hidden',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: alpha(theme.palette.grey[900], 0.8),
          }
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: 'absolute' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <AnimateText
            component="h1"
            variant="h1"
            textContent={['VLSI', 'Freelancing Support']}
            variants={varFade('inRight', { distance: 24 })}
            sx={{
              color: 'common.white',
              [`& .${animateTextClasses.line}[data-index="0"]`]: {
                [`& .${animateTextClasses.word}[data-index="0"]`]: { color: 'primary.main' },
              },
            }}
          />

          <m.div variants={varFade('inUp', { distance: 24 })}>
            <Typography 
              variant="h5" 
              sx={{ 
                mt: 3, 
                color: 'common.white',
                maxWidth: 600,
                opacity: 0.8
              }}
            >
              Find answers to common questions about semiconductor freelancing, chip design collaboration, and our VLSI professional network.
            </Typography>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}
