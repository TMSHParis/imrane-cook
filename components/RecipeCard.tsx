import Link from "next/link";
import type { Recette } from "@/data/recettes";

export default function RecipeCard({ recette }: { recette: Recette }) {
  return (
    <Link href={`/recettes/${recette.slug}`} className="group block">
      <div className="bg-bg-white rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        {/* Image placeholder */}
        <div className="h-48 bg-bg-surface flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
          {recette.image}
        </div>

        <div className="p-5">
          {/* Category badge */}
          <span className="inline-block text-xs uppercase tracking-widest text-accent font-medium mb-2">
            {recette.categorie}
          </span>

          {/* Title */}
          <h3 className="font-serif text-lg font-bold text-text mb-1 group-hover:text-accent transition-colors">
            {recette.titre}
          </h3>
          <p className="text-xs text-warm font-serif mb-3">{recette.titreJp}</p>

          {/* Description */}
          <p className="text-sm text-text-muted leading-relaxed line-clamp-2 mb-4">
            {recette.description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-text-muted border-t border-border pt-3">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {recette.tempsPreparation + recette.tempsCuisson} min
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {recette.difficulte}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {recette.portions} pers.
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
