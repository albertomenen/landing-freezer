import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { UserProvider } from '@auth0/nextjs-auth0/client';


import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav'
import Script from 'next/script'

import { Header, HeaderProps } from './header'
import {
  AnnouncementBanner,
  AnnouncementBannerProps,
} from '../announcement-banner'
import { Footer, FooterProps } from './footer'
import GoogleAnalytics from 'pages/GoogleAnalytics'

interface LayoutProps {
  children: ReactNode
  announcementProps: AnnouncementBannerProps
  headerProps: HeaderProps
  footerProps: FooterProps
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, announcementProps, headerProps, footerProps } = props
  return (
    <Box>
      <SkipNavLink>Skip to content</SkipNavLink>
      <head>

      <html lang="en">
    <UserProvider>
      <body>{children}</body>
    </UserProvider>
    </html>
        {/* <GoogleTagManager containerId='GTM-58WFZW6W'/> */}
       
          <Script
            id="gtm"
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-58WFZW6W');`
            }} 
          ></Script>
         
      </head>
      <AnnouncementBanner {...announcementProps} />
      <Header {...headerProps} />
      <Box as="main">
        <SkipNavContent />
        <GoogleAnalytics />
        {children}
      </Box>
      <Footer {...footerProps} />
    </Box>
  )
}
