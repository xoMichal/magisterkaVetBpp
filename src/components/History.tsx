import React from 'react';
import "./History.css"

interface HistoryProps {
  history: { question: string; answer: string }[];
}

const History: React.FC<HistoryProps> = ({ history }) => {
  return (
    <div className="history">
    <h2>Historia</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <strong>Pytanie:</strong> {item.question} | <strong>Odpowiedź:</strong> {item.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
