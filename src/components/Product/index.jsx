import { Container, Description, Information, Utils, Line, UserInfo, Actions } from "./styles";

import {MdInsertComment, AiFillHeart, AiOutlineHeart} from 'react-icons/all'

import {api} from '../../Service/api';

import {useAuth} from '../../hooks/auth'
import {useLike} from '../../hooks/like';

import { useNavigate } from "react-router-dom";

import defaultAvatar from '../../assets/avatar_placeholder.svg'


export function Product({data}){
  let isLiked = false;

  const {addLike, removeLike, likes} = useLike();
  const {user} = useAuth();

  const navigate = useNavigate();

  isLiked = likes.some((product) => product.id === data.id)

  function getProduct() {
    localStorage.setItem('@ofertaQuente:produto', JSON.stringify(data));

    navigate('/details');
  }

  function handleLike(data) {

    if(!user){
      navigate("/singIn")
    }

    if(isLiked){
      removeLike(data);
    }

    addLike(data);
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
          <img src={ data.imagemUsuario ? `https://ofertaquente.com.br/${data.imagemUsuario}` : defaultAvatar} alt="" />
          <span>{data.nameUsuario}</span>
        </UserInfo>
       <Actions>
       <button
          className="button-comment"
          onClick={getProduct}
        >
          <MdInsertComment />
        </button>

        <button
          className="button_like"
          onClick={() => handleLike(data)}
          liked={isLiked}
        > 
          {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
       </Actions>
      </Utils>
    </Container>
  )
}