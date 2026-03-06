import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Imrane Cook",
  description: "Découvrez la philosophie d'Imrane Cook et notre passion pour la cuisine japonaise authentique.",
};

export default function AProposPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1
          className="text-4xl sm:text-5xl font-bold mb-3"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          À propos
        </h1>
        <p className="jp-divider text-warm text-sm">私たちについて</p>
      </div>

      {/* Story */}
      <section className="mb-16">
        <div className="bg-bg-white rounded-2xl p-8 sm:p-12 border border-border">
          <div className="text-center mb-8">
            <span className="text-6xl block mb-4">🍳</span>
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              Notre Histoire
            </h2>
          </div>
          <div className="prose prose-sm max-w-none text-text-muted leading-relaxed space-y-4">
            <p>
              Imrane Cook est né d&apos;une passion profonde pour la cuisine japonaise
              et d&apos;un désir de partager cet art culinaire unique avec le plus
              grand nombre. Chaque recette est le fruit de recherches
              approfondies et d&apos;un profond respect pour les traditions
              ancestrales du Japon.
            </p>
            <p>
              La cuisine japonaise, ou <em>washoku</em> (和食), a été inscrite au
              patrimoine culturel immatériel de l&apos;UNESCO en 2013. Elle se
              distingue par son respect des ingrédients de saison, son équilibre
              des saveurs et son esthétique raffinée.
            </p>
            <p>
              Notre mission est simple : rendre la cuisine japonaise accessible
              à tous, tout en préservant l&apos;authenticité et la finesse qui font
              sa renommée mondiale.
            </p>
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            Les Techniques Essentielles
          </h2>
          <p className="jp-divider text-warm text-sm">基本の技術</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-bg-white rounded-2xl p-6 border border-border">
            <span className="text-3xl block mb-3">🔪</span>
            <h3
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              L&apos;art de la découpe
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              La découpe japonaise (<em>kiri</em>) est un art à part entière.
              Chaque coupe a un nom et une fonction : <em>usuzukuri</em> pour
              les tranches fines, <em>sogizukuri</em> pour les coupes en biais,
              <em>kazari-giri</em> pour les découpes décoratives.
            </p>
          </div>

          <div className="bg-bg-white rounded-2xl p-6 border border-border">
            <span className="text-3xl block mb-3">🍚</span>
            <h3
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              Le riz parfait
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Le riz est l&apos;âme de la cuisine japonaise. Le rinçage, la cuisson
              et l&apos;assaisonnement au vinaigre de riz pour les sushis suivent
              des règles précises transmises de génération en génération.
            </p>
          </div>

          <div className="bg-bg-white rounded-2xl p-6 border border-border">
            <span className="text-3xl block mb-3">🫕</span>
            <h3
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              Le dashi
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Base de nombreux plats japonais, le dashi est un bouillon délicat
              préparé à partir de kombu (algue) et de katsuobushi (bonite
              séchée). C&apos;est la clé de l&apos;umami japonais.
            </p>
          </div>

          <div className="bg-bg-white rounded-2xl p-6 border border-border">
            <span className="text-3xl block mb-3">🎨</span>
            <h3
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              Moritsuke — Le dressage
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              L&apos;art du dressage japonais suit des principes esthétiques
              rigoureux : nombre impair d&apos;éléments, espace vide (<em>ma</em>),
              harmonie des couleurs et des textures. On mange d&apos;abord avec les
              yeux.
            </p>
          </div>
        </div>
      </section>

      {/* Seasons */}
      <section>
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            La Cuisine des Saisons
          </h2>
          <p className="jp-divider text-warm text-sm">四季の料理</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#FCE4EC] rounded-2xl p-6 text-center">
            <span className="text-4xl block mb-2">🌸</span>
            <h3 className="font-bold mb-1" style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}>
              Printemps
            </h3>
            <p className="text-xs text-text-muted">春 — Haru</p>
            <p className="text-xs text-text-muted mt-2">
              Sakura mochi, takenoko, poissons de printemps
            </p>
          </div>
          <div className="bg-[#E8F5E9] rounded-2xl p-6 text-center">
            <span className="text-4xl block mb-2">🌻</span>
            <h3 className="font-bold mb-1" style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}>
              Été
            </h3>
            <p className="text-xs text-text-muted">夏 — Natsu</p>
            <p className="text-xs text-text-muted mt-2">
              Somen froid, unagi, kakigori
            </p>
          </div>
          <div className="bg-[#FFF3E0] rounded-2xl p-6 text-center">
            <span className="text-4xl block mb-2">🍁</span>
            <h3 className="font-bold mb-1" style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}>
              Automne
            </h3>
            <p className="text-xs text-text-muted">秋 — Aki</p>
            <p className="text-xs text-text-muted mt-2">
              Matsutake, sanma, kuri (châtaignes)
            </p>
          </div>
          <div className="bg-[#E3F2FD] rounded-2xl p-6 text-center">
            <span className="text-4xl block mb-2">❄️</span>
            <h3 className="font-bold mb-1" style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}>
              Hiver
            </h3>
            <p className="text-xs text-text-muted">冬 — Fuyu</p>
            <p className="text-xs text-text-muted mt-2">
              Nabe, oden, mochi du Nouvel An
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
