import styled from 'styled-components'

const Widget = styled.div`
  position: absolute;
  left: 40%;
	top: 40%;
  position: center;
  background-color: #333333;
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`

export default Widget