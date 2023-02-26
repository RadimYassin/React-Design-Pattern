import React from 'react'

export default function LargePersonistItem({person}) {
    const {name,age}=person;
  return (
    <div>
        <p>name :{name} age :{age}</p>
    </div>
  )
}
