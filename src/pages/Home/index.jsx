import {useState, useEffect} from 'react';

import axios from 'axios';

import {useAuth} from '../../hooks/auth'


import { Banner, Container, Content, Products,} from "./styles";
import {AiOutlineClockCircle, MdOutlineMessage, RiCouponFill} from 'react-icons/all'

import {Product} from '../../components/Product';
import {Header} from '../../components/Header';
import {Filter} from '../../components/Filter'
import {Button} from '../../components/Button'

import bannerImg from '../../assets/Carrossel Infinito Oferta Quente (1).png'


export function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(2);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("listaOfertaRecentes");

  const {user} = useAuth();





  function handleFilter(title){
    setFilter(title);
    setPage(2)
    
  }

  async function handleProducts(){
    setPage(Number(page + 1));

    const response = await axios.post(`https://ofertaquente.com.br/api/${filter}?page=${page}`,{
      pesquisa: search,
      page,
    })

    setProducts([...products, ...response.data]);
    
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.post(`https://ofertaquente.com.br/api/${filter}`, {
        pesquisa: search,
      })
      setProducts([...response.data])
      
    }

    fetchProducts();
  }, [search, filter]);



  return(
    <Container>
     <Header 
        onChange={e => setSearch(e.target.value)}  
        value={search}
        
      >
        <Filter 
          title="Recentes"
          icon={AiOutlineClockCircle}
          onClick={() => handleFilter("listaOfertaRecentes")}
          isClicked={filter === "listaOfertaRecentes"}
        />

        <Filter 
          title="Cupons"
          icon={RiCouponFill}
          onClick={() => handleFilter("listaOfertasCupons")}
          isClicked={filter === "listaOfertasCupons"}
        />

        <Filter 
          title="Comentadas"
          icon={MdOutlineMessage}
          onClick={() => handleFilter("listaOfertasComentadas")}
          isClicked={filter === "listaOfertasComentadas"}
        />  
      </Header>
      <Content>
        <Banner >
          <img src={bannerImg} alt="" />
        </Banner>
        <Products>
        { 
          products.map(product => {
            return (
              <Product 
                data={product}
                key={product.id}
              />
            )
          })
        }
        </Products>
        <Button 
          title="Ver mais produtos"
          onClick={handleProducts}
        />
      </Content>
    </Container>
  )
}