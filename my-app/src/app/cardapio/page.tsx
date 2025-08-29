"use client";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

 

export default function Cardapio() { 
  const pratos = [  
    { 
      categoria: "Pizzas", 
      items: [ 
        { nome: "Margherita", descricao: "Molho de tomate, mussarela e manjericão", preco: "R$35", img: "/images/margherita.jpg" }, 
        { nome: "Pepperoni", descricao: "Mussarela, pepperoni e orégano", preco: "R$40", img: "/images/pepperoni.jpg" }, 
        { nome: "Quatro Queijos", descricao: "Mussarela, provolone, gorgonzola e parmesão", preco: "R$42", img: "/images/quatroqueijos.jpg" }, 
      ], 
    }, 
    { 
      categoria: "Massas", 
      items: [ 
        { nome: "Spaghetti à Carbonara", descricao: "Bacon, ovos e parmesão", preco: "R$38", img: "/images/spaghetti.jpg" }, 
        { nome: "Lasanha Bolonhesa", descricao: "Camadas de massa, carne e molho bechamel", preco: "R$45", img: "/images/lasanha.jpg" }, 
      ], 
    }, 
    { 
      categoria: "Sobremesas", 
      items: [ 
        { nome: "Tiramisu", descricao: "Tradicional sobremesa italiana", preco: "R$20", img: "/images/tiramisu.jpg" }, 
        { nome: "Panna Cotta", descricao: "Creme cozido com calda de frutas", preco: "R$18", img: "/images/panna-cotta.jpg" }, 
      ], 
    }, 
  ]; 

  return ( 
    <main className="min-h-screen bg-yellow-50 py-12 px-6"> 
      <h1 className="text-5xl font-bold text-center text-red-700 mb-12"> 
        🍽️ Nosso Cardápio 
      </h1> 

      <div className="max-w-6xl mx-auto grid gap-12"> 
        {pratos.map((categoria) => ( 
          <section key={categoria.categoria}> 
            <h2 className="text-3xl font-semibold text-red-600 mb-6"> 
              {categoria.categoria} 
            </h2> 
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> 
              {categoria.items.map((item) => ( 
                <div 
                  key={item.nome} 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl" 
                > 
                  <img 
                    src={item.img} 
                    alt={item.nome} 
                    width={400} 
                    height={400} 
                    className="w-full h-48 object-cover" 
                  /> 
                  <div className="p-6 text-center"> 
                    <h3 className="text-red-600 text-xl font-bold mb-2">{item.nome}</h3> 
                    <p className="text-gray-600 mb-4">{item.descricao}</p> 
                    <p className="text-red-700 font-semibold text-lg">{item.preco}</p> 
                  </div> 
                </div> 
              ))} 
            </div> 

            
          </section> 
        ))} 
      </div> 
    </main> 
  ); 
} 
