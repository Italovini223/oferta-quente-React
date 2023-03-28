import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { useNavigate } from 'react-router-dom'

import { Container, Avatar, Form, Header } from "./styles";
import { FaUserAlt, HiOutlineMail, AiFillPhone } from 'react-icons/all'

import { Input } from '../../components/Input'

import defaultAvatar from '../../assets/avatar_placeholder.svg'
import { Button } from '../../components/Button';
import { ButtonBack } from '../../components/ButtonBack';


export function Update(){
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState()

  const [avatar, setAvatar] = useState()


  const {user, updateUser} = useAuth();
  const navigate = useNavigate();


  async function handleUpdate(user) {

    const updatedUser = {
      admin: user.admin,
      id: user.id,
      name,
      email,
      imagem: user.imagem,
      telefone: number,
      token: user.token
    }

    await updateUser(updatedUser);
  }


  useEffect(() => {
    const {name, email, telefone, imagem} = user

    setName(name)
    setEmail(email)
    setNumber(telefone)
    
    if(imagem) {
      setAvatar(`https://ofertaquente.com.br/${imagem}`)
    } else {
      setAvatar(defaultAvatar)
    }
  },[])

  return(
    <Container>
      <Header>
        <ButtonBack 
          title="Voltar"
          onClick={() => navigate(-1)}
        />
      </Header>
      <Form>
        <Avatar>
          <img 
            src={avatar} 
            alt={`Foto de perfil do usuário ${user.name}`} 
          />
        </Avatar>

        <Input 
          placeholder="Seu Nome"
          value={name}
          icon={FaUserAlt}
          singIn
          type="text"
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="Seu Email"
          value={email}
          icon={HiOutlineMail}
          singIn
          type="email"
          onChange={e => setEmail(e.target.value)}
          readOnly
        />

        <Input 
          placeholder="Seu numero"
          value={number}
          icon={AiFillPhone}
          singIn
          type="number"
          onChange={e => setNumber(e.target.value)}
        /> 

        <Button 
          title='Atualizar perfil'
          onClick={() => handleUpdate(user)}
          previous
        />       
      </Form>



    </Container>
  )
}