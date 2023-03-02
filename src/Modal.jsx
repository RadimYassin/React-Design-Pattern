import React,{useState} from 'react';
import styled from 'styled-components';

const ModalBg=styled.div`
position:fixed;
z-index:1;
left: 0;
top:0;
width:100%;
height:100%;
overflow:auto;
background-color: #b91a1a ;
`
const ModalBody=styled.div`
background-color:white;
margin:10% auto;
padding:20px;
width:50%;
`
export default function Modal({children}) {
  const [show,setShow]=useState(false)
  return (
  <>  
   <button onClick={()=>setShow(true)}>show</button>
    {show && 
    <ModalBg onClick={()=>setShow(false)}>
      <ModalBody onClick={e=>e.stopPropagation}>
          <button onClick={()=>setShow(false)}>hide</button>
         {children}
      </ModalBody>
      
    </ModalBg>}
    </>
  )
}
