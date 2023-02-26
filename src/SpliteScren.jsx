
import styled from 'styled-components'

const Conteiner=styled.div`
    display:flex;
`
const Box=styled.div`
    flex:${props=>props.with};
`


function SpliteScren({
    children,
    leftwith=2,
    rightwith=1

}) {

    const [left,right]=children;
  return (
      <Conteiner >
        <Box with={leftwith} >
           {left}
        </Box>
        <Box  with={rightwith} >
           {right}
        </Box>
      </Conteiner>
  )
}

export default SpliteScren
