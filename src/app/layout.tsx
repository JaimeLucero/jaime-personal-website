import '../styles/globals.css';

export const metadata = {
  title: 'Jaime Lucero — Full-Stack AI Engineer',
  icons: {
    icon: '/J-logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#0D0D0D]">
      <body>{children}</body>
    </html>
  );
}
