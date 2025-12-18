'use client';

import { useState } from 'react';
import QuizIntro from '@/components/quiz/QuizIntro';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import MicroFeedback from '@/components/quiz/MicroFeedback';
import PhaseDiagnostic from '@/components/quiz/PhaseDiagnostic';
import DataCollection from '@/components/quiz/DataCollection';
import FinalDiagnostic from '@/components/quiz/FinalDiagnostic';
import Invite from '@/components/quiz/Invite';
import { allQuestions, microFeedbacks, phaseDiagnostics } from '@/lib/quiz-data';
import { QuizState, UserData, QuizAnswer } from '@/lib/types';

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentStep: 'intro',
    currentQuestionIndex: 0,
    currentPhase: 1,
    answers: [],
    userData: null,
    phase1Score: 0,
    phase2Score: 0,
    phase3Score: 0,
    phase4Score: 0,
    totalScore: 0,
    showingMicroFeedback: false,
    showingPhaseDiagnostic: false,
  });

  const handleStartQuiz = () => {
    setQuizState({ ...quizState, currentStep: 'quiz' });
  };

  const handleAnswer = (points: number) => {
    const currentQuestion = allQuestions[quizState.currentQuestionIndex];
    const newAnswer: QuizAnswer = {
      questionId: currentQuestion.id,
      selectedPoints: points,
    };

    const updatedAnswers = [...quizState.answers, newAnswer];
    const newTotalScore = quizState.totalScore + points;

    // Atualizar score da fase atual
    let updatedState = { ...quizState };
    if (currentQuestion.phase === 1) {
      updatedState.phase1Score += points;
    } else if (currentQuestion.phase === 2) {
      updatedState.phase2Score += points;
    } else if (currentQuestion.phase === 3) {
      updatedState.phase3Score += points;
    } else if (currentQuestion.phase === 4) {
      updatedState.phase4Score += points;
    }

    updatedState.answers = updatedAnswers;
    updatedState.totalScore = newTotalScore;

    // Verificar se deve mostrar micro-feedback
    const microFeedback = microFeedbacks.find(
      (mf) => mf.phase === currentQuestion.phase && mf.triggerAfterQuestion === currentQuestion.id
    );

    if (microFeedback) {
      setQuizState({
        ...updatedState,
        currentStep: 'micro-feedback',
        showingMicroFeedback: true,
      });
      return;
    }

    // Verificar se terminou a fase
    const nextQuestionIndex = quizState.currentQuestionIndex + 1;
    const nextQuestion = allQuestions[nextQuestionIndex];

    if (nextQuestion && nextQuestion.phase !== currentQuestion.phase) {
      // Terminou a fase, mostrar diagnóstico
      setQuizState({
        ...updatedState,
        currentStep: 'phase-diagnostic',
        showingPhaseDiagnostic: true,
        currentQuestionIndex: nextQuestionIndex,
      });
      return;
    }

    // Verificar se terminou todas as perguntas
    if (nextQuestionIndex >= allQuestions.length) {
      // Mostrar diagnóstico da última fase
      setQuizState({
        ...updatedState,
        currentStep: 'phase-diagnostic',
        showingPhaseDiagnostic: true,
        currentQuestionIndex: nextQuestionIndex,
      });
      return;
    }

    // Continuar para próxima pergunta
    setQuizState({
      ...updatedState,
      currentQuestionIndex: nextQuestionIndex,
      currentPhase: nextQuestion.phase,
    });
  };

  const handleBackQuestion = () => {
    if (quizState.currentQuestionIndex > 0) {
      const lastAnswer = quizState.answers[quizState.answers.length - 1];
      const lastQuestion = allQuestions[quizState.currentQuestionIndex - 1];
      const updatedAnswers = quizState.answers.slice(0, -1);

      let updatedState = { ...quizState };
      if (lastQuestion.phase === 1) {
        updatedState.phase1Score -= lastAnswer.selectedPoints;
      } else if (lastQuestion.phase === 2) {
        updatedState.phase2Score -= lastAnswer.selectedPoints;
      } else if (lastQuestion.phase === 3) {
        updatedState.phase3Score -= lastAnswer.selectedPoints;
      } else if (lastQuestion.phase === 4) {
        updatedState.phase4Score -= lastAnswer.selectedPoints;
      }

      setQuizState({
        ...updatedState,
        currentQuestionIndex: quizState.currentQuestionIndex - 1,
        answers: updatedAnswers,
        totalScore: quizState.totalScore - lastAnswer.selectedPoints,
        currentPhase: lastQuestion.phase,
      });
    }
  };

  const handleContinueFromMicroFeedback = () => {
    const nextQuestionIndex = quizState.currentQuestionIndex + 1;
    const nextQuestion = allQuestions[nextQuestionIndex];

    setQuizState({
      ...quizState,
      currentStep: 'quiz',
      showingMicroFeedback: false,
      currentQuestionIndex: nextQuestionIndex,
      currentPhase: nextQuestion.phase,
    });
  };

  const handleContinueFromPhaseDiagnostic = () => {
    const nextQuestionIndex = quizState.currentQuestionIndex;

    // Se terminou todas as perguntas, ir para coleta de dados
    if (nextQuestionIndex >= allQuestions.length) {
      setQuizState({
        ...quizState,
        currentStep: 'data-collection',
        showingPhaseDiagnostic: false,
      });
      return;
    }

    // Continuar para próxima fase
    const nextQuestion = allQuestions[nextQuestionIndex];
    setQuizState({
      ...quizState,
      currentStep: 'quiz',
      showingPhaseDiagnostic: false,
      currentPhase: nextQuestion.phase,
    });
  };

  const handleDataSubmit = (data: UserData) => {
    setQuizState({
      ...quizState,
      currentStep: 'final-diagnostic',
      userData: data,
    });
  };

  const handleContinueToInvite = () => {
    setQuizState({ ...quizState, currentStep: 'invite' });
  };

  const handleFinish = () => {
    setQuizState({
      currentStep: 'intro',
      currentQuestionIndex: 0,
      currentPhase: 1,
      answers: [],
      userData: null,
      phase1Score: 0,
      phase2Score: 0,
      phase3Score: 0,
      phase4Score: 0,
      totalScore: 0,
      showingMicroFeedback: false,
      showingPhaseDiagnostic: false,
    });
  };

  // Função para obter conteúdo do diagnóstico baseado no score
  const getDiagnosticContent = (phase: number, score: number) => {
    const diagnostic = phaseDiagnostics.find((d) => d.phase === phase);
    if (!diagnostic) return '';

    const maxScore = phase === 1 ? 21 : 18; // Fase 1 tem 7 perguntas, outras têm 6
    const percentage = (score / maxScore) * 100;

    if (percentage <= 33) {
      return diagnostic.getLowContent(score);
    } else if (percentage <= 66) {
      return diagnostic.getMediumContent(score);
    } else {
      return diagnostic.getHighContent(score);
    }
  };

  // Obter micro-feedback atual
  const getCurrentMicroFeedback = () => {
    const lastQuestion = allQuestions[quizState.currentQuestionIndex];
    return microFeedbacks.find(
      (mf) => mf.phase === lastQuestion.phase && mf.triggerAfterQuestion === lastQuestion.id
    );
  };

  // Obter diagnóstico da fase atual
  const getCurrentPhaseDiagnostic = () => {
    const lastQuestion = allQuestions[quizState.currentQuestionIndex - 1] || allQuestions[allQuestions.length - 1];
    const phase = lastQuestion.phase;
    const diagnostic = phaseDiagnostics.find((d) => d.phase === phase);
    
    if (!diagnostic) return null;

    let score = 0;
    if (phase === 1) score = quizState.phase1Score;
    else if (phase === 2) score = quizState.phase2Score;
    else if (phase === 3) score = quizState.phase3Score;
    else if (phase === 4) score = quizState.phase4Score;

    const content = getDiagnosticContent(phase, score);

    return {
      title: diagnostic.title,
      content,
      phase,
    };
  };

  return (
    <>
      {quizState.currentStep === 'intro' && <QuizIntro onStart={handleStartQuiz} />}

      {quizState.currentStep === 'quiz' && (
        <QuizQuestion
          question={allQuestions[quizState.currentQuestionIndex]}
          questionNumber={quizState.currentQuestionIndex + 1}
          totalQuestions={allQuestions.length}
          onAnswer={handleAnswer}
          onBack={quizState.currentQuestionIndex > 0 ? handleBackQuestion : undefined}
        />
      )}

      {quizState.currentStep === 'micro-feedback' && (() => {
        const feedback = getCurrentMicroFeedback();
        return feedback ? (
          <MicroFeedback
            title={feedback.title}
            content={feedback.content}
            onContinue={handleContinueFromMicroFeedback}
          />
        ) : null;
      })()}

      {quizState.currentStep === 'phase-diagnostic' && (() => {
        const diagnostic = getCurrentPhaseDiagnostic();
        return diagnostic ? (
          <PhaseDiagnostic
            title={diagnostic.title}
            content={diagnostic.content}
            phase={diagnostic.phase}
            onContinue={handleContinueFromPhaseDiagnostic}
          />
        ) : null;
      })()}

      {quizState.currentStep === 'data-collection' && (
        <DataCollection onSubmit={handleDataSubmit} />
      )}

      {quizState.currentStep === 'final-diagnostic' && quizState.userData && (
        <FinalDiagnostic
          phase1Content={getDiagnosticContent(1, quizState.phase1Score)}
          phase2Content={getDiagnosticContent(2, quizState.phase2Score)}
          phase3Content={getDiagnosticContent(3, quizState.phase3Score)}
          phase4Content={getDiagnosticContent(4, quizState.phase4Score)}
          totalScore={quizState.totalScore}
          userName={quizState.userData.name}
          onContinue={handleContinueToInvite}
        />
      )}

      {quizState.currentStep === 'invite' && quizState.userData && (
        <Invite userName={quizState.userData.name} onFinish={handleFinish} />
      )}
    </>
  );
}
