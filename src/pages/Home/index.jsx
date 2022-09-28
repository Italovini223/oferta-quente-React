import { Container, Content } from "./styles";

import {AiOutlineHome, GrPersonalComputer, GiHanger, GiHealthPotion} from 'react-icons/all';

import {Header} from '../../components/Header';
import {Product} from '../../components/Product';


import {PRODUCTS} from '../../utils/products';

export function Home() {
  return(
    <Container>
      <Header 
        data ={{
          filters: [
            {icon : AiOutlineHome, title: 'Casa',id: 1 },
            {icon : GrPersonalComputer, title: 'Informática', id: 2 },
            {icon: GiHanger, title: 'Vestuário', id: 3},
            {icon: GiHealthPotion, title: 'Saúde e Beleza', id: 4}
          ]
        }}
      />
      <Content>
        
        {
          PRODUCTS.map(product => {
            return (
              <Product 
                image={product.image}
                description={product.description}
                price={product.price}
                link={product.link}
                key={product.id}
              />
            )
          })
        }
      </Content>
    </Container>
  )
}