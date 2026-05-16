export default function Navbar() {
  return (
    <nav className="bg-[#202020] text-white h-[64px] px-8 flex items-center justify-between border-b border-[#373737]">
      <div className="font-bold text-lg tracking-wide">LINUX_RECOMMENDER</div>
      <div className="flex gap-4 h-full items-center">
        <a href="/" className="hover:text-[#99CCFF] border-b-2 border-transparent hover:border-[#2E96FF] h-full flex items-center px-4 transition-all">Inicio</a>
        <a href="/admin" className="text-[#6699CC] hover:text-[#99CCFF] transition-colors">Admin Panel</a>
      </div>
    </nav>
  );
}
