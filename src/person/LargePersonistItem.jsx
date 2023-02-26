import React from 'react'

export default function LargePersonistItem({person}) {
    const {name,age,hairColor,hobbies}=person;
  return (
    <div>
         <p>
            name:{name}

         </p>
         <h1>age :{age}</h1>
         <p>hair:{hairColor}</p>
         <h1>hobbies:</h1>
         <ul>
            {hobbies.map(h=><li key={h}>{h}</li>)}
         </ul>
    </div>
  )
}
