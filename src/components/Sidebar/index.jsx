import { Container, Content } from "./styles";

import {FaTimes, AiOutlineUser, AiFillHeart} from 'react-icons/all';
import { SidebarItem } from "../SidebarItens";

import {useAuth} from '../../hooks/auth';

import { useNavigate } from "react-router-dom";

export function Sidebar({active}){

  const closeSidebar = () => active(false);
  const {user} = useAuth();
  const navigate = useNavigate();

  function handlePage() {
    if(!user){
     
      navigate("/singIn");
    } else {
      navigate("/profile");
    }
  }
  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem icon={AiOutlineUser} text="usuário" onClick={handlePage} />
        <SidebarItem icon={AiFillHeart} text="Favoritos" />
      </Content>
    </Container>
  )
}