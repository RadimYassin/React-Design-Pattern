import SmallPersonistItem from "./person/SmallPersonistItem"
import LargePersonistItem from "./person/LargePersonistItem"
import RegulerList from "./RegulerList"

//import SpliteScren from "./SpliteScren"
const peaple= [
  {
  name:"Yassine1 ",
  age:21,
  hairColor:"brown",
  hobbies:["coding","golf"]
}
,
{
  name:"Yassine2 ",
  age:23,
  hairColor:"brown",
  hobbies:["medicine","bool"]
},
{
  name:"Yassine3 ",
  age:23,
  hairColor:"brown",
  hobbies:["swiming","driving"]
}


]

const products= [
  {
name:"product 1",
price:"$300",
dsc:"plaplapalapalapalapaa",
rating:4.5
}
,
{
  name:"product 2",
  price:"$400",
  dsc:"plaplapalapalapalapaa",
  rating:8.5
  },
  {
    name:"product 3",
    price:"$500",
    dsc:"plaplapalapalapalapaa",
    rating:3.6
    }


]

function App() {
 { /*const RightComponent=()=>{
             return <h1 style={{backgroundColor:"red"}}>right</h1>
  }
  const LeftComponent=()=>{
    return <h1 style={{backgroundColor:"green"}}>left</h1>
  }
  return (<SpliteScren>
           <RightComponent/>
           <LeftComponent/>
  </SpliteScren>)*/}
  return (<>

                <RegulerList items={peaple} resourceName="person" ItemC={SmallPersonistItem} />
                <RegulerList items={peaple} resourceName="person" ItemC={LargePersonistItem} />
          
  
          </>)
}

export default App

