import React, { PureComponent } from 'react'

class ErrorBoundary extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
            return {
                hasError:true
            }
    }
    componentDidCatch(error,info){
            console.log(error)
            console.log(info)
    }
    render() {
        if(this.state.hasError){
            return (
                    <h4>Something went wrong!</h4>
                )   
        }
        return this.props.children
       
    }
}

export default ErrorBoundary