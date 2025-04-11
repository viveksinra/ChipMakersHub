import { useRef, useState } from 'react';
import { m, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AvatarGroup from '@mui/material/AvatarGroup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar, { avatarClasses } from '@mui/material/Avatar';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _mock } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { MotionContainer } from 'src/components/animate';
import { varFade } from 'src/components/animate/variants/fade';

import { HeroBackground } from './components/hero-background';

// ----------------------------------------------------------------------

const smKey = 'sm';
const mdKey = 'md';
const lgKey = 'lg';

const motionProps = {
  variants: varFade('inUp', { distance: 24 }),
};

export function HomeHero({ sx, ...other }) {
  const scrollProgress = useScrollPercent();

  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up(mdKey));

  const distance = mdUp ? scrollProgress.percent : 0;

  const y1 = useTransformY(scrollProgress.scrollY, distance * -7);
  const y2 = useTransformY(scrollProgress.scrollY, distance * -6);
  const y3 = useTransformY(scrollProgress.scrollY, distance * -5);
  const y4 = useTransformY(scrollProgress.scrollY, distance * -4);
  const y5 = useTransformY(scrollProgress.scrollY, distance * -3);

  const opacity = useTransform(
    scrollProgress.scrollY,
    [0, 1],
    [1, mdUp ? Number((1 - scrollProgress.percent / 100).toFixed(1)) : 1]
  );

  const renderHeading = () => (
    <m.div {...motionProps}>
      <Box
        component="h1"
        sx={[
          {
            my: 0,
            mx: 'auto',
            maxWidth: 680,
            display: 'flex',
            flexWrap: 'wrap',
            typography: 'h2',
            justifyContent: 'center',
            fontFamily: theme.typography.fontSecondaryFamily,
            [theme.breakpoints.up(lgKey)]: {
              fontSize: theme.typography.pxToRem(72),
              lineHeight: '90px',
            },
          },
        ]}
      >
        <Box component="span" sx={{ width: 1, opacity: 0.74 }}>
          Hire the world's top
        </Box>
        {' '}
        <Box
          component={m.span}
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          sx={{
            ...theme.mixins.textGradient(
              `300deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.warning.main} 25%, ${theme.vars.palette.primary.main} 50%, ${theme.vars.palette.warning.main} 75%, ${theme.vars.palette.primary.main} 100%`
            ),
            backgroundSize: '400%',
            ml: { xs: 0.75, md: 1, xl: 1.5 },
          }}
        >
          VLSI and Embedded systems freelancers
        </Box>
      </Box>
    </m.div>
  );

  const renderText = () => (
    <m.div {...motionProps}>
      <Stack spacing={3} sx={{ textAlign: 'center' }}>
        <m.div
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="body2"
            sx={{
              mx: 'auto',
              px: 3,
              fontWeight: 'bold',
              position: 'relative',
              display: 'inline-block',
              color: (theme) => theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.darker,
              background: (theme) => theme.palette.mode === 'dark' ? `linear-gradient(90deg, ${theme.palette.background.default}, ${theme.palette.background.paper}, ${theme.palette.background.default})` : 'transparent',
              backgroundSize: '200% 100%',
              animation: 'shine 3s infinite linear',
              borderRadius: 1,
              boxShadow: (theme) => theme.palette.mode === 'dark' ? `0 0 10px ${theme.palette.primary.main}` : 'none',
              '@keyframes shine': {
                '0%': { backgroundPosition: '0% 0%' },
                '100%': { backgroundPosition: '200% 0%' },
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
              },
              [theme.breakpoints.up(smKey)]: { whiteSpace: 'pre' },
              [theme.breakpoints.up(lgKey)]: { fontSize: 20, lineHeight: '36px' },
            }}
          >
            <m.span
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                textShadow: [
                  '0 0 5px rgba(255,255,255,0)',
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 5px rgba(255,255,255,0)'
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: 'mirror'
              }}
            >
              Welcome to Chip Makers Hub — the premier platform for VLSI freelancing excellence.
            </m.span>
          </Typography>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <Typography
            variant="body2"
            sx={{
              mx: 'auto',
              [theme.breakpoints.up(smKey)]: { whiteSpace: 'pre-line' },
              [theme.breakpoints.up(lgKey)]: { fontSize: 20, lineHeight: '36px' },
            }}
          >
            We connect forward-thinking companies with top-tier semiconductor professionals specializing in RTL design, verification, DFT, physical design, and the full spectrum of chip development services.
          </Typography>
        </m.div>

    
      </Stack>
    </m.div>
  );

  const renderRatings = () => (
    <m.div {...motionProps}>
      <Box
        sx={{
          gap: 1.5,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          typography: 'subtitle2',
          justifyContent: 'center',
        }}
      >
        <m.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <AvatarGroup sx={{ [`& .${avatarClasses.root}`]: { width: 32, height: 32 } }}>
            {Array.from({ length: 3 }, (_, index) => (
              <m.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Avatar
                  key={_mock.fullName(index + 1)}
                  alt={_mock.fullName(index + 1)}
                  src={_mock.image.avatar(index + 1)}
                />
              </m.div>
            ))}
          </AvatarGroup>
        </m.div>
        <m.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          sx={{
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -2,
              left: 0,
              width: '100%',
              height: '5px',
              background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.warning.main})`,
              borderRadius: '2px',
              opacity: 0.3,
              animation: 'highlightPulse 2s infinite',
            },
            '@keyframes highlightPulse': {
              '0%': { opacity: 0.3 },
              '50%': { opacity: 0.7 },
              '100%': { opacity: 0.3 },
            }
          }}
        >
          Power your projects with the industry's most trusted freelance VLSI talent.
        </m.span>
      </Box>
    </m.div>
  );

  const renderButtons = () => (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: { xs: 1.5, sm: 2 },
      }}
    >
      <m.div {...motionProps}>
        <Stack spacing={2.5} sx={{ alignItems: 'center' }}>
          <m.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 15px rgba(81, 145, 240, 0.6)',
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ boxShadow: '0 0 0px rgba(81, 145, 240, 0)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Button
              component={RouterLink}
              href={paths.forCompanies}
              color="inherit"
              size="large"
              variant="contained"
              startIcon={
                <m.div
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Iconify width={24} icon="iconoir:flash" />
                </m.div>
              }
              sx={{
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: (theme) => `linear-gradient(90deg, transparent, ${theme.palette.primary.light}, transparent)`,
                  transform: 'translateX(-100%)',
                  animation: 'shimmer 3s infinite',
                },
                '@keyframes shimmer': {
                  '0%': { transform: 'translateX(-100%)' },
                  '50%': { transform: 'translateX(100%)' },
                  '100%': { transform: 'translateX(100%)' },
                }
              }}
            >
              <m.span
                initial={{ y: 0 }}
                whileHover={{ y: -5 }}
                animate={{ y: [0, -2, 0] }}
                transition={{ 
                  y: { duration: 0.5, repeat: Infinity, repeatType: 'reverse' },
                  default: { duration: 0.2 }
                }}
              >
                         Join as a Company
              </m.span>
            </Button>
          </m.div>
        </Stack>
      </m.div>

      <m.div {...motionProps}>
        <m.div
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 10px rgba(255, 155, 0, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Button
            color="inherit"
            size="large"
            variant="outlined"
            startIcon={
              <m.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              >
                <Iconify width={24} icon="carbon:launch" />
              </m.div>
            }
            component={RouterLink}
            href={paths.forProgrammers}
            sx={{
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 'inherit',
                border: (theme) => `2px solid ${theme.palette.warning.main}`,
                opacity: 0.5,
                animation: 'pulseBorder 2s infinite',
              },
              '@keyframes pulseBorder': {
                '0%': { transform: 'scale(1)', opacity: 0.5 },
                '50%': { transform: 'scale(1.05)', opacity: 0.2 },
                '100%': { transform: 'scale(1)', opacity: 0.5 },
              }
            }}
          >
            <m.span
              initial={{ y: 0 }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
                              Join as a Freelancer

            </m.span>
          </Button>
        </m.div>
      </m.div>
    </Box>
  );



  return (
    <Box
      ref={scrollProgress.elementRef}
      component="section"
      sx={[
        {
          overflow: 'hidden',
          position: 'relative',
          [theme.breakpoints.up(mdKey)]: {
            minHeight: 760,
            height: '100vh',
            maxHeight: 1440,
            display: 'block',
            willChange: 'opacity',
            mt: 'calc(var(--layout-header-desktop-height) * -1)',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        component={m.div}
        style={{ opacity, }}
        sx={{
          width: 1,
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          transition: theme.transitions.create(['opacity']),
          [theme.breakpoints.up(mdKey)]: { height: 1, position: 'fixed', maxHeight: 'inherit' },
        }}
      >
        <Container
          component={MotionContainer}
          sx={{
            py: 3,
            gap: 5,
            zIndex: 9,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            [theme.breakpoints.up(mdKey)]: {
              flex: '1 1 auto',
              justifyContent: 'center',
              py: 'var(--layout-header-desktop-height)',
            },
          }}
        >
          <Stack spacing={3} sx={{ textAlign: 'center' }}>
            <m.div style={{ y: y1 }}>{renderHeading()}</m.div>
            <m.div style={{ y: y2 }}>{renderText()}</m.div>
          </Stack>

          <m.div style={{ y: y3 }}>{renderRatings()}</m.div>
          <m.div style={{ y: y4 }}>{renderButtons()}</m.div>
        </Container>

        <HeroBackground />
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

function useTransformY(value, distance) {
  const physics = {
    mass: 0.1,
    damping: 20,
    stiffness: 300,
    restDelta: 0.001,
  };

  return useSpring(useTransform(value, [0, 1], [0, distance]), physics);
}

function useScrollPercent() {
  const elementRef = useRef(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  useMotionValueEvent(scrollY, 'change', (scrollHeight) => {
    let heroHeight = 0;

    if (elementRef.current) {
      heroHeight = elementRef.current.offsetHeight;
    }

    const scrollPercent = Math.floor((scrollHeight / heroHeight) * 100);

    if (scrollPercent >= 100) {
      setPercent(100);
    } else {
      setPercent(Math.floor(scrollPercent));
    }
  });

  return { elementRef, percent, scrollY };
}
