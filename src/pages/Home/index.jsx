import axios from 'axios';

import {useState, useEffect} from 'react';

import { Banner, Container, Content, Products,} from "./styles";



import {Product} from '../../components/Product';
import {Header} from '../../components/Header'


import bannerImg from '../../assets/Carrossel Infinito Oferta Quente (1).png'
import { Button } from '../../components/Button';




export function Home() {


  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(2);

  const [search, setSearch] = useState("");



  async function handleProducts(){

    setPage(prevState => prevState + 1);

    await axios.post(`https://ofertaquente.com.br/api/listaOfertaRecentes?page=${page}`,{
      pesquisa: search,
    })
    .then(response => setProducts([...products, ...response.data]));
  }

  useEffect(() => {
    axios.post(`https://ofertaquente.com.br/api/listaOfertaRecentes`, {
      pesquisa: search
    })
    .then((response) => setProducts([...response.data]) )
    .catch(() => {

    })
  }, [search]);

  console.log(products)


  return(
    <Container>
     <Header 
        onChange={e => setSearch(e.target.value)}  
        value={search}
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
        <Button 
          title="Ver Mais produtos"
          onClick={handleProducts}
        />
      </Content>
    </Container>
  )
}