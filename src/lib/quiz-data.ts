// Dados do Diagnóstico Aprofundado de Ansiedade

export interface DiagnosticQuestion {
  id: number;
  phase: 1 | 2 | 3 | 4;
  question: string;
  options: {
    text: string;
    points: number;
  }[];
}

export interface MicroFeedback {
  phase: 1 | 2 | 3 | 4;
  triggerAfterQuestion: number;
  title: string;
  content: string;
}

export interface PhaseDiagnostic {
  phase: 1 | 2 | 3 | 4;
  title: string;
  getLowContent: (score: number) => string;
  getMediumContent: (score: number) => string;
  getHighContent: (score: number) => string;
}

// FASE 1 — MEDIÇÃO DO GRAU DE ANSIEDADE (SINTOMAS ATUAIS)
export const phase1Questions: DiagnosticQuestion[] = [
  {
    id: 1,
    phase: 1,
    question: 'Com que frequência você experimenta crises de ansiedade ou momentos de angústia intensa?',
    options: [
      { text: 'Raramente ou nunca', points: 0 },
      { text: 'Uma ou duas vezes por mês', points: 1 },
      { text: 'Semanalmente', points: 2 },
      { text: 'Diariamente ou quase todos os dias', points: 3 },
    ],
  },
  {
    id: 2,
    phase: 1,
    question: 'Quando você sente ansiedade, qual é a intensidade emocional que você experimenta?',
    options: [
      { text: 'Leve desconforto que passa rapidamente', points: 0 },
      { text: 'Desconforto moderado que interfere um pouco', points: 1 },
      { text: 'Intenso, com sensação de perda de controle', points: 2 },
      { text: 'Avassalador, como se algo terrível fosse acontecer', points: 3 },
    ],
  },
  {
    id: 3,
    phase: 1,
    question: 'Você experimenta sintomas físicos como taquicardia, respiração curta, aperto no peito ou tensão muscular?',
    options: [
      { text: 'Raramente ou nunca', points: 0 },
      { text: 'Ocasionalmente, em situações específicas', points: 1 },
      { text: 'Frequentemente, mesmo sem motivo aparente', points: 2 },
      { text: 'Constantemente, afetando minha rotina', points: 3 },
    ],
  },
  {
    id: 4,
    phase: 1,
    question: 'Seus pensamentos ficam acelerados, antecipando cenários negativos ou catastróficos?',
    options: [
      { text: 'Raramente penso assim', points: 0 },
      { text: 'Às vezes, mas consigo controlar', points: 1 },
      { text: 'Frequentemente, é difícil parar', points: 2 },
      { text: 'Constantemente, minha mente não desliga', points: 3 },
    ],
  },
  {
    id: 5,
    phase: 1,
    question: 'Você sente que perdeu o controle sobre suas emoções ou reações?',
    options: [
      { text: 'Não, me sinto no controle', points: 0 },
      { text: 'Às vezes sinto que perco o controle', points: 1 },
      { text: 'Frequentemente me sinto descontrolado(a)', points: 2 },
      { text: 'Quase sempre, como se não fosse mais eu', points: 3 },
    ],
  },
  {
    id: 6,
    phase: 1,
    question: 'Você evita situações comuns (sair de casa, dirigir, falar em público, encontrar pessoas) por medo ou desconforto?',
    options: [
      { text: 'Não, participo normalmente', points: 0 },
      { text: 'Às vezes evito algumas situações', points: 1 },
      { text: 'Frequentemente evito várias situações', points: 2 },
      { text: 'Evito quase tudo, minha vida está limitada', points: 3 },
    ],
  },
  {
    id: 7,
    phase: 1,
    question: 'A ansiedade trava sua rotina, impedindo você de realizar tarefas importantes ou tomar decisões?',
    options: [
      { text: 'Não, consigo realizar minhas atividades', points: 0 },
      { text: 'Às vezes atrasa algumas coisas', points: 1 },
      { text: 'Frequentemente me paralisa', points: 2 },
      { text: 'Constantemente, não consigo avançar', points: 3 },
    ],
  },
];

// FASE 2 — CAUSAS PROVÁVEIS E HISTÓRICO EMOCIONAL
export const phase2Questions: DiagnosticQuestion[] = [
  {
    id: 8,
    phase: 2,
    question: 'Durante sua infância ou adolescência, você viveu em um ambiente com muita crítica, cobrança ou perfeccionismo?',
    options: [
      { text: 'Não, o ambiente era acolhedor', points: 0 },
      { text: 'Um pouco, mas nada grave', points: 1 },
      { text: 'Sim, havia bastante cobrança', points: 2 },
      { text: 'Sim, era intenso e constante', points: 3 },
    ],
  },
  {
    id: 9,
    phase: 2,
    question: 'Você passou por situações de rejeição, abandono, humilhação ou vergonha que marcaram você profundamente?',
    options: [
      { text: 'Não, nada significativo', points: 0 },
      { text: 'Algumas situações pontuais', points: 1 },
      { text: 'Sim, várias situações marcantes', points: 2 },
      { text: 'Sim, experiências muito dolorosas', points: 3 },
    ],
  },
  {
    id: 10,
    phase: 2,
    question: 'Seu lar era emocionalmente imprevisível (brigas, instabilidade, mudanças bruscas, falta de segurança)?',
    options: [
      { text: 'Não, era estável e seguro', points: 0 },
      { text: 'Havia alguns momentos de tensão', points: 1 },
      { text: 'Sim, havia bastante instabilidade', points: 2 },
      { text: 'Sim, era muito imprevisível e inseguro', points: 3 },
    ],
  },
  {
    id: 11,
    phase: 2,
    question: 'Você foi pressionado(a) desde cedo a ser responsável demais, cuidar de outros ou "ser forte"?',
    options: [
      { text: 'Não, tive uma infância leve', points: 0 },
      { text: 'Um pouco, mas era normal', points: 1 },
      { text: 'Sim, assumi responsabilidades cedo', points: 2 },
      { text: 'Sim, tive que ser adulto(a) muito cedo', points: 3 },
    ],
  },
  {
    id: 12,
    phase: 2,
    question: 'Quando você errava ou falhava, como era a reação das pessoas ao seu redor?',
    options: [
      { text: 'Acolhedora, me ajudavam a aprender', points: 0 },
      { text: 'Neutra, não era grande coisa', points: 1 },
      { text: 'Crítica, me faziam sentir mal', points: 2 },
      { text: 'Punitiva, humilhante ou ameaçadora', points: 3 },
    ],
  },
  {
    id: 13,
    phase: 2,
    question: 'Hoje, você se cobra muito, se sente culpado(a) facilmente ou tem dificuldade de aceitar seus próprios erros?',
    options: [
      { text: 'Não, sou tranquilo(a) comigo', points: 0 },
      { text: 'Às vezes me cobro um pouco', points: 1 },
      { text: 'Sim, me cobro bastante', points: 2 },
      { text: 'Sim, sou extremamente duro(a) comigo', points: 3 },
    ],
  },
];

