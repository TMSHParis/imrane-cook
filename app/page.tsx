import Link from "next/link";
import { categories, getRecettesVedettes } from "@/data/recettes";
import CategoryCard from "@/components/CategoryCard";
import RecipeCard from "@/components/RecipeCard";

export default function Home() {
  const vedettes = getRecettesVedettes();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-text text-bg overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">🏯</div>
          <div className="absolute top-20 right-20 text-6xl">🌸</div>
          <div className="absolute bottom-10 left-1/3 text-7xl">🎋</div>
          <div className="absolute bottom-20 right-10 text-5xl">⛩️</div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-36 relative z-10 text-center">
          <p className="text-warm-light tracking-[0.3em] uppercase text-sm mb-6">
            和食の美 — L&apos;art culinaire japonais
          </p>
          <h1
            className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            Imrane Cook
          </h1>
          <p className="text-lg sm:text-xl text-bg-surface max-w-2xl mx-auto mb-10 leading-relaxed">
            Explorez les saveurs authentiques du Japon. Des recettes
            traditionnelles préparées avec passion, du sushi délicat au ramen
            réconfortant.
          </p>
          <Link
            href="/recettes"
            className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-colors duration-300"
          >
            Découvrir nos recettes
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            Nos Catégories
          </h2>
          <p className="jp-divider text-warm text-sm">料理のカテゴリー</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </div>
      </section>

      {/* Featured recipes */}
      <section className="bg-bg-surface py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              À la Une
            </h2>
            <p className="jp-divider text-warm text-sm">おすすめレシピ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vedettes.map((recette) => (
              <RecipeCard key={recette.slug} recette={recette} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/recettes"
              className="inline-block border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest transition-all duration-300"
            >
              Toutes les recettes
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-3"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          Notre Philosophie
        </h2>
        <p className="jp-divider text-warm text-sm mb-10">食の哲学</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <span className="text-4xl block mb-4">🍃</span>
            <h3
              className="font-bold text-lg mb-2"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              Saisonnalité
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Chaque saison apporte ses ingrédients. Nous respectons le cycle
              naturel pour des plats au sommet de leur saveur.
            </p>
          </div>
          <div className="p-6">
            <span className="text-4xl block mb-4">✨</span>
            <h3
              className="font-bold text-lg mb-2"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              Umami
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              La cinquième saveur, au cœur de la cuisine japonaise. Le dashi, le
              miso et la sauce soja en sont les piliers.
            </p>
          </div>
          <div className="p-6">
            <span className="text-4xl block mb-4">🎨</span>
            <h3
              className="font-bold text-lg mb-2"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              Présentation
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              On mange d&apos;abord avec les yeux. L&apos;art du dressage est aussi
              important que le goût dans la tradition japonaise.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
