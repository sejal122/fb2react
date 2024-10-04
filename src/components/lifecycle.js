import React, { PureComponent } from 'react'

class Lifecycle extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
         color:'red'
        }
    }
// static getDerivedStateFromProps(props,state){
// return {color:props.color}
// }
componentDidMount(){ // runs after component is rendered
    setTimeout(()=>{
        this.setState({color:'black'})
    },2000)
}
shouldComponentUpdate(){ //stop component from rendering any update
    return true
}
getSnapshotBeforeUpdate(prevProps,prevState){ // to access previous state/props.
console.log("before update the color was : " + prevState.color)
}
componentDidUpdate(){ //will run after component is updated
    console.log('updated color is : ' + this.state.color)
}

    render() {
        return (
            <>
            <h1>Color is : {this.state.color}</h1>
            </>
        )
    }
}

export default Lifecycle