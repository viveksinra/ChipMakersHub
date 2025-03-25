import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ContactForm({ sx, ...other }) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <Card sx={{ p: 3, ...sx }} {...other}>
      <Typography variant="h3" sx={{ mb: 5 }}>
        Send Us a Message
      </Typography>

      {submitted ? (
        <Alert 
          severity="success"
          sx={{ mb: 3 }}
          action={
            <Button 
              color="inherit" 
              size="small"
              onClick={() => setSubmitted(false)}
            >
              Send Another
            </Button>
          }
        >
          Your message has been sent successfully. We'll get back to you soon!
        </Alert>
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <TextField
            required
            fullWidth
            label="Name"
            placeholder="Your full name"
          />
          
          <TextField
            required
            fullWidth
            label="Email"
            placeholder="example@email.com"
            type="email"
          />
          
          <TextField
            fullWidth
            label="Company"
            placeholder="Your company name (if applicable)"
          />
          
          <TextField
            required
            fullWidth
            label="Subject"
            placeholder="What is this regarding?"
          />
          
          <TextField
            required
            fullWidth
            label="Message"
            placeholder="Write your message here..."
            multiline
            rows={4}
          />
          
          <FormControl fullWidth>
            <InputLabel id="how-heard-label">How did you hear about us?</InputLabel>
            <Select
              labelId="how-heard-label"
              label="How did you hear about us?"
              defaultValue=""
            >
              <MenuItem value="">
                <em>Select an option</em>
              </MenuItem>
              <MenuItem value="search">Search Engine</MenuItem>
              <MenuItem value="social">Social Media</MenuItem>
              <MenuItem value="friend">Friend or Colleague</MenuItem>
              <MenuItem value="conference">Conference or Event</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>

          <LoadingButton 
            loading={loading}
            type="submit"
            size="large" 
            variant="contained"
            loadingPosition="start"
            startIcon={<Iconify icon="solar:send-bold" />}
          >
            Submit
          </LoadingButton>
        </Box>
      )}
    </Card>
  );
}
