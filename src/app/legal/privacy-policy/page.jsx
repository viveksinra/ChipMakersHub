import { CONFIG } from 'src/global-config';
import { LegalView } from 'src/sections/legal/legal-view';


// ----------------------------------------------------------------------

export const metadata = { title: `Privacy Policy - ${CONFIG.appName}` };

export default function Page() {
  return <LegalView contentType="privacy-policy" />;
} 