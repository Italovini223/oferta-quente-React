import { useEffect } from "react";

import { Container, Description, Information, Utils, Line, PostInfo, Actions } from "./styles";

import {MdInsertComment, AiFillHeart, AiOutlineHeart} from 'react-icons/all'

import {useAuth} from '../../hooks/auth'
import {useLike} from '../../hooks/like';

import { useNavigate } from "react-router-dom";

import defaultAvatar from '../../assets/avatar_placeholder.svg'


export function Product({data}){
  let isLiked = false;

  const {addLike, removeLike, likes} = useLike();
  const {user} = useAuth();

  const navigate = useNavigate();

  isLiked = likes.some((product) => product.id === data.id);

  function getProduct() {
    localStorage.setItem('@ofertaQuente:produto', JSON.stringify(data));

    navigate('/details');

    console.log(data);
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

  function calculateTime(){
    const publicationDate = new Date(data.dataCadastro);
    const now = new Date();

    const start = Math.floor(publicationDate.getTime() / (3600 * 24 * 1000));
    const end = Math.floor(now.getTime() / (3600 * 24 * 1000));

    const result = start - end;

    if(result === 0){
      return "publicado hoje"
    } else {
      return `publicado há ${String(result).replace("-", "")} dia(s)`
    }
  }


  return (
    <Container >
      <Description onClick={getProduct}>
        <img src={`https://ofertaquente.com.br/${data.imagem}`} alt="" />
        <p>{data.nome}</p>
      </Description>

      <Information>
        <span>R$ {String(data.preco).replace(".", ",")}</span>
        <img src={`https://ofertaquente.com.br/${data.imagemLoja}`} alt="" />
      </Information>

      <Line />

      <Utils>
        <PostInfo>
          <img src={ data.imagemUsuario ? `https://ofertaquente.com.br/${data.imagemUsuario}` : defaultAvatar} alt="" />
          <div>
            <span>por {data.nameUsuario}</span>
            <span>{calculateTime()}</span>
          </div>
        </PostInfo>
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