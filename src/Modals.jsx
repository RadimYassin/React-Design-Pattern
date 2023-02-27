import React, { useState } from 'react'
import styled from 'styled-components'
const Modalbg = styled.div`
position:fixed;
z-index:1;
left:0;
top:0;
width:100%;
height:100%;
overflow:auto;
background: #939393;
    
`

const Modalbody = styled.div`
    background: #ffffff;
    margin:10% auto;
    padding:20px;
    width:50%;
`

export default function Modals({ children }) {
    const [show, setShow] = useState(false)
    return (
        <>
           <button onClick={()=>setShow(true)}>show</button>
            {show && <Modalbg onClick={()=>setShow(false)} >
                         <Modalbody onClick={(e)=>e.stopPropagation()}>
                            <button onClick={()=>setShow(flase)}>x</button>
                                {children}
                          </Modalbody>
                      </Modalbg>}

        </>
    )
}
