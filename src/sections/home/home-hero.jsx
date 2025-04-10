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
        <Box component="span" sx={{ width: 1, opacity: 0.24 }}>
          Where the world connects
        </Box>
        for 
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
          VLSI work
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
              color: (theme) => theme.palette.primary.darker,
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
            Welcome to Chip Makers Hub — the premier platform for VLSI freelancing excellence.
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

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <m.div
            style={{
              display: 'inline-block',
              borderRadius: 8,
              position: 'relative',
              padding: 2,
            }}
            animate={{ 
              background: [
                'linear-gradient(90deg, #FFD700, #FFA500, #FF8C00, #FFA500, #FFD700)',
                'linear-gradient(180deg, #FFD700, #FFA500, #FF8C00, #FFA500, #FFD700)',
                'linear-gradient(270deg, #FFD700, #FFA500, #FF8C00, #FFA500, #FFD700)',
                'linear-gradient(360deg, #FFD700, #FFA500, #FF8C00, #FFA500, #FFD700)',
              ]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <Typography
              variant="body2"
              sx={{
                mx: 'auto',
                px: 3,
                py: 1.5,
                fontWeight: 'bold',
                borderRadius: 1.5,
                display: 'block',
                backgroundColor: (theme) => theme.palette.background.paper,
                color: (theme) => theme.palette.warning.darker,
                [theme.breakpoints.up(smKey)]: { whiteSpace: 'pre' },
                [theme.breakpoints.up(lgKey)]: { fontSize: 20, lineHeight: '36px' },
              }}
            >
              Power your projects with the industry's most trusted freelance VLSI talent.
            </Typography>
          </m.div>
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
        <AvatarGroup sx={{ [`& .${avatarClasses.root}`]: { width: 32, height: 32 } }}>
          {Array.from({ length: 3 }, (_, index) => (
            <Avatar
              key={_mock.fullName(index + 1)}
              alt={_mock.fullName(index + 1)}
              src={_mock.image.avatar(index + 1)}
            />
          ))}
        </AvatarGroup>
         Professionals Freelancers Team
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
          <Button
            component={RouterLink}
            href={paths.forProgrammers}
            color="inherit"
            size="large"
            variant="contained"
            startIcon={<Iconify width={24} icon="iconoir:flash" />}
          >
            <span>
              Join as a Programmer
            </span>
          </Button>
        </Stack>
      </m.div>

      <m.div {...motionProps}>
        <Button
          color="inherit"
          size="large"
          variant="outlined"
          startIcon={<Iconify width={24} icon="carbon:launch" />}
          component={RouterLink}
          href={paths.forCompanies}
        >
          Join as a Company
        </Button>
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
