export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans bg-white text-gray-800">{children}</body>
    </html>
  );
}
