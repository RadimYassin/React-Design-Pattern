import React, { useState,useEffect } from 'react'

function ControlledForm() {
      
    const [er,setEr]=useState('')
   const [name,setName]=useState('')
   const [age,setAge]=useState('')
   const [haire,setHaire]=useState('')

    const handelSubmit=(e)=>{
        e.preventDefault()
        console.log(name);
        console.log(age);
        console.log(haire);
    }

    useEffect((e)=>{
        if (name.length<2) {
             setEr("name must be tow or mor caracters ");
        }else{
            setEr('')
        }
    },[name])
    return (
        <form onSubmit={handelSubmit}>
            {
                er && <p>{er}</p>
            }
            <input
              type="text" 
              name='name'
              placeholder='name' 
              value={name}
              onChange={e=>setName(e.target.value)}
              
              />
            <input
            
            
             type="number"
              name='age'
              placeholder='age'
              value={age}
              onChange={e=>setAge(e.target.value)}
              
              />
            <input 
            type="text"
             name='hairecolor'
              placeholder='Hairecolor'
              value={haire}
              onChange={e=>setHaire(e.target.value)}
              />
            <input type="submit" value="submit" />
        </form>
    )
}

export default ControlledForm