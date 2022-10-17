import axios from 'axios';

import {useState, useEffect} from 'react';

import { Banner, Container, Content, Products } from "./styles";

import {AiOutlineHome, GrPersonalComputer, GiHanger, GiHealthPotion} from 'react-icons/all';

import {Header} from '../../components/Header';
import {Product} from '../../components/Product';

import bannerImg from '../../assets/Carrossel Infinito Oferta Quente (1).png'



export function Home() {


  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);


  useEffect(() => {
    axios.post(`https://ofertaquente.com.br/api/listaOfertaRecentes?page=${page}`)
    .then((response) => setProducts([...products, ...response.data]) )
    .catch(() => {

    })
  }, [page]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if(entries.some((entry) => entry.isIntersecting)) {
        console.log("ok");
        setPage((pageInsideState) => pageInsideState + 1)
      }
    });
    intersectionObserver.observe(document.querySelector('#endScroll'));

    return () => intersectionObserver.disconnect();
  },[])

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
                storeLogo={`https://ofertaquente.com.br/${product.imagemLoja}`}
                userImage={`https://ofertaquente.com.br/${product.imagemUsuario}`}
                usrName={product.nameUsuario}
                link={product.link}
                key={product.id}
              />
            )
          })
        }
        </Products>
        <div id='endScroll'  />
      </Content>
    </Container>
  )
}