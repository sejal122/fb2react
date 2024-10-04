import React from 'react'

function Lists() {
    let notifications =["Your parcel is dispatched" , "battery low" ,"Hi, drink water" ,"you have a new message","new notification"]
    const people = [
        {
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, 
      {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      },
       {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      }, 
      {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
      }, 
      {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];
    return (
        <div>
          {people.map((p)=>{
                return <div>
                    {p.name}<br/>
                    {p.profession}<hr/>
                    </div>
          })}
        </div>
    )
}

export default Lists
