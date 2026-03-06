import Link from "next/link";

interface CategoryCardProps {
  emoji: string;
  nom: string;
  description: string;
  id: string;
}

export default function CategoryCard({ emoji, nom, description, id }: CategoryCardProps) {
  return (
    <Link
      href={`/recettes?categorie=${id}`}
      className="group block bg-bg-white rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-md text-center"
    >
      <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform duration-300">
        {emoji}
      </span>
      <h3 className="font-serif text-lg font-bold text-text mb-1 group-hover:text-accent transition-colors">
        {nom}
      </h3>
      <p className="text-xs text-text-muted leading-relaxed">{description}</p>
    </Link>
  );
}
