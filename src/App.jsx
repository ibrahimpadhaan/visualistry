import React from 'react';
import { Layout } from './components/ui/Layout';
import { Home } from './components/ui/Home';
import { useAppStore } from './store/useAppStore';

function App() {
  const currentPage = useAppStore((state) => state.currentPage);

  return (
    <div className="w-full h-screen overflow-hidden bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      {currentPage === 'home' ? <Home /> : <Layout />}
    </div>
  );
}

export default App;
