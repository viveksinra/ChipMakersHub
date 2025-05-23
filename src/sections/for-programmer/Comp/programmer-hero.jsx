import { m } from 'framer-motion';
import { alpha } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { CONFIG } from 'src/global-config';

import { varFade, AnimateText, MotionContainer, animateTextClasses } from 'src/components/animate';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ProgrammerHero({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          backgroundImage: `url(/myAssets/gif/landscape/chip.gif)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: { md: 560 },
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
            textContent={['For', 'Freelancers']}
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
              Unlock Your Potential in VLSI Freelancing
            </Typography>
          </m.div>

          <m.div variants={varFade('inUp', { distance: 24 })}>
            <Typography
              variant="body1"
              sx={{ mt: 3, mb: 5, color: 'common.white', opacity: 0.72, maxWidth: 480 }}
            >
              Are you a VLSI engineer, RTL designer, or verification expert looking for freelance projects? 
              Chip Makers Hub provides the perfect platform to showcase your skills and connect with top 
              semiconductor companies worldwide.
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
              Sign Up as a Freelancer
            </Button>
   
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}
