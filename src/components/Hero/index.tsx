import styled from 'styled-components'

const Formulario = styled.form`
  width: 100%;
  padding: 40px 0;
  background-color: #f8f9fa;
  text-align: center;
`

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`

const HeroTitulo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  line-height: 1.4;
`

const Hero = () => (
  <Formulario>
    <Container>
      <HeroTitulo>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitulo>
    </Container>
  </Formulario>
)

export default Hero
