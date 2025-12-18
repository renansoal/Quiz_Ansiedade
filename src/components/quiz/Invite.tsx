'use client';

import { MessageCircle, Sparkles } from 'lucide-react';

interface InviteProps {
  userName: string;
  onFinish: () => void;
}

export default function Invite({ userName, onFinish }: InviteProps) {
  const whatsappLink = 'http://wa.me/5511910782623';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D] flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="bg-gradient-to-br from-[#00FF49]/10 to-transparent border border-[#00FF49]/30 rounded-3xl p-6 md:p-12 shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/3c6b8341-ce76-4c2d-b021-c39347936823.png" 
              alt="MindRenew Logo" 
              className="h-8 md:h-10 w-auto"
            />
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00FF49]/20 blur-3xl rounded-full"></div>
              <div className="relative bg-gradient-to-br from-[#00FF49]/20 to-transparent p-3 md:p-4 rounded-full border border-[#00FF49]/30">
                <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-[#00FF49]" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
              Parabéns, {userName}! 🎉
            </h2>
            <p className="text-base md:text-xl text-gray-200 mb-2">
              Você concluiu seu diagnóstico profundo de ansiedade
            </p>
          </div>

          {/* Next Step */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 text-center">
              Próximo Passo: Sessão de Diagnóstico Gratuita
            </h3>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-6 text-center">
              Se você deseja entender a fundo suas respostas, descobrir a causa real da sua ansiedade e mapear seus gatilhos subconscientes, você pode agendar uma <span className="text-[#00FF49] font-semibold">Sessão de Diagnóstico Emocional Gratuita</span> agora.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-[#00FF49] mb-2 text-2xl">🧠</div>
                <p className="text-white text-xs md:text-sm font-semibold mb-1">Análise Profunda</p>
                <p className="text-gray-300 text-xs">Entenda suas respostas em detalhes</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-[#00FF49] mb-2 text-2xl">🎯</div>
                <p className="text-white text-xs md:text-sm font-semibold mb-1">Gatilhos Mapeados</p>
                <p className="text-gray-300 text-xs">Identifique padrões subconscientes</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-[#00FF49] mb-2 text-2xl">💡</div>
                <p className="text-white text-xs md:text-sm font-semibold mb-1">Plano Personalizado</p>
                <p className="text-gray-300 text-xs">Primeiros passos para transformação</p>
              </div>
            </div>

            {/* CTA WhatsApp */}
            <div className="space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full bg-gradient-to-r from-[#00FF49] to-[#00cc3a] text-[#0D0D0D] py-5 md:py-6 rounded-2xl font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-[#00FF49]/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                <span>Agendar via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Alternative */}
          <div className="text-center">
            <p className="text-gray-300 mb-4 text-sm md:text-base">Prefere fazer isso depois?</p>
            <button
              onClick={onFinish}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-xs md:text-sm underline"
            >
              Voltar ao início
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
