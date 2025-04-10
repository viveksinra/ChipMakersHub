import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';
import { MotionViewport, m } from 'src/components/animate';
import { varFade } from 'src/components/animate/variants/fade';

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
    title: 'Expertise in full-spectrum ASIC, FPGA, and SoC development',
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
          <m.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            <Typography
              variant="h2"
              sx={{ mb: 3 }}
            >
              About Us
            </Typography>
          </m.div>

          <m.div variants={varFade('inUp')}>
            <Box 
              sx={{ 
                position: 'relative',
                overflow: 'hidden',
                mx: 'auto',
                maxWidth: 800,
              }}
            >
              <Typography
                sx={{
                  color: 'text.secondary',
                }}
              >
               At Chip Makers Hub, we empower the global semiconductor industry with a seamless freelancing marketplace tailored for VLSI.
      Our mission is to revolutionize chip design by connecting top-tier freelance engineers with companies seeking flexible, efficient, and expert-driven hiring solutions.
              </Typography>
              
              {/* Shine effect overlay */}
              <m.div
                animate={{
                  x: ['-100%', '200%'],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '50%',
                  height: '100%',
                  background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
                  transform: 'skewX(-20deg)',
                  zIndex: 1,
                }}
              />
            </Box>
          </m.div>
        </Box>

        <Grid container spacing={4}>
          {offerings.map((item, index) => (
            <Grid key={item.title} item xs={12} sm={6} md={3}>
              <m.div
                variants={varFade('inUp')}
                transition={{ delay: index * 0.1 }}
              >
                <OfferingCard item={item} />
              </m.div>
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
      component={m.div}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      sx={{
        textAlign: 'center',
        boxShadow: (theme) => theme.customShadows.z8,
        height: 280,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
          transition: theme.transitions.create('box-shadow'),
        },
      }}
    >
      <Box
        component={m.div}
        animate={{
          background: [
            `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
            `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
            `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
          ],
          backgroundSize: ['200% 100%', '200% 100%', '200% 100%'],
          backgroundPosition: ['0% center', '100% center', '0% center'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          zIndex: 1,
        }}
      />

      <CardContent
        sx={{
          py: 5,
          px: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <m.div
          whileHover={{ 
            scale: 1.2,
            rotate: 10,
            transition: { duration: 0.2 }
          }}
        >
          <Box
            component={m.div}
            animate={{
              boxShadow: [
                `0 0 4px 2px ${alpha(theme.palette.primary.main, 0.2)}`,
                `0 0 8px 4px ${alpha(theme.palette.primary.main, 0.4)}`,
                `0 0 4px 2px ${alpha(theme.palette.primary.main, 0.2)}`
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop'
            }}
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
        </m.div>

        <Typography 
          variant="subtitle1" 
          sx={{ 
            width: '100%',
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {item.title}
        </Typography>
      </CardContent>
    </Card>
  );
} 