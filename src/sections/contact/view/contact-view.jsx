'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import { Iconify } from 'src/components/iconify';

import { ContactHero } from '../contact-hero';
import { ContactForm } from '../contact-form';
import { ContactInfo } from '../contact-info';

// ----------------------------------------------------------------------

export function ContactView() {
  return (
    <>
      <ContactHero />
      <Container component="section" sx={{ py: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <ContactInfo />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
