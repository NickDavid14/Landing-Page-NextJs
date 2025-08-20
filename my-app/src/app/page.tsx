export default function Home() {
  return (
    <main className="min-h-screen bg-white bg-cover bg-center flex items-center justify-center">
      <div className="bg-black/60 backdrop-blur-sm text-white p-10 rounded-2xl shadow-2xl max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-4">🍕 Restaurante Delicious</h1>
        <p className="text-lg mb-6">
          Sinta o sabor da Itália em cada prato. Massas artesanais, pizzas
          assadas no forno à lenha e sobremesas inesquecíveis.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/cardapio"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-semibold shadow-md transition"
          >
            Ver Cardápio
          </a>
          <a
            href="/reservas"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl font-semibold shadow-md transition"
          >
            Fazer Reserva
          </a>
        </div>
      </div>
    </main>
  );
}
