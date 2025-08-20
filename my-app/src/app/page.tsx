export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">Bem-vindo 👋</h1>
        <p className="text-gray-600 mb-4">
          Esta é a tela inicial em <strong>Next.js + TSX</strong>
        </p>
        <a
          href="/about"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Ir para About
        </a>
      </section>
    </main>
  );
}
