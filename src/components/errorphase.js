import React from 'react'

function Errorphase(props) {
    if(props.car==='i10'){
        throw new Error('not a valid car ')
    }
    return (
        <div>
                {props.car}
        </div>
    )
}

export default Errorphase
