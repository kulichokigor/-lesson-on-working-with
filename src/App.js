import React from 'react';
import './App.css';
import {connect} from 'react-redux';


const styleCount = {
  margin:'25px auto',
  width:'510px',
  textAlign:'center',
}

class App extends React.Component{
  // constructor(){
  //   super();
  //   this.state = {
  //     counter:0
  //   }
  // }
  // reset(){
  //   this.setState({
  //     counter: 0
  //   })
  // }
  // updateCount(count){
  //   this.setState({
  //     counter: this.state.counter + count
  //   })
  // }
  // funcStyleCounter(){
  //   if(this.state.counter>0){
  //     return {color:'#13bed8'}
  //   }else if(this.state.counter<0){
  //     return {color:'#e32e69'}
  //   }else{return {color:'inherit'}}
  // }
  render(){
    console.log(this.props)
  return(
    <div>
      <div style={styleCount}>
        <h1 style={{color:'#09995d'}}>Счетчик: <span>{this.props.counter}</span></h1>
        <button onClick={this.props.toSub}>Уменьшить -1 </button>
        <button onClick={this.props.toAdd}>Повысить +1 </button>
        <button onClick={this.props.onReset}>Сбросить</button>
      </div>
    </div>
  );
}
}

function mapStateToProps(state){
  return{
    counter:state.counter
  }
}

function mapDispatchToProps(dispatch){
  return{
    toAdd:()=>dispatch({type:'ADD'}),
    toSub:()=>dispatch({type:'SUB'}),
    onReset:()=>dispatch({type:'RES'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
