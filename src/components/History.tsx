import React from 'react';
import './History.css';

interface HistoryItem {
  question: string;
  answers: string[];
  selectedAnswer: string;
}

interface HistoryProps {
  history: HistoryItem[];
}

const History: React.FC<HistoryProps> = ({ history }) => {
  return (
    <div className="history">
      <h2>Historia</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <strong>Pytanie:</strong> {item.question} | <strong>Odpowiedzi:</strong> {item.answers.join(', ')} |{' '}
            <strong>Wybrana odpowiedź:</strong> {item.selectedAnswer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
