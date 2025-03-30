import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _socials } from 'src/_mock';
import { TwitterIcon, FacebookIcon, LinkedinIcon, InstagramIcon } from 'src/assets/icons';

import { Logo } from 'src/components/logo';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'ChipMakersHub',
    children: [
      { name: 'About us', href: paths.about },
      { name: 'Contact us', href: paths.contact },
      { name: 'FAQs', href: paths.faqs },
      { name: 'Join as Freelancer', href: '#' },
      { name: 'Hire a Freelancer', href: '#' },
    ],
  },
  {
    headline: 'Services',
    children: [
      { name: 'Front-End Design', href: '#' },
      { name: 'Physical Design', href: '#' },
      { name: 'DFT Services', href: '#' },
      { name: 'FPGA & Embedded', href: '#' },
      { name: 'ASIC Design', href: '#' },
    ],
  },
  { 
    headline: 'Legal', 
    children: [
      { name: 'Terms and Conditions', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  { 
    headline: 'Contact', 
    children: [
      { name: 'contact@chipmakershub.com', href: 'mailto:contact@chipmakershub.com' },
      { name: 'www.chipmakershub.com', href: 'https://www.chipmakershub.com' },
    ] 
  },
];

// VLSI specialty tags
const SPECIALTY_TAGS = ['RTL Design', 'Verification', 'DFT', 'Physical Design', 'SoC', 'FPGA', 'Analog'];

// ----------------------------------------------------------------------

const FooterRoot = styled('footer')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.mode === 'light' 
    ? theme.palette.grey[100] 
    : theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export function Footer({ sx, layoutQuery = 'md', ...other }) {
  return (
    <FooterRoot sx={sx} {...other}>
      <Container
        sx={(theme) => ({
          pb: 8,
          pt: 10,
          [theme.breakpoints.up(layoutQuery)]: { 
            pb: 10,
          },
        })}
      >
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, [layoutQuery]: 4 }}>
            <Stack spacing={3}>
              <Logo sx={{ mb: 1 }} />
              
              <Typography variant="body2" color="text.secondary">
                Your one-stop VLSI freelancing platform connecting companies with skilled semiconductor professionals
                specializing in RTL design, verification, DFT, physical design, and more.
              </Typography>
              
              <Box>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {SPECIALTY_TAGS.map((tag) => (
                    <Chip 
                      key={tag} 
                      label={tag} 
                      size="small" 
                      variant="outlined" 
                      sx={{ m: 0.5 }} 
                    />
                  ))}
                </Stack>
              </Box>

              <Stack direction="row" spacing={1}>
                {_socials.map((social) => (
                  <IconButton 
                    key={social.label}
                    sx={{ 
                      color: 'primary.main',
                      '&:hover': { bgcolor: 'primary.lighter' }
                    }}
                  >
                    {social.value === 'twitter' && <TwitterIcon />}
                    {social.value === 'facebook' && <FacebookIcon />}
                    {social.value === 'instagram' && <InstagramIcon />}
                    {social.value === 'linkedin' && <LinkedinIcon />}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, [layoutQuery]: 8 }}>
            <Grid container spacing={3}>
              {LINKS.map((list) => (
                <Grid key={list.headline} size={{ xs: 6, sm: 3 }}>
                  <Typography 
                    component="div" 
                    variant="overline" 
                    sx={{ 
                      mb: 2,
                      color: 'primary.main',
                      fontWeight: 'bold',
                    }}
                  >
                    {list.headline}
                  </Typography>

                  <Stack spacing={1.5}>
                    {list.children.map((link) => (
                      <Link
                        key={link.name}
                        component={RouterLink}
                        href={link.href}
                        color="text.secondary"
                        variant="body2"
                        sx={{ 
                          '&:hover': { 
                            color: 'primary.main',
                            textDecoration: 'none',
                          },
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                          display: 'block'
                        }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />



        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'flex-start' },
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} ChipMakersHub. All rights reserved.
          </Typography>
          
          <Typography variant="caption" color="text.secondary" sx={{ mt: { xs: 1, sm: 0 } }}>
            Where the world connects for VLSI work
          </Typography>
        </Box>
      </Container>
    </FooterRoot>
  );
}

// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }) {
  return (
    <FooterRoot
      sx={[
        {
          py: 5,
          textAlign: 'center',
          bgcolor: (theme) => theme.palette.mode === 'light' 
            ? theme.palette.grey[100] 
            : theme.palette.background.neutral,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Logo sx={{ mb: 2 }} />
        
        <Stack spacing={3} alignItems="center">
          <Stack direction="row" spacing={2} justifyContent="center">
            {_socials.map((social) => (
              <IconButton 
                key={social.label}
                size="small"
                sx={{ 
                  color: 'primary.main',
                  '&:hover': { bgcolor: 'primary.lighter' }
                }}
              >
                {social.value === 'twitter' && <TwitterIcon />}
                {social.value === 'facebook' && <FacebookIcon />}
                {social.value === 'instagram' && <InstagramIcon />}
                {social.value === 'linkedin' && <LinkedinIcon />}
              </IconButton>
            ))}
          </Stack>
          
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} ChipMakersHub. All rights reserved.
            <br />
            Where the world connects for VLSI work
          </Typography>
          
          <Link 
            href="https://www.chipmakershub.com" 
            target="_blank"
            rel="noopener"
            color="primary"
            underline="hover"
            variant="caption"
          >
            www.chipmakershub.com
          </Link>
        </Stack>
      </Container>
    </FooterRoot>
  );
}
