# ⚡ PokéDex Pro | Next.js 15

Uma enciclopédia Pokémon moderna com design **Neo-Brutalista**, construída para oferecer uma experiência rápida, fluida e visualmente impactante.

🚀 **[Ver Demo Ao Vivo](https://nextjs15-pokeapi.vercel.app/)**

---

## 📸 Preview

![Preview do projeto](./public/preview.png)

> 💡 Dica: você pode substituir por um GIF depois para deixar ainda mais atrativo

---

## ✨ Diferenciais

O projeto utiliza uma estética de alto contraste (**Neo-Brutalismo**), com bordas sólidas e tipografia marcante para reimaginar a interface clássica da Pokédex.

---

## 🚀 Funcionalidades

- 🔍 **Busca em Tempo Real:** Filtre instantaneamente entre os Pokémon  
- 🧭 **Rotas Dinâmicas:** Páginas geradas via \`app/[id]\`  
- 📱 **Design Responsivo:** Mobile, tablet e desktop  
- 🎨 **Cores Dinâmicas:** Baseadas no tipo de cada Pokémon  
- ⚡ **Alta Performance:** Server Components do Next.js 15  

---

## 🛠️ Tecnologias

- **Framework:** Next.js 15 (App Router)  
- **Estilização:** Tailwind CSS  
- **API:** PokéAPI  
- **Deploy:** Vercel  
- **Linguagem:** TypeScript  

---

## 📦 Instalação Local

Clone o repositório:

\`\`\`bash
git clone https://github.com/LaysC/nextjs15-pokeapi.git
cd nextjs15-pokeapi
\`\`\`

Instale as dependências:

\`\`\`bash
npm install
\`\`\`

Inicie o servidor:

\`\`\`bash
npm run dev
\`\`\`

---

## 📐 Estrutura do Projeto

\`\`\`bash
/app
  ├── page.tsx          # Landing Page
  ├── pokemon/          # Lista de Pokémons
  │   ├── page.tsx      # Lógica de busca
  │   ├── [id]/         # Página dinâmica
  │   └── _components/  # Componentes reutilizáveis
\`\`\`

---