// FASE 3 — EFEITOS COLATERAIS E DANOS ATUAIS
export const phase3Questions: DiagnosticQuestion[] = [
  {
    id: 14,
    phase: 3,
    question: 'Como está a qualidade do seu sono?',
    options: [
      { text: 'Durmo bem e acordo descansado(a)', points: 0 },
      { text: 'Tenho algumas noites ruins', points: 1 },
      { text: 'Frequentemente tenho insônia ou sono agitado', points: 2 },
      { text: 'Raramente durmo bem, acordo exausto(a)', points: 3 },
    ],
  },
  {
    id: 15,
    phase: 3,
    question: 'Você sente cansaço crônico, dores no corpo, problemas digestivos ou outros sintomas físicos sem causa médica clara?',
    options: [
      { text: 'Não, me sinto bem fisicamente', points: 0 },
      { text: 'Ocasionalmente tenho alguns sintomas', points: 1 },
      { text: 'Sim, frequentemente tenho esses sintomas', points: 2 },
      { text: 'Sim, constantemente, afeta minha qualidade de vida', points: 3 },
    ],
  },
  {
    id: 16,
    phase: 3,
    question: 'Como a ansiedade afeta seus relacionamentos? (irritabilidade, distanciamento, conflitos, ciúme, dependência emocional)',
    options: [
      { text: 'Não afeta, meus relacionamentos estão bem', points: 0 },
      { text: 'Afeta um pouco, mas é administrável', points: 1 },
      { text: 'Afeta bastante, causa conflitos frequentes', points: 2 },
      { text: 'Afeta muito, prejudica profundamente minhas relações', points: 3 },
    ],
  },
  {
    id: 17,
    phase: 3,
    question: 'Você tem dificuldade de falar o que sente ou expressar suas necessidades por medo de rejeição ou conflito?',
    options: [
      { text: 'Não, me expresso bem', points: 0 },
      { text: 'Às vezes tenho dificuldade', points: 1 },
      { text: 'Frequentemente guardo tudo para mim', points: 2 },
      { text: 'Quase sempre, raramente consigo me expressar', points: 3 },
    ],
  },
  {
    id: 18,
    phase: 3,
    question: 'A ansiedade afeta sua carreira ou vida financeira? (procrastinação, travas em oportunidades, dificuldade de decidir, baixa produtividade)',
    options: [
      { text: 'Não, estou bem profissionalmente', points: 0 },
      { text: 'Afeta um pouco, mas consigo lidar', points: 1 },
      { text: 'Afeta bastante, perco oportunidades', points: 2 },
      { text: 'Afeta muito, está prejudicando seriamente minha carreira', points: 3 },
    ],
  },
  {
    id: 19,
    phase: 3,
    question: 'Você sente que a ansiedade te impede de tomar decisões importantes ou aproveitar oportunidades?',
    options: [
      { text: 'Não, consigo decidir normalmente', points: 0 },
      { text: 'Às vezes me paralisa um pouco', points: 1 },
      { text: 'Frequentemente me impede de agir', points: 2 },
      { text: 'Constantemente, perco muitas oportunidades', points: 3 },
    ],
  },
];

// FASE 4 — RISCOS FUTUROS E DEPENDÊNCIA EMOCIONAL
export const phase4Questions: DiagnosticQuestion[] = [
  {
    id: 20,
    phase: 4,
    question: 'Você sente que está no limite, como se não conseguisse mais aguentar viver assim?',
    options: [
      { text: 'Não, me sinto bem', points: 0 },
      { text: 'Às vezes me sinto assim', points: 1 },
      { text: 'Frequentemente me sinto no limite', points: 2 },
      { text: 'Constantemente, estou esgotado(a)', points: 3 },
    ],
  },
  {
    id: 21,
    phase: 4,
    question: 'Você tem medo de adoecer fisicamente ou mentalmente se continuar vivendo com essa ansiedade?',
    options: [
      { text: 'Não tenho esse medo', points: 0 },
      { text: 'Às vezes penso nisso', points: 1 },
      { text: 'Sim, frequentemente me preocupo com isso', points: 2 },
      { text: 'Sim, tenho certeza que vou adoecer', points: 3 },
    ],
  },
  {
    id: 22,
    phase: 4,
    question: 'Você tem medo de perder pessoas importantes ou oportunidades valiosas por causa da ansiedade?',
    options: [
      { text: 'Não tenho esse medo', points: 0 },
      { text: 'Às vezes me preocupo com isso', points: 1 },
      { text: 'Sim, frequentemente tenho esse medo', points: 2 },
      { text: 'Sim, sinto que já estou perdendo', points: 3 },
    ],
  },
  {
    id: 23,
    phase: 4,
    question: 'Você sente que a ansiedade "comanda" sua vida, como se você não tivesse mais controle?',
    options: [
      { text: 'Não, me sinto no controle', points: 0 },
      { text: 'Às vezes sinto que ela comanda', points: 1 },
      { text: 'Frequentemente ela decide por mim', points: 2 },
      { text: 'Sempre, não tenho mais controle', points: 3 },
    ],
  },
  {
    id: 24,
    phase: 4,
    question: 'Você já tentou resolver a ansiedade antes (terapia, medicação, técnicas) mas não obteve resultados duradouros?',
    options: [
      { text: 'Nunca tentei', points: 0 },
      { text: 'Tentei e funcionou', points: 0 },
      { text: 'Tentei, mas não funcionou', points: 2 },
      { text: 'Tentei várias vezes sem sucesso', points: 3 },
    ],
  },
  {
    id: 25,
    phase: 4,
    question: 'Você sente uma resistência interna em relaxar, como se "baixar a guarda" fosse perigoso?',
    options: [
      { text: 'Não, consigo relaxar tranquilamente', points: 0 },
      { text: 'Às vezes sinto essa resistência', points: 1 },
      { text: 'Frequentemente não consigo relaxar', points: 2 },
      { text: 'Sempre, relaxar me deixa mais ansioso(a)', points: 3 },
    ],
  },
];

