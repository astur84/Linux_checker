import './globals.css'; // Aquí es donde Tailwind cargará sus estilos

export const metadata = {
  title: 'Linux Recommender',
  description: 'Encuentra tu distribución Linux ideal con el estilo de Ubuntu',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[#262626] text-white antialiased m-0 p-0">
        {children}
      </body>
    </html>
  );
}
