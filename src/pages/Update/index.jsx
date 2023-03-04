import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { useNavigate } from 'react-router-dom'

import { Container, Avatar, Form, Header } from "./styles";
import { FiCamera, FaUserAlt, HiOutlineMail, AiFillPhone } from 'react-icons/all'

import { Input } from '../../components/Input'

import defaultAvatar from '../../assets/avatar_placeholder.svg'
import { Button } from '../../components/Button';
import { ButtonBack } from '../../components/ButtonBack';


export function Update(){
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState()

  const [avatar, setAvatar] = useState()
  const [avatarFile, setAvatarFile] = useState(null)

  const {user, updateUser} = useAuth();
  const navigate = useNavigate();


  async function handleUpdate(user) {
    const updatedUser = {
      admin: user.admin,
      email,
      id: user.id,
      name,
      imagem: user.imagem,
      token: user.token

    }
    await updateUser(updatedUser);
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview);
  }

  useEffect(() => {
    const {name, email, telefone, imagem} = user

    setName(name)
    setEmail(email)
    setNumber(telefone)
    setAvatar(`https://ofertaquente.com.br/${imagem}`)
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

          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id='avatar'
              type='file'
              onChange={handleChangeAvatar}
            />
          </label>
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