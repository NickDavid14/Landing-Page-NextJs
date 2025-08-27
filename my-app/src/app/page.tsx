import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-yellow-50 to-orange-50 flex justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-100% max-h-200 mt-0 bg-amber-100">
        


        <div className="ml-7 space-y-6 mt-50">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            O sabor que vai até <span className="text-red-900">você</span>
          </h1>
          <p className="text-black font-serif text-2xl text-justify">
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
              className="px-6 py-3 border-2 bg-red-900 border-red-900 hover:bg-red-700 rounded-xl font-semibold text-white shadow-md transition"
            >
              Fazer Reserva
            </a>
          </div>
        </div>

        {/* Imagem dos pratos */}
        <div className="relative flex bg-red-900 rounded-es-full h-130 w-150 ml-34">
          <img
            src="/images/pizza.jpg"
            alt="Prato principal"
            className="w-72 h-72 object-cover rounded-full shadow-xl border-8 border-white mt-7 ml-15 hover:scale-105" 
          />  
          <img
            src="/images/spaghetti.jpg"
            alt="Prato extra"
            className="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-white mt-83 mr-0 hover:scale-105"
          />
        </div>
        

        

        
      </div>

      <a
        
        href="https://w.app/e4f6j9"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <img
        src="/images/Wpp.png"
        alt="WhatsApp"
        className="w-8 h-8"
        />
      </a>
    
      
    </main>
  );
}
