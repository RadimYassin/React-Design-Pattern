import React from 'react'

export default function ControlledOnboardFlow({children,onFinsh,index,onNext}) {
   

  const goTonext=(stepdata)=>{
 onNext(stepdata)
        
  }
    const currentChlid=React.Children.toArray(children)[index];
   if (React.isValidElement(currentChlid)) {
              return React.cloneElement(currentChlid,{goTonext})
   }
     
     return currentChlid;


}
