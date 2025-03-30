import { CONFIG } from 'src/global-config';
import { CompanyView } from 'src/sections/for-company/company-view';


// ----------------------------------------------------------------------

export const metadata = { title: `About us - ${CONFIG.appName}` };

export default function Page() {
  return <CompanyView />;
}
