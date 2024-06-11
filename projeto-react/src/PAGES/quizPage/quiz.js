import React, { useState } from 'react';

const questions = [
  { color: '#FF0000', correctAnswer: 'vermelho' },
  { color: '#0000FF', correctAnswer: 'azul' },
  { color: '#FFFF00', correctAnswer: 'amarelo' }
];

const typesOfColorBlindness = {
  "Deuteranopia": ["vermelho", "verde"],
  "Protanopia": ["vermelho", "azul"],
  "Tritanopia": ["azul", "amarelo"]
};

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [colorBlindnessType, setColorBlindnessType] = useState('');

  const handleAnswer = () => {
    if (userAnswer.toLowerCase() === questions[currentQuestion].correctAnswer.toLowerCase()) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer('');
    } else {
      setShowResult(true);
      determineColorBlindnessType();
    }
  }

  const determineColorBlindnessType = () => {
    let maxScore = 0;
    let maxType = '';
    for (const type in typesOfColorBlindness) {
      const commonColors = typesOfColorBlindness[type];
      const intersection = commonColors.filter(color => userAnswer.toLowerCase().includes(color));
      if (intersection.length > maxScore) {
        maxScore = intersection.length;
        maxType = type;
      }
    }
    setColorBlindnessType(maxType);
  }

  const handleChange = (event) => {
    setUserAnswer(event.target.value);
  }

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswer('');
    setScore(0);
    setShowResult(false);
    setColorBlindnessType('');
  }

  return (
    <div>
      {showResult ? (
        <div>
          <h2>Resultado:</h2>
          <p>Você acertou {score} de {questions.length} questões.</p>
          <p>Baseado nas suas respostas, você pode ter {colorBlindnessType || "um tipo de daltonismo desconhecido"}.</p>
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


