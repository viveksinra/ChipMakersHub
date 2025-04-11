import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';
import { alpha } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { varFade, AnimateText, MotionContainer, animateTextClasses } from 'src/components/animate';

// ----------------------------------------------------------------------

export function ContactHero({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          backgroundImage: `url(/myAssets/gif/landscape/chip.gif)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          height: { md: 480 },
          position: 'relative',
          py: { xs: 10, md: 0 },
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
            textContent={['Get in Touch', 'with ChipMakersHub']}
            variants={varFade('inUp', { distance: 24 })}
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
                fontWeight: 'normal',
                opacity: 0.8,
              }}
            >
              We're here to help you navigate the world of VLSI freelancing
            </Typography>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

const CONTACTS = [
  {
    country: 'Bali',
    address: '508 Bridle Avenue Newnan, GA 30263',
    phoneNumber: '(239) 555-0108',
  },
  {
    country: 'London',
    address: '508 Bridle Avenue Newnan, GA 30263',
    phoneNumber: '(319) 555-0115',
  },
  {
    country: 'Prague',
    address: '508 Bridle Avenue Newnan, GA 30263',
    phoneNumber: '(252) 555-0126',
  },
  {
    country: 'Moscow',
    address: '508 Bridle',
    phoneNumber: '(307) 555-0133',
  },
];
