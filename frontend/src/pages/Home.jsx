import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { API_URL } from "../config";

async function getProducts() {
  const response = await fetch(`${API_URL}/api/products`);
  if (!response.ok) throw new Error(`Error ${response.status}`);
  return response.json();
}

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    const timer = setTimeout(() => {
      loadProducts();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F2EA]">
      <section className="relative flex h-[420px] items-center bg-[url('/images/principal.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="max-w-2xl text-left text-white">
            <h1 className="mb-4 text-5xl font-bold">
              Bienvenidos a Cristabel de Viaje
            </h1>

            <p className="mb-8 text-xl">
              Todo el equipaje que necesitas para llevar a cabo tu próxima
              aventura en la montaña.
            </p>

            <a
              href="#productos"
              className="inline-block rounded-lg bg-[#344A36] px-7 py-3 font-semibold"
            >
              Explorar productos →
            </a>
          </div>
        </div>
      </section>
      <section id="productos" className="bg-[#F5F2EA] py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Encabezado */}
          <div className="mb-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#A66B45]">
              Equípate para la aventura
            </p>

            <h2 className="text-4xl font-bold text-[#344A36]">
              Nuestros productos
            </h2>
          </div>

          {/* Catálogo */}
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="loader"></div>
            </div>
          ) : error ? (
            <p className="text-red-600">
              No se han podido cargar los productos.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
