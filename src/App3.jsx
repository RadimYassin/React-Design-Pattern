import React from 'react'
import UncontrolledOnboardFlow from './OnboardFlow/UncontrolledOnboardFlow'
const SetpOne =({goTonext})=>(
    <>
     <h1>step 1</h1>
     <button onClick={goTonext}>gotonext</button>
     </>
)
const SetpTow =({goTonext})=>(
    <>
     <h1>step 3</h1>
     <button onClick={goTonext}>gotonext</button>
     </>
)
const SetpTree =({goTonext})=> (
    <>
     <h1>step 3</h1>
     <button onClick={goTonext}>gotonext</button>
     </>
)
function App3() {
  return (
    <div>
        HHH
        <UncontrolledOnboardFlow>
            <SetpOne/>
            <SetpTow/>
            <SetpTree/> 
        </UncontrolledOnboardFlow>
    </div>
  )
}

export default App3
