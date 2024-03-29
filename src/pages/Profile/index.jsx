import { Container, Content, Functionalities, Header, UserDetails } from "./styles";
import {useAuth} from '../../hooks/auth'

import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { ButtonBack }  from '../../components/ButtonBack'

import defaultAvatar from '../../assets/avatar_placeholder.svg'

export function Profile(){
  const {user, singOut} = useAuth();
  const avatarUrl = user.imagem ? `https://ofertaquente.com.br/${user.imagem}` : defaultAvatar;
  const navigate = useNavigate();

  function handleSingOut(){
    singOut();
    navigate("/");
    
  }

  return (
    <Container>
      <Header>
        <ButtonBack
          title="Voltar"
          onClick={() => navigate(-1)}
        />
      </Header>
      <Content>
        <UserDetails>
          <img src={avatarUrl} alt="Imagem de perfil do usuário" />
          <span>{user.name}</span>
        </UserDetails>
        <Functionalities>
          <Button title="Editar perfil" previous onClick={() => navigate('/update')} />
          <Button title="Sair" onClick={handleSingOut}/>
        </Functionalities>
      </Content>
    </Container>
  )
}