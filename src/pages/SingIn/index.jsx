import { useState } from "react";
import { Container, Content, StorageInfo, UserInfo } from "./styles";
import {Link} from 'react-router-dom'

import {FiUser, FiLock} from 'react-icons/fi'
import {useAuth} from '../../hooks/auth'

import logo from '../../assets/logo-sem-fundo.ico';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SingIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {singIn} = useAuth();
  
  function handleSingIn() {
    singIn({email, password});
  }
  return (
    <Container>
      <Content>
        <StorageInfo>
          <img src={logo} alt="" />
          <h1>As melhores ofertas estão aqui</h1>
          <h2>Faça Seu Login</h2>
        </StorageInfo>
        <UserInfo>
          <Input 
            icon={FiUser} 
            placeholder="E-mail" 
            singIn
            onChange={e => setEmail(e.target.value)}
          />
          <Input 
            icon={FiLock} 
            placeholder="Senha" 
            type='password' 
            singIn
            onChange={e => setPassword(e.target.value)}
          />
          <Button 
            title="Entrar" 
            onClick={handleSingIn}
          />
          <Link to="/register">Criar conta</Link>
        </UserInfo>
      </Content>
    </Container>
  )
}