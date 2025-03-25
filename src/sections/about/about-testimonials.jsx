import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Grid from '@mui/material/Grid2';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { fDate } from 'src/utils/format-time';

import { _testimonials } from 'src/_mock';
import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function AboutTestimonials({ sx, ...other }) {
  const renderLink = () => (
    <Button color="primary" endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
      View All Success Stories
    </Button>
  );

  const renderDescription = () => (
    <Box sx={{ maxWidth: { md: 360 }, textAlign: { xs: 'center', md: 'unset' } }}>
      <m.div variants={varFade('inUp')}>
        <Typography variant="overline" sx={{ color: 'common.white', opacity: 0.48 }}>
          Testimonials
        </Typography>
      </m.div>

      <m.div variants={varFade('inUp')}>
        <Typography variant="h2" sx={{ my: 3, color: 'common.white' }}>
          Success <br />
          Stories
        </Typography>
      </m.div>

      <m.div variants={varFade('inUp')}>
        <Typography sx={{ color: 'common.white' }}>
          Hear from our community of VLSI professionals and companies who have found success through 
          Chip Makers Hub. We're dedicated to creating meaningful connections in the semiconductor 
          industry and helping both freelancers and companies achieve their goals.
        </Typography>
      </m.div>

      <Box
        component={m.div}
        variants={varFade('inUp')}
        sx={{ mt: 3, justifyContent: 'center', display: { xs: 'flex', md: 'none' } }}
      >
        {renderLink()}
      </Box>
    </Box>
  );

  const renderContent = () => (
    <Box
      sx={[
        (theme) => ({
          ...theme.mixins.hideScrollY,
          py: { md: 10 },
          height: { md: 1 },
          overflowY: { xs: 'unset', md: 'auto' },
        }),
      ]}
    >
      <Masonry spacing={3} columns={{ xs: 1, md: 2 }} sx={{ ml: 0 }}>
        {VLSI_TESTIMONIALS.map((testimonial) => (
          <m.div key={testimonial.name} variants={varFade('inUp')}>
            <TestimonialItem testimonial={testimonial} />
          </m.div>
        ))}
      </Masonry>
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(0deg, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.9)}, ${varAlpha(theme.vars.palette.grey['900Channel'], 0.9)})`,
              `url(${CONFIG.assetsDir}/assets/images/about/testimonials.webp)`,
            ],
          }),
          overflow: 'hidden',
          height: { md: 840 },
          py: { xs: 10, md: 0 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionViewport} sx={{ position: 'relative', height: 1 }}>
        <Grid
          container
          spacing={3}
          sx={{
            height: 1,
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'space-between' },
          }}
        >
          <Grid size={{ xs: 10, md: 4 }}>{renderDescription()}</Grid>

          <Grid size={{ xs: 12, md: 7, lg: 6 }} sx={{ height: 1, alignItems: 'center' }}>
            {renderContent()}
          </Grid>
        </Grid>

        <Box
          component={m.div}
          variants={varFade('inUp')}
          sx={{ bottom: 60, position: 'absolute', display: { xs: 'none', md: 'flex' } }}
        >
          {renderLink()}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function TestimonialItem({ testimonial, sx, ...other }) {
  return (
    <Box
      sx={[
        (theme) => ({
          ...theme.mixins.bgBlur({ color: varAlpha(theme.vars.palette.common.whiteChannel, 0.08) }),
          p: 3,
          gap: 3,
          display: 'flex',
          borderRadius: 2,
          color: 'common.white',
          flexDirection: 'column',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Iconify icon="mingcute:quote-left-fill" width={40} sx={{ opacity: 0.48 }} />

      <Typography variant="body2">{testimonial.content}</Typography>

      <Rating value={testimonial.ratingNumber} readOnly size="small" />

      <Box sx={{ gap: 2, display: 'flex' }}>
        <Avatar alt={testimonial.name} src={testimonial.avatarUrl} />

        <ListItemText
          primary={testimonial.name}
          secondary={fDate(testimonial.postedDate)}
          slotProps={{
            secondary: {
              sx: {
                mt: 0.5,
                opacity: 0.64,
                color: 'inherit',
                typography: 'caption',
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}

const VLSI_TESTIMONIALS = [
  {
    name: 'John Matthews',
    role: 'ASIC Design Manager at TechSemi Inc.',
    content: 'ChipMakersHub helped us find an exceptional verification engineer with specific UVM expertise within days. We completed our project ahead of schedule thanks to their quick matching system.',
    ratingNumber: 5,
    postedDate: new Date('2023-12-20T14:33'),
    avatarUrl: `${CONFIG.assetsDir}/assets/images/avatar/avatar_6.jpg`,
  },
  {
    name: 'Elena Volkov',
    role: 'RTL Design Freelancer',
    content: 'After 10 years at a large semiconductor company, I wanted more flexibility. Through ChipMakersHub, I now work with multiple clients on cutting-edge designs while maintaining my work-life balance.',
    ratingNumber: 5,
    postedDate: new Date('2023-11-14T12:12'),
    avatarUrl: `${CONFIG.assetsDir}/assets/images/avatar/avatar_7.jpg`,
  },
  {
    name: 'Robert Chen',
    role: 'CEO of AIChip Startups',
    content: 'As a new semiconductor startup, we couldn\'t afford to hire a full-time physical design team. ChipMakersHub connected us with experienced professionals who helped us tape out our first chip within budget.',
    ratingNumber: 4.5,
    postedDate: new Date('2023-10-05T09:25'),
    avatarUrl: `${CONFIG.assetsDir}/assets/images/avatar/avatar_8.jpg`,
  },
  {
    name: 'Aisha Kabir',
    role: 'DFT Engineer',
    content: 'The specialized projects available on ChipMakersHub have allowed me to focus exclusively on my area of expertise in scan insertion and ATPG. The platform is perfect for niche VLSI professionals.',
    ratingNumber: 5,
    postedDate: new Date('2023-09-17T15:46'),
    avatarUrl: `${CONFIG.assetsDir}/assets/images/avatar/avatar_9.jpg`,
  },
];
