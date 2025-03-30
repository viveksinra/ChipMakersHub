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
import { varFade, MotionViewport } from 'src/components/animate';

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
      }}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Image
              alt="VLSI Freelancer"
              src="/assets/illustrations/illustration_freelancer.svg"
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: 460,
                mx: 'auto',
                display: 'block',
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography variant="h2">For Freelancers</Typography>
              
              <Typography color="text.secondary">
                Are you a VLSI engineer, RTL designer, or verification expert looking for freelance projects? 
                Chip Makers Hub provides access to top semiconductor companies and flexible work opportunities.
              </Typography>

              <Stack spacing={2}>
                {benefits.map((benefit) => (
                  <Stack key={benefit.title} direction="row" alignItems="center" spacing={2}>
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: '50%',
                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                        color: 'primary.main',
                      }}
                    >
                      <Iconify icon={benefit.icon} width={24} />
                    </Box>
                    <Typography variant="body1">{benefit.title}</Typography>
                  </Stack>
                ))}
              </Stack>

              <Box>
                <Button
                  component={RouterLink}
                  href={paths.dashboard.root}
                  size="large"
                  color="primary"
                  variant="contained"
                  endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
                >
                  Sign Up as a Freelancer
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 