import React, { useState } from 'react';

const questions = [
  { color: '#FF0000', correctAnswer: 'vermelho' },  // Red
  { color: '#FFFF00', correctAnswer: 'amarelo' },  // Yellow
  { color: '#0000FF', correctAnswer: 'azul' }      // Blue
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = () => {
    if (userAnswer.toLowerCase() === questions[currentQuestion].correctAnswer.toLowerCase()) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer('');
    } else {
      setShowResult(true);
    }
  };

  const handleChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswer('');
    setScore(0);
    setShowResult(false);
  };

  return (
    <div>
      {showResult ? (
        <div>
          <h2>Resultado:</h2>
          <p>Você acertou {score} de {questions.length} questões.</p>
          <p>{score < questions.length / 2 ? "Você pode ter daltonismo severo." : "Você provavelmente não tem daltonismo severo."}</p>
          <button onClick={resetQuiz}>Tentar Novamente</button>
        </div>
      ) : (
        <div>
          <h2>Pergunta {currentQuestion + 1}:</h2>
          <p>Qual é a cor deste quadrado?</p>
          <div style={{ width: '100px', height: '100px', backgroundColor: questions[currentQuestion].color }}></div>
          <input type="text" value={userAnswer} onChange={handleChange} />
          <button onClick={handleAnswer}>Responder</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;



