import { m } from 'framer-motion';

import Box from '@mui/material/Box';

import { varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export function Lines({ strokeCount }) {
  const drawVariants = {
    x: {
      hidden: { x2: 0, strokeOpacity: 0 },
      visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
          x2: '100%',
          strokeOpacity: 1,
          transition: {
            strokeOpacity: { delay, duration: 0.01 },
            x2: { delay, bounce: 0, duration: 1.5, type: 'spring' },
          },
        };
      },
    },
    y: {
      hidden: { y2: 0, strokeOpacity: 0 },
      visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
          y2: '100%',
          strokeOpacity: 1,
          transition: {
            strokeOpacity: { delay, duration: 0.01 },
            y2: { delay, bounce: 0, duration: 1.5, type: 'spring' },
          },
        };
      },
    },
  };

  const translateY = (index) =>
    strokeCount / 2 > index
      ? `translateY(calc(((${index} * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))`
      : `translateY(calc(((${strokeCount - (index + 1)} * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))`;

  const linesX = (
    <>
      {Array.from({ length: strokeCount }, (_, index) => (
        <m.line
          key={index}
          x1="0"
          x2="100%"
          y1="50%"
          y2="50%"
          variants={drawVariants.x}
          style={{
            transform: translateY(index),
            stroke: 'var(--hero-line-stroke-color)',
            strokeDasharray: 'var(--stroke-dasharray)',
            strokeWidth: 'var(--hero-line-stroke-width)',
          }}
        />
      ))}
    </>
  );

  const translateX = (index) =>
    strokeCount / 2 > index
      ? `translateX(calc(((${index} * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))`
      : `translateX(calc(((${strokeCount - (index + 1)} * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))`;

  const linesY = (
    <>
      {Array.from({ length: strokeCount }, (_, index) => (
        <m.line
          key={index}
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
          variants={drawVariants.y}
          style={{
            transform: translateX(index),
            stroke: 'var(--hero-line-stroke-color)',
            strokeDasharray: 'var(--stroke-dasharray)',
            strokeWidth: 'var(--hero-line-stroke-width)',
          }}
        />
      ))}
    </>
  );

  return (
    <>
      {linesX}
      {linesY}
    </>
  );
}

// ----------------------------------------------------------------------

export function Circles() {
  const drawCircle = {
    hidden: { opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return { opacity: 1, transition: { opacity: { delay, duration: 0.01 } } };
    },
  };

  return (
    <>
      <m.path
        variants={drawCircle}
        d="M1 41C1 63.0914 18.9086 81 41 81C63.0914 81 81 63.0914 81 41C81 18.9086 63.0914 1 41 1"
        style={{
          strokeDasharray: 'var(--stroke-dasharray)',
          stroke: 'var(--hero-circle-stroke-color)',
          strokeWidth: 'var(--hero-circle-stroke-width)',
          transform: 'translate(calc(50% - 480px), calc(50% - 80px))',
        }}
      />

      <m.path
        variants={drawCircle}
        d="M1 41C1 63.0914 18.9086 81 41 81C63.0914 81 81 63.0914 81 41C81 18.9086 63.0914 1 41 1"
        style={{
          strokeDasharray: 'var(--stroke-dasharray)',
          stroke: 'var(--hero-circle-stroke-color)',
          strokeWidth: 'var(--hero-circle-stroke-width)',
          transform: 'translate(calc(50% + 400px), calc(50% + 80px))',
        }}
      />

      <m.circle
        cx="50%"
        cy="50%"
        fill="var(--hero-circle-stroke-color)"
        style={{ transform: 'translate(calc(0% - 200px), calc(0% + 200px))' }}
        initial={{ r: 0 }}
        animate={{ r: 5 }}
      />
    </>
  );
}

// ----------------------------------------------------------------------

