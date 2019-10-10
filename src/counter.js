import React from 'react';
import {connect} from 'react-redux'

class ComponentCounter extends React.Component{
    render(){
        return(
            <div style={{padding:'20px', border:'1px solid grey', width:'520px', margin:'auto',textAlign:'center'}}>
                <h1>Counter {this.props.counter}</h1>
                <button onClick={()=>this.props.toChangeCount(5)}>ADD</button>
                <button onClick={()=>this.props.toChangeCount(-5)}>SUB</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        counter:state.reduser2.counter
    }
}

function mapDispatchToProps(displatch){
    return{
        toChangeCount: (number)=>displatch({type:'ADD_REDUSER_2', payload:number})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentCounter)