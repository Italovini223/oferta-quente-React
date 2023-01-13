import { Container, Description, Information, Utils, Line, UserInfo, Actions } from "./styles";

import {AiFillHeart} from 'react-icons/ai'
import {MdInsertComment} from 'react-icons/md'

import {api} from '../../Service/api';
import {useAuth} from '../../hooks/auth'
import { useNavigate } from "react-router-dom";


export function Product({data, IsLiked = false}){

  const {user} = useAuth();
  const navigate = useNavigate();

  function getProduct() {
    localStorage.setItem('@ofertaQuente:produto', JSON.stringify(data));

    navigate('/details');
  }

  async function handleLike(){

    if(!user){
      return navigate("/singIn");
    }

    if(data.curtidaUser === true) {
      await api.post("/excluirCurtida",{
        idOferta: data.id,
        idUsuario: user.id
      })

      console.log(data)

      return
    }
    await api.post("/cadastrarCurtida",{
      idOferta: data.id,
      idUsuario: user.id
    })
  }



  return (
    <Container >
      <Description onClick={getProduct}>
        <img src={`https://ofertaquente.com.br/${data.imagem}`} alt="" />
        <p>{data.nome}</p>
      </Description>

      <Information>
        <span>R$ {data.preco}</span>
        <img src={`https://ofertaquente.com.br/${data.imagemLoja}`} alt="" />
      </Information>

      <Line />

      <Utils>
        <UserInfo>
          <img src={`https://ofertaquente.com.br/${data.imagemUsuario}`} alt="" />
          <span>{data.nameUsuario}</span>
        </UserInfo>
       <Actions>
       <button
          className="button-comment"
          onClick={getProduct}
        >
          <MdInsertComment />
        </button>
       </Actions>
      </Utils>
    </Container>
  )
}