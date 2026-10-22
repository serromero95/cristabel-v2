import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-[#F5F2EA]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <img
            className="h-16 w-auto object-contain"
            src="/images/logoCristabel.png"
            alt="Cristabel de Viaje"
          />
        </div>

        <nav>
          <ul className="flex items-center gap-8 font-medium text-[#344A36]">
            <li>
              <Link to="/" className="hover:text-[#A66B45]">
                Inicio
              </Link>
            </li>
            <li>
              <a href="/#productos" className="hover:text-[#A66B45]">
                Productos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
