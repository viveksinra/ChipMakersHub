import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { _socials } from 'src/_mock';
import { TwitterIcon, FacebookIcon, LinkedinIcon, InstagramIcon } from 'src/assets/icons';

import { CONFIG } from 'src/global-config';
import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import { Carousel, useCarousel, CarouselArrowFloatButtons } from 'src/components/carousel';

// ----------------------------------------------------------------------

export function AboutTeam({ sx, ...other }) {
  const carousel = useCarousel({
    align: 'start',
    slideSpacing: '24px',
    slidesToShow: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
    },
  });

  return (
    <Box
      component="section"
      sx={[{ overflow: 'hidden' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
        <m.div variants={varFade('inDown')}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Our Team
          </Typography>
        </m.div>

        <m.div variants={varFade('inUp')}>
          <Typography variant="h2" sx={{ my: 3 }}>
            Semiconductor Industry Experts
          </Typography>
        </m.div>

        <m.div variants={varFade('inUp')}>
          <Typography sx={{ mx: 'auto', maxWidth: 640, color: 'text.secondary' }}>
            Our team consists of experienced VLSI professionals with backgrounds from top semiconductor 
            companies. We're dedicated to connecting talent with opportunity in the chip design industry.
          </Typography>
        </m.div>

        <Box sx={{ position: 'relative', mt: 8 }}>
          <CarouselArrowFloatButtons {...carousel.arrows} options={carousel.options} />

          <Carousel carousel={carousel} sx={{ px: 0.5 }}>
            {VLSI_TEAM.map((member) => (
              <Box
                key={member.id}
                component={m.div}
                variants={varFade('in')}
                sx={{ py: { xs: 8, md: 10 } }}
              >
                <MemberCard member={member} />
              </Box>
            ))}
          </Carousel>
        </Box>

        <Button
          size="large"
          color="primary"
          variant="contained"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
          sx={{ mx: 'auto', mt: 5 }}
        >
          Meet Our Team
        </Button>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function MemberCard({ member }) {
  return (
    <Card sx={{ 
      height: '100%', 
      transition: 'all 0.3s',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: (theme) => theme.customShadows.z24,
      },
    }}>
      <Box sx={{ position: 'relative', pt: '100%' }}>
        <Image 
          alt={member.name} 
          src={member.avatarUrl} 
          sx={{ 
            top: 0,
            width: 1,
            height: 1,
            objectFit: 'cover',
            position: 'absolute',
          }} 
        />
      </Box>

      <Box sx={{ p: 3, textAlign: 'left' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          {member.name}
        </Typography>

        <Typography variant="body2" sx={{ mb: 1, color: 'primary.main', fontWeight: 'medium' }}>
          {member.role}
        </Typography>

        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
          {member.description}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 1,
          }}
        >
          {_socials.map((social) => (
            <IconButton key={social.label} size="small" color="primary">
              {social.value === 'facebook' && <FacebookIcon />}
              {social.value === 'instagram' && <InstagramIcon />}
              {social.value === 'linkedin' && <LinkedinIcon />}
              {social.value === 'twitter' && <TwitterIcon />}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

const VLSI_TEAM = [
  {
    id: '1',
    name: 'Dr. Rajiv Sharma',
    role: 'RTL Design Lead',
    description: 'Former senior engineer at Intel with 15+ years of experience in high-performance chip design.',
    avatarUrl: `${CONFIG.assetsDir}/assets/images/avatar/avatar_1.jpg`,
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Physical Design Expert',
    description: 'Specialist in advanced node physical implementation with background at TSMC and Synopsys.',
    avatarUrl: `${CONFIG.assetsDir}/assets/images/avatar/avatar_2.jpg`,
  },
  {
    id: '3',
    name: 'Michael Rodriguez',
    role: 'Verification Architect',
    description: 'UVM expert who has led verification for multiple successful tape-outs at AMD and ARM.',
    avatarUrl: `${CONFIG.assetsDir}/assets/images/avatar/avatar_3.jpg`,
  },
  {
    id: '4',
    name: 'Aisha Patel',
    role: 'DFT Specialist',
    description: 'Industry leader in test optimization and DFT methodologies for complex SoC designs.',
    avatarUrl: `${CONFIG.assetsDir}/assets/images/avatar/avatar_4.jpg`,
  },
  {
    id: '5',
    name: 'David Kim',
    role: 'Analog Design Engineer',
    description: 'Expert in custom analog/mixed-signal IP development for communication chipsets.',
    avatarUrl: `${CONFIG.assetsDir}/assets/images/avatar/avatar_5.jpg`,
  },
];
