export const metadata = {
  title: 'Jaime',
  icons: {
    icon: '/J-logo.svg', // favicon in public folder
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
