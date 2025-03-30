import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData = [
  { title: 'Home', path: '/', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  { title: 'About Us', path: paths.about, icon: <Iconify width={22} icon="solar:user-id-bold-duotone" /> },
  { title: 'Contact Us', path: paths.contact, icon: <Iconify width={22} icon="solar:chat-round-dots-bold-duotone" /> },
  { title: 'FAQs', path: paths.faqs, icon: <Iconify width={22} icon="solar:chat-round-dots-bold-duotone" /> },

 

  
];
