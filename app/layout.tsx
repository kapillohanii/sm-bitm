import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css'
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import './fonts.css'

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body style={{ fontFamily: 'samarkan' }}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}