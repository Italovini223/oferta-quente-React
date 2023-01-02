import { useEffect, useState } from "react";
import { Comments, Container, Content, Header, ProductDetail } from "./styles";

import axios from "axios";

import {FaCommentAlt} from 'react-icons/fa'

import logoImg from '../../assets/oferta quente branco.svg'

import { Comment } from "../../components/Comment";



export function Details() {
  const [product, setProduct] = useState({})
  const [comment, setComment] = useState({})

  async function getComments(id){
    const response = await axios.post("http://ofertaquente.com.br/api/listaComentarios", {
      id
    })
    setComment({response})
  }

  useEffect(() => {
    const productInLocal = localStorage.getItem('@ofertaQuente:produto')
    setProduct(JSON.parse(productInLocal));
  }, []);

  return (
    <Container>
     <Header>
      <img src={logoImg} alt="" />
      <h1>Oferta quente</h1>
     </Header>
     <Content>
      {
        product &&

        <ProductDetail>
          <div className="image">
          <img src={`https://ofertaquente.com.br/${product.imagem}`} alt="" />
          </div>
          
          <div className="details">
            <h2>{product.nome}</h2>
            <strong>R${product.preco}</strong>

            <div className="user_information">
              <img src={`https://ofertaquente.com.br/${product.imagemUsuario}`} alt="" />
              <p>Postado por <span>{product.nameUsuario}</span></p>
            </div>

            <a href={product.link} target="_blank" >
              Comprar produto
            </a>
          </div>
          
        </ProductDetail>
        
      }
     </Content>
     <Comments>
      <Comment />
      <Comment /> 
      
     </Comments>
    </Container>
  )
}