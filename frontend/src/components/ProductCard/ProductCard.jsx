import { Link } from "react-router";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="overflow-hidden bg-[#EAE8DF]">
        <img
          src={product.imageUrl || "/images/logoCristabel.png"}
          alt={product.name}
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-3 text-xl font-semibold text-[#26342B]">
          {product.name}
        </h3>

        <p className="mb-3 text-2xl font-bold text-[#A66B45]">
          {Number(product.price).toFixed(2)} €
        </p>

        <p className="mb-5 text-sm text-gray-500">
          {product.stock > 0
            ? `Disponible · ${product.stock} unidades`
            : "Agotado"}
        </p>

        <span className="mt-auto font-medium text-[#344A36] group-hover:underline">
          Ver producto →
        </span>
      </div>
    </Link>
  );
}