import React from 'react';
import PropTypes from 'prop-types';
import s from './Title.module.css';

const Title = ({ text }) => <h2 className={s.title}>{text}</h2>;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
