import { FaWhatsapp, FaLinkedin, FaGithub, FaBehance, FaInstagram } from "react-icons/fa";

export default function Contatos() {
  return (
    <section className="min-h-screen w-378 flex flex-col items-center justify-center px-6 py-12 bg-white">
      
      <h2 className="text-3xl font-bold text-center mb-2">
        Contatos <span className="block w-16 h-1 bg-red-900 mx-auto mt-2 rounded"></span>
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Transforme Sua Ideia em Resultados – Vamos Começar Hoje?
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Envie uma mensagem!</h3>
          <form className="space-y-4">
            
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                id="nome"
                type="text"
                placeholder="Seu nome"
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Campo Mensagem */}
            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                placeholder="Sua mensagem..."
                rows={4}
                className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <p className="text-sm text-gray-500 mt-1">Me conte mais como posso te ajudar!</p>
            </div>

            {/* Botão Enviar */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md transition"
            >
              <FaWhatsapp size={18} /> Enviar
            </button>
          </form>
        </div>

        {/* Redes sociais */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Acesse minhas redes:</h3>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/in/nicolas-david-aab005300/"
              className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/NickDavid14"
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-md transition"
            >
              <FaGithub /> Github
            </a>
            <a
              href="https://www.instagram.com/nicolasdavidd__/"
              className="flex items-center justify-center gap-2 bg-pink-400 hover:bg-pink-500 text-white py-2 rounded-md transition"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
