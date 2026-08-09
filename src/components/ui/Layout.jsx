import React from 'react';
import { Sidebar } from './Sidebar';
import { MetadataPanel } from './MetadataPanel';
import { ControlsToolbar } from './ControlsToolbar';
import { MoleculeCanvas } from '../3d/MoleculeCanvas';

export const Layout = () => {
  return (
    <div className="flex h-screen w-full bg-slate-950 overflow-hidden text-slate-200 font-sans">
      <Sidebar />
      <div className="flex-1 relative h-full flex flex-col">
        <MoleculeCanvas />
        <ControlsToolbar />
      </div>
      <MetadataPanel />
    </div>
  );
};
