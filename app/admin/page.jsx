'use client';
import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function AdminPanel() {
  const [distroName, setDistroName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('General');
  const [loading, setLoading] = useState(false);

  // Función para auto-cargar información desde la API/Scraper interno
  const handleAutoFetch = async () => {
    if (!distroName) return alert("Introduce el nombre de una distribución (ej: Fedora)");
    setLoading(true);
    try {
      // Llamada a nuestra API interna que busca en internet
      const res = await fetch(`/api/scrape?name=${encodeURIComponent(distroName)}`);
      const data = await res.json();
      
      if (data.description) {
        setDescription(data.description);
        alert("¡Datos recuperados con éxito desde internet!");
      } else {
        alert("No se encontró información detallada, pero puedes rellenarla a mano.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "distros"), {
        name: distroName,
        description,
        category,
        createdAt: new Date()
      });
      alert("Distribución guardada en Firebase Firestore");
      setDistroName('');
      setDescription('');
    } catch (err) {
      alert("Error al guardar: " + err.message);
    }
  };

  return (
    <div className="bg-[#262626] min-h-screen text-white p-12">
      <h1 className="text-4xl font-light mb-8">Panel de Administración</h1>
      
      <form onSubmit={handleSave} className="max-w-xl space-y-6">
        <div>
          <label className="block text-sm font-normal mb-2">Nombre de la Distribución</label>
          <div className="flex gap-4">
            <input 
              type="text" 
              value={distroName} 
              onChange={(e) => setDistroName(e.target.value)}
              className="w-full bg-[#2F2F2F] text-white border border-[#373737] p-3 rounded-none focus:outline-none focus:border-[#6699CC]" 
              placeholder="Ej: Arch Linux"
            />
            <button 
              type="button"
              onClick={handleAutoFetch}
              className="bg-[#2E96FF] text-white px-6 font-normal rounded-none hover:bg-[#0E8420] transition-colors whitespace-nowrap"
            >
              {loading ? 'Buscando...' : 'Autocargar Info'}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-normal mb-2">Descripción Autónoma / Modificable</label>
          <textarea 
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-[#2F2F2F] text-white border border-[#373737] p-3 rounded-none focus:outline-none focus:border-[#6699CC]"
          />
        </div>

        <button 
          type="submit" 
          className="w-full h-14 bg-[#0E8420] text-white font-normal rounded-none hover:bg-[#008013] transition-colors"
        >
          Guardar en Base de Datos
        </button>
      </form>
    </div>
  );
}
