import React, { useState } from 'react'

function Conditionalrendering() {
    const [loggdedIn,setLoggedIn]=useState(false)
    let notifications=0;
    // if(loggdedIn){
    //   return <GreetUser/>
    // }else{
    //   return <GreetGuest/>
    // }
    const toggle =()=>{
        setLoggedIn(!loggdedIn)
        // ! --> negation . opposite 
    }
    return (
        <div>
            <h3>{loggdedIn?<GreetUser/>:<GreetGuest/>}</h3>
                <h1>Welcome {loggdedIn ? "User" : "Guest"} ! </h1>
                <button onClick={toggle}> {loggdedIn?"Logout":"Login"} </button>
                {notifications>0 && <b>You have {notifications} notifications!</b>}
        </div>
    )
}

function GreetUser(){
    return <h1>Welcome User!</h1>
}
function GreetGuest(){
    return <h1>Welcome Guest!</h1>
}
export default Conditionalrendering
