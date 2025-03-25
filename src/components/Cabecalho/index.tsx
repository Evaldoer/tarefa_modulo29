import styled from 'styled-components'

const CabecalhoEstilizado = styled.header`
  background-color: #282a35;
  color: white;
  padding: 20px;
  text-align: center;
`

const Cabecalho = () => (
  <CabecalhoEstilizado>
    <h1>EBAC Jobs</h1>
  </CabecalhoEstilizado>
)

export default Cabecalho
