import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const reasons = [
  {
    title: 'Verified Freelancers',
    description: 'Work with top-tier semiconductor professionals',
    icon: 'carbon:certificate',
  },
  {
    title: 'Flexible Hiring',
    description: 'Scale your team with project-based or long-term engagements',
    icon: 'carbon:connect',
  },
  {
    title: 'Cost-Effective Solutions',
    description: 'Get high-quality work without the overhead costs',
    icon: 'carbon:money',
  },
  {
    title: 'Global Talent Pool',
    description: 'Access experts from anywhere in the world',
    icon: 'carbon:globe',
  },
];

// ----------------------------------------------------------------------

export function HomeWhyChooseUs() {
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
            Why Choose Us?
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {reasons.map((reason) => (
            <Grid key={reason.title} item xs={12} sm={6} md={3}>
              <ReasonCard reason={reason} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function ReasonCard({ reason }) {
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            width: 80,
            height: 80,
            bgcolor: (theme) => alpha(theme.palette.success.main, 0.08),
            color: 'success.main',
          }}
        >
          <Iconify icon={reason.icon} width={36} />
        </Box>

        <Typography variant="h5" sx={{ mb: 1 }}>
          ✅ {reason.title}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {reason.description}
        </Typography>
      </CardContent>
    </Card>
  );
} 