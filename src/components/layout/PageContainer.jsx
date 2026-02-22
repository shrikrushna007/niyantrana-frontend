import Navbar from "./Navbar";

export default function PageContainer({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      <main className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
}
