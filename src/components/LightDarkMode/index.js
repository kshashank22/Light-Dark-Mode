// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isCondition: true}

  onDarkMode = () => {
    this.setState(prevState => {
      console.log('ONDARKMODE')
      return {isCondition: false}
    })
  }

  onLightMode = () => {
    this.setState(prevState => {
      console.log('ONLIGHTMODE')
      return {isCondition: true}
    })
  }

  renderAuthButton = () => {
    const {isCondition} = this.state

    if (isCondition === true) {
      return (
        <div className="card-container">
          <h1 className="heading">Click To Change Mode</h1>
          <div>
            <button className="button" type="button" onClick={this.onDarkMode}>
              Light Mode
            </button>
          </div>
        </div>
      )
    }
    return (
      <div className="card-container2">
        <h1 className="heading2">Click To Change Mode</h1>
        <div>
          <button className="button" type="button" onClick={this.onLightMode}>
            Dark Mode
          </button>
        </div>
      </div>
    )
  }

  render() {
    return <div className="bg-container">{this.renderAuthButton()}</div>
  }
}
export default LightDarkMode
