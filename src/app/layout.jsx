import 'src/global.css';

import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import { CONFIG } from 'src/global-config';
import { primary } from 'src/theme/core/palette';
import { themeConfig, ThemeProvider } from 'src/theme';

import { Snackbar } from 'src/components/snackbar';
import { ProgressBar } from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { SettingsDrawer, defaultSettings, SettingsProvider } from 'src/components/settings';

// import { AuthProvider as JwtAuthProvider } from 'src/auth/context/jwt';
// import { AuthProvider as Auth0AuthProvider } from 'src/auth/context/auth0';

// ----------------------------------------------------------------------

// const AuthProvider = CONFIG.auth.method === 'auth0' ? Auth0AuthProvider : JwtAuthProvider;

// ----------------------------------------------------------------------

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: primary.main,
};

// ----------------------------------------------------------------------

export const metadata = {
  icons: [
    {
      rel: 'icon',
      url: `${CONFIG.assetsDir}/favicon.ico`,
    },
  ],
};

// ----------------------------------------------------------------------

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript
          defaultMode={themeConfig.defaultMode}
          modeStorageKey={themeConfig.modeStorageKey}
          attribute={themeConfig.cssVariables.colorSchemeSelector}
        />

        {/* <AuthProvider> */}
          <SettingsProvider defaultSettings={defaultSettings}>
            <AppRouterCacheProvider options={{ key: 'css' }}>
              <ThemeProvider
                defaultMode={themeConfig.defaultMode}
                modeStorageKey={themeConfig.modeStorageKey}
              >
                <MotionLazy>
                  <Snackbar />
                  <ProgressBar />
                  <SettingsDrawer defaultSettings={defaultSettings} />
                  {children}
                </MotionLazy>
              </ThemeProvider>
            </AppRouterCacheProvider>
          </SettingsProvider>
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
