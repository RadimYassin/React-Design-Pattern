import React, { useState } from 'react'
import ControlledForm from './ControlledForm'
import Modal from './Modal'
import ControlledModal from './Modals/ControlledModal'
import UncontrolledForm from './UncontrolledForm'

export default function App2() {
    const [show,setShow]=useState(false)
    const onRequestClose=()=>{
        setShow(false)
    }
  return (
    <div>
      {/*    <ControlledForm/> <UncontrolledForm/>*/}
      <button onClick={e=>setShow(true)}>show</button>
       <ControlledModal show={show} onRequestClose={onRequestClose}>
            <p>hhelo</p>
       </ControlledModal>
    </div>
  )
}
