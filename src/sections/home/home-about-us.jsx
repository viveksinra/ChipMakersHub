import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const offerings = [
  {
    title: 'A marketplace for VLSI freelancers',
    icon: 'fluent:people-team-16-filled',
  },
  {
    title: 'On-demand semiconductor talent for companies',
    icon: 'tabler:cpu',
  },
  {
    title: 'Seamless project collaboration and management',
    icon: 'tabler:device-laptop',
  },
  {
    title: 'Expertise across ASIC, FPGA, and SoC design',
    icon: 'mdi:chip',
  },
];

// ----------------------------------------------------------------------

export function HomeAboutUs() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
      }}
    >
      <Container component={MotionViewport}>
        <Box
          sx={{
            mb: { xs: 8, md: 10 },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{ mb: 3 }}
          >
            About Us
          </Typography>

          <Typography
            sx={{
              mx: 'auto',
              maxWidth: 800,
              color: 'text.secondary',
            }}
          >
            At Chip Makers Hub, we empower the global VLSI community by providing a seamless freelancing marketplace. 
            Our mission is to revolutionize chip design, verification, and semiconductor development by connecting 
            top-tier freelancers with companies seeking flexible and efficient hiring solutions.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {offerings.map((item) => (
            <Grid key={item.title} item xs={12} sm={6} md={3}>
              <OfferingCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function OfferingCard({ item }) {
  const theme = useTheme();
  
  return (
    <Card
      sx={{
        textAlign: 'center',
        boxShadow: (theme) => theme.customShadows.z8,
        height: '100%',
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
          transition: theme.transitions.create('box-shadow'),
        },
      }}
    >
      <CardContent
        sx={{
          py: 5,
          px: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            mb: 3,
            p: 2.5,
            borderRadius: '50%',
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
            color: 'primary.main',
          }}
        >
          <Iconify icon={item.icon} width={36} />
        </Box>

        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          {item.title}
        </Typography>
      </CardContent>
    </Card>
  );
} 