import axios from 'axios';

import {useState, useEffect} from 'react';

import { Banner, Container, Content, Products } from "./styles";

import {AiOutlineHome, GrPersonalComputer, GiHanger, GiHealthPotion} from 'react-icons/all';

import {Header} from '../../components/Header';
import {Product} from '../../components/Product';


import {PRODUCTS} from '../../utils/products';
import bannerImg from '../../assets/Carrossel Infinito Oferta Quente (1).png'


export function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.post("https://ofertaquente.com.br/api/listaTodasOfertas")
    .then((response) => setProducts(response.data) )
    .catch(() => {

    })
  }, [])

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
        <Banner >
          <img src={bannerImg} alt="" />
        </Banner>
        <Products>
        {
          products.map(product => {
            return (
              <Product 
                image={`https://ofertaquente.com.br/${product.imagem}`}
                description={product.nome}
                price={`R$ ${product.preco}`}
                link={product.link}
                key={product.id}
              />
            )
          })
        }
        </Products>
      </Content>
    </Container>
  )
}