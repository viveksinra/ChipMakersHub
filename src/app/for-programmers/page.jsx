import { CONFIG } from 'src/global-config';
import { ProgrammerView } from 'src/sections/for-programmer/programmer-view';


// ----------------------------------------------------------------------

export const metadata = { title: `About us - ${CONFIG.appName}` };

export default function Page() {
  return <ProgrammerView />;
}
