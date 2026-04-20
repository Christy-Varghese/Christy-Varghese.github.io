import { Inter, Oswald, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import PageLoader from '@/components/PageLoader';
import ScrollIndicator from '@/components/ScrollIndicator';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Christy Varghese — Mamba Mentality in Data & AI',
  description:
    'IT Professional & Data Analyst specializing in AI, AR, and Cybersecurity. 3+ years delivering measurable outcomes. Top 76 globally in Meta SparkAR.',
  keywords: 'data analyst, cybersecurity, AR developer, AI, Christy Varghese, portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${jetbrains.variable}`}
    >
      <body className="bg-mamba-black text-mamba-white antialiased">
        <ThemeProvider>
          <PageLoader />
          <ScrollIndicator />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
