import { Container } from "./styles";
import defaultAvatar from '../../assets/avatar_placeholder.svg'

export function Comment({data}){

 return (
  <Container>
    <img src={ data.imagemUsuario ? `https://ofertaquente.com.br/${data.imagemUsuario}` : defaultAvatar} alt="" />
    <div>
      <strong>{data.nameUsuario}</strong>
      <p>{data.mensagem}</p>
    </div>
  </Container>
 )
}