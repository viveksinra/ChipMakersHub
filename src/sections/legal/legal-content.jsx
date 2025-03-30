import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function LegalContent({ contentType }) {
  const isPrivacyPolicy = contentType === 'privacy-policy';
  const content = isPrivacyPolicy ? PRIVACY_POLICY_CONTENT : TERMS_CONDITIONS_CONTENT;

  return (
    <Container component={MotionViewport} sx={{ py: { xs: 10, md: 15 } }}>
      <Card sx={{ p: { xs: 3, md: 5 } }}>
        {content.map((section, index) => (
          <Box key={index} sx={{ mb: 5 }}>
            <m.div variants={varFade('inUp')}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                {section.title}
              </Typography>
            </m.div>

            {section.paragraphs.map((paragraph, pIndex) => (
              <m.div key={pIndex} variants={varFade('inUp')}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {paragraph}
                </Typography>
              </m.div>
            ))}

            {section.subsections && (
              <Stack spacing={3} sx={{ mt: 3, pl: 3 }}>
                {section.subsections.map((subsection, sIndex) => (
                  <Box key={sIndex}>
                    <m.div variants={varFade('inUp')}>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {subsection.title}
                      </Typography>
                    </m.div>

                    {subsection.paragraphs.map((paragraph, pIndex) => (
                      <m.div key={pIndex} variants={varFade('inUp')}>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                          {paragraph}
                        </Typography>
                      </m.div>
                    ))}
                  </Box>
                ))}
              </Stack>
            )}

            {section.listItems && (
              <Stack component="ul" spacing={1} sx={{ mt: 3, pl: 4 }}>
                {section.listItems.map((item, lIndex) => (
                  <m.div key={lIndex} variants={varFade('inUp')} component="li">
                    <Typography variant="body1">{item}</Typography>
                  </m.div>
                ))}
              </Stack>
            )}

            {index < content.length - 1 && <Divider sx={{ my: 5 }} />}
          </Box>
        ))}
      </Card>
    </Container>
  );
}

// ----------------------------------------------------------------------

const PRIVACY_POLICY_CONTENT = [
  {
    title: 'Introduction',
    paragraphs: [
      'Welcome to ChipMakersHub. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.',
    ],
  },
  {
    title: '1. Important Information and Who We Are',
    paragraphs: [],
    subsections: [
      {
        title: 'Purpose of This Privacy Policy',
        paragraphs: [
          'This privacy policy aims to give you information on how ChipMakersHub collects and processes your personal data through your use of this website, including any data you may provide through this website when you sign up for our services, subscribe to our newsletter, or participate in our platform.',
        ],
      },
      {
        title: 'Controller',
        paragraphs: [
          'ChipMakersHub Inc. is the controller and responsible for your personal data (collectively referred to as "ChipMakersHub", "we", "us" or "our" in this privacy policy).',
        ],
      },
      {
        title: 'Contact Details',
        paragraphs: [
          '- Full name of legal entity: ChipMakersHub Inc.',
          '- Email address: privacy@chipmakershub.com',
          '- Postal address: 123 Silicon Valley Way, San Jose, CA 95134, United States',
          '- Telephone number: +1 (555) 123-4567',
        ],
      },
    ],
  },
  {
    title: '2. The Data We Collect About You',
    paragraphs: [
      'Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:',
    ],
    listItems: [
      'Identity Data includes first name, last name, username or similar identifier, title, and employment history.',
      'Contact Data includes billing address, delivery address, email address, and telephone numbers.',
      'Professional Data includes your educational background, work history, skills, portfolio, and professional certifications.',
      'Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.',
      'Profile Data includes your username and password, projects you\'ve worked on, client reviews, your interests, preferences, feedback, and survey responses.',
      'Usage Data includes information about how you use our website and services.',
      'Marketing and Communications Data includes your preferences in receiving marketing from us and our third parties and your communication preferences.',
    ],
  },
  {
    title: '3. How We Collect Your Personal Data',
    paragraphs: [
      'We use different methods to collect data from and about you including through:',
    ],
    listItems: [
      'Direct interactions. You may give us your Identity, Contact, and Professional Data by filling in forms or by corresponding with us by mail, phone, email, or otherwise.',
      'Automated technologies or interactions. As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns.',
      'Third parties or publicly available sources. We may receive personal data about you from various third parties and public sources, such as analytics providers, verification services, or professional networking sites.',
    ],
  },
  {
    title: '4. How We Use Your Personal Data',
    paragraphs: [
      'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:',
      'Where we need to perform the contract we are about to enter into or have entered into with you.',
      'Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.',
      'Where we need to comply with a legal obligation.',
    ],
    subsections: [
      {
        title: 'Purposes for Which We Will Use Your Personal Data',
        paragraphs: [
          '- To register you as a new customer',
          '- To process and deliver our services',
          '- To manage our relationship with you',
          '- To enable you to participate in a complete profile on our platform',
          '- To administer and protect our business and this website',
          '- To deliver relevant website content and advertisements to you',
          '- To use data analytics to improve our website, products/services, marketing, customer relationships, and experiences',
        ],
      },
    ],
  },
  {
    title: '5. Data Security',
    paragraphs: [
      'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.',
    ],
  },
  {
    title: '6. Data Retention',
    paragraphs: [
      'We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.',
    ],
  },
  {
    title: '7. Your Legal Rights',
    paragraphs: [
      'Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:',
    ],
    listItems: [
      'Request access to your personal data',
      'Request correction of your personal data',
      'Request erasure of your personal data',
      'Object to processing of your personal data',
      'Request restriction of processing your personal data',
      'Request transfer of your personal data',
      'Right to withdraw consent',
    ],
  },
  {
    title: '8. Changes to the Privacy Policy',
    paragraphs: [
      'We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this privacy policy.',
    ],
  },
  {
    title: '9. Contact Us',
    paragraphs: [
      'If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@chipmakershub.com.',
    ],
  },
];

