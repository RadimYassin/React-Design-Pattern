



export default function NumberList({
    items,
    resourceName,
    ItemC
}) {
  return (
  <>

     {
        items.map((item,ind)=>(
        
       <div key={ind}>
        <span>{ind}</span>
          <ItemC  {...{[resourceName]:item}} />
       </div>
      
        
        
        ))
     }
  </>
  )
}
