import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ContactInfo() {
  return (
    <Card sx={{ p: 3, height: '100%' }}>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Get in Touch with ChipMakersHub
      </Typography>

      <Stack spacing={3}>
        <InfoItem
          icon="solar:phone-bold"
          title="Phone"
          content={['+1 (555) 123-4567']}
        />

        <InfoItem
          icon="solar:mail-bold"
          title="Email"
          content={[
            'contact@chipmakershub.com',
            'freelancer-support@chipmakershub.com',
            'company-support@chipmakershub.com',
          ]}
        />

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Typography variant="h5">Office Locations</Typography>

        <InfoItem
          icon="solar:marker-bold"
          title="Global Headquarters"
          content={['123 Silicon Valley Way', 'San Jose, CA 95134', 'United States']}
        />

        <InfoItem
          icon="solar:marker-bold"
          title="EMEA Office"
          content={['Frankfurter Allee 27', '10247 Berlin', 'Germany']}
        />

        <InfoItem
          icon="solar:marker-bold"
          title="APAC Office"
          content={['10 Anson Road #10-01', 'International Plaza', 'Singapore 079903']}
        />

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Typography variant="h5">Connect With Us</Typography>

        <Stack direction="row" spacing={2}>
          <IconButton color="primary">
            <Iconify icon="mdi:linkedin" width={24} />
          </IconButton>
          <IconButton color="primary">
            <Iconify icon="mdi:twitter" width={24} />
          </IconButton>
          <IconButton color="primary">
            <Iconify icon="mdi:facebook" width={24} />
          </IconButton>
          <IconButton color="primary">
            <Iconify icon="mdi:youtube" width={24} />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
}

// ----------------------------------------------------------------------

function InfoItem({ icon, title, content }) {
  return (
    <Stack spacing={1}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Iconify icon={icon} width={24} sx={{ color: 'primary.main' }} />
        <Typography variant="subtitle2">{title}</Typography>
      </Stack>

      <Stack spacing={0.5} sx={{ pl: 4 }}>
        {content.map((line, index) => (
          <Typography key={index} variant="body2" sx={{ color: 'text.secondary' }}>
            {line}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
} 