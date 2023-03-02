import React ,{useState} from 'react'
import ControlledModal from './Modals/ControlledModal'
import ControlledOnboardFlow from './OnboardFlow/ControlledOnboardFlow'
import UncontrolledOnboardFlow from './OnboardFlow/UncontrolledOnboardFlow'
const SetpOne =({goTonext})=>(
    <>
     <h1>step 1</h1>
     <button onClick={()=>goTonext({name:"john"})}>gotonext</button>
     </>
)
const SetpTow =({goTonext})=>(
    <>
     <h1>step 3</h1>
     <button  onClick={()=>goTonext({age:100})}>gotonext</button>
     </>
)
const SetpTree =({goTonext})=> (
    <>
     <h1>step 3</h1>
     <button onClick={()=>goTonext({color:"green"})}>gotonext</button>
     </>
)
function App3() {
  const [onboardData,setOnboardData]=useState({})
  const  [index,setIndex]=useState(0)
  const onNext=(stepdata)=>{
   setOnboardData({...onboardData,...stepdata})
   setIndex(index+1)
  }
  return (
    <div>
        HHH
        <ControlledOnboardFlow onNext={onNext} index={index}>
            <SetpOne/>
            <SetpTow/>
            <SetpTree/> 
        </ControlledOnboardFlow>
    </div>
  )
}

export default App3

