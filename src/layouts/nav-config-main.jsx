import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData = [
  { title: 'Home', path: '/', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  { title: 'About Us', path: paths.about, icon: <Iconify width={22} icon="solar:user-id-bold-duotone" /> },
  { title: 'Contact Us', path: paths.contact, icon: <Iconify width={22} icon="solar:chat-round-dots-bold-duotone" /> },
  {
    title: 'For Members',
    path: '/members',
    icon: <Iconify width={22} icon="solar:users-group-rounded-bold-duotone" />,
    children: [
      {
        subheader: 'User Types',
        items: [
          { title: 'For Freelancers', path: paths.forFreelancers },
          { title: 'For Companies', path: paths.forCompanies },
          { title: 'Join The Hub', path: paths.joinTheHub },
        ],
      },   
    ],
  },
  {
    title: 'Services',
    path: '/services-menu',
    icon: <Iconify width={22} icon="solar:settings-bold-duotone" />,
    children: [
      {
        subheader: 'Our Offerings',
        items: [
          { title: 'Our Services', path: paths.services },
          { title: 'Why Choose Us', path: paths.whyChooseUs },
        ],
      },   
    ],
  },
  {
    title: 'Pages',
    path: '/pages',
    icon: <Iconify width={22} icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: 'Other',
        items: [
          { title: 'FAQs', path: paths.faqs },
          { title: 'Privacy Policy', path: paths.privacyPolicy },
          { title: 'Terms & Conditions', path: paths.termsConditions },
        ],
      },   
    ],
  },
  {
    title: 'Docs',
    icon: <Iconify width={22} icon="solar:notebook-bold-duotone" />,
    path: paths.docs,
  },
];
