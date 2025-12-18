export interface UserData {
  name: string;
  email: string;
  whatsapp: string;
  investment?: string;
}

export interface QuizAnswer {
  questionId: number;
  selectedPoints: number;
}

export interface QuizState {
  currentStep: 'intro' | 'quiz' | 'micro-feedback' | 'phase-diagnostic' | 'data-collection' | 'final-diagnostic' | 'invite';
  currentQuestionIndex: number;
  currentPhase: 1 | 2 | 3 | 4;
  answers: QuizAnswer[];
  userData: UserData | null;
  phase1Score: number;
  phase2Score: number;
  phase3Score: number;
  phase4Score: number;
  totalScore: number;
  showingMicroFeedback: boolean;
  showingPhaseDiagnostic: boolean;
}
