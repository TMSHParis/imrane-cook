import { recettes, getRecetteBySlug } from "@/data/recettes";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return recettes.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const recette = getRecetteBySlug(slug);
    if (!recette) return { title: "Recette introuvable" };
    return {
      title: `${recette.titre} — Imrane Cook`,
      description: recette.description,
    };
  });
}

export default async function RecetteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recette = getRecetteBySlug(slug);

  if (!recette) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-text-muted">
        <Link href="/" className="hover:text-accent transition-colors">
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <Link href="/recettes" className="hover:text-accent transition-colors">
          Recettes
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text">{recette.titre}</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-8xl block mb-6">{recette.image}</span>
        <span className="inline-block text-xs uppercase tracking-widest text-accent font-medium mb-3">
          {recette.categorie}
        </span>
        <h1
          className="text-4xl sm:text-5xl font-bold mb-2"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          {recette.titre}
        </h1>
        <p
          className="text-warm text-lg font-serif mb-4"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          {recette.titreJp}
        </p>
        <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
          {recette.description}
        </p>
      </div>

      {/* Meta cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        <div className="bg-bg-white rounded-xl p-4 text-center border border-border">
          <p className="text-2xl mb-1">⏱️</p>
          <p className="text-xs text-text-muted uppercase tracking-wide">
            Préparation
          </p>
          <p className="font-bold">{recette.tempsPreparation} min</p>
        </div>
        <div className="bg-bg-white rounded-xl p-4 text-center border border-border">
          <p className="text-2xl mb-1">🔥</p>
          <p className="text-xs text-text-muted uppercase tracking-wide">
            Cuisson
          </p>
          <p className="font-bold">
            {recette.tempsCuisson >= 60
              ? `${Math.floor(recette.tempsCuisson / 60)}h${recette.tempsCuisson % 60 > 0 ? recette.tempsCuisson % 60 : ""}`
              : `${recette.tempsCuisson} min`}
          </p>
        </div>
        <div className="bg-bg-white rounded-xl p-4 text-center border border-border">
          <p className="text-2xl mb-1">📊</p>
          <p className="text-xs text-text-muted uppercase tracking-wide">
            Difficulté
          </p>
          <p className="font-bold">{recette.difficulte}</p>
        </div>
        <div className="bg-bg-white rounded-xl p-4 text-center border border-border">
          <p className="text-2xl mb-1">👥</p>
          <p className="text-xs text-text-muted uppercase tracking-wide">
            Portions
          </p>
          <p className="font-bold">{recette.portions} pers.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Ingredients */}
        <div className="md:col-span-1">
          <div className="bg-bg-white rounded-2xl p-6 border border-border sticky top-24">
            <h2
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              Ingrédients
            </h2>
            <ul className="space-y-3">
              {recette.ingredients.map((ingredient, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                >
                  <span className="text-accent mt-1 text-xs">●</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instructions */}
        <div className="md:col-span-2">
          <h2
            className="text-xl font-bold mb-6"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            Instructions
          </h2>
          <ol className="space-y-6">
            {recette.instructions.map((instruction, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed pt-1">{instruction}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Back link */}
      <div className="text-center mt-16">
        <Link
          href="/recettes"
          className="inline-block border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest transition-all duration-300"
        >
          ← Retour aux recettes
        </Link>
      </div>
    </div>
  );
}
