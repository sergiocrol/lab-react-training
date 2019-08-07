import React, { Component } from 'react'

class Dice extends Component {
  state = {
    dicePicture: '/img/dice3.png'
  }

  randomDice = () => {
    let newPic = '/img/dice-empty.png';
    this.setState({
      dicePicture: newPic
    })
    setTimeout(() => {
      newPic = `/img/dice${Math.floor(Math.random() * 6) + 1}.png`
      this.setState({
        dicePicture: newPic
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        <img onClick={this.randomDice} src={this.state.dicePicture} alt="" />
      </div>
    )
  }
}

export default Dice;