// Micro-feedbacks que aparecem após perguntas específicas
export const microFeedbacks: MicroFeedback[] = [
  {
    phase: 1,
    triggerAfterQuestion: 2,
    title: 'Seu cérebro em modo de alerta',
    content: 'Pelos sinais que você relatou, seu cérebro está operando em modo de alerta ampliado, o que na neurociência chamamos de hiperativação do sistema de ameaça. Isso significa que o seu subconsciente interpreta riscos maiores do que os reais, mantendo seu corpo e emoções em estado de vigilância constante.',
  },
  {
    phase: 2,
    triggerAfterQuestion: 10,
    title: 'Programação emocional do passado',
    content: 'O que você viveu na sua infância e adolescência provavelmente ensinou seu subconsciente a interpretar o mundo como um lugar onde é preciso estar sempre alerta. Nesses casos, a ansiedade não é um "problema atual", mas uma programação emocional construída há anos para te proteger de dores antigas.',
  },
  {
    phase: 3,
    triggerAfterQuestion: 16,
    title: 'Impacto sistêmico da ansiedade',
    content: 'Sua ansiedade está afetando áreas importantes da sua vida. Quando o cérebro vive em modo de alerta, ele reduz energia racional, prejudica relações e limita decisões importantes. Isso mostra que sua ansiedade não é apenas emocional: ela afeta corpo, vínculos e resultados.',
  },
  {
    phase: 4,
    triggerAfterQuestion: 23,
    title: 'Dependência emocional do estado ansioso',
    content: 'Quando a ansiedade se torna frequente, o cérebro passa a tratá-la como "normal". Isso cria uma dependência emocional do estado de alerta: uma parte da mente acredita que, se você relaxar, algo ruim pode acontecer. É por isso que, muitas vezes, você sabe o que fazer, mas não consegue.',
  },
];

