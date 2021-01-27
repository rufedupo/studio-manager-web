import styled from 'styled-components'

const Background = styled.div`
  background-color: ${({theme}) => theme.colors.mainBg};
  flex: 1;
  background-size: cover;
  background-position: center;
`

export default Background