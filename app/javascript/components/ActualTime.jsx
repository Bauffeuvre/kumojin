import React from 'react'
import moment from 'moment'

class ActualTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    return (
      <div className="Time-container-actual">
        <h2 className="Label">
          Local time:
        </h2>
        <p className="Actual-day">
          {moment(this.state.time).format('dddd')}
        </p>
        <p className="Actual-time">
          {moment(this.state.time).format('LTS')}
        </p>
        <p className="Actual-date">
          {moment(this.state.time).format("MMM Do YY")}
        </p>
      </div>
    );
  }
}

export default ActualTime;