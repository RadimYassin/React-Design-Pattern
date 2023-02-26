import SpliteScren from "./SpliteScren"

function App() {
  const RightComponent=()=>{
             return <h1 style={{backgroundColor:"red"}}>right</h1>
  }
  const LeftComponent=()=>{
    return <h1 style={{backgroundColor:"green"}}>left</h1>
  }
  return (<SpliteScren>
           <RightComponent/>
           <LeftComponent/>
         </SpliteScren>)
}

export default App
