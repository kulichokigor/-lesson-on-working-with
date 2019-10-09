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
  funcStyleCounter(){
    if(this.props.counter>0){
      return {color:'#13bed8'}
    }else if(this.props.counter<0){
      return {color:'#e32e69'}
    }else{return {color:'inherit'}}
  }
  render(){
  return(
    <div>
      <div style={styleCount}>
        <h1 style={{color:'#09995d'}}>Счетчик: <span style={this.funcStyleCounter()}>{this.props.counter}</span></h1>
        <button onClick={this.props.toSub}>Відняти -1 </button>
        <button onClick={this.props.toAdd}>Додати +1 </button>
        <button onClick={this.props.onReset}>Обнулити</button>
        <button onClick={this.props.toAddNumber.bind(this, 26)}>Додати 26</button>
        <button onClick={()=>this.props.toAddNumber(-33)}>Відняти 33</button>
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
    onReset:()=>dispatch({type:'RES'}),
    toAddNumber:(number)=>dispatch({type:'ADD_NUMBER', value: number})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
