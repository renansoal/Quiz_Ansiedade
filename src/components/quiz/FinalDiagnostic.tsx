'use client';

import { FileCheck, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface FinalDiagnosticProps {
  phase1Content: string;
  phase2Content: string;
  phase3Content: string;
  phase4Content: string;
  totalScore: number;
  userName: string;
  onContinue: () => void;
}

export default function FinalDiagnostic({
  phase1Content,
  phase2Content,
  phase3Content,
  phase4Content,
  totalScore,
  userName,
  onContinue,
}: FinalDiagnosticProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D] flex items-center justify-center p-4 py-12">
      <div className="max-w-5xl w-full">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-[#00FF49]/20 to-transparent p-3 md:p-4 rounded-full border border-[#00FF49]/30">
              <FileCheck className="w-10 h-10 md:w-12 md:h-12 text-[#00FF49]" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
              Seu Diagnóstico Completo, {userName}
            </h2>
            <p className="text-gray-300 text-base md:text-lg">
              Pontuação Total: <span className="text-[#00FF49] font-bold">{totalScore}/75 pontos</span>
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6 md:space-y-8 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2 md:pr-4">
            {/* Phase 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-8">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="bg-[#00FF49]/10 text-[#00FF49] px-2.5 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-[#00FF49]/30">
                  Fase 1
                </span>
                <h3 className="text-base md:text-xl font-bold text-white">Nível de Ansiedade Atual</h3>
              </div>
              <div className="prose prose-invert prose-sm max-w-none">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="text-sm md:text-lg font-bold text-[#00FF49] mb-2 md:mb-3 mt-3 md:mt-4">{children}</h2>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-200 text-xs md:text-base leading-relaxed mb-2 md:mb-3">{children}</p>
                    ),
                    strong: ({ children }) => (
                      <strong className="text-white font-semibold">{children}</strong>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside space-y-1 mb-2 md:mb-3 text-gray-200">{children}</ul>
                    ),
                    li: ({ children }) => (
                      <li className="text-xs md:text-base">{children}</li>
                    ),
                  }}
                >
                  {phase1Content}
                </ReactMarkdown>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-8">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="bg-[#00FF49]/10 text-[#00FF49] px-2.5 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-[#00FF49]/30">
                  Fase 2
                </span>
                <h3 className="text-base md:text-xl font-bold text-white">Raízes Emocionais</h3>
              </div>
              <div className="prose prose-invert prose-sm max-w-none">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="text-sm md:text-lg font-bold text-[#00FF49] mb-2 md:mb-3 mt-3 md:mt-4">{children}</h2>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-200 text-xs md:text-base leading-relaxed mb-2 md:mb-3">{children}</p>
                    ),
                    strong: ({ children }) => (
                      <strong className="text-white font-semibold">{children}</strong>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside space-y-1 mb-2 md:mb-3 text-gray-200">{children}</ul>
                    ),
                    li: ({ children }) => (
                      <li className="text-xs md:text-base">{children}</li>
                    ),
                  }}
                >
                  {phase2Content}
                </ReactMarkdown>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-8">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="bg-[#00FF49]/10 text-[#00FF49] px-2.5 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-[#00FF49]/30">
                  Fase 3
                </span>
                <h3 className="text-base md:text-xl font-bold text-white">Impactos Atuais</h3>
              </div>
              <div className="prose prose-invert prose-sm max-w-none">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="text-sm md:text-lg font-bold text-[#00FF49] mb-2 md:mb-3 mt-3 md:mt-4">{children}</h2>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-200 text-xs md:text-base leading-relaxed mb-2 md:mb-3">{children}</p>
                    ),
                    strong: ({ children }) => (
                      <strong className="text-white font-semibold">{children}</strong>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside space-y-1 mb-2 md:mb-3 text-gray-200">{children}</ul>
                    ),
                    li: ({ children }) => (
                      <li className="text-xs md:text-base">{children}</li>
                    ),
                  }}
                >
                  {phase3Content}
                </ReactMarkdown>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-8">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="bg-[#00FF49]/10 text-[#00FF49] px-2.5 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-[#00FF49]/30">
                  Fase 4
                </span>
                <h3 className="text-base md:text-xl font-bold text-white">Riscos Futuros</h3>
              </div>
              <div className="prose prose-invert prose-sm max-w-none">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="text-sm md:text-lg font-bold text-[#00FF49] mb-2 md:mb-3 mt-3 md:mt-4">{children}</h2>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-200 text-xs md:text-base leading-relaxed mb-2 md:mb-3">{children}</p>
                    ),
                    strong: ({ children }) => (
                      <strong className="text-white font-semibold">{children}</strong>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside space-y-1 mb-2 md:mb-3 text-gray-200">{children}</ul>
                    ),
                    li: ({ children }) => (
                      <li className="text-xs md:text-base">{children}</li>
                    ),
                  }}
                >
                  {phase4Content}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 md:mt-8 flex justify-center">
            <button
              onClick={onContinue}
              className="group bg-gradient-to-r from-[#00FF49] to-[#00cc3a] text-[#0D0D0D] px-6 md:px-8 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-[#00FF49]/30 transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <span>Ver Próximos Passos</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 73, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 255, 73, 0.5);
        }
      `}</style>
    </div>
  );
}
