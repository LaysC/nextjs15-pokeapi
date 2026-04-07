import UserCard from "./_components/user-card";

export default async function PokedexPage() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();
  const pokemons = data.results;

  return (
    <main className="min-h-screen bg-zinc-950 p-6 md:p-12 font-sans">
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/dark-dot-2.png')]"></div>
      
      <div className="mx-auto max-w-7xl relative z-10">
  <header className="mb-16 text-center border-b-2 border-zinc-900 pb-10">
    <p className="text-sm font-black text-zinc-600 uppercase tracking-widest">
      Pokédex
    </p>
    <h1 className="text-7xl font-extrabold text-white tracking-tighter mt-1">
      EXPLORAR<span className="text-blue-500">.</span>
    </h1>
    <p className="text-zinc-500 mt-4 text-lg">
      Navegue por todos os Pokémon de um jeito rápido e prático.
    </p>
  </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {pokemons.map((pokemon: any) => {
            const urlParts = pokemon.url.split("/").filter(Boolean);
            const id = urlParts[urlParts.length - 1]; 
            
            return (
              <UserCard 
                key={id} 
                id={Number(id)} 
                name={pokemon.name} 
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}