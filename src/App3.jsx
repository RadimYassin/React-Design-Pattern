import React from 'react'
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
  return (
    <div>
        HHH
        <UncontrolledOnboardFlow onFinsh={data=>{console.log(data);
             alert("onbrding complete")
        
        }}>
            <SetpOne/>
            <SetpTow/>
            <SetpTree/> 
        </UncontrolledOnboardFlow>
    </div>
  )
}

export default App3
