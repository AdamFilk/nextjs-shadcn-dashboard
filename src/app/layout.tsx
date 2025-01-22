import type { Metadata } from 'next';
import './globals.css';
import { geistMono, geistSans } from '@/lib/fonts';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { SWRProvider } from '@/components/providers/swr-proivder';
import { AuthProvider } from '@/components/providers/auth-provider';

export const metadata: Metadata = {
  title: 'ShadCN Project',
  description: 'Created by Dannie',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <SWRProvider>{children}</SWRProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
