import React, { PureComponent } from 'react'
import Hoc from './hoc'
class ButtonHover extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const {counter,inc}=this.props
        return (
            <h1 onMouseOver={inc}>Hovered {counter} times</h1>
        )
    }
}

export default Hoc(ButtonHover)