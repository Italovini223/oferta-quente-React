import { Container, Content } from "./styles";
import {useAuth} from '../../hooks/auth';
import defaultAvatar from '../../assets/avatar_placeholder.svg'
import {CgLogOff} from 'react-icons/cg'
import { useNavigate } from "react-router-dom";

export function UserDetails(){

  const {user, singOut} = useAuth();
  const navigate = useNavigate();

  async function handleSingOut(){
    await singOut();
  }

  return(
    <Container>
      <Content>
        <img src={defaultAvatar } alt="" />
        <strong>Perfil</strong>
      </Content>
    </Container>
  )
}