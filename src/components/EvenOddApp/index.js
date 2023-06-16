// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          {count % 2 === 0 ? (
            <p className="para">Count is Even</p>
          ) : (
            <p className="para">Count is Odd</p>
          )}
          <button type="button" onClick={this.onIncrement} className="button">
            Increment
          </button>
          <p className="line">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
