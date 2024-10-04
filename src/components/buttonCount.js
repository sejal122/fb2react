import React, { PureComponent } from 'react'
import Hoc from './hoc'
class ButtonCount extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const {counter,inc}=this.props
        return (
            <button onClick={inc}>Clicked {counter} times</button>
        )
    }
}

export default Hoc(ButtonCount)