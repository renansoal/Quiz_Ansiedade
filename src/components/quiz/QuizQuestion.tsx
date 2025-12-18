'use client';

import { ArrowLeft } from 'lucide-react';
import { DiagnosticQuestion } from '@/lib/quiz-data';

interface QuizQuestionProps {
  question: DiagnosticQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (points: number) => void;
  onBack?: () => void;
}

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onBack,
}: QuizQuestionProps) {
  const progress = (questionNumber / totalQuestions) * 100;

  // Determinar título da fase
  const getPhaseTitle = (phase: number) => {
    switch (phase) {
      case 1:
        return 'Fase 1: Sintomas Atuais';
      case 2:
        return 'Fase 2: Histórico Emocional';
      case 3:
        return 'Fase 3: Impactos Atuais';
      case 4:
        return 'Fase 4: Riscos Futuros';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D] flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-between mb-4">
            {onBack && (
              <button
                onClick={onBack}
                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">Voltar</span>
              </button>
            )}
            <div className="ml-auto text-right">
              <p className="text-[#00FF49] text-xs md:text-sm font-semibold">
                {getPhaseTitle(question.phase)}
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Pergunta {questionNumber} de {totalQuestions}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#00FF49] to-[#00cc3a] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 md:mb-8 leading-relaxed">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-3 md:space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onAnswer(option.points)}
                className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00FF49]/50 rounded-2xl p-4 md:p-6 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#00FF49]/10 group-hover:bg-[#00FF49]/20 border border-[#00FF49]/30 flex items-center justify-center transition-colors duration-300">
                    <span className="text-[#00FF49] font-semibold text-xs md:text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                  <p className="text-white text-sm md:text-base lg:text-lg flex-1 leading-relaxed">
                    {option.text}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Helper Text */}
        <div className="mt-4 md:mt-6 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            💡 Escolha a opção que melhor descreve sua experiência atual
          </p>
        </div>
      </div>
    </div>
  );
}
