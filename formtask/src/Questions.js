import React, { useState } from 'react';

function Questions({ onAnswerChange }) {
  return (
    <div className="font-bold font-custom">
      <Question question="How would you describe the practical exposure given on subject topics?"  onAnswerChange={onAnswerChange} />
      <Question question="How would you describe the regularity of your deparment staffs?"  onAnswerChange={onAnswerChange} />
      <Question question="How good are the teaching methods/lab facilities given to you? "  onAnswerChange={onAnswerChange} />
    </div>
  );
}

function Question({ question, onAnswerChange }) {
  const [answer, setAnswer] = useState('');

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
    onAnswerChange(question, event.target.value);
  };

  return (
    <div>
      <p>{question}</p>
      <div>
        <label>
          <input
            type="radio"
            value="Good"
            checked={answer === 'Good'}
            onChange={handleAnswerChange}
          />
          Good
        </label>
        <label>
          <input
            type="radio"
            value="Very Good"
            checked={answer === 'Very Good'}
            onChange={handleAnswerChange}
          />
          Very Good
        </label>
        <label>
          <input
            type="radio"
            value="Poor"
            checked={answer === 'Poor'}
            onChange={handleAnswerChange}
          />
          Poor
        </label>
      </div>
    </div>
  );
}

export default Questions;


