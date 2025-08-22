export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-yellow-50 to-orange-50 flex justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-6xl relative mt-0">
        
        
        <div className="space-y-6 mt-20 bg-amber-50">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            O sabor que vai até <span className="text-red-900">você</span>
          </h1>
          <p className="text-gray-700 text-lg">
            Sinta o sabor da Itália em cada prato. Massas artesanais, pizzas
            assadas no forno à lenha e sobremesas inesquecíveis.
          </p>
          
          <div className="flex gap-4 flex-wrap">
            <a
              href="/cardapio"
              className="px-6 py-3 bg-red-900 hover:bg-red-700 text-white rounded-xl font-semibold shadow-md transition"
            >
              Ver Cardápio
            </a>
            <a
              href="/reservas"
              className="px-6 py-3 border-2 border-red-900 hover:bg-red-900 rounded-xl font-semibold text-black shadow-md transition"
            >
              Fazer Reserva
            </a>
          </div>

          {/* Contatos */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://w.app/e4f6j9"
              className="p-3 bg-white shadow rounded-full hover:bg-gray-100 transition"
            >
              📱
            </a>
            
            
          </div>
        </div>

        {/* Imagem dos pratos */}
        <div className="relative flex  bg-red-900 w-183 h-140 rounded-es-full ">
          <img
            src="/images/pizza.jpg"
            alt="Prato principal"
            className="w-72 h-72 object-cover rounded-full shadow-xl border-8 border-white mt-20 ml-20" 
          />
          <img
            src="/images/spaghetti.jpg"
            alt="Prato extra"
            className="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-white mt-83"
          />
        </div>
      </div>
    </main>
  );
}
