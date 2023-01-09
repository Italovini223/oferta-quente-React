import { Container, Content } from "./styles";
import {useAuth} from '../../hooks/auth';
import defaultAvatar from '../../assets/avatar_placeholder.svg'
import { useNavigate } from "react-router-dom";

export function UserDetails(){

  const {user} = useAuth();
  const navigate = useNavigate();

 function handlePage() {
  if(!user){
   
    navigate("/singIn");
  } else {
    navigate("/profile");
  }
  
 }

  return(
    <Container onClick={handlePage}>
      <Content>
        <img src={defaultAvatar } alt="" />
        <strong>Perfil</strong>
      </Content>
    </Container>
  )
}