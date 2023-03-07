import React, { Component } from 'react';
import Notification from '../Notification';
import FeedbackStatistics from '../FeedbackStatistics';
import FeedbackButtons from '../FeedbackButtons';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => {
      acc += value;
      return acc;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    let percent = 0;
    const total = this.countTotalFeedback();
    percent = Math.round((this.state.good / total) * 100);
    return percent;
  };

  handleClick = event => {
    const name = event.target.name;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <h2>Please leave feedback</h2>
        <FeedbackButtons options={this.state} handleClick={this.handleClick} />
        {this.countTotalFeedback() !== 0 ? (
          <FeedbackStatistics
            state={this.state}
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default Feedback;
