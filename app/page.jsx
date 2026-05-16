// app/page.jsx
export default function Home() {
  return (
    <div className="bg-[#262626] min-h-screen text-white p-8">
      {/* Navbar Minimalista */}
      <nav className="h-[64px] border-b border-[#373737] flex items-center justify-between mb-12">
        <span className="font-bold tracking-wide">LINUX_RECOMMENDER</span>
        <a href="/admin" className="text-[#6699CC] hover:text-[#99CCFF] transition-colors">
          Panel Admin →
        </a>
      </nav>

      {/* Header con tipografía limpia estilo Ubuntu */}
      <header className="max-w-4xl mb-12">
        <h1 className="text-4xl font-medium mb-4 leading-[48px]">
          Encuentra tu distribución Linux ideal
        </h1>
        <p className="text-[#808080] text-base leading-6 max-w-2xl">
          Explora sistemas operativos open-source con la información actualizada directamente desde la red.
        </p>
      </header>

      {/* Grid de ejemplo para las tarjetas */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
        <div className="bg-[#2F2F2F] p-8 border border-[#373737] rounded-none hover:border-[#6699CC] transition-all">
          <span className="bg-[rgba(46,150,255,0.2)] text-[#2E96FF] text-xs px-3 py-1 font-medium mb-4 inline-block">
            RECOMENDADA
          </span>
          <h2 className="text-2xl font-medium mb-2">Ubuntu LTS</h2>
          <p className="text-[#808080] text-sm leading-6">
            La distribución más popular para entornos empresariales y desarrolladores que buscan estabilidad a largo plazo.
          </p>
        </div>
      </main>
    </div>
  );
}
