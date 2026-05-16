export default function DistroCard({ name, description, architecture, category }) {
  return (
    <div className="bg-[#262626] text-white p-8 border border-[#373737] rounded-none hover:border-[#6699CC] transition-all duration-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-medium">{name}</h3>
        <span className="bg-[rgba(46,150,255,0.2)] text-[#2E96FF] text-xs px-3 py-1 font-medium rounded-none">
          {category}
        </span>
      </div>
      <p className="text-[#707070] text-base leading-6 mb-6">{description}</p>
      <div className="text-xs text-[#808080]">
        Arquitectura: <span className="text-white">{architecture}</span>
      </div>
    </div>
  );
}
