import { Input } from "../Input";
import { Container, Top,Bottom } from "./styles";

import {FiSearch} from 'react-icons/fi'

import logoImg from '../../assets/logo-sem-fundo.ico'
import { Filter } from "../Filter";

export function Header({data}){
  return (
    <Container>
      <Top>
        <img src={logoImg} alt="" />
        <Input 
          type="text"
          placeholder="Digite Sua Busca"
          icon={FiSearch}
        />
      </Top>
      <Bottom>
        {
          data.filters.map(filter => <Filter icon={filter.icon} title={filter.title} key={filter.id} />)
        }
      </Bottom>
    </Container>
  )
}