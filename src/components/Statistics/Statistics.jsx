import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <ul className={s.statList}>
    <li>
      <p> Good: {good}</p>
    </li>
    <li>
      <p> Neutral: {neutral}</p>
    </li>
    <li>
      <p> Bad: {bad}</p>
    </li>
    <li>
      <p> Total: {total}</p>
    </li>
    <li>
      <p> Positive Feedback: {positiveFeedback}%</p>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.node.isRequired,
};

export default Statistics;
