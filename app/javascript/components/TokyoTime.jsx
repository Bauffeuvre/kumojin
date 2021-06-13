import React from "react"

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
        <h2 className="Label">Tokyo, Japan:</h2>
        <p className="Tokyo-time">
         {this.state.time.toLocaleString('en-US', { timeZone: 'JST' })}
        </p>
      </div>
    );
  }
}

export default TokyoTime;