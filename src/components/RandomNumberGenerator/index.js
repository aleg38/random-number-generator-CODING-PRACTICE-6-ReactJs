// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerateBtn = () => {
    const getRandomNum = Math.ceil(Math.random() * 100)
    this.setState({count: getRandomNum})
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="counter-card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="generate-btn"
            type="button"
            onClick={this.onGenerateBtn}
          >
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
