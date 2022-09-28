import { Container } from "./styles";

import {AiOutlineHome, GrPersonalComputer, GiHanger, GiHealthPotion} from 'react-icons/all'

import {Header} from '../../components/Header'

export function Home() {
  return(
    <Container>
      <Header 
        data ={{
          filters: [
            {icon : AiOutlineHome, title: 'Casa' },
            {icon : GrPersonalComputer, title: 'Informática' },
            {icon: GiHanger, title: 'Vestuário'},
            {icon: GiHealthPotion, title: 'Saúde e Beleza'}
          ]
        }}
      />
    </Container>
  )
}