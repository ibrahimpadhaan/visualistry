import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import { molecules } from '../../data/MoleculeData';
import { Atom } from 'lucide-react';

export const Sidebar = () => {
  const { selectedMoleculeId, setSelectedMoleculeId } = useAppStore();

  return (
    <div className="w-72 flex-shrink-0 bg-slate-900/60 backdrop-blur-xl border-r border-slate-800 flex flex-col h-full overflow-hidden hidden md:flex">
      <div className="p-5 border-b border-slate-800 flex items-center gap-3">
        <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400">
          <Atom size={24} />
        </div>
        <h1 className="font-bold text-xl text-slate-100 tracking-tight">Visualistry</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-2 mt-2">
          VSEPR Geometries
        </div>
        {molecules.map((m) => (
          <button
            key={m.id}
            onClick={() => setSelectedMoleculeId(m.id)}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
              selectedMoleculeId === m.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50'
                : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>
    </div>
  );
};
