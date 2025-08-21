import Link from "next/link";

export default function Header() {
  return (
    <header className="flex px-2 py-4 bg-red-900 text-black">
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <div className="font-bold text-lg">
          Delicious Restaurant
        </div>

        <nav>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/reservas">Reservas</Link>
            </li>
            <li>
              <Link href="/cardapio">Cardápio</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
