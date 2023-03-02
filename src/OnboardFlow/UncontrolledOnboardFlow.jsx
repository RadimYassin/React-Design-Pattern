import React, { useState } from 'react'

export default function UncontrolledOnboardFlow({children,onFinsh}) {

    const [onboardData,setOnboardData]=useState({})
    const  [index,setIndex]=useState(0)

  const goTonext=(stepdata)=>{
    const nextIndex=index+1;
    const upadateData={
      ...onboardData,
      ...stepdata
    };
    console.log(upadateData);
    if (nextIndex <children.length) {
         setIndex(nextIndex)
    }else{
      onFinsh(upadateData)
    }

setOnboardData(upadateData)
        
  }
    const currentChlid=React.Children.toArray(children)[index];
   if (React.isValidElement(currentChlid)) {
              return React.cloneElement(currentChlid,{goTonext})
   }
     
     return currentChlid;


}
