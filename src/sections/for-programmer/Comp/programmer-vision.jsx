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

export function ProgrammerVision({ sx, ...other }) {
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
          Benefits of Joining ChipMakersHub
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

  const renderHowItWorks = () => (
    <Box sx={{ mt: 12, textAlign: 'center' }}>
      <m.div variants={varFade('inUp')}>
        <Typography variant="h4" sx={{ mb: 5 }}>
          How It Works
        </Typography>
      </m.div>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: { xs: 4, md: 2 } }}>
        {HOW_IT_WORKS.map((step, index) => (
          <Box
            key={step.title}
            component={m.div}
            variants={varFade('inUp')}
            sx={{
              px: 3,
              py: 4,
              width: { xs: '100%', sm: '45%', md: '18%' },
              borderRadius: 2,
              bgcolor: 'background.paper',
              boxShadow: (theme) => theme.customShadows.z8,
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                position: 'absolute',
                top: -30,
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'primary.main',
                opacity: 0.12,
                fontSize: 80,
                fontWeight: 'bold',
              }}
            >
              {index + 1}
            </Typography>
            <Iconify icon={step.icon} width={40} height={40} sx={{ mb: 2, color: 'primary.main' }} />
            <Typography variant="h6" sx={{ mb: 1 }}>
              {step.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {step.description}
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
          Ready to Transform Your VLSI Career?
        </Typography>

        {renderServices()}
        {renderHowItWorks()}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

const SERVICES = [
  {
    icon: 'mdi:target-account',
    title: 'Find Matching Projects',
    description: 'Our platform connects you with projects that align with your specific VLSI skills and experience.',
  },
  {
    icon: 'mdi:account-badge',
    title: 'Build Your Profile',
    description: 'Showcase your portfolio, earn verification badges, and build credibility through client reviews.',
  },
  {
    icon: 'mdi:cash-lock',
    title: 'Secure Payments',
    description: 'Get paid reliably for your completed milestones through our secure payment system.',
  },
  {
    icon: 'mdi:tools',
    title: 'Project Tools',
    description: 'Access specialized tools designed for semiconductor project collaboration and management.',
  },
];

const HOW_IT_WORKS = [
  {
    icon: 'mdi:account-edit',
    title: 'Create Your Profile',
    description: 'Highlight your VLSI expertise, experience, and portfolio',
  },
  {
    icon: 'mdi:file-search',
    title: 'Browse Opportunities',
    description: 'Explore projects that match your skills and interests',
  },
  {
    icon: 'mdi:file-send',
    title: 'Submit Proposals',
    description: 'Apply to projects with your customized approach',
  },
  {
    icon: 'mdi:account-group',
    title: 'Collaborate',
    description: 'Deliver quality work and build your reputation',
  },
  {
    icon: 'mdi:credit-card-check',
    title: 'Get Paid',
    description: 'Receive secure payments for your completed work',
  },
];
