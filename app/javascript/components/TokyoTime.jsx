import React from "react"

class TokyoTime extends React.Component {
  
  constructor(props) {
    super(props);
    let tokyo_time = (this.props.tokyo_time)
    tokyo_time = new Date(tokyo_time.toString)
    this.state = {
      time: this.props.tokyo_time
    };
    // console.log(this.props.tokyo_time);
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
      console.log(state);
      return { time: state.time + 1 };
    });
  }

  render() {
    return (
      <p className="App-clock">
        The actual time is : {this.state.time}.
      </p>
    );
  }
}

export default TokyoTime;