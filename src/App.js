import React, { Component } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import Statistics from './components/Statistics';
import Title from './components/Title';

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  onLeaveFeedback = event => {
    const feedback = event.target.textContent;

    if (feedback === 'Good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    } else if (feedback === 'Neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    } else if (feedback === 'Bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  countTotalFeedback() {
    const total = Object.values(this.state).reduce(
      (acc, item) => acc + item,
      0,
    );

    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = total ? Math.round((good / total) * 100) : 0;

    return percentage;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['Good', 'Neutral', 'Bad'];
    return (
      <section>
        <Title text="Please leave feedback" />
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Title text="Statistics" />
        {this.countPositiveFeedbackPercentage() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </section>
    );
  }
}

export default App;
