import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex px-2 py-4 bg-red-900 text-black">
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <div className="font-bold text-lg">
          <img className="w-15 h-15" src="/images/Giuseppe.png" alt="Logo do restaurante"  />
        </div>

        <nav>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link className="text-white font-serif w-9 h-9" href="/">Início</Link>
            </li>
            <li>
              <Link className="text-white font-serif" href="/reservas">Reservas</Link>
            </li>
            <li>
              <Link className="text-white font-serif" href="/cardapio">Cardápio</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
