import styled from 'styled-components'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const ItemVaga = styled.li`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin-bottom: 16px;
`

const TituloVaga = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`

const ListaDetalhes = styled.ul`
  padding-left: 16px;
  margin-bottom: 12px;
`

const LinkVaga = styled.a`
  display: inline-block;
  padding: 8px 12px;
  background-color: #4476bf;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background-color: #365899;
  }
`

const Vaga = (props: Props) => (
  <ItemVaga>
    <TituloVaga>{props.titulo}</TituloVaga>
    <ListaDetalhes>
      <li>Localização: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratação: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ListaDetalhes>
    <LinkVaga href="#">Ver detalhes e candidatar-se</LinkVaga>
  </ItemVaga>
)

export default Vaga
