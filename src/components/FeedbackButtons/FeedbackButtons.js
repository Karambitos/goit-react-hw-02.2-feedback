import styles from './FeedbackButtons.module.css';
import PropTypes from 'prop-types';

const FeedbackButtons = ({ options, handleClick }) => {
  return (
    <div className={styles.buttonBox}>
      {Object.keys(options).map(el => (
        <button key={el} name={el} onClick={handleClick}>
          {el}
        </button>
      ))}
    </div>
  );
};

FeedbackButtons.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FeedbackButtons;
