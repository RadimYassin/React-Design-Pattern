

export default function RegulerList({
    items,
    resourceName,
    ItemC
}) {
  return (
  <>
     {
        items.map((item,ind)=>(<ItemC key={ind} {...{[resourceName]:item}} />))
     }
  </>
  )
}