const TERMS_CONDITIONS_CONTENT = [
  {
    title: 'Introduction',
    paragraphs: [
      'Welcome to ChipMakersHub. These terms and conditions ("Terms") govern your use of our website located at www.chipmakershub.com (the "Service") operated by ChipMakersHub Inc. ("us", "we", or "our").',
      'By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.',
    ],
  },
  {
    title: '1. Accounts',
    paragraphs: [
      'When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.',
      'You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.',
      'You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.',
    ],
  },
  {
    title: '2. Intellectual Property',
    paragraphs: [],
    subsections: [
      {
        title: '2.1 Service Content',
        paragraphs: [
          'Our Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of ChipMakersHub Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.',
        ],
      },
      {
        title: '2.2 User Content',
        paragraphs: [
          'By posting content on the platform, including but not limited to text, designs, projects, code, or other materials ("Content"), you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute your content in connection with the Service.',
        ],
      },
      {
        title: '2.3 Client Projects',
        paragraphs: [
          'For freelancers accepting projects from clients, intellectual property rights for deliverables are governed by the specific project agreements between freelancers and clients. By default, unless otherwise specified in the project agreement, intellectual property rights for work created by freelancers are transferred to the client upon full payment.',
        ],
      },
    ],
  },
  {
    title: '3. Project Agreements',
    paragraphs: [],
    subsections: [
      {
        title: '3.1 Formation of Agreements',
        paragraphs: [
          'When a company posts a project and a freelancer accepts it, they enter into a direct contract with each other. ChipMakersHub provides the platform for these parties to connect but is not a party to any agreements between freelancers and clients.',
        ],
      },
      {
        title: '3.2 Our Role',
        paragraphs: [
          'We act as a facilitator providing a platform for connecting freelancers and companies. We may provide tools to help ensure agreements are fulfilled, but we are not responsible for the performance of either party.',
        ],
      },
      {
        title: '3.3 Payment Processing',
        paragraphs: [
          'We process payments on behalf of freelancers. Companies pay us, and we pay freelancers after deducting our service fee. Payments are subject to our Payment Terms.',
        ],
      },
    ],
  },
  {
    title: '4. Conduct Guidelines',
    paragraphs: [
      'Users of our Service shall not:',
    ],
    listItems: [
      'Use the Service in any way that violates any applicable national or international law or regulation',
      'Engage in any conduct that restricts or inhibits anyone\'s use or enjoyment of the Service',
      'Use the Service to impersonate any person or misrepresent identity or affiliation with any person or organization',
      'Engage in any harassing, abusive, or harmful conduct toward other users',
      'Attempt to gain unauthorized access to our systems or networks',
      'Post false, inaccurate, misleading, deceptive, or fraudulent content',
      'Transmit any material that contains viruses, trojan horses, or any other malicious code',
    ],
  },
  {
    title: '5. Fees and Payments',
    paragraphs: [],
    subsections: [
      {
        title: '5.1 Service Fees',
        paragraphs: [
          'We charge service fees for using our platform. Fees may vary based on the type of service, project size, and other factors. All applicable fees are displayed to you when you use the relevant service.',
        ],
      },
      {
        title: '5.2 Payment Terms',
        paragraphs: [
          'Companies must fund projects before work begins. Payments to freelancers are released according to the milestone schedule or upon project completion as agreed in the project agreement.',
        ],
      },
      {
        title: '5.3 Taxes',
        paragraphs: [
          'Users are responsible for paying all taxes associated with their use of the Service. Freelancers are responsible for reporting and paying any income taxes or other taxes on their earnings from the platform.',
        ],
      },
    ],
  },
  {
    title: '6. Termination',
    paragraphs: [
      'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.',
      'Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.',
    ],
  },
  {
    title: '7. Limitation of Liability',
    paragraphs: [
      'In no event shall ChipMakersHub Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:',
      '- Your use of or inability to use the Service',
      '- Any unauthorized access to or use of our servers and/or any personal information stored therein',
      '- Any interruption or cessation of transmission to or from the Service',
      '- Any bugs, viruses, trojan horses, or the like, which may be transmitted to or through the Service by any third party',
    ],
  },
  {
    title: '8. Governing Law',
    paragraphs: [
      'These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.',
    ],
  },
  {
    title: '9. Changes',
    paragraphs: [
      'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days\' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.',
    ],
  },
  {
    title: '10. Contact Us',
    paragraphs: [
      'If you have any questions about these Terms, please contact us at legal@chipmakershub.com.',
    ],
  },
]; 