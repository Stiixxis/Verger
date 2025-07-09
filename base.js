// Template Next.js (App Router) pour un site vitrine de verger de pommiers et pêchers
// ❄️ Basé sur create-next-app avec App Router, Tailwind CSS, pages: Accueil, Verger, Contact

// Structure:
// - /app/page.tsx              => Accueil
// - /app/verger/page.tsx       => Page "Notre Verger"
// - /app/contact/page.tsx      => Page de contact
// - /components/Header.tsx     => En-tête
// - /components/Footer.tsx     => Pied de page
// - /app/globals.css           => Style global via Tailwind

// Crée avec :
// npx create-next-app@latest verger-site --app --ts --tailwind

/* === app/layout.tsx === */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-800 font-sans">
        <main>{children}</main>
      </body>
    </html>
  );
}

/* === app/page.tsx (Accueil) === */
export default function HomePage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">Bienvenue au Verger des Pommes & Pêches</h1>
      <p className="mb-6">Nous cultivons des pommes et des pêches en agriculture raisonnée depuis 3 générations dans le Sud-Ouest.</p>
      <a href="/verger" className="text-blue-600 hover:underline">Découvrir notre verger</a>
    </div>
  );
}

/* === app/verger/page.tsx === */
export default function VergerPage() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold mb-4">Notre Verger</h2>
      <p className="mb-4">Sur 10 hectares, nous cultivons différentes variétés de pommiers et pêchers. Nos arbres sont bichonnés toute l'année.</p>
      <ul className="list-disc list-inside">
        <li>Pommes : Gala, Golden, Reine des Reinettes</li>
        <li>Pêches : jaunes, blanches et de vigne</li>
      </ul>
    </div>
  );
}

/* === app/contact/page.tsx === */
export default function ContactPage() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold mb-4">Nous contacter</h2>
      <p>Adresse : 123 chemin du Verger, 31000 Toulouse</p>
      <p>Tél : 06 00 00 00 00</p>
      <p>Email : contact@vergerpommierpecher.fr</p>
    </div>
  );
}

/* === components/Header.tsx === */
export default function Header() {
  return (
    <header className="bg-green-100 p-4 flex justify-between">
      <h1 className="text-xl font-bold">Verger Pommes & Pêches</h1>
      <nav className="space-x-4">
        <a href="/" className="hover:underline">Accueil</a>
        <a href="/verger" className="hover:underline">Verger</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}

/* === components/Footer.tsx === */
export default function Footer() {
  return (
    <footer className="bg-gray-100 p-4 text-center text-sm mt-10">
      &copy; {new Date().getFullYear()} Verger des Pommes & Pêches. Tous droits réservés.
    </footer>
  );
}

/* === app/globals.css (extrait) === */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-white text-gray-900;
}
