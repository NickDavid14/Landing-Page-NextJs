import Link from "next/link";

export default function Header() {
  return (
    <header className="flex py-3 px-6 bg-red-900">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div>
          <img
            className="w-53 h-16 rounded-lg "
            src="/images/Restaurant.png"
            alt="Logo do restaurante"
          />
        </div>

        {/* Navegação */}
        <nav>
          <ul className="flex items-center gap-9 ">
            <li>
              <Link className="text-white text-2xl font-serif hover:text-yellow-500 transition " href="/">
                Início
              </Link>
            </li>
            <li>
              <Link className="text-white text-2xl font-serif hover:text-yellow-500 transition" href="/reservas">
                Reservas
              </Link>
            </li>
            <li>
              <Link className="text-white text-2xl font-serif hover:text-yellow-500 transition" href="/cardapio">
                Cardápio
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
