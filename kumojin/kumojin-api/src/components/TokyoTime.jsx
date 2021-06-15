import React from 'react'

import axios from 'axios';
import moment from 'moment';

class TokyoTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ""
    };
  }

  getTokyoTime() {
    axios.get('api/v1/pages')
    .then(response => {
      this.setState({ time: response.data["tokyo_time"] })
    })
    .catch(error => console.log(error))
  }
  componentDidMount() {
    this.getTokyoTime()
    console.log("toto");
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
      console.log(updated_tokyo_time);
      return { time: updated_tokyo_time };
    });
  }

  render() {
    console.log(moment(this.state.time).format('dddd').toUpperCase());
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