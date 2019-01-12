import React, {Component} from 'react';

import './Ball.css'

class Ball extends Component{
  state = {
    //傾きの値
    pos_x: 1,
    pos_y: 1,
    //ボールの位置
    state_bottom: 0,
    state_left: 0
  };

  move(){
  //縦方向の転がしモーション
    if( this.state.pos_x <= -5 && -80 <= this.state.pos_x && (window.parent.screen.height-100) >= this.state.state_bottom ){
      this.setState({
        state_bottom: this.state.state_bottom + 3
      });
      console.log("katatata");
    } else if( this.state.pos_x >= 5 && 80 >= this.state.pos_x && 0 <= this.state.state_bottom ) {
      this.setState({
        state_bottom: this.state.state_bottom - 3
      });
      console.log("katamuki");
    }
  //横方向の動きモーション
    if( this.state.pos_y >= 5 && 60 >= this.state.pos_y && (window.parent.screen.width-100) >= this.state.state_left ) {
      this.setState({
        state_left: this.state.state_left + 3
      });
    } else if( this.state.pos_y <= -5 && -80 <= this.state.pos_y && 0 <= this.state.state_left ) {
      this.setState({
        state_left: this.state.state_left - 4
      });
    }
  }

  componentDidMount () {
    window.addEventListener("deviceorientation", event => {
        // ジャイロセンサーの値が変化
        this.setState({
            pos_x: event.beta,
            pos_y: event.gamma,
            pos_z: event.alpha
        });
    });
    this.interval = setInterval(() => this.move(), 1);  //1時間毎にstate内の時間を更新
  }

  render(){
    var style = {
      bottom: this.state.state_bottom + "px",
      left: this.state.state_left + "px"
    }
    return(
      <div className="ball" style={style}></div>
    );
  }
}
export default Ball;