export function PlusIcon() {
  const drawPlus = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        opacity: 1,
        pathLength: 1,
        transition: {
          opacity: { delay, duration: 0.01 },
          pathLength: { delay, bounce: 0, duration: 1.5, type: 'spring' },
        },
      };
    },
  };

  return (
    <>
      <m.path
        variants={drawPlus}
        d="M8 0V16M16 8.08889H0"
        stroke="var(--hero-plus-stroke-color)"
        style={{ transform: 'translate(calc(50% - 448px), calc(50% - 128px))' }}
      />

      <m.path
        variants={drawPlus}
        d="M8 0V16M16 8.08889H0"
        stroke="var(--hero-plus-stroke-color)"
        style={{ transform: 'translate(calc(50% + 432px), calc(50% + 192px))' }}
      />
    </>
  );
}

// ----------------------------------------------------------------------

export function Texts({ sx, ...other }) {
  return (
    <Box
      component={m.div}
      variants={varFade('in')}
      sx={[
        () => ({
          left: 0,
          width: 1,
          bottom: 0,
          height: 200,
          position: 'absolute',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        component="svg"
        sx={[
          (theme) => ({
            width: 1,
            height: 1,
            '& text': {
              fill: 'none',
              fontSize: 200,
              fontWeight: 800,
              strokeDasharray: 4,
              textTransform: 'uppercase',
              stroke: 'var(--hero-text-stroke-color)',
              strokeWidth: 'var(--hero-text-stroke-width)',
              fontFamily: theme.typography.fontSecondaryFamily,
            },
          }),
        ]}
      >
        <m.text
          x="0"
          y="12px"
          dominantBaseline="hanging"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 64, ease: 'linear', repeat: Infinity }}
        >
          ChipMakersHubDesign System ChipMakersHubDesign System
        </m.text>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

function Dot({ color = 'primary', animate, transition, sx, ...other }) {
  return (
    <Box
      component={m.div}
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.64, ease: [0.43, 0.13, 0.23, 0.96] } },
      }}
      sx={[
        () => ({
          width: 12,
          height: 12,
          top: '50%',
          left: '50%',
          position: 'absolute',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        component={m.div}
        animate={animate}
        transition={
          transition ?? {
            duration: 6,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }
        }
        sx={[
          (theme) => ({
            width: 1,
            height: 1,
            borderRadius: '50%',
            boxShadow: `0px -2px 4px 0px ${theme.vars.palette[color].main} inset`,
            background: `linear-gradient(135deg, ${theme.vars.palette[color].lighter}, ${theme.vars.palette[color].light})`,
            ...theme.applyStyles('dark', {
              boxShadow: `0px -2px 4px 0px ${theme.vars.palette[color].dark} inset`,
            }),
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      />
    </Box>
  );
}

export function Dots() {
  return (
    <>
      <Dot
        color="error"
        animate={{ x: 24 }}
        sx={{ width: 14, height: 14, transform: 'translate(calc(50% - 457px), calc(50% - 259px))' }}
      />

      <Dot
        color="warning"
        animate={{ y: 24 }}
        sx={{ transform: 'translate(calc(50% - 356px), calc(50% + 37px))' }}
      />

      <Dot
        color="info"
        animate={{ x: 24 }}
        sx={{ transform: 'translate(calc(50% + 332px), calc(50% + 135px))' }}
      />

      <Dot
        color="secondary"
        animate={{ x: 24 }}
        sx={{ transform: 'translate(calc(50% + 430px), calc(50% - 160px))' }}
      />

      <Dot
        color="success"
        animate={{ y: 24 }}
        sx={{ transform: 'translate(calc(50% + 136px), calc(50% + 332px))' }}
      />
    </>
  );
}

// ----------------------------------------------------------------------

export function ChipLines() {
  const chipPathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { 
          delay: 0.5 + i * 0.2, 
          duration: 1.5, 
          ease: "easeInOut" 
        },
        opacity: { 
          delay: 0.5 + i * 0.2, 
          duration: 0.2 
        }
      }
    })
  };

  // Data pulse animations for selected paths
  const dataFlowVariants = {
    hidden: { 
      pathOffset: 0,
      opacity: 0 
    },
    visible: (i) => ({
      pathOffset: [0, 1],
      opacity: [0.8, 0],
      transition: {
        pathOffset: { 
          delay: 2 + i * 0.15,
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        },
        opacity: {
          delay: 2 + i * 0.15,
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }
      }
    })
  };

  // Square chip elements animation
  const chipElementVariants = {
    hidden: { 
      opacity: 0,
      scale: 0 
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { 
          delay: 1 + i * 0.15,
          duration: 0.5
        },
        scale: { 
          delay: 1 + i * 0.15,
          duration: 0.5,
          type: "spring"
        }
      }
    })
  };

  // Pulsing glow animation for chip elements
  const pulseVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: (i) => ({
      opacity: [0.4, 0.8, 0.4],
      transition: {
        opacity: { 
          delay: 2 + i * 0.2,
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    })
  };

  // Horizontal and vertical paths representing chip traces
  const chipPaths = [
    // Left side horizontal traces
    "M100,300 L500,300 L550,350 L700,350",
    "M120,400 L450,400 L500,450 L730,450",
    "M150,500 L400,500 L450,550 L650,550",
    "M180,600 L350,600 L420,670 L600,670",
    
    // Right side horizontal traces
    "M740,300 L900,300 L950,350 L1300,350",
    "M750,400 L1050,400 L1100,450 L1320,450",
    "M780,500 L950,500 L1000,550 L1260,550",
    "M800,600 L950,600 L1000,670 L1200,670",
    
    // Center horizontal connectors
    "M650,350 L740,350",
    "M730,450 L750,450",
    "M650,550 L780,550",
    "M600,670 L800,670",
    
    // Left side vertical traces
    "M200,250 L200,650",
    "M300,280 L300,620",
    "M400,300 L400,600",
    "M500,350 L500,550",
    "M600,380 L600,670",
    
    // Right side vertical traces
    "M800,250 L800,650",
    "M900,280 L900,620",
    "M1000,300 L1000,600",
    "M1100,350 L1100,550",
    "M1200,380 L1200,670",
    
    // Connection nodes - left side
    "M200,300 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0",
    "M300,400 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0", 
    "M400,500 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0",
    "M500,400 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0",
    "M600,550 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0",
    
    // Connection nodes - right side
    "M800,300 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0",
    "M900,400 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0", 
    "M1000,500 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0",
    "M1100,400 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0",
    "M1200,550 a10,10 0 1,0 20,0 a10,10 0 1,0 -20,0",
    
    // Corner connections - left side
    "M250,300 L250,350 L300,350",
    "M350,400 L350,450 L400,450",
    "M450,500 L450,400",
    "M550,450 L550,500",
    
    // Corner connections - right side
    "M850,300 L850,350 L900,350",
    "M950,400 L950,450 L1000,450",
    "M1050,500 L1050,400",
    "M1150,450 L1150,500",
    
    // Center connecting traces
    "M650,400 L750,400",
    "M600,500 L800,500",
    "M550,600 L850,600",
  ];

  // Chip square elements (x, y, size)
  const chipElements = [
    // Left side elements
    { x: 220, y: 320, size: 30 },
    { x: 320, y: 380, size: 40 },
    { x: 380, y: 480, size: 25 },
    { x: 480, y: 420, size: 35 },
    { x: 580, y: 500, size: 30 },
    { x: 640, y: 370, size: 25 },
    
    // Center elements
    { x: 720, y: 450, size: 50 },
    { x: 680, y: 550, size: 30 },
    { x: 720, y: 350, size: 35 },
    
    // Right side elements
    { x: 820, y: 320, size: 30 },
    { x: 920, y: 380, size: 40 },
    { x: 980, y: 480, size: 25 },
    { x: 1080, y: 420, size: 35 },
    { x: 1180, y: 500, size: 30 },
    { x: 1240, y: 370, size: 25 },
  ];

  // Connection pads (x, y, width, height)
  const connectionPads = [
    // Left side connectors
    { x: 100, y: 290, width: 20, height: 20 },
    { x: 120, y: 390, width: 20, height: 20 },
    { x: 150, y: 490, width: 20, height: 20 },
    { x: 180, y: 590, width: 20, height: 20 },
    { x: 700, y: 340, width: 20, height: 20 },
    { x: 730, y: 440, width: 20, height: 20 },
    { x: 650, y: 540, width: 20, height: 20 },
    { x: 600, y: 660, width: 20, height: 20 },
    
    // Right side connectors
    { x: 1300, y: 340, width: 20, height: 20 },
    { x: 1320, y: 440, width: 20, height: 20 },
    { x: 1260, y: 540, width: 20, height: 20 },
    { x: 1200, y: 660, width: 20, height: 20 },
  ];

  // Select paths for data flow animation
  const dataFlowPathIndices = [0, 1, 4, 5, 12, 13, 17, 18, 33, 35, 38, 40, 43];

  return (
    <>
      {/* Render chip paths */}
      {chipPaths.map((path, index) => (
        <m.path
          key={`path-${index}`}
          d={path}
          fill="none"
          custom={index}
          variants={chipPathVariants}
          stroke="var(--hero-line-stroke-color)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            filter: "drop-shadow(0 0 3px var(--hero-line-stroke-color))",
          }}
        />
      ))}

      {/* Render connection pads */}
      {connectionPads.map((pad, index) => (
        <m.rect
          key={`pad-${index}`}
          x={pad.x}
          y={pad.y}
          width={pad.width}
          height={pad.height}
          custom={index}
          variants={chipElementVariants}
          fill="var(--hero-line-stroke-color)"
          style={{
            filter: "drop-shadow(0 0 3px var(--hero-line-stroke-color))",
          }}
        />
      ))}

      {/* Render chip square elements */}
      {chipElements.map((element, index) => (
        <m.rect
          key={`element-${index}`}
          x={element.x - element.size/2}
          y={element.y - element.size/2}
          width={element.size}
          height={element.size}
          rx="2"
          custom={index}
          variants={chipElementVariants}
          fill="var(--hero-text-stroke-color)"
          style={{
            filter: "drop-shadow(0 0 4px var(--hero-text-stroke-color))",
          }}
        />
      ))}

      {/* Render pulsing overlays for chip elements */}
      {chipElements.map((element, index) => (
        <m.rect
          key={`pulse-${index}`}
          x={element.x - element.size/2}
          y={element.y - element.size/2}
          width={element.size}
          height={element.size}
          rx="2"
          custom={index}
          variants={pulseVariants}
          fill="var(--hero-circle-stroke-color)"
          style={{
            filter: "drop-shadow(0 0 7px var(--hero-chip-glow-color))",
          }}
        />
      ))}

      {/* Render data flow animations */}
      {dataFlowPathIndices.map((pathIndex, index) => (
        <m.path
          key={`flow-${index}`}
          d={chipPaths[pathIndex]}
          fill="none"
          custom={index}
          variants={dataFlowVariants}
          stroke="var(--hero-circle-stroke-color)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="10 20"
          style={{
            filter: "drop-shadow(0 0 6px var(--hero-chip-glow-color))",
          }}
        />
      ))}

      {/* Add glowing CPU nodes */}
      <m.circle
        cx="400"
        cy="450"
        r="30"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: [0.4, 0.8, 0.4], 
            scale: [0.9, 1.05, 0.9],
            transition: {
              opacity: { duration: 3, repeat: Infinity },
              scale: { duration: 3, repeat: Infinity }
            }
          }
        }}
        fill="var(--hero-circle-stroke-color)"
        style={{
          filter: "drop-shadow(0 0 10px var(--hero-chip-glow-color))",
        }}
      />

      <m.circle
        cx="1000"
        cy="450"
        r="30"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: [0.4, 0.8, 0.4], 
            scale: [0.9, 1.05, 0.9],
            transition: {
              opacity: { duration: 3, repeat: Infinity, delay: 0.5 },
              scale: { duration: 3, repeat: Infinity, delay: 0.5 }
            }
          }
        }}
        fill="var(--hero-circle-stroke-color)"
        style={{
          filter: "drop-shadow(0 0 10px var(--hero-chip-glow-color))",
        }}
      />

      {/* Central connecting chip */}
      <m.circle
        cx="720"
        cy="450"
        r="40"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: [0.5, 0.9, 0.5], 
            scale: [0.95, 1.05, 0.95],
            transition: {
              opacity: { duration: 4, repeat: Infinity },
              scale: { duration: 4, repeat: Infinity }
            }
          }
        }}
        fill="var(--hero-circle-stroke-color)"
        style={{
          filter: "drop-shadow(0 0 12px var(--hero-chip-glow-color))",
        }}
      />
    </>
  );
}
