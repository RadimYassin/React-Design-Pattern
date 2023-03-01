import React from 'react'

function UncontrolledForm() {
 const text=React.createRef()
 const age=React.createRef()
 const haire=React.createRef()
    const handelSubmit=(e)=>{
      
       console.log(text.current.value);
       console.log(age.current.value);
       console.log(haire.current.value);
       e.preventDefault()
    }
  return (
    <form onSubmit={handelSubmit}>
        <input type="text"  name='name'  placeholder='name' ref={text} />
        <input type="number"  name='age'  placeholder='age'  ref={age}/>
        <input type="text"  name='hairecolor'  placeholder='Hairecolor' ref={haire} />
        <input type="submit" value="submit" />
    </form>
  )
}

export default UncontrolledForm
