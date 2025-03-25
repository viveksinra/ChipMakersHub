import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    category: 'Front-End Design & Verification',
    items: [
      { title: 'RTL Design (VHDL, Verilog, SystemVerilog)', icon: 'carbon:code' },
      { title: 'Functional Verification (UVM, OVM, Formal Verification)', icon: 'carbon:checkbox-checked' },
      { title: 'FPGA Design & Prototyping', icon: 'mdi:chip' },
      { title: 'Low Power & High-Performance Design', icon: 'carbon:battery' },
      { title: 'Emulation & Simulation', icon: 'carbon:laptop' },
    ],
  },
  {
    category: 'DFT (Design for Testability)',
    items: [
      { title: 'Scan Insertion & ATPG', icon: 'carbon:chart-evaluation' },
      { title: 'MBIST (Memory Built-In Self-Test)', icon: 'carbon:data-check' },
      { title: 'LBIST (Logic Built-In Self-Test)', icon: 'carbon:data-structured' },
      { title: 'Boundary Scan & JTAG Implementation', icon: 'carbon:data-view-alt' },
      { title: 'Fault Coverage Analysis', icon: 'carbon:chart-area' },
    ],
  },
  {
    category: 'Physical Design & Implementation',
    items: [
      { title: 'Floorplanning & Power Planning', icon: 'carbon:assembly-cluster' },
      { title: 'Placement & Clock Tree Synthesis (CTS)', icon: 'carbon:tree-view' },
      { title: 'Routing & Timing Closure', icon: 'carbon:route' },
      { title: 'IR Drop & Power Analysis', icon: 'carbon:chart-line' },
      { title: 'ECO (Engineering Change Order) Implementation', icon: 'carbon:edit' },
    ],
  },
  {
    category: 'Analog & Mixed-Signal Design',
    items: [
      { title: 'Custom IC Design & Layout', icon: 'carbon:ibm-z' },
      { title: 'Analog Circuit Simulation & Optimization', icon: 'carbon:chart-custom' },
      { title: 'ADC/DAC & Sensor Interface Design', icon: 'carbon:data-format' },
      { title: 'RFIC Design & Verification', icon: 'carbon:radio' },
      { title: 'Power Management ICs', icon: 'carbon:battery-charging' },
    ],
  },
  {
    category: 'FPGA & Embedded Systems',
    items: [
      { title: 'FPGA Prototyping & Development (Xilinx, Intel, Lattice)', icon: 'carbon:chip' },
      { title: 'SoC (System-on-Chip) Design & Integration', icon: 'carbon:ibm-cloud' },
      { title: 'High-Speed Interface Design (PCIe, DDR, Ethernet)', icon: 'carbon:data-center' },
      { title: 'Embedded Software & Firmware Development', icon: 'carbon:terminal' },
    ],
  },
  {
    category: 'Physical Verification & Signoff',
    items: [
      { title: 'DRC (Design Rule Check) & LVS (Layout vs. Schematic)', icon: 'carbon:ruler-alt' },
      { title: 'Parasitic Extraction & Analysis', icon: 'carbon:network-4' },
      { title: 'IR Drop & EM (Electromigration) Analysis', icon: 'carbon:chart-network' },
      { title: 'Signal Integrity & Noise Analysis', icon: 'carbon:chart-line-smooth' },
    ],
  },
  {
    category: 'ASIC Design & Tape-Out',
    items: [
      { title: 'RTL to GDSII Flow', icon: 'carbon:flow' },
      { title: 'Standard Cell & Memory Design', icon: 'carbon:datastore' },
      { title: 'IP Core Development & Integration', icon: 'carbon:data-base' },
      { title: 'PPA (Power, Performance, Area) Optimization', icon: 'carbon:chart-maximum' },
      { title: 'Foundry Tape-Out & Manufacturing Support', icon: 'carbon:industry' },
    ],
  },
  {
    category: 'Semiconductor Consulting & Training',
    items: [
      { title: 'Design Methodology Consulting', icon: 'carbon:book' },
      { title: 'EDA Tool Flow Optimization', icon: 'carbon:tools-alt' },
      { title: 'Training on Advanced VLSI Topics', icon: 'carbon:education' },
      { title: 'Career Guidance for VLSI Professionals', icon: 'carbon:growth' },
    ],
  },
];

// ----------------------------------------------------------------------

export function HomeServices() {
  const theme = useTheme();
  const [currentTab, setCurrentTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Container component={MotionViewport}>
        <Box
          sx={{
            mb: { xs: 8, md: 10 },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{ mb: 3 }}
          >
            Our Services
          </Typography>

          <Typography
            sx={{
              mx: 'auto',
              maxWidth: 800,
              color: 'text.secondary',
            }}
          >
            Chip Makers Hub outlines a comprehensive suite of services, categorized into the following key areas
          </Typography>
        </Box>

        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          sx={{
            mb: 5,
            display: 'flex',
            maxWidth: '100%',
            flexDirection: { xs: 'column', md: 'row' },
            '& .MuiTabs-flexContainer': {
              justifyContent: 'center',
              flexWrap: 'wrap',
            },
          }}
        >
          {SERVICES.map((tab, index) => (
            <Tab
              key={tab.category}
              value={index}
              label={tab.category}
              sx={{
                minWidth: 120,
                '&.Mui-selected': {
                  fontWeight: 'fontWeightSemiBold',
                  color: 'primary.main',
                },
              }}
            />
          ))}
        </Tabs>

        {SERVICES.map((tab, index) => (
          <Box
            key={tab.category}
            sx={{
              display: currentTab === index ? 'block' : 'none',
            }}
          >
            <Grid container spacing={4}>
              {tab.items.map((item) => (
                <Grid key={item.title} item xs={12} sm={6} md={4}>
                  <ServiceCard item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function ServiceCard({ item }) {
  const theme = useTheme();
  
  return (
    <Card
      sx={{
        boxShadow: (theme) => theme.customShadows.z8,
        height: '100%',
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
          transition: theme.transitions.create('box-shadow'),
        },
      }}
    >
      <CardContent
        sx={{
          py: 3,
          px: 3,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            mr: 2,
            p: 1.5,
            borderRadius: '50%',
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
            color: 'primary.main',
          }}
        >
          <Iconify icon={item.icon} width={24} />
        </Box>

        <Typography variant="subtitle1">
          {item.title}
        </Typography>
      </CardContent>
    </Card>
  );
} 