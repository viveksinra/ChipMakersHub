import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function HomeJoinHub() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        backgroundImage: (theme) =>
          `linear-gradient(to bottom, ${alpha(theme.palette.primary.main, 0.08)}, ${alpha(
            theme.palette.primary.main,
            0.12
          )})`,
      }}
    >
      <Container component={MotionViewport}>
        <Paper
          sx={{
            py: 8,
            px: 5,
            textAlign: 'center',
            borderRadius: 3,
            boxShadow: (theme) => theme.customShadows.z24,
            backgroundColor: 'background.paper',
          }}
        >
          <Typography variant="h2" sx={{ mb: 3 }}>
            Join the Hub
          </Typography>

          <Typography
            sx={{
              mx: 'auto',
              maxWidth: 800,
              color: 'text.secondary',
              mb: 6,
            }}
          >
            Are you a VLSI engineer, chip designer, or a semiconductor company looking for the right opportunities? 
            Join Chip Makers Hub today and be part of the future of chip innovation!
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              component={RouterLink}
              href={paths.dashboard.root}
              size="large"
              color="primary"
              variant="contained"
              startIcon={<Iconify icon="eva:flash-fill" />}
            >
              Sign Up Now
            </Button>

            <Button
              component={RouterLink}
              href={paths.dashboard.root}
              size="large"
              color="inherit"
              variant="outlined"
              startIcon={<Iconify icon="eva:email-fill" />}
            >
              Contact Us
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
} 