import React from "react"

class TokyoTime extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.tokyo_time
    };
    console.log(this.props.tokyo_time);
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
      console.log(state.time);
      let updated_tokyo_time = new Date(state.time);

      console.log(typeof updated_tokyo_time);
      console.log(updated_tokyo_time.getSeconds());
      updated_tokyo_time = updated_tokyo_time.setSeconds(updated_tokyo_time.getSeconds() + 1)
      console.log(new Date(updated_tokyo_time))
      return { time: updated_tokyo_time};
    });
  }

  render() {
    return (
      <p className="App-tokyo-time">
        In tokyo, it is : {this.state.time}.
      </p>
    );
  }
}

export default TokyoTime;