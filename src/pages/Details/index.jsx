import { Container, Header } from "./styles";

import logoImg from '../../assets/oferta quente branco.svg'
export function Details() {
  return (
    <Container>
     <Header>
      <img src={logoImg} alt="" />
      <h1>Oferta Quente</h1>
     </Header>
    </Container>
  )
}