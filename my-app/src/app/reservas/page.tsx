"use client";
import { useState } from "react";

export default function Reservas() {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [pessoas, setPessoas] = useState(1);
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem(
      `Reserva realizada com sucesso!\nNome: ${nome}\nData: ${data} ${hora}\nPessoas: ${pessoas}`
    );
    setNome("");
    setData("");
    setHora("");
    setPessoas(1);
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-red-700">Faça sua Reserva</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg"
      >
        {/* Nome */}
        <div className="mb-4">
          <label
            htmlFor="nome"
            className="block text-gray-700 font-semibold mb-2"
          >
            Nome:
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNome(e.target.value)
            }
            required
            placeholder="Digite seu nome"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Data */}
        <div className="mb-4">
          <label
            htmlFor="data"
            className="block text-gray-700 font-semibold mb-2"
          >
            Data:
          </label>
          <input
            id="data"
            type="date"
            value={data}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setData(e.target.value)
            }
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Hora */}
        <div className="mb-4">
          <label
            htmlFor="hora"
            className="block text-gray-700 font-semibold mb-2"
          >
            Hora:
          </label>
          <input
            id="hora"
            type="time"
            value={hora}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setHora(e.target.value)
            }
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Número de pessoas */}
        <div className="mb-4">
          <label
            htmlFor="pessoas"
            className="block text-gray-700 font-semibold mb-2"
          >
            Número de pessoas:
          </label>
          <input
            id="pessoas"
            type="number"
            min={1}
            max={20}
            value={pessoas}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPessoas(Number(e.target.value))
            }
            required
            placeholder="Ex: 4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition"
        >
          Reservar
        </button>

        {/* Mensagem de sucesso */}
        {mensagem && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg whitespace-pre-line">
            {mensagem}
          </div>
        )}
      </form>
    </div>
  );
}
