import { Container, Content, Header, Products } from "./styles";

import {useLike} from '../../hooks/like';

import {FiArrowLeft} from 'react-icons/fi'

import { useNavigate } from "react-router-dom";
import { Product } from "../../components/Product";

export function Favorites(){
  const {likes} = useLike();
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  }

  return (
    <Container>
      <Header>
        <button
          onClick={handleBack}
        >
          <FiArrowLeft />
          <p>Voltar</p>
        </button>
     </Header>

     <Content>
      {
        likes &&
        <Products>
          {
            likes.map(product => (
              <Product 
                data={product}
                key={String(product.id)}
              />
            ))
          }
        </Products>
      }
     </Content>
    </Container>
  )
}