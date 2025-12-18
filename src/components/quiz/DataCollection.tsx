'use client';

import { useState } from 'react';
import { Mail, User, Phone, DollarSign, Send, Briefcase } from 'lucide-react';
import { UserData } from '@/lib/types';
import { investmentOptions } from '@/lib/quiz-data';

interface DataCollectionProps {
  onSubmit: (data: UserData) => void;
}

export default function DataCollection({ onSubmit }: DataCollectionProps) {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    email: '',
    whatsapp: '',
    profession: '',
    investment: '',
  });

  const [errors, setErrors] = useState<Partial<UserData>>({});

  const validateForm = () => {
    const newErrors: Partial<UserData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp é obrigatório';
    } else if (!/^\d{10,11}$/.test(formData.whatsapp.replace(/\D/g, ''))) {
      newErrors.whatsapp = 'WhatsApp inválido (apenas números)';
    }

    if (!formData.profession?.trim()) {
      newErrors.profession = 'Profissão é obrigatória';
    }

    if (!formData.investment) {
      newErrors.investment = 'Selecione uma opção';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleWhatsAppChange = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    setFormData({ ...formData, whatsapp: numbers });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D] flex items-center justify-center p-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-[#00FF49]/20 to-transparent p-3 md:p-4 rounded-full border border-[#00FF49]/30">
                <Mail className="w-8 h-8 md:w-10 md:h-10 text-[#00FF49]" />
              </div>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
              Receba Seu Diagnóstico Completo
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Você receberá seu diagnóstico completo na próxima tela, incluindo mapa de gatilhos emocionais, possíveis causas subconscientes, pontos de vulnerabilidade e primeiras recomendações práticas.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            {/* Name */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm md:text-base">
                Nome Completo
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 md:pl-12 pr-4 py-3 md:py-4 text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:border-[#00FF49]/50 transition-colors duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
              {errors.name && (
                <p className="text-red-400 text-xs md:text-sm mt-2">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm md:text-base">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 md:pl-12 pr-4 py-3 md:py-4 text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:border-[#00FF49]/50 transition-colors duration-300"
                  placeholder="seu@email.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-xs md:text-sm mt-2">{errors.email}</p>
              )}
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm md:text-base">
                WhatsApp
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                <input
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => handleWhatsAppChange(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 md:pl-12 pr-4 py-3 md:py-4 text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:border-[#00FF49]/50 transition-colors duration-300"
                  placeholder="11999999999"
                  maxLength={11}
                />
              </div>
              {errors.whatsapp && (
                <p className="text-red-400 text-xs md:text-sm mt-2">{errors.whatsapp}</p>
              )}
              <p className="text-gray-400 text-xs mt-2">Apenas números (DDD + número)</p>
            </div>

            {/* Profession */}
            <div>
              <label className="block text-white font-semibold mb-2 text-sm md:text-base">
                Profissão
              </label>
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.profession || ''}
                  onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 md:pl-12 pr-4 py-3 md:py-4 text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:border-[#00FF49]/50 transition-colors duration-300"
                  placeholder="O que você trabalha atualmente?"
                />
              </div>
              {errors.profession && (
                <p className="text-red-400 text-xs md:text-sm mt-2">{errors.profession}</p>
              )}
            </div>

            {/* Investment */}
            <div>
              <label className="block text-white font-semibold mb-3 text-sm md:text-base">
                <DollarSign className="inline w-4 h-4 md:w-5 md:h-5 mr-2 text-[#00FF49]" />
                Disposição de Investimento
              </label>
              <p className="text-gray-300 text-xs md:text-sm mb-4">
                Se você encontrasse um método capaz de eliminar suas crises de ansiedade, atuando diretamente na causa no subconsciente, qual nível de investimento faria mais sentido para você hoje?
              </p>
              <div className="space-y-3">
                {investmentOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-start gap-3 md:gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00FF49]/50 rounded-xl p-3 md:p-4 cursor-pointer transition-all duration-300 group"
                  >
                    <input
                      type="radio"
                      name="investment"
                      value={option.value}
                      checked={formData.investment === option.value}
                      onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                      className="mt-0.5 md:mt-1 w-4 h-4 md:w-5 md:h-5 text-[#00FF49] bg-white/5 border-white/30 focus:ring-[#00FF49] focus:ring-offset-0"
                    />
                    <span className="text-white text-xs md:text-sm lg:text-base group-hover:text-[#00FF49] transition-colors duration-300">
                      {option.text}
                    </span>
                  </label>
                ))}
              </div>
              {errors.investment && (
                <p className="text-red-400 text-xs md:text-sm mt-2">{errors.investment}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00FF49] to-[#00cc3a] text-[#0D0D0D] py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-[#00FF49]/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3"
            >
              <span>Receber Diagnóstico Completo</span>
              <Send className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </form>

          {/* Privacy */}
          <div className="mt-5 md:mt-6 text-center">
            <p className="text-gray-400 text-xs">
              🔒 Seus dados estão seguros e serão usados apenas para gerar seu diagnóstico personalizado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
