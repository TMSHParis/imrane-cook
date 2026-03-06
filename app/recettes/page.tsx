"use client";

import { useState } from "react";
import { recettes, categories, type Categorie } from "@/data/recettes";
import RecipeCard from "@/components/RecipeCard";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function RecettesContent() {
  const searchParams = useSearchParams();
  const initialCategorie = searchParams.get("categorie") as Categorie | null;
  const [filtre, setFiltre] = useState<Categorie | "toutes">(
    initialCategorie || "toutes"
  );

  const recettesFiltrees =
    filtre === "toutes"
      ? recettes
      : recettes.filter((r) => r.categorie === filtre);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Page header */}
      <div className="text-center mb-12">
        <h1
          className="text-4xl sm:text-5xl font-bold mb-3"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          Nos Recettes
        </h1>
        <p className="jp-divider text-warm text-sm mb-4">レシピ一覧</p>
        <p className="text-text-muted max-w-xl mx-auto">
          Découvrez notre collection de recettes japonaises authentiques,
          des classiques intemporels aux créations modernes.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setFiltre("toutes")}
          className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
            filtre === "toutes"
              ? "bg-accent text-white"
              : "bg-bg-white border border-border text-text-muted hover:border-accent/30"
          }`}
        >
          Toutes
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFiltre(cat.id)}
            className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
              filtre === cat.id
                ? "bg-accent text-white"
                : "bg-bg-white border border-border text-text-muted hover:border-accent/30"
            }`}
          >
            {cat.nom}
          </button>
        ))}
      </div>

      {/* Recipe grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recettesFiltrees.map((recette) => (
          <RecipeCard key={recette.slug} recette={recette} />
        ))}
      </div>

      {recettesFiltrees.length === 0 && (
        <p className="text-center text-text-muted py-12">
          Aucune recette dans cette catégorie pour le moment.
        </p>
      )}
    </div>
  );
}

export default function RecettesPage() {
  return (
    <Suspense>
      <RecettesContent />
    </Suspense>
  );
}
