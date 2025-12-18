'use client';

import { Sparkles } from 'lucide-react';

interface QuizIntroProps {
  onStart: () => void;
}

export default function QuizIntro({ onStart }: QuizIntroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3c6b8341-ce76-4c2d-b021-c39347936823.png" 
              alt="MindRenew Logo" 
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Title */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Diagnóstico Profundo
              <span className="block text-[#00FF49] mt-2">de Ansiedade</span>
            </h1>
            <p className="text-base md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed px-4">
              Uma jornada de autoconhecimento baseada em neurociência e reprogramação do subconsciente
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 hover:border-[#00FF49]/30 transition-all duration-300">
              <div className="text-[#00FF49] mb-3">
                <Sparkles className="w-7 h-7 md:w-8 md:h-8 mx-auto" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm md:text-base">Análise Profunda</h3>
              <p className="text-gray-300 text-xs md:text-sm">
                Identifique as raízes emocionais da sua ansiedade
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 hover:border-[#00FF49]/30 transition-all duration-300">
              <div className="text-[#00FF49] mb-3">
                <Sparkles className="w-7 h-7 md:w-8 md:h-8 mx-auto" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm md:text-base">Neurociência</h3>
              <p className="text-gray-300 text-xs md:text-sm">
                Entenda como seu cérebro processa a ansiedade
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 hover:border-[#00FF49]/30 transition-all duration-300">
              <div className="text-[#00FF49] mb-3">
                <Sparkles className="w-7 h-7 md:w-8 md:h-8 mx-auto" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm md:text-base">Diagnóstico Completo</h3>
              <p className="text-gray-300 text-xs md:text-sm">
                Receba um relatório personalizado ao final
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-3 md:space-y-4 pt-4">
            <button
              onClick={onStart}
              className="group relative bg-gradient-to-r from-[#00FF49] to-[#00cc3a] text-[#0D0D0D] px-10 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-[#00FF49]/30 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Iniciar Diagnóstico</span>
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <p className="text-gray-400 text-xs md:text-sm">
              ⏱️ Tempo estimado: 5-7 minutos
            </p>
          </div>

          {/* Trust */}
          <div className="pt-6 md:pt-8 border-t border-white/10">
            <p className="text-gray-300 text-xs md:text-sm px-4">
              🔒 Suas respostas são confidenciais e serão usadas apenas para gerar seu diagnóstico personalizado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
