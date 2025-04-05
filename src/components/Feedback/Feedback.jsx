import React from "react";
import "./Feedback.module.css";

function Feedback({ stats, total, positivePct }) {
  return (
    <div className="container-feedback">
      <p>Good: 👍 {stats.good}</p>
      <p>Bad: 👎 {stats.bad}</p>
      <p>Neutral: 😐 {stats.neutral}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePct}%</p>
    </div>
  );
}

export default Feedback;
