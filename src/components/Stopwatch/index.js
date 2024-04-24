import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, sec: 0}

  reset = () => {
    const min = 0

    this.setState(prevState => ({minutes: min}))
  }

  start = () => {
    this.timerid = setInterval(this.tick, 1000)
  }

  stop = () => {
    clearInterval(this.timerid)
  }

  tick = () => {
    this.setState(prev => ({minutes: prev.minutes + 1}))
  }

  render() {
    const {minutes, sec} = this.state
    return (
      <div className="appcontainer">
        <h1>Stopwatch</h1>
        <div className="watchcontainer">
          <div className="imgcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="Stopwatch"
              className="watch"
            />
            <p>Timer</p>
          </div>
          <h4>
            {sec}0:0{minutes}
          </h4>
          <button onClick={this.start} className="startbtn" type="button">
            start
          </button>
          <button className="stopbtn" type="button" onClick={this.stop}>
            stop
          </button>
          <button className="resetbtn" type="button" onClick={this.reset}>
            reset
          </button>
        </div>
      </div>
    )
  }
}
export default Stopwatch
