import './globals.css';

export const metadata = {
  title: 'Dashboard',
  description: 'Professional dashboard with sidebar and header navigation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
