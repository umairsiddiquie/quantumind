import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quantumind - A Cognitive Architecture Model',
  description: 'A groundbreaking research initiative and cognitive architecture model that integrates principles from quantum information theory into the study of decision-making, memory, and moral reasoning.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
