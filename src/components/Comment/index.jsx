import { Container } from "./styles";

export function Comment({data}){
 return (
  <Container>
    <img src={`https://ofertaquente.com.br/${data.imagemUsuario}`} alt="" />
    <div>
      <strong>{data.nameUsuario}</strong>
      <p>{data.mensagem}</p>
    </div>
  </Container>
 )
}