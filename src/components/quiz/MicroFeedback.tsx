'use client';

import { Brain, ArrowRight } from 'lucide-react';

interface MicroFeedbackProps {
  title: string;
  content: string;
  onContinue: () => void;
}

export default function MicroFeedback({ title, content, onContinue }: MicroFeedbackProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D] flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="bg-gradient-to-br from-[#00FF49]/10 to-transparent border border-[#00FF49]/30 rounded-3xl p-6 md:p-12 shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-[#00FF49]/20 p-3 md:p-4 rounded-full">
              <Brain className="w-8 h-8 md:w-10 md:h-10 text-[#00FF49]" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center mb-6">
            {title}
          </h2>

          {/* Content */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-8 mb-6 md:mb-8">
            <p className="text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed whitespace-pre-line">
              {content}
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button
              onClick={onContinue}
              className="group bg-gradient-to-r from-[#00FF49] to-[#00cc3a] text-[#0D0D0D] px-6 md:px-8 py-4 md:py-4 rounded-2xl font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-[#00FF49]/30 transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <span>Continuar Diagnóstico</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
