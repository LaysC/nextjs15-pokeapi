import Link from "next/link";
import { typeColors, typeTextColors } from "@/app/lib/pokemon-types";

export default async function PokemonProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await response.json();

  const mainType = pokemon.types[0].type.name;
  const cardColor = typeColors[mainType] || 'bg-zinc-800';
  const textColor = typeTextColors[mainType] || 'text-white';
  return (
    <main className={`min-h-screen ${cardColor} p-6 flex flex-col items-center justify-center font-sans`}>
       <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/dark-dot-2.png')]"></div>
       
       <div className="relative z-10 w-full max-w-5xl bg-zinc-950/40 backdrop-blur-xl rounded-[40px] border-2 border-black shadow-[15px_15px_0px_black] overflow-hidden">
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 flex flex-col items-center md:items-start text-center md:text-left">
                <Link href="/users" className="text-white/70 hover:text-white text-sm font-black mb-8">
                   ← Retornar
                </Link>

                <div className="flex flex-col items-center md:items-start w-full gap-4 mb-10">
                    <span className="text-sm font-black text-white/50 uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full">Registro: {id.padStart(3, '0')}</span>
                    <h1 className="text-7xl font-black capitalize text-white tracking-tighter leading-tight">{pokemon.name}</h1>
                </div>

                <div className="flex justify-center md:justify-start gap-3 mb-10">
                    {pokemon.types.map((t: any) => (
                        <span key={t.type.name} className={`${typeColors[t.type.name]} ${typeTextColors[t.type.name]} rounded-full px-5 py-2 text-sm font-black uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_black]`}>
                            {t.type.name}
                        </span>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-center md:flex-row md:justify-start gap-12 w-full">
                    <img 
                        src={pokemon.sprites.other["official-artwork"].front_default} 
                        alt={pokemon.name}
                        className="h-80 w-80 object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)]"
                    />
                </div>
            </div>

            <div className="md:w-1/2 bg-black border-t-2 md:border-t-0 md:border-l-2 border-zinc-900 p-12 space-y-12">
                <div className="grid grid-cols-2 gap-6">
                    <Stat label="Peso" value={`${pokemon.weight / 10}`} unit="kg" />
                    <Stat label="Altura" value={`${pokemon.height / 10}`} unit="m" />
                </div>

                <div className="space-y-4">
                     <p className="text-lg font-black text-zinc-500 tracking-tight">Habilidades</p>
                     <div className="grid grid-cols-2 gap-3">
                        {pokemon.abilities.map((a: any) => (
                            <span key={a.ability.name} className="text-sm font-medium text-white bg-zinc-900 p-4 rounded-xl border border-zinc-800 capitalize shadow-inner">
                                {a.ability.name}
                            </span>
                        ))}
                     </div>
                </div>

                <div className="space-y-6">
                     <p className="text-lg font-black text-zinc-500 tracking-tight">Status de Batalha</p>
                     <div className="space-y-4">
                        {pokemon.stats.map((s: any) => (
                            <BattleStat key={s.stat.name} label={s.stat.name} value={s.base_stat} />
                        ))}
                     </div>
                </div>
            </div>
          </div>

       </div>
    </main>
  );
}

function Stat({ label, value, unit }: { label: string, value: string, unit: string }) {
  return (
    <div className="p-6 bg-zinc-900 rounded-3xl border border-zinc-800 text-center shadow-inner">
      <p className="text-xs font-black uppercase tracking-widest text-zinc-600 mb-1">{label}</p>
      <p className="text-5xl font-black text-white tracking-tight">{value}<span className="text-2xl text-zinc-500 ml-1">{unit}</span></p>
    </div>
  );
}

function BattleStat({ label, value }: { label: string, value: number }) {
  const maxStat = 200;
  const percentage = Math.min((value / maxStat) * 100, 100);

  return (
    <div className="grid grid-cols-[100px_1fr] items-center gap-4">
        <p className="text-sm font-black text-zinc-400 uppercase tracking-wide capitalize text-right">{label}</p>
        <div className="w-full bg-zinc-900 rounded-full h-3 p-1 shadow-inner relative border border-zinc-800">
            <div 
                className="h-full bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.6)] transition-all" 
                style={{ width: `${percentage}%` }}
            ></div>
            <span className="absolute -top-1 right-2 text-[10px] font-black text-white/50">{value}</span>
        </div>
    </div>
  );
}