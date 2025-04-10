import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { MotionViewport } from 'src/components/animate';

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
            <Box
              sx={{ 
                textAlign: 'center',
                animation: 'fadeInLeft 1s ease-out',
                '@keyframes fadeInLeft': {
                  '0%': { 
                    opacity: 0,
                    transform: 'translateX(-20px)'
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateX(0)'
                  }
                }
              }}
            >
              <Box
                sx={{
                  p: 2,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  boxShadow: theme.customShadows.z8,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: theme.customShadows.z24,
                  },
                }}
              >
                <Image
                  alt="VLSI Freelancer"
                  src="/myAssets/chip4.png"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 460,
                    mx: 'auto',
                    display: 'block',
                    filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.15))',
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Typography 
                variant="h2" 
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                  animation: 'fadeInRight 1s ease-out',
                  '@keyframes fadeInRight': {
                    '0%': { 
                      opacity: 0,
                      transform: 'translateX(20px)'
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateX(0)'
                    }
                  }
                }}
              >
                For Freelancers
              </Typography>
              
              <Typography 
                color="text.secondary" 
                variant="subtitle1"
                sx={{
                  animation: 'fadeInRight 1s ease-out 0.2s',
                  animationFillMode: 'both',
                }}
              >
                Are you a VLSI engineer, RTL designer, or verification expert looking for freelance projects? 
                Chip Makers Hub provides access to top semiconductor companies and flexible work opportunities.
              </Typography>

              <Stack spacing={3}>
                {benefits.map((benefit, index) => (
                  <Box 
                    key={benefit.title}
                    sx={{ 
                      animation: 'fadeInRight 0.7s ease-out',
                      animationDelay: `${0.3 + index * 0.1}s`,
                      animationFillMode: 'both',
                    }}
                  >
                    <Stack 
                      direction="row" 
                      alignItems="center" 
                      spacing={2}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        bgcolor: (theme) => alpha(theme.palette.background.default, 0.8),
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: (theme) => alpha(theme.palette.primary.lighter, 0.2),
                          transform: 'translateX(10px)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: '50%',
                          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.12),
                          color: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'rotate(15deg)',
                          },
                        }}
                      >
                        <Iconify icon={benefit.icon} width={24} />
                      </Box>
                      <Typography variant="body1" fontWeight="medium">{benefit.title}</Typography>
                    </Stack>
                  </Box>
                ))}
              </Stack>

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
                  animation: 'fadeInUp 0.8s ease-out 0.6s',
                  animationFillMode: 'both',
                  '@keyframes fadeInUp': {
                    '0%': { 
                      opacity: 0,
                      transform: 'translateY(20px)'
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateY(0)'
                    }
                  },
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
                Sign Up as a Freelancer
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 