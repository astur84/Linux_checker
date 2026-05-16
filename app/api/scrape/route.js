import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');

  if (!name) return NextResponse.json({ error: 'Falta el nombre' }, { status: 400 });

  try {
    // Consultamos la API oficial de Wikipedia para extraer el extracto introductorio
    const wikiUrl = `https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`;
    const res = await fetch(wikiUrl);
    
    if (!res.ok) throw new Error('No se encontró en Wikipedia');
    
    const data = await res.json();

    return NextResponse.json({
      description: data.extract || "No hay resumen disponible.",
    });
  } catch (error) {
    return NextResponse.json({ description: '' });
  }
}
