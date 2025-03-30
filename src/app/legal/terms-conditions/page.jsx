import { CONFIG } from 'src/global-config';
import { LegalView } from 'src/sections/legal/legal-view';


// ----------------------------------------------------------------------

export const metadata = { title: `Terms and Conditions - ${CONFIG.appName}` };

export default function Page() {
  return <LegalView contentType="terms-conditions" />;
} 