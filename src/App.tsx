/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Database, Zap, ExternalLink } from "lucide-react";

export default function App() {
  const apps = [
    {
      name: "Version CONVEX",
      url: "https://evaluation-dcb-convex.vercel.app/",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      color: "from-blue-600 to-indigo-700",
    },
    {
      name: "Version SUPABASE",
      url: "https://eval-famille-dcb-supabase.vercel.app/",
      icon: <Database className="w-8 h-8 text-emerald-400" />,
      color: "from-emerald-600 to-teal-700",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-800 via-blue-900 to-slate-900 flex flex-col items-center justify-between p-6 text-white font-sans overflow-x-hidden">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center px-4"
      >
        {/* Added pb-4 to prevent clipping of descenders (p, g, q) caused by bg-clip-text */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 pb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-100 via-white to-slate-300 leading-tight">
          Applications de gestion des évaluations
        </h1>
      </motion.header>

      {/* Main Content - Simplified Buttons */}
      <main className="flex-1 flex items-center justify-center w-full max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-4">
          {apps.map((app, index) => (
            <motion.a
              key={app.name}
              href={app.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, translateY: -8 }}
              whileTap={{ scale: 0.95 }}
              className={`relative group overflow-hidden rounded-3xl p-10 bg-slate-800/40 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center gap-6 text-center transition-all hover:border-white/30 hover:shadow-blue-500/10`}
            >
              {/* Hover background effect */}
              <div className={`absolute inset-0 bg-linear-to-br ${app.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="p-5 rounded-2xl bg-slate-700/40 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {app.icon}
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <h2 className="text-2xl md:text-3xl font-bold tracking-wide flex items-center gap-3">
                  {app.name}
                  <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
                </h2>
              </div>

              <div className="mt-2 py-2 px-8 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                Ouvrir
              </div>
            </motion.a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mb-10 text-center"
      >
        <p className="text-slate-500 text-[10px] md:text-xs tracking-[0.3em] font-medium uppercase opacity-80">
          Copyright DCB Family - 2026
        </p>
      </motion.footer>
    </div>
  );
}
