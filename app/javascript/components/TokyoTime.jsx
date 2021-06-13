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
      <p className="App-tokyo-time">
        In tokyo, it is : {this.state.time.toLocaleString('en-US', { timeZone: 'JST' })}.
      </p>
    );
  }
}

export default TokyoTime;