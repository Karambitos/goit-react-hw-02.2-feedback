import styles from './FeedbackStatistics.module.css';
import PropTypes from 'prop-types';

const FeedbackStatistics = ({ state, total, positivePercentage }) => {
  return (
    <>
      <ul className={styles.feedbackList}>
        {Object.entries(state).map(([key, value]) => {
          return (
            <li key={key}>
              {key}: {value}
            </li>
          );
        })}
      </ul>
      <p>Total : {total} </p>
      <p>Positive feedback: {positivePercentage}%</p>
    </>
  );
};

FeedbackStatistics.propTypes = {
  state: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default FeedbackStatistics;
