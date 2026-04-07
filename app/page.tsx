import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden font-sans">
      
      {/* Background visual */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.4)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="relative z-10 max-w-4xl w-full bg-zinc-900/50 backdrop-blur-md border-2 border-zinc-800 p-12 md:p-20 rounded-[3rem] shadow-[20px_20px_0px_rgba(0,0,0,1)]">
        
        <div className="inline-block mb-6 rounded-full bg-blue-600/10 px-4 py-1.5 border border-blue-500/30">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
            Pokédex Interativa
          </span>
        </div>

        <div className="space-y-8">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white leading-[0.85]">
            POKÉ<span className="text-blue-600">DEX</span><span className="text-blue-500">.</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-2xl max-w-lg mx-auto font-medium leading-tight">
            Navegue por todos os Pokémon de um jeito <span className="text-white">rápido e prático</span>.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link
              href="/users"
              className="group relative inline-flex h-16 items-center justify-center rounded-2xl bg-blue-600 px-12 text-xl font-black text-white border-2 border-black shadow-[6px_6px_0px_black] transition-all hover:bg-blue-500 hover:shadow-[3px_3px_0px_black] active:translate-y-1 active:shadow-none"
            >
              Começar
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            <a 
              href="https://pokeapi.co/" 
              target="_blank"
              className="text-zinc-500 hover:text-white text-sm font-black uppercase tracking-widest transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1"
            >
              Ver Documentação da API
            </a>
          </div>
        </div>

        {/* Detalhe visual do Pikachu */}
        <div className="absolute -bottom-10 -right-10 opacity-10 grayscale select-none pointer-events-none">
            <img 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
              alt="" 
              className="w-64 h-64"
            />
        </div>
      </div>

      <footer className="absolute bottom-8 text-zinc-700 text-[10px] font-black uppercase tracking-[0.5em]">
        Desenvolvido com Next.js 15
      </footer>
    </main>
  );
}