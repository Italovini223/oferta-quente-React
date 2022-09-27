import { Input } from "../Input";
import { Container } from "./styles";

import {FiSearch} from 'react-icons/fi'

export function Home(){
  <Container>
    <Top>
      <Input 
        type="text"
        placeholder="Digite Sua busca"
        icon={FiSearch}
      />
    </Top>
  </Container>
}