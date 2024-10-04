import React from 'react'
class ClassComponent extends React.Component{
    constructor(){
        super();
         this.state={
                counter:10,
                name:'Rajat'

         }
    }
    name='Sejal';
    inc=()=>{
        this.setState({counter:this.state.counter+1})
    }
    render(){

        return <div>
        <h3>I am a class component</h3>
        <h4>i am {this.name}</h4>
        <h5> {this.props.city}'s score is : {this.props.myscore}</h5>
        <b>Counter: {this.state.counter}</b> <br/>
        <button onClick={this.inc}>+</button>
        </div>
    }
}
export default ClassComponent;