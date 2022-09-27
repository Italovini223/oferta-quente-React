import { Input } from "../Input";
import { Container } from "./styles";

import {FiSearch} from 'react-icons/fi'

import logoImg from '../../assets/logo-sem-fundo.ico'

export function Home(){
  <Container>
    <Top>
      <img src={logoImg} alt="" />
      <Input 
        type="text"
        placeholder="Digite Sua busca"
        icon={FiSearch}
      />
    </Top>
  </Container>
}