import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-yellow-50 to-orange-50 flex flex-col items-center justify-center px-6 py-12">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">
        
        
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            O sabor que vai até <span className="text-red-900">você</span>
          </h1>
          <p className="text-black font-serif text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Sinta o sabor da Itália em cada prato. Massas artesanais, pizzas
            assadas no forno à lenha e sobremesas inesquecíveis.
          </p>
          
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="/cardapio"
              className="px-6 py-3 bg-red-900 hover:bg-red-700 text-white rounded-xl font-semibold shadow-md transition"
            >
              Ver Cardápio
            </a>
            <a
              href="/reservas"
              className="px-6 py-3 border-2 border-red-900 bg-red-900 hover:bg-red-700 text-white rounded-xl font-semibold shadow-md transition"
            >
              Fazer Reserva
            </a>
          </div>
        </div>

        
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px]">
            <Image
              src="/images/pizza.jpg"
              alt="Prato principal"
              fill
              className="object-cover rounded-full shadow-xl border-8 border-white hover:scale-105 transition"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px]">
            <Image
              src="/images/spaghetti.jpg"
              alt="Prato extra"
              fill
              className="object-cover rounded-full shadow-lg border-4 border-white hover:scale-105 transition"
            />
          </div>
        </div>
      </div>

      
      <div className="w-full mt-16">
        <div className="h-[200px] sm:h-[300px] lg:h-[400px] bg-[url('/images/tiramisu.jpg')] bg-cover bg-center rounded-2xl brightness-30"></div>
      </div>

      

      
      <a
        href="https://w.app/e4f6j9"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <Image src="/images/Wpp.png" alt="WhatsApp" width={32} height={32} />
      </a>
    </main>
  );
}
