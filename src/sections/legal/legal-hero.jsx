import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { varFade, AnimateText, MotionContainer, animateTextClasses } from 'src/components/animate';

// ----------------------------------------------------------------------

export function LegalHero({ contentType, sx, ...other }) {
  const isPrivacyPolicy = contentType === 'privacy-policy';
  const title = isPrivacyPolicy ? 'Privacy Policy' : 'Terms and Conditions';
  const subtitle = isPrivacyPolicy
    ? 'How we protect your data and privacy'
    : 'Our guidelines and legal agreements';

  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(0deg, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.8)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.8)})`,
              `url(${CONFIG.assetsDir}/assets/images/about/hero.webp)`,
            ],
          }),
          height: { md: 400 },
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
            textContent={['Legal', title]}
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
              {subtitle}
            </Typography>
          </m.div>

          <m.div variants={varFade('inUp', { distance: 24 })}>
            <Typography
              variant="body1"
              sx={{ mt: 3, mb: 5, color: 'common.white', opacity: 0.72, maxWidth: 480 }}
            >
              Last updated: March 24, 2025
            </Typography>
          </m.div>
        </Box>
      </Container>
    </Box>
  );
} 