// Diagnósticos de cada fase (conteúdo completo mantido)
export const phaseDiagnostics: PhaseDiagnostic[] = [
  {
    phase: 1,
    title: 'Diagnóstico: Nível de Ansiedade Atual',
    getLowContent: (score: number) => `
**Nível: Ansiedade Leve a Moderada (${score}/21 pontos)**

Seu sistema nervoso apresenta sinais de alerta ocasionais, mas ainda mantém capacidade de regulação. A hiperativação do sistema de ameaça está em estágio inicial, o que significa que seu cérebro ainda consegue distinguir entre ameaças reais e imaginárias na maior parte do tempo.

**Como isso funciona no seu cérebro:**
Sua amígdala (centro de processamento de ameaças) está mais sensível do que o ideal, mas seu córtex pré-frontal (área racional) ainda consegue modular as respostas emocionais. O padrão se mantém porque seu subconsciente aprendeu a antecipar problemas como forma de proteção.

**Importante entender:**
Mesmo em níveis mais baixos, a ansiedade não é sobre "falta de força de vontade". É um padrão automático do subconsciente que foi programado para te proteger. A boa notícia é que, neste estágio, a reprogramação tende a ser mais rápida e eficaz.
    `,
    getMediumContent: (score: number) => `
**Nível: Ansiedade Moderada a Alta (${score}/21 pontos)**

Seu sistema nervoso está operando em estado de hipervigilância significativo. A amígdala (centro de alarme do cérebro) está hiperativada, interpretando situações neutras como potencialmente ameaçadoras. Isso mantém seu corpo em estado de alerta crônico, liberando cortisol e adrenalina de forma desproporcional.

**Como o padrão se mantém automaticamente:**
Seu cérebro criou "atalhos neurais" que disparam respostas de ansiedade antes mesmo que você tenha tempo de pensar racionalmente. É como se houvesse um sistema de alarme supersensível que dispara com facilidade. Esse padrão foi gravado no subconsciente através de experiências passadas e agora opera no piloto automático.

**O que isso significa:**
Você não está "fraco" ou "exagerado". Seu cérebro está fazendo exatamente o que foi programado para fazer: te proteger. O problema é que a programação está desatualizada e hiperativa. A raiz desse padrão está no subconsciente, não na sua força de vontade ou capacidade de controle consciente.

**Impacto no sistema nervoso:**
O estado de alerta constante está desgastando seu sistema nervoso autônomo, mantendo você em modo "luta ou fuga" quando deveria estar em "descanso e recuperação". Isso explica os sintomas físicos e a sensação de exaustão.
    `,
    getHighContent: (score: number) => `
**Nível: Ansiedade Alta a Crítica (${score}/21 pontos)**

Seu sistema nervoso está em estado de hiperativação crônica e severa. A amígdala (centro de processamento de ameaças) assumiu o controle, operando em modo de emergência constante. Isso significa que seu cérebro interpreta o mundo como fundamentalmente perigoso, mantendo você em estado de alerta máximo 24 horas por dia.

**Como isso afeta seu sistema nervoso:**
O sistema nervoso simpático (responsável pela resposta de luta ou fuga) está cronicamente ativado, enquanto o parassimpático (responsável pelo relaxamento) está suprimido. Isso resulta em:
- Liberação constante de cortisol e adrenalina
- Desgaste do sistema imunológico
- Inflamação crônica no corpo
- Esgotamento das glândulas adrenais
- Desregulação de neurotransmissores (serotonina, dopamina, GABA)

**Como o padrão se mantém automaticamente:**
Seu cérebro criou circuitos neurais profundamente enraizados que disparam respostas de ansiedade de forma automática e instantânea. É como se houvesse um sistema de alarme que nunca desliga, interpretando até situações seguras como ameaças. Esse padrão foi gravado no subconsciente através de experiências intensas ou repetidas de ameaça (real ou percebida) no passado.

**A verdade que você precisa entender:**
Você não está "louco" ou "fraco". Seu cérebro está fazendo exatamente o que foi programado para fazer: te proteger a todo custo. O problema é que a programação está severamente desatualizada e hiperativa. A raiz desse padrão está profundamente enterrada no subconsciente, em camadas que a mente consciente não consegue acessar ou modificar sozinha.

**Por que a força de vontade não funciona:**
Tentar controlar a ansiedade com pensamento positivo ou força de vontade é como tentar desligar um alarme de incêndio gritando com ele. O alarme está no subconsciente, operando em uma camada mais profunda que o pensamento consciente. É por isso que você pode saber racionalmente que não há perigo, mas ainda assim sentir todos os sintomas.

**O que isso significa para você:**
Seu sistema nervoso precisa de reprogramação profunda no nível subconsciente. Não é sobre "se acalmar" ou "pensar diferente" - é sobre desativar os circuitos neurais de ameaça e criar novos padrões de segurança e regulação emocional.
    `,
  },
  {
    phase: 2,
    title: 'Diagnóstico: Raízes Emocionais da Ansiedade',
    getLowContent: (score: number) => `
**Análise: Programação Emocional Moderada (${score}/18 pontos)**

Suas respostas indicam que você teve algumas experiências na infância e adolescência que ensinaram seu subconsciente a ficar em alerta, mas não de forma intensa ou constante. Provavelmente houve momentos de cobrança, crítica ou instabilidade que deixaram marcas, mas você também teve experiências de segurança e acolhimento.

**Conexão passado → ansiedade atual:**
Seu cérebro aprendeu que, em certas situações, é preciso estar preparado para críticas, rejeição ou instabilidade. Isso criou um "sensor de ameaça" que dispara em situações similares hoje, mesmo que o contexto seja diferente. Por exemplo, se você foi criticado por erros na infância, seu cérebro pode disparar ansiedade hoje quando você precisa tomar decisões ou se expor.

**Como isso vira gatilho automático:**
O subconsciente não diferencia passado de presente. Quando uma situação atual se parece (mesmo que vagamente) com uma experiência dolorosa do passado, o cérebro dispara a mesma resposta de proteção. É um mecanismo automático, não uma escolha consciente.

**O que isso significa:**
Sua ansiedade atual não é "sem motivo" - ela tem raízes claras em padrões emocionais aprendidos. A boa notícia é que, identificando essas raízes, é possível reprogramar as respostas automáticas do subconsciente.
    `,
    getMediumContent: (score: number) => `
**Análise: Programação Emocional Significativa (${score}/18 pontos)**

Suas respostas revelam que você cresceu em um ambiente com níveis consideráveis de cobrança, crítica, instabilidade emocional ou situações de rejeição e vergonha. Seu subconsciente foi treinado desde cedo a interpretar o mundo como um lugar onde é preciso estar sempre alerta, preparado para críticas, rejeição ou perigo emocional.

**Conexão passado → ansiedade atual:**
Seu cérebro aprendeu padrões específicos de proteção:
- Se houve crítica constante → hoje você antecipa julgamento e rejeição
- Se houve instabilidade → hoje você busca controlar tudo para se sentir seguro
- Se houve cobrança por perfeição → hoje você se paralisa com medo de errar
- Se houve abandono ou rejeição → hoje você teme perder pessoas ou oportunidades

**Como isso vira gatilho automático no subconsciente:**
Essas experiências criaram "programas emocionais" no seu cérebro. Quando uma situação atual ativa uma memória emocional do passado (mesmo que você não lembre conscientemente), o subconsciente dispara a mesma resposta de proteção que usava na infância: ansiedade, alerta, hipervigilância.

É como se seu cérebro dissesse: "Da última vez que me senti assim, algo ruim aconteceu. Preciso ficar em alerta para me proteger." Isso acontece em milissegundos, antes que sua mente consciente possa processar racionalmente.

**Por que você se cobra tanto:**
A autocobrança e a dificuldade de aceitar erros são mecanismos de proteção. Seu subconsciente aprendeu que "se eu for perfeito, não serei criticado/rejeitado/abandonado". É uma tentativa de controlar o incontrolável e garantir segurança emocional.

**O que isso significa:**
Sua ansiedade não é um defeito seu - é uma resposta protetora que seu cérebro desenvolveu para te manter seguro em um ambiente que, no passado, não era totalmente seguro. O problema é que essa proteção agora está te limitando, não te protegendo.
    `,
    getHighContent: (score: number) => `
**Análise: Programação Emocional Profunda e Intensa (${score}/18 pontos)**

Suas respostas revelam que você cresceu em um ambiente emocionalmente desafiador, marcado por níveis intensos de crítica, cobrança, instabilidade, rejeição, abandono ou situações traumáticas. Seu subconsciente foi profundamente programado para interpretar o mundo como um lugar perigoso, onde é preciso estar em alerta constante para sobreviver emocionalmente.

**Conexão passado → ansiedade atual (análise profunda):**

Seu cérebro desenvolveu um sistema de proteção extremamente sensível e hiperativo:

**Se houve crítica severa ou perfeccionismo:**
- Seu subconsciente aprendeu: "Eu só tenho valor se for perfeito"
- Hoje isso se manifesta como: ansiedade paralisante antes de agir, medo intenso de julgamento, autocobrança brutal, sensação de nunca ser bom o suficiente

**Se houve instabilidade ou imprevisibilidade:**
- Seu subconsciente aprendeu: "O mundo é perigoso e imprevisível, preciso controlar tudo"
- Hoje isso se manifesta como: necessidade de controle excessivo, ansiedade quando as coisas fogem do planejado, dificuldade de confiar, hipervigilância constante

**Se houve rejeição, abandono ou vergonha:**
- Seu subconsciente aprendeu: "Eu não sou amável, vou ser abandonado"
- Hoje isso se manifesta como: medo intenso de rejeição, dificuldade de se expressar, dependência emocional, ansiedade em relacionamentos, evitação de vínculos profundos

**Se você teve que ser responsável demais cedo:**
- Seu subconsciente aprendeu: "Não posso relaxar, preciso estar sempre alerta e no controle"
- Hoje isso se manifesta como: incapacidade de relaxar, sensação de que algo ruim vai acontecer se você baixar a guarda, culpa ao descansar

**Como isso vira gatilho automático no subconsciente:**

Essas experiências não ficaram apenas na memória - elas foram gravadas no sistema límbico (cérebro emocional) como "verdades absolutas" sobre você e o mundo. Seu cérebro criou circuitos neurais que disparam automaticamente quando situações atuais se parecem (mesmo remotamente) com as experiências dolorosas do passado.

O processo é assim:
1. Situação atual acontece (ex: precisa tomar uma decisão)
2. Cérebro detecta similaridade com experiência passada (ex: "decisões levavam a críticas")
3. Subconsciente dispara resposta de proteção (ansiedade intensa)
4. Corpo e mente entram em modo de alerta
5. Você se paralisa, evita ou sofre

Tudo isso acontece em milissegundos, antes que você possa pensar racionalmente. É por isso que você pode saber logicamente que está seguro, mas ainda assim sentir terror.

**Por que você é tão duro consigo mesmo:**

A autocobrança extrema e a dificuldade de aceitar erros não são "defeitos de personalidade" - são estratégias de sobrevivência emocional. Seu subconsciente aprendeu que:
- "Se eu for perfeito, não serei criticado"
- "Se eu me cobrar antes, a crítica externa dói menos"
- "Se eu não errar, não serei rejeitado ou abandonado"

É uma tentativa desesperada de controlar o incontrolável e garantir segurança emocional em um mundo que, no passado, não era seguro.

**A verdade que você precisa entender:**

Sua ansiedade não é um problema atual - é uma solução antiga. Seu cérebro desenvolveu esse sistema de alerta hiperativo para te proteger de dores reais que você viveu. O problema é que essa proteção agora está te aprisionando, não te libertando.

Você não é "fraco", "exagerado" ou "problemático". Você é alguém cujo cérebro aprendeu a se proteger da única forma que sabia: ficando em alerta constante. Isso foi adaptativo no passado, mas agora está te limitando profundamente.

**O que isso significa para sua transformação:**

Mudar esse padrão não é sobre "pensar positivo" ou "se acalmar". É sobre reprogramar as camadas profundas do subconsciente onde essas crenças e respostas automáticas estão gravadas. É sobre ensinar seu cérebro que ele não precisa mais te proteger dessa forma, porque você não está mais naquele ambiente do passado.
    `,
  },
  {
    phase: 3,
    title: 'Diagnóstico: Impactos Atuais da Ansiedade',
    getLowContent: (score: number) => `
**Análise de Impacto: Efeitos Moderados (${score}/18 pontos)**

Sua ansiedade está começando a afetar algumas áreas da sua vida, mas ainda não de forma devastadora. Você provavelmente consegue manter suas responsabilidades, mas com mais esforço e desgaste do que deveria ser necessário.

**Áreas mais afetadas:**
Baseado nas suas respostas, a ansiedade está impactando principalmente sua qualidade de vida e bem-estar, com alguns reflexos em relacionamentos ou carreira. O padrão ainda não está completamente instalado, o que é uma janela importante para intervenção.

**Conexão com padrões automáticos:**
Quando o cérebro opera em modo de alerta, mesmo que moderadamente, ele desvia energia das funções superiores (raciocínio, criatividade, conexão social) para as funções de sobrevivência. Isso explica por que você pode se sentir mais cansado, menos produtivo ou mais irritável do que gostaria.

**Como isso desgasta o sistema nervoso:**
Mesmo níveis moderados de ansiedade mantêm o sistema nervoso em estado de ativação crônica. É como deixar o motor do carro ligado o tempo todo - eventualmente, isso causa desgaste. Seu corpo está gastando energia constantemente para manter o estado de alerta, o que explica sintomas como cansaço, tensão ou dificuldades de sono.
    `,
    getMediumContent: (score: number) => `
**Análise de Impacto: Efeitos Significativos (${score}/18 pontos)**

Sua ansiedade está afetando múltiplas áreas importantes da sua vida de forma considerável. O estado de alerta crônico está consumindo recursos mentais, emocionais e físicos que deveriam estar disponíveis para você viver plenamente.

**Áreas mais afetadas (análise detalhada):**

**Saúde Física:**
O estado de alerta constante está desgastando seu corpo. Quando o cérebro vive em modo de ameaça, ele prioriza sobrevivência imediata sobre manutenção de longo prazo. Isso resulta em:
- Sistema imunológico enfraquecido
- Problemas de sono (o cérebro não "desliga" para descansar)
- Tensão muscular crônica
- Fadiga persistente
- Possíveis sintomas psicossomáticos (dores, problemas digestivos, etc.)

**Relacionamentos:**
A ansiedade está interferindo na sua capacidade de se conectar autenticamente. Quando o cérebro está em alerta, ele interpreta até interações neutras como potencialmente ameaçadoras. Isso pode causar:
- Irritabilidade (sistema nervoso sobrecarregado)
- Dificuldade de expressar necessidades (medo de rejeição)
- Distanciamento emocional (proteção contra vulnerabilidade)
- Conflitos recorrentes (reatividade aumentada)
- Dependência emocional (busca de segurança externa)

**Carreira e Finanças:**
O modo de alerta reduz drasticamente a capacidade do córtex pré-frontal (área responsável por planejamento, decisão e execução). Isso resulta em:
- Procrastinação (paralisia por medo de errar)
- Travas em oportunidades (evitação de exposição)
- Dificuldade de decidir (medo de consequências)
- Baixa produtividade (energia desviada para gerenciar ansiedade)
- Perda de oportunidades (evitação de riscos)

**Conexão com padrões automáticos:**
Esses impactos não são "culpa sua" - são consequências diretas de um sistema nervoso operando em modo de emergência. Seu cérebro está fazendo exatamente o que foi programado: priorizar sobrevivência sobre crescimento, proteção sobre conexão, segurança sobre oportunidade.

**Como isso desgasta o sistema nervoso:**
O estado de alerta crônico está esgotando seus recursos neurobiológicos:
- Cortisol elevado constantemente (hormônio do estresse)
- Depleção de neurotransmissores (serotonina, dopamina)
- Inflamação crônica no corpo e cérebro
- Desregulação do eixo HPA (sistema de resposta ao estresse)
- Fadiga adrenal (glândulas exaustas de produzir hormônios de alerta)

É como se seu corpo estivesse correndo uma maratona 24 horas por dia. Eventualmente, o sistema entra em colapso.
    `,
    getHighContent: (score: number) => `
**Análise de Impacto: Efeitos Severos e Sistêmicos (${score}/18 pontos)**

Sua ansiedade está causando danos significativos e abrangentes em praticamente todas as áreas importantes da sua vida. O estado de hiperativação crônica do sistema nervoso está consumindo seus recursos vitais e impedindo você de viver com qualidade, saúde e plenitude.

**Análise profunda por área:**

**🫀 SAÚDE FÍSICA - Danos Severos:**

Seu corpo está pagando um preço alto pelo estado de alerta constante. Quando o sistema nervoso opera em modo de emergência 24/7, ele desvia recursos de funções essenciais de manutenção e reparo:

- **Sistema Imunológico Comprometido:** O cortisol elevado cronicamente suprime a imunidade, deixando você vulnerável a doenças
- **Sono Severamente Afetado:** O cérebro não consegue entrar em modo de descanso profundo, impedindo recuperação física e mental
- **Fadiga Crônica Debilitante:** Não é "cansaço normal" - é esgotamento neurobiológico profundo
- **Sintomas Psicossomáticos Intensos:** Dores crônicas, problemas digestivos, tensão muscular severa, alterações hormonais
- **Risco Cardiovascular Aumentado:** Taquicardia frequente, pressão arterial elevada, sobrecarga cardíaca
- **Envelhecimento Acelerado:** O estresse crônico acelera o envelhecimento celular

**Por que isso acontece:** Quando o cérebro interpreta que você está em perigo constante, ele prioriza sobrevivência imediata sobre saúde de longo prazo. É como se seu corpo estivesse em "modo de emergência" permanente, sacrificando manutenção para garantir que você sobreviva ao "perigo" que o subconsciente percebe.

**💔 RELACIONAMENTOS - Danos Profundos:**

A ansiedade está corroendo sua capacidade de se conectar autenticamente e manter vínculos saudáveis:

- **Irritabilidade Crônica:** Sistema nervoso sobrecarregado torna você reativo e explosivo
- **Incapacidade de Expressar Necessidades:** Medo paralisante de rejeição ou conflito te mantém em silêncio
- **Distanciamento Emocional Severo:** Você se protege da vulnerabilidade, mas perde a intimidade
- **Conflitos Recorrentes e Destrutivos:** Reatividade aumentada transforma pequenas situações em grandes crises
- **Dependência Emocional Intensa:** Busca desesperada de segurança externa, sobrecarregando relações
- **Ciúme e Insegurança:** Medo constante de abandono ou rejeição
- **Isolamento Social:** Evitação de interações por exaustão ou medo

**Por que isso acontece:** Quando o cérebro está em alerta, ele interpreta até interações neutras como potencialmente ameaçadoras. Você pode se afastar para se proteger, ou se apegar desesperadamente buscando segurança. Ambos os padrões destroem relacionamentos.

**💼 CARREIRA E FINANÇAS - Danos Críticos:**

A ansiedade está sabotando ativamente seu potencial profissional e estabilidade financeira:

- **Procrastinação Paralisante:** Não é preguiça - é terror de errar ou ser julgado
- **Travas em Oportunidades Valiosas:** Você vê a oportunidade, mas o medo te paralisa
- **Incapacidade de Tomar Decisões:** Análise paralisante por medo de consequências
- **Produtividade Severamente Comprometida:** Energia mental consumida gerenciando ansiedade
- **Perda de Oportunidades Importantes:** Promoções, projetos, conexões - tudo passa enquanto você está travado
- **Autossabotagem Recorrente:** Você desiste antes de tentar, confirmando suas piores crenças
- **Impacto Financeiro Direto:** Menos produtividade = menos resultados = menos dinheiro

**Por que isso acontece:** O córtex pré-frontal (área do cérebro responsável por planejamento, decisão e execução) é severamente prejudicado quando a amígdala (centro de alarme) está hiperativa. É literalmente impossível pensar claramente e agir efetivamente quando seu cérebro está em modo de sobrevivência.

**🧠 CONEXÃO COM PADRÕES AUTOMÁTICOS:**

Esses impactos devastadores não são "falhas suas" - são consequências diretas e inevitáveis de um sistema nervoso operando em modo de emergência crônica. Seu cérebro está fazendo exatamente o que foi programado para fazer:

- Priorizar sobrevivência sobre crescimento
- Priorizar proteção sobre conexão
- Priorizar segurança sobre oportunidade
- Priorizar evitação sobre ação

O problema é que essa programação está desatualizada. Você não está mais no ambiente que criou essa necessidade de alerta constante, mas seu subconsciente ainda não sabe disso.

**⚠️ COMO ISSO DESGASTA O SISTEMA NERVOSO:**

O estado de hiperativação crônica está literalmente esgotando seus recursos neurobiológicos:

**Nível Hormonal:**
- Cortisol cronicamente elevado (hormônio do estresse)
- Adrenalina em níveis constantes
- Depleção de serotonina (bem-estar)
- Depleção de dopamina (motivação e prazer)
- Depleção de GABA (calma e relaxamento)
- Desregulação de melatonina (sono)

**Nível Neural:**
- Hipertrofia da amígdala (centro de alarme aumentado)
- Atrofia do hipocampo (memória e aprendizado prejudicados)
- Redução da atividade do córtex pré-frontal (decisão e controle)
- Circuitos de medo fortalecidos
- Circuitos de calma enfraquecidos

**Nível Sistêmico:**
- Fadiga adrenal severa (glândulas exaustas)
- Inflamação crônica em todo o corpo
- Desregulação do eixo HPA (sistema de resposta ao estresse)
- Sistema imunológico suprimido
- Envelhecimento celular acelerado

**A VERDADE DURA:**

Seu corpo e mente estão operando como se você estivesse em perigo de morte constante. Isso não é sustentável. É como manter um carro em velocidade máxima 24 horas por dia - eventualmente, o motor queima.

Você não está "exagerando" ou "sendo fraco". Você está vivendo com um sistema nervoso em colapso, e isso tem consequências reais, mensuráveis e devastadoras em todas as áreas da sua vida.
    `,
  },
  {
    phase: 4,
    title: 'Diagnóstico: Riscos Futuros e Dependência Emocional',
    getLowContent: (score: number) => `
**Análise de Riscos: Nível Moderado (${score}/18 pontos)**

Você ainda não está em um ponto crítico, mas há sinais de que a ansiedade pode se intensificar se não for endereçada. Seu sistema nervoso está começando a se adaptar ao estado de alerta, o que pode criar padrões mais difíceis de reverter no futuro.

**Riscos de manter o padrão:**
- Intensificação gradual dos sintomas
- Possível desenvolvimento de evitações mais severas
- Desgaste progressivo do sistema nervoso
- Impacto crescente em relacionamentos e carreira

**Por que mudar exige reprogramar o subconsciente:**
Mesmo em níveis moderados, a ansiedade opera em camadas automáticas do cérebro. Técnicas superficiais podem trazer alívio temporário, mas a reprogramação profunda do subconsciente é necessária para mudança duradoura. É preciso desativar os circuitos de ameaça e criar novos padrões de segurança e regulação.
    `,
    getMediumContent: (score: number) => `
**Análise de Riscos: Nível Alto (${score}/18 pontos)**

Você está em um ponto crítico onde a ansiedade está se consolidando como um padrão crônico. Seu cérebro está começando a tratar o estado de alerta como "normal", o que cria uma dependência emocional perigosa.

**Riscos futuros em saúde:**
- Desenvolvimento de condições crônicas (hipertensão, problemas cardíacos, doenças autoimunes)
- Possível evolução para depressão ou burnout
- Esgotamento completo do sistema nervoso
- Sintomas físicos cada vez mais severos
- Envelhecimento acelerado

**Riscos futuros em relacionamentos:**
- Isolamento social progressivo
- Perda de conexões importantes
- Conflitos cada vez mais intensos
- Possível rompimento de vínculos valiosos
- Solidão emocional profunda

**Riscos futuros em carreira:**
- Estagnação profissional
- Perda de oportunidades valiosas
- Possível perda de emprego ou clientes
- Impacto financeiro crescente
- Autossabotagem de objetivos importantes

**Dependência emocional do estado ansioso:**
Seu cérebro está começando a "se acostumar" com a ansiedade. Isso cria um paradoxo perigoso: uma parte de você quer se livrar da ansiedade, mas outra parte (subconsciente) acredita que precisa dela para se manter seguro. É por isso que, mesmo quando você tenta relaxar, sente uma resistência interna ou até mais ansiedade.

**Por que você sabe o que fazer, mas não consegue:**
O conhecimento racional está no córtex pré-frontal (cérebro consciente), mas os padrões de ansiedade estão gravados na amígdala e no sistema límbico (cérebro subconsciente). É como tentar apagar um incêndio com informações sobre química - você pode entender o fogo, mas isso não o apaga.

**Por que mudar exige reprogramar o subconsciente:**
Técnicas superficiais (respiração, pensamento positivo, distração) podem trazer alívio momentâneo, mas não mudam os circuitos neurais profundos. É preciso acessar e reprogramar as camadas subconscientes onde os padrões de ameaça estão gravados. Isso requer métodos específicos que trabalham diretamente com o sistema límbico e a memória emocional.
    `,
    getHighContent: (score: number) => `
**Análise de Riscos: Nível Crítico (${score}/18 pontos)**

Você está em um ponto de emergência emocional e neurobiológica. A ansiedade não é mais apenas um sintoma - ela se tornou um sistema operacional do seu cérebro. Você está vivendo em estado de colapso iminente, e os riscos de manter esse padrão são severos e urgentes.

**⚠️ RISCOS FUTUROS EM SAÚDE - CRÍTICOS:**

Se você continuar nesse padrão, os riscos são reais e mensuráveis:

**Curto Prazo (próximos meses):**
- Colapso nervoso ou burnout severo
- Crises de pânico mais intensas e frequentes
- Possível desenvolvimento de agorafobia ou fobias específicas
- Insônia crônica severa
- Sintomas físicos incapacitantes

**Médio Prazo (próximo ano):**
- Desenvolvimento de depressão clínica
- Doenças psicossomáticas graves
- Comprometimento severo do sistema imunológico
- Possível desenvolvimento de condições autoimunes
- Risco de dependência de medicamentos ou substâncias

**Longo Prazo (próximos anos):**
- Doenças cardiovasculares (hipertensão, arritmias, risco de infarto)
- Doenças neurodegenerativas (o estresse crônico acelera declínio cognitivo)
- Envelhecimento acelerado significativo
- Possível desenvolvimento de doenças crônicas graves
- Redução significativa da expectativa e qualidade de vida

**💔 RISCOS FUTUROS EM RELACIONAMENTOS - DEVASTADORES:**

**Curto Prazo:**
- Conflitos cada vez mais intensos e destrutivos
- Afastamento de pessoas importantes
- Isolamento social progressivo
- Perda de conexões valiosas

**Médio Prazo:**
- Possível término de relacionamentos importantes (românticos, familiares, amizades)
- Solidão emocional profunda
- Incapacidade de formar novos vínculos
- Ciclo de relacionamentos tóxicos ou dependentes

**Longo Prazo:**
- Isolamento social severo
- Perda de rede de apoio
- Solidão crônica (fator de risco para múltiplas doenças)
- Arrependimento profundo por conexões perdidas

**💼 RISCOS FUTUROS EM CARREIRA E FINANÇAS - CATASTRÓFICOS:**

**Curto Prazo:**
- Perda de oportunidades imediatas valiosas
- Queda severa de produtividade
- Possível perda de emprego ou clientes importantes
- Conflitos profissionais

**Médio Prazo:**
- Estagnação profissional completa
- Impacto financeiro significativo
- Perda de estabilidade econômica
- Autossabotagem de objetivos importantes
- Possível necessidade de afastamento por saúde

**Longo Prazo:**
- Carreira severamente comprometida ou destruída
- Instabilidade financeira crônica
- Perda de anos de potencial e crescimento
- Arrependimento profundo por potencial não realizado
- Dependência financeira ou dificuldades severas

**🧠 DEPENDÊNCIA EMOCIONAL DO ESTADO ANSIOSO - ANÁLISE PROFUNDA:**

Aqui está a verdade mais difícil de aceitar: seu cérebro está viciado em ansiedade.

**Como isso funciona:**

Quando a ansiedade se torna crônica, o cérebro passa por mudanças neuroplásticas que a tornam o "estado padrão". Isso cria um ciclo vicioso:

1. **Normalização:** Seu cérebro interpreta o estado de alerta como "normal"
2. **Dependência:** Uma parte subconsciente passa a acreditar que precisa da ansiedade para se manter seguro
3. **Resistência:** Quando você tenta relaxar, o subconsciente dispara mais ansiedade como "proteção"
4. **Reforço:** Cada vez que você volta ao estado ansioso, o padrão se fortalece

**Por que relaxar parece perigoso:**

Seu subconsciente desenvolveu uma crença profunda: "Se eu relaxar, algo ruim vai acontecer. A ansiedade me mantém preparado e seguro."

Isso não é lógico, mas é real para o seu cérebro emocional. É por isso que você pode estar exausto, desesperado por paz, mas ainda assim sentir terror ou culpa quando tenta relaxar.

**Por que você sabe o que fazer, mas não consegue:**

Essa é a frustração mais profunda: você tem conhecimento, já tentou técnicas, sabe racionalmente que precisa mudar, mas simplesmente não consegue.

**A razão é neurobiológica:**

- Seu conhecimento consciente está no córtex pré-frontal
- Seus padrões de ansiedade estão na amígdala e sistema límbico
- A amígdala opera 200x mais rápido que o córtex pré-frontal
- Quando há conflito, o subconsciente sempre vence

É como tentar vencer um cabo de guerra onde o outro lado tem 200 pessoas e você tem 1. Não é falta de esforço - é uma batalha neurobiológica desigual.

**Por que tentativas anteriores não funcionaram:**

Se você já tentou terapia tradicional, medicação, técnicas de respiração, meditação, pensamento positivo, e nada trouxe mudança duradoura, há uma razão:

**Essas abordagens trabalham com o cérebro consciente, mas a ansiedade está no subconsciente.**

É como tentar consertar um problema no porão mexendo no telhado. Você pode ter alívio temporário, mas a raiz do problema permanece intocada.

**🔥 POR QUE MUDAR EXIGE REPROGRAMAR O SUBCONSCIENTE:**

A única forma de mudar padrões profundamente enraizados é acessar e reprogramar as camadas subconscientes onde eles estão gravados.

**Isso requer:**

1. **Acesso ao sistema límbico:** Onde as memórias emocionais e padrões de ameaça estão armazenados
2. **Desativação dos circuitos de ameaça:** Que disparam respostas automáticas de ansiedade
3. **Reprogramação de crenças subconscientes:** Que mantêm você em estado de alerta
4. **Criação de novos circuitos neurais:** De segurança, calma e regulação emocional
5. **Integração neurobiológica:** Para que as mudanças sejam permanentes, não temporárias

**Não é sobre:**
- Pensar diferente (isso é superficial)
- Controlar sintomas (isso é paliativo)
- Entender racionalmente (isso é insuficiente)
- Força de vontade (isso não acessa o subconsciente)

**É sobre:**
- Reprogramação neural profunda
- Desativação de padrões automáticos
- Criação de nova programação emocional
- Transformação do sistema operacional do cérebro

**⚠️ A VERDADE FINAL:**

Você está em um ponto crítico. Continuar nesse padrão não é uma opção segura - os riscos são reais, severos e progressivos. Mas há esperança:

**O cérebro é neuroplástico.** Isso significa que, com os métodos corretos, é possível reprogramar até os padrões mais profundos e enraizados.

Mas isso não acontece sozinho. Não acontece com técnicas superficiais. E não acontece apenas com o tempo.

Requer intervenção específica, direcionada e profunda nas camadas subconscientes onde a ansiedade está programada.

A pergunta não é "se" você vai mudar. A pergunta é "quando" - e quanto mais você espera, mais profundo o padrão se torna e maiores os danos.
    `,
  },
];

// Todas as perguntas em ordem
export const allQuestions = [
  ...phase1Questions,
  ...phase2Questions,
  ...phase3Questions,
  ...phase4Questions,
];

// Opções de investimento
export const investmentOptions = [
  {
    id: 1,
    text: 'Quero começar com conteúdos gratuitos.',
    value: 'gratuito',
  },
  {
    id: 2,
    text: 'Vejo valor em investir até R$ 500 em algo introdutório.',
    value: 'ate_500',
  },
  {
    id: 3,
    text: 'Posso investir entre R$ 1.500 e R$ 3.000 em um método estruturado para eliminar a ansiedade na raiz.',
    value: '1500_3000',
  },
  {
    id: 4,
    text: 'Estou disposto(a) a investir acima de R$ 3.000 em uma transformação profunda.',
    value: 'acima_3000',
  },
];
