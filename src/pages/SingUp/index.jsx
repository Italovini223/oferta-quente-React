import { Container, Content, StorageInfo, UserInfo } from "./styles";

import { FiUser, FiMail, FiSmartphone, FiLock } from "react-icons/fi";

import logo from '../../assets/logo-sem-fundo.ico'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { api } from "../../Service/api";
import { useNavigate } from "react-router-dom";

export function SingUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();

  const navigate = useNavigate();

  async function handleSingUp(){
    if(!name || !email || !password || !phoneNumber) {
      alert("Preencha todos os campos");
    }

    await api.post('/cadastrarUser', {
      name,
      email,
      password,
      telefone: String(phoneNumber)
    })
    .then(response => {
      if(response){
        alert("Cadastrado com sucesso")
      }

      navigate("/");
    })
    .catch(error => {
      if(error){
        alert("Não foi possível cadastrar")
      }
    })
  }
  return (
    <Container>
      <Content>
        <StorageInfo>
          <img src={logo} alt="" />
          <h2>Cadastre-se</h2>
        </StorageInfo>
        <UserInfo>
          <Input 
            placeholder='Digite o seu nome'
            icon={FiUser}
            singIn
            onChange={e => setName(e.target.value)}
          />
          <Input 
            placeholder='Digite o seu email'
            icon={FiMail}
            singIn
            onChange={e => setEmail(e.target.value)}
          />
          <Input 
            placeholder='Digite o seu telefone'
            icon={FiSmartphone}
            singIn
            type='number'
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <Input 
            placeholder='Digite a sua senha'
            icon={FiLock}
            singIn
            type='password'
            onChange={e => setPassword(e.target.value)}
          />

          <Button 
            title='Cadastrar' 
            onClick={handleSingUp} 
          />

          <a href="/">Fazer Login</a>

        </UserInfo>
      </Content>
    </Container>
  )
}