import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-text text-bg py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">Imrane Cook</h3>
            <p className="text-bg-surface text-sm leading-relaxed">
              L&apos;art de la cuisine japonaise, des recettes authentiques
              préparées avec passion et respect des traditions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest mb-4 text-warm-light">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Accueil" },
                { href: "/recettes", label: "Recettes" },
                { href: "/a-propos", label: "À propos" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-bg-surface hover:text-bg transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest mb-4 text-warm-light">
              Catégories
            </h4>
            <ul className="space-y-2 text-sm text-bg-surface">
              <li>🍣 Sushi</li>
              <li>🍜 Ramen</li>
              <li>🍤 Tempura</li>
              <li>🍡 Wagashi</li>
              <li>🍢 Yakitori</li>
              <li>🍚 Donburi</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm mt-10 pt-6 text-center text-bg-surface text-xs">
          <p>&copy; {new Date().getFullYear()} Imrane Cook — Tous droits réservés</p>
          <p className="mt-1 font-serif text-warm-light">
            和食の美 — La beauté de la cuisine japonaise
          </p>
        </div>
      </div>
    </footer>
  );
}
