import React, { useState } from 'react'

export default function UncontrolledOnboardFlow({children,onFinsh}) {

    const [onboardData,setOnboardData]=useState({})
    const  [index,setIndex]=useState(0)

  const goTonext=()=>{
        setIndex(index+1)
  }
    const currentChlid=React.Children.toArray(children)[index];
   if (React.isValidElement(currentChlid)) {
              return React.cloneElement(currentChlid,{goTonext})
   }
     
     return currentChlid;


}
