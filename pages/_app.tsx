// pages/_app.tsx

import type { AppProps } from "next/app";
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthProvider } from "@saas-ui/auth";
import { SaasProvider } from "@saas-ui/react";
import { Layout } from "components/layout";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const { announcement, header, footer } = pageProps;

  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN!;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!;
  const audience = `https://${domain}/api/v2/`;
  const scope = "read:current_user update:current_user_metadata";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: typeof window !== 'undefined' ? window.location.origin : '',
        audience: audience,
        scope: scope,
      }}
    >
      <SaasProvider theme={theme}>
        <AuthProvider>
          <Layout
            announcementProps={announcement}
            headerProps={header}
            footerProps={footer}
          >
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </SaasProvider>
    </Auth0Provider>
  );
}

export default MyApp;
