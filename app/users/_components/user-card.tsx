import Link from "next/link";

type UserCardProps = {
  id: number;
  name: string;
}

export default function UserCard({ id, name }: UserCardProps) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <Link href={`/users/${id}`} className="group">
      <div className="relative flex flex-col items-center justify-center text-center p-6 bg-zinc-900 rounded-3xl border-2 border-zinc-800 shadow-[8px_8px_0px_rgba(24,24,27,1)] hover:border-blue-700 hover:shadow-[8px_8px_0px_rgba(29,78,216,0.3)] transition-all">
        
        <span className="absolute -top-3 -left-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white border-2 border-black z-10 group-hover:scale-110 transition-transform">
          Nº {id.toString().padStart(3, '0')}
        </span>
        
        <div className="relative h-32 w-32 mb-5 flex items-center justify-center bg-black/30 rounded-full p-4 border border-zinc-800">
           <img 
             src={imageUrl} 
             alt={name} 
             className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_5px_10px_rgba(59,130,246,0.3)]" 
           />
        </div>

        <p className="font-extrabold text-white capitalize text-2xl tracking-tighter mb-4">{name}</p>
        
        <span className="w-full text-center text-xs font-black text-zinc-600 py-3 rounded-lg bg-black border border-zinc-800 group-hover:bg-blue-600 group-hover:text-white group-hover:border-black transition-colors">
          VISUALIZAR DADOS
        </span>
      </div>
    </Link>
  )
}