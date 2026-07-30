import React, { useState } from 'react';

export default function App() {
  const [likes, setLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleCopyCommand = () => {
    navigator.clipboard.writeText('docker build -t docker-ec2-app .');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-indigo-50 text-slate-800 flex flex-col justify-between selection:bg-indigo-500 selection:text-white relative overflow-hidden font-sans">
      {/* Background Gradient Blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-500/15 via-purple-400/10 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Navigation Header */}
      <header className="border-b border-slate-200/80 backdrop-blur-md bg-white/80 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 p-[1px] shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                <span className="text-xl">🐳</span>
              </div>
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">
              DockerEC2
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              Docker Ready
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 flex-1 flex flex-col justify-center">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-2">
            <span>✨</span>
            <span>Welcome to Your New Web Application</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Build, Containerize &{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Deploy to EC2
            </span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A sweet and simple React starter styled with Tailwind CSS. Ready to be built into a Docker container and deployed anywhere seamlessly.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={handleLike}
              className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 flex items-center space-x-2 shadow-lg ${
                hasLiked
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-pink-500/25 scale-105'
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-indigo-500/25 hover:scale-[1.02]'
              }`}
            >
              <span>{hasLiked ? '❤️ Liked!' : '🤍 Give a Heart'}</span>
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                {likes}
              </span>
            </button>

            <button
              onClick={handleCopyCommand}
              className="px-6 py-3 rounded-xl font-medium text-sm bg-white hover:bg-slate-50 border border-slate-200/80 text-slate-700 transition-all duration-200 flex items-center space-x-2 shadow-sm"
            >
              <span>{copied ? '✅ Command Copied!' : '📋 Copy Docker Build'}</span>
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 rounded-2xl bg-white/80 border border-slate-200/80 hover:border-indigo-500/40 transition-all duration-300 group hover:shadow-xl hover:shadow-indigo-500/5">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-2xl mb-4 text-indigo-500 group-hover:scale-110 transition-transform">
              ⚛️
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">React 19 + Vite</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Ultra-fast development experience with Hot Module Replacement and modern React features.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 border border-slate-200/80 hover:border-purple-500/40 transition-all duration-300 group hover:shadow-xl hover:shadow-purple-500/5">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-2xl mb-4 text-purple-500 group-hover:scale-110 transition-transform">
              🎨
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Tailwind CSS</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Utility-first CSS styling for quick, beautiful, and completely responsive user interfaces.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 border border-slate-200/80 hover:border-blue-500/40 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-500/5">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-4 text-blue-500 group-hover:scale-110 transition-transform">
              🐳
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Docker Container</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Lightweight multi-stage Docker build served via Nginx for production reliability.
            </p>
          </div>
        </div>

        {/* Command snippet preview box */}
        <div className="mt-12 p-4 rounded-xl bg-white/90 border border-slate-200 font-mono text-xs text-slate-700 max-w-xl mx-auto flex items-center justify-between shadow-inner">
          <div className="flex items-center space-x-3 overflow-x-auto">
            <span className="text-indigo-500">$</span>
            <span>docker build -t docker-ec2-app .</span>
          </div>
          <span className="text-slate-500 text-[10px] uppercase font-sans tracking-wider font-semibold ml-2">
            Terminal
          </span>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 py-6 text-center text-slate-500 text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} DockerEC2 Welcome Page. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-slate-600 text-xs">
            <span className="hover:text-slate-900 transition-colors cursor-pointer">Vite App</span>
            <span>•</span>
            <span className="hover:text-slate-900 transition-colors cursor-pointer">Tailwind v4</span>
            <span>•</span>
            <span className="hover:text-slate-900 transition-colors cursor-pointer">Dockerized</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
