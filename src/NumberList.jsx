

export default function NumberList({
    items,
    resourceName,
    ItemC
}) {
  return (
  <>

     {
        items.map((item,ind)=>(
        
        <div key={ind} > <ItemC key={ind} {...{[resourceName]:item}} /></div>
      
        
        
        ))
     }
  </>
  )
}
