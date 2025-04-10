import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Iconify } from 'src/components/iconify';
import { MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const reasons = [
  {
    title: 'Verified Freelancers',
    description: 'Work with top-tier semiconductor professionals',
    icon: 'carbon:certificate',
    color: 'primary',
  },
  {
    title: 'Flexible Hiring',
    description: 'Scale your team with project-based or long-term engagements',
    icon: 'carbon:connect',
    color: 'info',
  },
  {
    title: 'Cost-Effective Solutions',
    description: 'Get high-quality work without the overhead costs',
    icon: 'carbon:money',
    color: 'success',
  },
  {
    title: 'Global Talent Pool',
    description: 'Access experts from anywhere in the world',
    icon: 'carbon:globe',
    color: 'warning',
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
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background pattern */}
      <Box 
        component="svg"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          opacity: 0.05,
        }}
      >
        <path
          d="M0,0 L100,0 L100,100 L0,100 Z"
          fill="none"
          stroke={theme.palette.primary.main}
          strokeWidth="0.5"
          strokeDasharray="6 4"
          sx={{
            animation: 'dash 10s linear infinite',
            '@keyframes dash': {
              to: {
                strokeDashoffset: -20,
              },
            },
          }}
        />
        <path
          d="M0,0 L100,0 L100,100 L0,100 Z"
          fill="none"
          stroke={theme.palette.info.main}
          strokeWidth="0.5"
          strokeDasharray="8 4"
          sx={{
            animation: 'dash2 15s linear infinite',
            '@keyframes dash2': {
              to: {
                strokeDashoffset: 24,
              },
            },
          }}
        />
      </Box>

      <Container component={MotionViewport}>
        <Box
          sx={{
            mb: { xs: 8, md: 10 },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{ 
              mb: 3,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.info.main}, ${theme.palette.success.main}, ${theme.palette.warning.main})`,
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              display: 'inline-block',
              position: 'relative',
              animation: 'gradient 15s ease infinite',
              '@keyframes gradient': {
                '0%': {
                  backgroundPosition: '0% 0%',
                },
                '50%': {
                  backgroundPosition: '100% 100%',
                },
                '100%': {
                  backgroundPosition: '0% 0%',
                },
              },
            }}
          >
            Why Choose Us?
          </Typography>

          <Typography 
            variant="subtitle1" 
            sx={{ 
              maxWidth: 600, 
              mx: 'auto',
              color: 'text.secondary',
              fontWeight: 500,
              animation: 'fadeInUp 1s ease-out 0.2s',
              animationFillMode: 'both',
              '@keyframes fadeInUp': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(20px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            Chip Makers Hub offers a unique platform connecting talented VLSI professionals with innovative semiconductor companies.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {reasons.map((reason, index) => (
            <Grid key={reason.title} item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  animation: 'fadeInUp 0.7s ease-out',
                  animationDelay: `${0.3 + index * 0.15}s`,
                  animationFillMode: 'both',
                }}
              >
                <ReasonCard reason={reason} index={index} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function ReasonCard({ reason, index }) {
  const theme = useTheme();
  
  return (
    <Card
      sx={{
        textAlign: 'center',
        height: '100%',
        borderRadius: 3,
        boxShadow: (theme) => theme.customShadows.z8,
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: theme.customShadows.z24,
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          bgcolor: `${reason.color}.main`,
          zIndex: 0,
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
            bgcolor: (theme) => alpha(theme.palette[reason.color].main, 0.08),
            color: `${reason.color}.main`,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: '50%',
              backgroundColor: alpha(theme.palette[reason.color].main, 0.08),
              zIndex: 0,
              animation: 'pulse 3s ease-in-out infinite',
              '@keyframes pulse': {
                '0%': {
                  transform: 'scale(1)',
                  opacity: 0.8,
                },
                '50%': {
                  transform: 'scale(1.2)',
                  opacity: 1,
                },
                '100%': {
                  transform: 'scale(1)',
                  opacity: 0.8,
                },
              },
            },
            '&:hover': {
              '& > *': {
                transform: 'rotate(15deg)',
              },
            },
          }}
        >
          <Iconify 
            icon={reason.icon} 
            width={36} 
            sx={{ 
              position: 'relative', 
              zIndex: 1,
              transition: 'transform 0.3s ease',
            }} 
          />
        </Box>

        <Typography 
          variant="h5" 
          sx={{ 
            mb: 1,
            color: `${reason.color}.darker`,
            fontWeight: 600,
          }}
        >
          ✅ {reason.title}
        </Typography>

        <Typography 
          variant="body2" 
          sx={{ 
            color: 'text.secondary',
            fontSize: '0.95rem',
          }}
        >
          {reason.description}
        </Typography>
      </CardContent>
    </Card>
  );
} 