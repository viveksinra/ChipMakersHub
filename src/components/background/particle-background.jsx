import { Box } from '@mui/material';
import { m } from 'framer-motion';
import { alpha, useTheme } from '@mui/material/styles';

export function ParticleBackground({ count = 20 }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {[...Array(count)].map((_, index) => (
        <m.div
          key={index}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
          style={{
            position: 'absolute',
            width: theme.spacing(index % 3 ? 8 : 12),
            height: theme.spacing(index % 3 ? 8 : 12),
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: alpha(
              index % 2 ? theme.palette.primary.main : theme.palette.success.main,
              0.05
            ),
          }}
        />
      ))}
    </Box>
  );
} 