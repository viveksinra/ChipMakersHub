import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useState, useRef, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const benefits = [
  {
    title: 'Access to top semiconductor companies',
    icon: 'ph:buildings-fill',
  },
  {
    title: 'Flexible remote work opportunities',
    icon: 'mdi:remote-desktop',
  },
  {
    title: 'Competitive project-based payments',
    icon: 'mdi:currency-usd',
  },
  {
    title: 'A thriving community of industry professionals',
    icon: 'fa6-solid:people-group',
  },
];

// ----------------------------------------------------------------------

export function HomeForProgrammers() {
  const theme = useTheme();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient effect */}
      <Box
        component={m.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(120deg, ${alpha(theme.palette.primary.lighter, 0.1)}, ${alpha(theme.palette.primary.main, 0.05)})`,
          zIndex: -1,
        }}
      />

      <Container component={MotionViewport}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <m.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Box
                sx={{ 
                  textAlign: 'center',
                }}
              >
                <m.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: theme.customShadows.z24,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      bgcolor: 'background.paper',
                      boxShadow: theme.customShadows.z8,
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    {!isImageLoaded && (
                      <m.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isImageLoaded ? 0 : 1 }}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: alpha(theme.palette.background.paper, 0.8),
                          zIndex: 2,
                        }}
                      >
                        <Box
                          component={m.div}
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                        >
                          <Iconify icon="eos-icons:loading" width={40} height={40} />
                        </Box>
                      </m.div>
                    )}
                    <Image
                      src="/myAssets/gif/portrait/chip3.gif"
                      alt="Chip Animation"
                      onLoad={handleImageLoad}
                      sx={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: 460,
                        margin: '0 auto',
                        display: 'block',
                        filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.15))',
                      }}
                    />
                  </Box>
                </m.div>
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
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                  }}
                >
                  For Freelancers
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
                >
                  Are you a VLSI engineer, RTL designer, or verification expert looking for freelance projects? 
                  Chip Makers Hub provides access to top semiconductor companies and flexible work opportunities.
                </Typography>
              </m.div>

              <Stack spacing={1.5}>
                {benefits.map((benefit, index) => (
                  <m.div
                    key={benefit.title}
                    variants={varFade('inRight')}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <m.div
                      whileHover={{ 
                        x: 10, 
                        backgroundColor: alpha(theme.palette.primary.lighter, 0.2),
                        transition: { duration: 0.3 }
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Stack 
                        direction="row" 
                        alignItems="center" 
                        spacing={2}
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          bgcolor: (theme) => alpha(theme.palette.background.default, 0.8),
                        }}
                      >
                        <m.div
                          whileHover={{ rotate: 15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Box
                            component={m.div}
                            animate={{
                              boxShadow: [
                                `0 0 5px ${alpha(theme.palette.primary.main, 0.3)}`,
                                `0 0 15px ${alpha(theme.palette.primary.main, 0.6)}`,
                                `0 0 5px ${alpha(theme.palette.primary.main, 0.3)}`
                              ]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: "loop"
                            }}
                            sx={{
                              p: 1.5,
                              borderRadius: '50%',
                              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.12),
                              color: 'primary.main',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              position: 'relative',
                              overflow: 'hidden',
                              '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: '-50%',
                                left: '-50%',
                                width: '200%',
                                height: '200%',
                                backgroundImage: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.2)} 0%, transparent 70%)`,
                                opacity: 0.6,
                                animation: 'spin 5s linear infinite',
                              },
                              '@keyframes spin': {
                                '0%': { transform: 'rotate(0deg)' },
                                '100%': { transform: 'rotate(360deg)' }
                              }
                            }}
                          >
                            <m.div
                              animate={{
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut"
                              }}
                            >
                              <Iconify icon={benefit.icon} width={24} />
                            </m.div>
                          </Box>
                        </m.div>
                        
                        <m.div
                          animate={{
                            y: [0, -2, 0, 2, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                          }}
                          style={{ flex: 1 }}
                        >
                          <Typography variant="body1" fontWeight="medium">{benefit.title}</Typography>
                        </m.div>
                      </Stack>
                    </m.div>
                  </m.div>
                ))}
              </Stack>

              <m.div
                variants={varFade('inUp')}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.6 }}
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
                      mt: 2,
                      px: 3,
                      py: 1.2,
                      boxShadow: theme.customShadows.primary,
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        background: theme.palette.primary.darker,
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
                      Sign Up as a Freelancer
                    </m.span>
                  </Button>
                </m.div>
              </m.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 