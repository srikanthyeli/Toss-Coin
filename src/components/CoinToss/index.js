// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    ImgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    HeadsCount: 0,
    tailsCount: 0,
  }

  onClickTossButton = () => {
    const {HeadsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let updatedHeadsCount = HeadsCount
    let updatedTailsCount = tailsCount
    let tossImage = ''
    if (tossResult === 0) {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      updatedHeadsCount += 1
    } else {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      updatedTailsCount += 1
    }
    this.setState({
      ImgUrl: tossImage,
      HeadsCount: updatedHeadsCount,
      tailsCount: updatedTailsCount,
    })
  }

  render() {
    const {ImgUrl, HeadsCount, tailsCount} = this.state
    const totalCount = HeadsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={ImgUrl} className="Image-1" alt="toss result" />
          <button
            className="button"
            type="button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="para-1">Total: {totalCount}</p>
            <p className="para-1">Heads: {HeadsCount}</p>
            <p className="para-1">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
