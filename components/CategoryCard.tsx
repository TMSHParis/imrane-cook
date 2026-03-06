import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  image: string;
  nom: string;
  description: string;
  id: string;
}

export default function CategoryCard({ image, nom, description, id }: CategoryCardProps) {
  return (
    <Link
      href={`/recettes?categorie=${id}`}
      className="group block bg-bg-white rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-md"
    >
      <div className="h-28 relative overflow-hidden">
        <Image
          src={image}
          alt={nom}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, 16vw"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-serif text-base font-bold text-text mb-1 group-hover:text-accent transition-colors">
          {nom}
        </h3>
        <p className="text-xs text-text-muted leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}
