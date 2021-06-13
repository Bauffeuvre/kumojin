import React from 'react'
import moment from 'moment'

class TokyoTime extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.tokyo_time
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
    this.setState((state) => {
      let updated_tokyo_time = new Date(state.time);
      updated_tokyo_time.setSeconds(updated_tokyo_time.getSeconds() + 1)
      return { time: updated_tokyo_time };
    });
  }

  render() {
    return (
      <div className="Time-container-tokyo">
        <h2 className="Label">
          Tokyo, Japan:
        </h2>
        <p className="Day">
          {moment(this.state.time).format('dddd').toUpperCase()}
        </p>
        <p className="Time">
          {moment(this.state.time).format('LTS')}
        </p>
        <p className="Date">
          {moment(this.state.time).format("MMM Do YY")}
        </p>
      </div>
      
    );
  }
}

export default TokyoTime;