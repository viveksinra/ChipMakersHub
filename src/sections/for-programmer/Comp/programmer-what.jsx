import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';


import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function ProgrammerWhat({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[{ overflow: 'hidden' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container
        component={MotionViewport}
        sx={{ py: { xs: 10, md: 15 }, textAlign: { xs: 'center', md: 'unset' } }}
      >
        <Grid container columnSpacing={{ md: 3 }} sx={{ alignItems: 'flex-start' }}>
          <Grid
            container
            size={{ xs: 12, md: 6, lg: 7 }}
            sx={{ pr: { md: 7 }, alignItems: 'center', display: { xs: 'none', md: 'flex' } }}
          >
            <Grid size={6}>
              <m.div variants={varFade('inUp')}>
                <Image
                  alt="Our office small"
                  src={`${CONFIG.assetsDir}/assets/images/about/what-small.webp`}
                  ratio="1/1"
                  sx={(theme) => ({
                    borderRadius: 3,
                    boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
                    ...theme.applyStyles('dark', {
                      boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
                    }),
                  })}
                />
              </m.div>
            </Grid>

            <Grid size={6}>
              <m.div variants={varFade('inUp')}>
                <Image
                  alt="Our office large"
                  src={`${CONFIG.assetsDir}/assets/images/about/what-large.webp`}
                  ratio="3/4"
                  sx={(theme) => ({
                    borderRadius: 3,
                    boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
                    ...theme.applyStyles('dark', {
                      boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
                    }),
                  })}
                />
              </m.div>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 5 }}>
            <Typography component={m.h2} variants={varFade('inRight')} variant="h2" sx={{ mb: 3 }}>
              What We Offer to Programmers
            </Typography>

            <Typography
              component={m.p}
              variants={varFade('inRight')}
              sx={[
                (theme) => ({
                  color: 'text.secondary',
                  ...theme.applyStyles('dark', {
                    color: 'common.white',
                  }),
                }),
              ]}
            >
              Join our thriving community of VLSI professionals and take your career to the next level. Our platform provides you with the tools and opportunities to succeed in the semiconductor industry.
            </Typography>

            <Box
              sx={{
                my: 5,
                gap: 3,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {SKILLS.map((progress, index) => (
                <m.div key={progress.label} variants={varFade('inRight')}>
                  <Box
                    sx={{
                      mb: 1,
                      display: 'flex',
                      typography: 'body2',
                      alignItems: 'center',
                      color: 'text.secondary',
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ flexGrow: 1, color: 'text.primary' }}>
                      {progress.label}
                    </Typography>
                    {progress.metric && <Typography variant="body2">{progress.metric}</Typography>}
                  </Box>

                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                    {progress.description}
                  </Typography>

                  <LinearProgress
                    color={progress.color}
                    variant="determinate"
                    value={progress.value}
                    sx={{ mb: 2, height: 6, borderRadius: 1 }}
                  />
                </m.div>
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                component={m.button}
                variants={varFade('inRight')}
                variant="contained"
                color="primary"
                size="large"
                endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
              >
                Find Projects
              </Button>

              <Button
                component={m.button}
                variants={varFade('inRight')}
                variant="outlined"
                color="inherit"
                size="large"
              >
                Create Profile
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

const SKILLS = [
  {
    label: 'Access to Top Semiconductor Companies',
    description: 'Work with industry leaders and innovative startups in the VLSI ecosystem.',
    value: 90,
    color: 'primary',
    metric: '100+ companies'
  },
  {
    label: 'Flexible Remote Work Opportunities',
    description: 'Balance your professional and personal life with flexible work arrangements.',
    value: 95,
    color: 'success',
    metric: '100% remote'
  },
  {
    label: 'Competitive Project-based Payments',
    description: 'Get compensated fairly for your expertise and specialized VLSI skills.',
    value: 85,
    color: 'warning',
    metric: 'Market rates'
  },
  {
    label: 'Thriving Community',
    description: 'Network and grow with peers in our community of industry professionals.',
    value: 80,
    color: 'info',
    metric: '1000+ members'
  },
];
