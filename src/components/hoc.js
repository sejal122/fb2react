import React, { PureComponent } from 'react'

//where a function takes a component as an argument and returns a new component

const Hoc= (OriginalComponent) =>{

class NewComponent extends React.PureComponent{
    constructor(){
        super();
        this.state={
            counter:0
        }
    }
     increment=()=>{
      this.setState(Prevstate=>{
        return{ counter:Prevstate.counter+1}
      })
    }
    render(){
        return <OriginalComponent counter={this.state.counter} inc={this.increment}/>
    }
}

return NewComponent;
}

export default Hoc