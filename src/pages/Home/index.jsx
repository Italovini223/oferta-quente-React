import axios from 'axios';

import {useState, useEffect} from 'react';

import { Banner, Container, Content, Products,} from "./styles";



import {Product} from '../../components/Product';
import {Header} from '../../components/Header'


import bannerImg from '../../assets/Carrossel Infinito Oferta Quente (1).png'
import logoImg from '../../assets/logo-sem-fundo.ico'



export function Home() {


  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  const [search, setSearch] = useState("");


  useEffect(() => {
    axios.post(`https://ofertaquente.com.br/api/listaOfertaRecentes?page=${page}`, {
      pesquisa: search
    })
    .then((response) => setProducts([...products, ...response.data]) )
    .catch(() => {

    })
  }, [page, search]);

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
      <Header onChange={e => setSearch(e.target.value)}/>
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