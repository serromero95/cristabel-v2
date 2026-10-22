import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";

function ProductDetail() {
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setProductDetails(null);
    setLoading(true);
    setError(null);

    async function getProductDetails() {
      const response = await fetch(`http://localhost:8080/api/products/${id}`);

      if (response.status === 404) {
        throw new Error("Producto no encontrado");
      }

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      return response.json();
    }

    async function loadProductDetails() {
      try {
        const response = await getProductDetails();
        setProductDetails(response);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    loadProductDetails();
  }, [id]);

  return (
    <main className="min-h-screen bg-[#F5F2EA] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          to="/"
          className="mb-10 inline-block font-medium text-[#344A36] hover:underline"
        >
          ← Volver al catálogo
        </Link>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="loader"></div>
          </div>
        ) : error ? (
          <div className="py-16 text-center text-red-600">{error}</div>
        ) : !productDetails ? (
          <p>Producto no disponible.</p>
        ) : (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Fotografía */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <img
                src={productDetails.imageUrl || "/images/logoCristabel.png"}
                alt={productDetails.name}
                className="h-[450px] w-full object-cover"
              />
            </div>

            {/* Información del producto */}
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#A66B45]">
                Equipamiento de montaña
              </p>

              <h1 className="mb-5 text-4xl font-bold text-[#26342B]">
                {productDetails.name}
              </h1>

              <p className="mb-6 text-3xl font-bold text-[#A66B45]">
                {Number(productDetails.price).toFixed(2)} €
              </p>

              <div className="mb-8 border-t border-stone-300 pt-6">
                <p className="text-lg text-[#344A36]">
                  {productDetails.stock > 0
                    ? `✓ Disponible · ${productDetails.stock} unidades`
                    : "Producto agotado"}
                </p>
              </div>

              <p className="text-gray-600">
                Prepárate para tu próxima aventura con nuestro equipamiento de
                senderismo.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default ProductDetail;
