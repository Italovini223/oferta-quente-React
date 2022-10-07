import axios from 'axios';

import {useState, useEffect} from 'react';

import { Banner, Container, Content, Navigation, Products } from "./styles";

import {AiOutlineHome, GrPersonalComputer, GiHanger, GiHealthPotion} from 'react-icons/all';

import {Header} from '../../components/Header';
import {Product} from '../../components/Product';
import { Button } from '../../components/Button';

import bannerImg from '../../assets/Carrossel Infinito Oferta Quente (1).png'



export function Home() {


  const [products, setProducts] = useState([]);
  const [page, setPage] = useState("1");


  useEffect(() => {
    axios.post(`https://ofertaquente.com.br/api/listaOfertaRecentes?page=${page}`)
    .then((response) => setProducts(response.data) )
    .catch(() => {

    })
  }, [page]);

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
        <Navigation>
          <Button 
            title="Proxima página"
            onClick={function handlePage() {
              var NumberPage = Number(page);
    
              var NumberPage = Number(page);
    
              NumberPage++;
            
              const newNumberPage = String(NumberPage);
            
              setPage(newNumberPage);
            }}
          />
          <Button 
            title="Página anterior"
            previous
            onClick={function handlePageBack(){
              var NumberPage = Number(page);
    
              var NumberPage = Number(page);
    
              NumberPage--;
            
              const newNumberPage = String(NumberPage);
            
              setPage(newNumberPage);
            }}
          />
        </Navigation>
      </Content>
    </Container>
  )
}