'use client';

import { FileText, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface PhaseDiagnosticProps {
  title: string;
  content: string;
  phase: number;
  onContinue: () => void;
}

export default function PhaseDiagnostic({ title, content, phase, onContinue }: PhaseDiagnosticProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D] flex items-center justify-center p-4 py-12">
      <div className="max-w-4xl w-full">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-[#00FF49]/20 to-transparent p-3 md:p-4 rounded-full border border-[#00FF49]/30">
              <FileText className="w-8 h-8 md:w-10 md:h-10 text-[#00FF49]" />
            </div>
          </div>

          {/* Phase Badge */}
          <div className="flex justify-center mb-4">
            <span className="bg-[#00FF49]/10 text-[#00FF49] px-4 py-2 rounded-full text-xs md:text-sm font-semibold border border-[#00FF49]/30">
              Fase {phase} Concluída
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center mb-6 md:mb-8">
            {title}
          </h2>

          {/* Content */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-8 mb-6 md:mb-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
            <div className="prose prose-invert prose-sm md:prose-base max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-base md:text-lg lg:text-xl font-bold text-[#00FF49] mb-3 md:mb-4 mt-4 md:mt-6">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white mb-2 md:mb-3 mt-3 md:mt-4">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-3 md:mb-4">{children}</p>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-white font-semibold">{children}</strong>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 mb-3 md:mb-4 text-gray-200">{children}</ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-200 text-sm md:text-base">{children}</li>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button
              onClick={onContinue}
              className="group bg-gradient-to-r from-[#00FF49] to-[#00cc3a] text-[#0D0D0D] px-6 md:px-8 py-4 rounded-2xl font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-[#00FF49]/30 transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <span>{phase < 4 ? 'Continuar para Próxima Fase' : 'Finalizar Diagnóstico'}</span>
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
