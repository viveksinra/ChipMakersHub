import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { CONFIG } from 'src/global-config';

import { varFade, AnimateText, MotionContainer, animateTextClasses } from 'src/components/animate';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function AboutHero({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `url(${CONFIG.assetsDir}/assets/background/overlay.svg)`,
              `url(${CONFIG.assetsDir}/assets/images/about/hero.webp)`,
            ],
          }),
          height: { md: 560 },
          py: { xs: 10, md: 0 },
          overflow: 'hidden',
          position: 'relative',
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
            textContent={['About', 'ChipMakersHub']}
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
              variant="h4"
              sx={{ mt: 3, color: 'common.white', fontWeight: 'fontWeightSemiBold' }}
            >
              Where the world connects for VLSI work
            </Typography>
          </m.div>

          <m.div variants={varFade('inUp', { distance: 24 })}>
            <Typography
              variant="body1"
              sx={{ mt: 3, mb: 5, color: 'common.white', opacity: 0.72, maxWidth: 480 }}
            >
              Bridging the gap between semiconductor companies and highly skilled 
              freelance professionals in the VLSI industry.
            </Typography>
          </m.div>

          <m.div variants={varFade('inUp', { distance: 24 })}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              startIcon={<Iconify icon="carbon:chip" />}
              sx={{ mr: 1 }}
            >
              Join the Hub
            </Button>
            <Button
              size="large"
              variant="outlined"
              color="inherit"
              sx={{ color: 'common.white', borderColor: 'common.white' }}
            >
              Learn More
            </Button>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}
