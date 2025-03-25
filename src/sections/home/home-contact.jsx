import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const contactInfo = [
  {
    title: 'Email',
    value: 'contact@chipmakershub.com',
    icon: 'eva:email-fill',
    href: 'mailto:contact@chipmakershub.com',
  },
  {
    title: 'Website',
    value: 'www.chipmakershub.com',
    icon: 'eva:globe-fill',
    href: 'https://www.chipmakershub.com',
  },
];

// ----------------------------------------------------------------------

export function HomeContact() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
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
            Contact Us
          </Typography>

          <Typography
            sx={{
              mx: 'auto',
              maxWidth: 800,
              color: 'text.secondary',
            }}
          >
            Have a question or want to learn more about our services? Get in touch with us!
          </Typography>
        </Box>

        <Grid container spacing={8}>
          <Grid item xs={12} md={5}>
            <Stack spacing={4}>
              {contactInfo.map((item) => (
                <Card key={item.title} sx={{ boxShadow: theme.customShadows.z8 }}>
                  <CardContent>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: '50%',
                          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                          color: 'primary.main',
                        }}
                      >
                        <Iconify icon={item.icon} width={24} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2">{item.title}</Typography>
                        <Link href={item.href} color="inherit" variant="body2">
                          {item.value}
                        </Link>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Card sx={{ p: 3, boxShadow: theme.customShadows.z8 }}>
              <Typography variant="h4" sx={{ mb: 5 }}>
                Send us a message
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Subject" />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    fullWidth 
                    label="Message" 
                    multiline 
                    rows={4} 
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    startIcon={<Iconify icon="eva:paper-plane-fill" />}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 