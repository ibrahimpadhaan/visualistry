import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import { Atom, ArrowRight } from 'lucide-react';

export const Home = () => {
  const { setCurrentPage } = useAppStore();

  return (
    <div className="flex flex-col h-screen w-full bg-slate-950 text-slate-200 font-sans relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      {/* Header */}
      <header className="w-full p-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400">
            <Atom size={28} />
          </div>
          <h1 className="font-bold text-2xl text-slate-100 tracking-tight">Visualistry</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center z-10 px-4 text-center overflow-y-auto py-8 w-full">
        <div className="inline-block p-4 bg-slate-800/30 rounded-full mb-6 border border-slate-700/50 backdrop-blur-sm">
          <Atom size={48} className="text-blue-400" />
        </div>
        <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
          3D Chemical Geometry
        </h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Explore 3D structures.
        </p>
        
        <button 
          onClick={() => setCurrentPage('visualizer')}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:bg-blue-500 shadow-lg shadow-blue-600/30"
        >
          <span className="relative z-10 text-lg">Explore Geometries</span>
          <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
        </button>
      </main>

      {/* Footer */}
      <footer className="w-full p-6 text-center z-10 border-t border-slate-800/50 backdrop-blur-md">
        <p className="text-sm text-slate-500">Made by <span className="text-slate-300 font-semibold">Mohd Ibrahim</span></p>
      </footer>
    </div>
  );
};
