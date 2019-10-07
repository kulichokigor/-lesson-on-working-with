import React from 'react';
import './App.css';


const styleCount = {
  margin:'25px auto',
  width:'510px',
  textAlign:'center',
}

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      counter:0
    }
  }
  reset(){
    this.setState({
      counter: 0
    })
  }
  updateCount(count){
    this.setState({
      counter: this.state.counter + count
    })
  }
  funcStyleCounter(){
    if(this.state.counter>0){
      return {color:'#13bed8'}
    }else if(this.state.counter<0){
      return {color:'#e32e69'}
    }else{return {color:'inherit'}}
  }
  render(){
    
  return (
    <div>
      <div style={styleCount}>
        <h1 style={{color:'#09995d'}}>Счетчик: <span style={this.funcStyleCounter()}>{this.state.counter}</span></h1>
        <button onClick={()=>this.updateCount(-1)}>Уменьшить -1</button>
        <button onClick={()=>this.updateCount(1)}>Повысить +1</button>
        <button onClick={()=>this.reset()}>Сбросить</button>
      </div>
    </div>
  );
}
}

export default App;
