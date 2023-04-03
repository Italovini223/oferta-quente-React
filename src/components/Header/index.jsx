import { useState } from 'react';

import {useAuth} from '../../hooks/auth';
import { useNavigate } from "react-router-dom";

import { Container, Top,Bottom, Content, SidebarContent } from "./styles";

import {FiSearch, FaBars} from 'react-icons/all'
import logoImg from '../../assets/oferta quente branco.svg';

import { Input } from "../Input";
import {UserDetails} from '../UserDetails'
import { Sidebar } from '../Sidebar';


export function Header({onChange, value, children}){
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

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
      
      <SidebarContent>
        <FaBars onClick={showSidebar} />
        {sidebar && <Sidebar active={setSidebar} />}
      </SidebarContent>
    </Container>
  )
}