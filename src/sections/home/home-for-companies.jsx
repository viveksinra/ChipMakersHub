import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { m } from 'framer-motion';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';
import { ParticleBackground } from 'src/components/background/particle-background';

// ----------------------------------------------------------------------

const hiringSolutions = [
  {
    title: 'ASIC & FPGA Design',
    icon: 'mdi:chip',
  },
  {
    title: 'RTL Development & Verification',
    icon: 'carbon:code',
  },
  {
    title: 'DFT (Design for Testability)',
    icon: 'mdi:clipboard-check',
  },
  {
    title: 'Physical Design & Signoff',
    icon: 'carbon:ruler',
  },
  {
    title: 'Analog & Mixed-Signal Design',
    icon: 'carbon:chart-line',
  },
  {
    title: 'Embedded Systems & SoC Development',
    icon: 'mdi:cpu-32-bit',
  },
  {
    title: 'Semiconductor Consulting & Training',
    icon: 'mdi:teach',
  },
];

// ----------------------------------------------------------------------

export function HomeForCompanies() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 5, md: 8 },
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <ParticleBackground count={30} />

      <Container component={MotionViewport}>
        <Grid container spacing={8} direction="row-reverse" alignItems="center">
          <Grid item xs={12} md={6}>
            <m.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: theme.customShadows.z16,
                }}
              >
                <m.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Image
                    alt="Semiconductor Company"
                    src="/myAssets/gif/portrait/chip3.gif"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                </m.div>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '30%',
                    background: `linear-gradient(to top, ${alpha(theme.palette.grey[900], 0.8)}, transparent)`,
                  }}
                />
              </Box>
            </m.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <m.div
                variants={varFade('inRight')}
                initial="initial"
                animate="animate"
              >
                <Typography
                  variant="h2"
                  sx={{
                    mb: 1,
                    background: `linear-gradient(135deg, ${theme.palette.success.main} 0%, ${theme.palette.primary.main} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                  }}
                >
                  For Companies
                </Typography>
              </m.div>
              
              <m.div
                variants={varFade('inRight')}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                <Typography 
                  color="text.secondary" 
                  variant="subtitle1"
                  sx={{ 
                    fontWeight: 500,
                  }}
                >
                  Need top-tier VLSI experts for your next project?
                  ChipMakersHub connects you with a global network of pre-vetted semiconductor freelancers ready to contribute across the entire chip design lifecycle — from RTL to physical design, FPGA to AMS, and beyond.
                </Typography>
              </m.div>
              
              <m.div
                variants={varFade('inUp')}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.3 }}
              >
                <Typography 
                  variant="h5"
                  sx={{ 
                    color: theme.palette.success.darker,
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  Hiring Solutions Include:
                </Typography>
              </m.div>

              <Grid container spacing={1.5}>
                {hiringSolutions.map((solution, index) => (
                  <Grid item xs={12} sm={6} key={solution.title}>
                    <m.div
                      variants={varFade('inUp')}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <m.div
                        whileHover={{ 
                          x: 5, 
                          backgroundColor: alpha(theme.palette.primary.lighter, 0.08),
                          boxShadow: theme.customShadows.z8,
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={1.5}
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                          }}
                        >
                          <m.div
                            whileHover={{ rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Box
                              sx={{
                                p: 1.2,
                                borderRadius: '50%',
                                bgcolor: (theme) =>
                                  alpha(theme.palette.primary.main, 0.08),
                                color: 'primary.main',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                animation: 'pulse 2s infinite',
                                '@keyframes pulse': {
                                  '0%': { transform: 'scale(1)' },
                                  '50%': { transform: 'scale(1.1)' },
                                  '100%': { transform: 'scale(1)' }
                                }
                              }}
                            >
                              <Iconify icon={solution.icon} width={24} />
                            </Box>
                          </m.div>
                          <Typography variant="body2" fontWeight="medium">
                            {solution.title}
                          </Typography>
                        </Stack>
                      </m.div>
                    </m.div>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 3 }}>
                <m.div
                  variants={varFade('inUp')}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.8 }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 3,
                      textAlign: 'center',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.success.main} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 'bold',
                      animation: 'pulse 2s infinite',
                      '@keyframes pulse': {
                        '0%': { opacity: 0.8 },
                        '50%': { opacity: 1 },
                        '100%': { opacity: 0.8 }
                      }
                    }}
                  >
                    Scale faster. Hire smarter. Tap into on-demand expertise — when and where you need it.
                  </Typography>
                </m.div>
                <m.div
                  variants={varFade('inUp')}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.8 }}
                >
                  <m.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      component={RouterLink}
                      href={paths.dashboard.root}
                      size="large"
                      color="primary"
                      variant="contained"
                      endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
                      sx={{
                        borderRadius: 2,
                        px: 3,
                        py: 1.2,
                        boxShadow: theme.customShadows.primary,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.success.main} 100%)`,
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.success.dark} 100%)`,
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          width: '100%',
                          height: '100%',
                          background: 'rgba(255, 255, 255, 0.2)',
                          transform: 'translateX(-100%)',
                          animation: 'pulse 1.5s infinite',
                        },
                        '@keyframes pulse': {
                          '0%': {
                            transform: 'translateX(-100%)'
                          },
                          '50%': {
                            transform: 'translateX(100%)'
                          },
                          '100%': {
                            transform: 'translateX(100%)'
                          }
                        }
                      }}
                    >
                      <m.span
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                        style={{ display: 'inline-flex', alignItems: 'center' }}
                      >
                        Hire a Freelancer
                      </m.span>
                    </Button>
                  </m.div>
                </m.div>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 