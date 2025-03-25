import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

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
        py: { xs: 10, md: 15 },
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
      }}
    >
      <Container component={MotionViewport}>
        <Grid container spacing={8} direction="row-reverse" alignItems="center">
          <Grid item xs={12} md={6}>
            <Image
              alt="Semiconductor Company"
              src="/assets/illustrations/illustration_company.svg"
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
              <Typography variant="h2">For Companies</Typography>
              
              <Typography color="text.secondary">
                Looking for skilled VLSI professionals for your project? Chip Makers Hub offers access to a global 
                network of expert freelancers in the semiconductor industry.
              </Typography>
              
              <Typography variant="h5">
                Hiring Solutions Include:
              </Typography>

              <Grid container spacing={2}>
                {hiringSolutions.map((solution) => (
                  <Grid item xs={12} sm={6} key={solution.title}>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: '50%',
                          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                          color: 'primary.main',
                        }}
                      >
                        <Iconify icon={solution.icon} width={24} />
                      </Box>
                      <Typography variant="body2">{solution.title}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>

              <Box>
                <Button
                  component={RouterLink}
                  href={paths.dashboard.root}
                  size="large"
                  color="primary"
                  variant="contained"
                  endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
                >
                  Hire a Freelancer
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 