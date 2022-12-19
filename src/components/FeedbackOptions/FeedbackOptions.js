import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          title={option}
          key={option}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
