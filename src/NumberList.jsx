

export default function NumberList({
    items,
    resourceName,
    ItemC
}) {
  return (
  <>

     {
        items.map((item,ind)=>(
        
        <> <h1>{ind+1}</h1> <ItemC key={ind} {...{[resourceName]:item}} /></>
      
        
        
        ))
     }
  </>
  )
}
