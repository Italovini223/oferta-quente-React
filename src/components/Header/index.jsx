import {useAuth} from '../../hooks/auth';
import { useNavigate } from "react-router-dom";

import { Container, Top,Bottom, Content, UserContent } from "./styles";

import {FiSearch} from 'react-icons/fi'
import logoImg from '../../assets/oferta quente branco.svg';

import { Button } from "../Button";
import { Input } from "../Input";
import {UserDetails} from '../UserDetails'


export function Header({onChange, value, children}){
  const {user} = useAuth();
  const navigate = useNavigate();

  function handleSingIn(){
    navigate("/SingIn")
  }
  return (
    <Container>
      <Content>
        <Top>
        <img src={logoImg} alt="" />
        <Input 
          type="text"
          placeholder="Digite Sua Busca"
          icon={FiSearch}
          onChange={onChange}
          value={value}
        />
      </Top>
      <Bottom>
        {children}
      </Bottom>
      </Content>
      <UserContent>
        {
          user ? <UserDetails /> : <Button title="Registre-se" onClick={handleSingIn} />
        }
      </UserContent>
    </Container>
  )
}