import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function CompanyVision({ sx, ...other }) {
  const renderImage = () => (
    <Image
      src={`${CONFIG.assetsDir}/assets/images/about/vision.webp`}
      alt="About vision"
      ratio={{ xs: '4/3', sm: '16/9' }}
      slotProps={{
        overlay: {
          sx: (theme) => ({
            bgcolor: varAlpha(theme.vars.palette.grey['900Channel'], 0.48),
          }),
        },
      }}
    />
  );

  const renderLogos = () => (
    <Box
      sx={[
        () => ({
          width: 1,
          zIndex: 9,
          bottom: 0,
          opacity: 0.48,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          position: 'absolute',
          justifyContent: 'center',
          py: { xs: 1.5, md: 2.5 },
        }),
      ]}
    >
      {['intel', 'amd', 'nvidia', 'tsmc', 'arm', 'qualcomm'].map((logo) => (
        <Box
          component={m.img}
          key={logo}
          variants={varFade('in')}
          alt={logo}
          src={`${CONFIG.assetsDir}/assets/icons/brands/ic-brand-${logo}.svg`}
          sx={{ m: { xs: 1.5, md: 2.5 }, height: { xs: 20, md: 32 } }}
        />
      ))}
    </Box>
  );

  const renderServices = () => (
    <Box sx={{ mt: 8, textAlign: 'center' }}>
      <m.div variants={varFade('inUp')}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Why Companies Choose ChipMakersHub
        </Typography>
      </m.div>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, mt: 4 }}>
        {SERVICES.map((service) => (
          <Box
            key={service.title}
            component={m.div}
            variants={varFade('inUp')}
            sx={{
              px: 3,
              py: 5,
              width: { xs: '100%', sm: '45%', md: '22%' },
              borderRadius: 2,
              bgcolor: 'background.paper',
              boxShadow: (theme) => theme.customShadows.z8,
              textAlign: 'center',
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: (theme) => theme.customShadows.z24,
              },
            }}
          >
            <Iconify icon={service.icon} width={48} height={48} sx={{ mb: 2, color: 'primary.main' }} />
            <Typography variant="h6" sx={{ mb: 2 }}>
              {service.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', height: 80, overflow: 'hidden' }}>
              {service.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        () => ({
          pb: 15,
          position: 'relative',
          bgcolor: 'background.neutral',
          '&::before': {
            top: 0,
            left: 0,
            width: 1,
            content: "''",
            position: 'absolute',
            height: { xs: 80, md: 120 },
            bgcolor: 'background.default',
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionViewport}>
        <Box
          sx={{
            mb: 10,
            borderRadius: 2,
            display: 'flex',
            overflow: 'hidden',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderImage()}
          {renderLogos()}

          <Fab sx={{ position: 'absolute', zIndex: 9 }}>
            <Iconify icon="solar:play-broken" width={24} />
          </Fab>
        </Box>

        <Typography
          component={m.h6}
          variants={varFade('inUp')}
          variant="h3"
          sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}
        >
          On-Demand VLSI Talent for Seamless Integration with Your Team
        </Typography>

        {renderServices()}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

const SERVICES = [
  {
    icon: 'mdi:cash-multiple',
    title: 'Cost-Effective Solutions',
    description: 'Pay only for the work you need with no recruitment overhead and flexible engagement models.',
  },
  {
    icon: 'mdi:check-decagram',
    title: 'Quality Assurance',
    description: 'All freelancers are pre-vetted with verified skills and expertise matching your specific requirements.',
  },
  {
    icon: 'mdi:account-switch',
    title: 'Seamless Integration',
    description: 'Purpose-built collaboration tools with milestone tracking and direct interaction with your freelancers.',
  },
  {
    icon: 'mdi:timer-sand',
    title: 'Reduced Time-to-Market',
    description: 'Access specialized semiconductor skills immediately without lengthy hiring processes.',
  },
];
