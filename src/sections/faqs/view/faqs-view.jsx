'use client';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Link from '@mui/material/Link';

import { FaqsHero } from '../faqs-hero';
import { FaqsList } from '../faqs-list';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

// Data from markdown files
const freelancerFaqs = [
  {
    id: 'freelancer-1',
    value: 'panel-freelancer-1',
    heading: 'How do I sign up as a freelancer?',
    detail: 'To sign up as a freelancer, click on the "Sign Up as a Freelancer" button on our homepage, complete your profile with your professional details, skills, and portfolio, and submit for verification. Our team will review your application and guide you through the verification process.',
  },
  {
    id: 'freelancer-2',
    value: 'panel-freelancer-2',
    heading: 'Is there a fee to join as a freelancer?',
    detail: 'Basic registration on ChipMakersHub is free for freelancers. We operate on a commission-based model, taking a percentage only when you successfully complete a project. Premium membership plans with additional benefits are also available.',
  },
  {
    id: 'freelancer-3',
    value: 'panel-freelancer-3',
    heading: 'How does the verification process work?',
    detail: 'Our verification process includes a review of your professional background, portfolio, and skills assessment. Depending on your specialization, this may include technical interviews, reference checks, or skill-specific tests to ensure quality standards.',
  },
  {
    id: 'freelancer-4',
    value: 'panel-freelancer-4',
    heading: 'How do I get paid for my work?',
    detail: 'ChipMakersHub handles all payment processing securely. Clients fund projects in advance, and payments are released based on agreed-upon milestones or project completion. We support multiple payment methods and currencies.',
  },
  {
    id: 'freelancer-5',
    value: 'panel-freelancer-5',
    heading: 'What types of projects can I find on ChipMakersHub?',
    detail: 'Projects range from short-term assignments to long-term engagements across various semiconductor domains. This includes RTL design, verification, physical design, DFT, analog design, embedded systems, and more.',
  },
];

const companyFaqs = [
  {
    id: 'company-1',
    value: 'panel-company-1',
    heading: 'How do I hire a freelancer on ChipMakersHub?',
    detail: 'Register your company, post a detailed project description specifying your requirements, review proposals from qualified freelancers, select the best match, and begin collaboration through our secure platform.',
  },
  {
    id: 'company-2',
    value: 'panel-company-2',
    heading: 'How are freelancers vetted on your platform?',
    detail: 'All freelancers undergo a comprehensive verification process that includes professional background checks, portfolio review, skill assessments, and for certain specializations, technical interviews. Only professionals who meet our quality standards are approved.',
  },
  {
    id: 'company-3',
    value: 'panel-company-3',
    heading: 'What is the pricing structure?',
    detail: 'Companies pay for the agreed project rate plus a service fee. Fees vary based on project size and duration. We offer flexible pricing models including fixed-price projects, hourly rates, or milestone-based payments.',
  },
  {
    id: 'company-4',
    value: 'panel-company-4',
    heading: 'How do you handle intellectual property and confidentiality?',
    detail: 'We provide robust NDA frameworks and secure collaboration tools. All freelancers agree to our confidentiality terms, and additional custom NDAs can be implemented for specific projects. Our platform includes secure file sharing and communication channels.',
  },
  {
    id: 'company-5',
    value: 'panel-company-5',
    heading: 'Can we hire a team of freelancers for a larger project?',
    detail: 'Yes, ChipMakersHub supports team formation for larger projects. You can either assemble your own team from our talent pool or work with our project managers who can help you build the right team for your specific requirements.',
  },
];

const generalFaqs = [
  {
    id: 'general-1',
    value: 'panel-general-1',
    heading: 'What is ChipMakersHub?',
    detail: 'ChipMakersHub is a specialized freelancing platform that connects semiconductor companies with skilled VLSI professionals. We focus exclusively on the semiconductor industry, providing a marketplace for various VLSI domains including RTL design, verification, DFT, physical design, and more.',
  },
  {
    id: 'general-2',
    value: 'panel-general-2',
    heading: 'How is ChipMakersHub different from general freelancing platforms?',
    detail: 'Unlike general freelancing platforms, ChipMakersHub is built specifically for the semiconductor industry. We understand the unique challenges of chip design and verification projects, provide specialized tools for collaboration, and offer a pre-vetted talent pool of verified semiconductor professionals.',
  },
  {
    id: 'general-3',
    value: 'panel-general-3',
    heading: 'Is ChipMakersHub available worldwide?',
    detail: 'Yes, ChipMakersHub is a global platform. We connect semiconductor professionals and companies from around the world, allowing for international collaboration and access to global talent.',
  },
];

// Updated VLSI-specific categories
const CATEGORIES = [
  { 
    label: 'General Questions',
    icon: '/assets/icons/faqs/ic-general.svg',
    tab: 0 
  },
  { 
    label: 'For Freelancers',
    icon: '/assets/icons/faqs/ic-freelancer.svg', 
    tab: 1 
  },
  { 
    label: 'For Companies',
    icon: '/assets/icons/faqs/ic-company.svg', 
    tab: 2 
  },
];

export function FaqsView() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleCategoryClick = (tabIndex) => {
    setCurrentTab(tabIndex);
  };

  return (
    <>
      <FaqsHero />
      <Container component="section" sx={{ pb: 10, position: 'relative', pt: { xs: 10, md: 15 } }}>
        
        {/* Category cards for quick navigation */}
        <Box
          sx={{
            gap: 3,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(3, 1fr)' },
            mb: 5,
          }}
        >
          {CATEGORIES.map((category, index) => (
            <Box
              key={category.label}
              onClick={() => handleCategoryClick(category.tab)}
              sx={{
                p: 3,
                textAlign: 'center',
                borderRadius: 2,
                cursor: 'pointer',
                boxShadow: (theme) => theme.customShadows.z8,
                bgcolor: currentTab === category.tab ? 'primary.lighter' : 'background.paper',
                transition: (theme) => theme.transitions.create('all'),
                '&:hover': {
                  bgcolor: 'primary.lighter',
                },
              }}
            >
              <Box
                component="img"
                src={category.icon}
                alt={category.label}
                sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
              />
              <Typography variant="subtitle1">{category.label}</Typography>
            </Box>
          ))}
        </Box>

        <Typography variant="h3" sx={{ my: { xs: 5, md: 5 } }}>
          Frequently asked questions
        </Typography>

        <Box sx={{ width: '100%', mb: 5 }}>
          <Tabs
            value={currentTab}
            onChange={handleChangeTab}
            sx={{
              mb: 3,
              '& .MuiTabs-flexContainer': {
                justifyContent: { xs: 'center', md: 'flex-start' },
              },
            }}
          >
            <Tab label="General" />
            <Tab label="For Freelancers" />
            <Tab label="For Companies" />
          </Tabs>
        </Box>

        <Box>
          {currentTab === 0 && <FaqsList faqsData={generalFaqs} />}
          {currentTab === 1 && <FaqsList faqsData={freelancerFaqs} />}
          {currentTab === 2 && <FaqsList faqsData={companyFaqs} />}
        </Box>
        
        <Box sx={{ textAlign: 'center', mt: 10 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Still have questions?
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            component={Link} 
            href="/contact"
            startIcon={<Iconify icon="eva:email-fill" />}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </>
  );
}
