import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import { AddComment, Comments, Container, Content, Header, ProductDetail } from "./styles";

import {api} from '../../Service/api';
import {useAuth} from '../../hooks/auth'

import {FiArrowLeft} from 'react-icons/fi';
import {IoMdSend} from 'react-icons/io'
import {FaCommentAlt} from 'react-icons/fa';

import {Comment} from '../../components/Comment';
import {Input} from '../../components/Input';


export function Details() {
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const navigate = useNavigate();
  const {user} = useAuth();

  async function getComments(){
    const response = await api.post("/listaComentarios",{
      idOferta: product.id
    })
    setComments([...response.data])
  }

  async function handleNewComment(){
    if(!user) {
      navigate("/singIn")
    }

   await api.post("/cadastrarComentarios", {
      idOferta: product.id,
      idUsuario: user.id,
      mensagem: newComment
    }) 
    .then(alert("Comentário cadastrado com sucesso!"))
    .catch(error => alert("Nao foi possível cadastrar o comentário! "))
  }

  function handleBack() {
    navigate(-1)
  }



  useEffect(() => {
    const productInLocal = localStorage.getItem('@ofertaQuente:produto')
    setProduct(JSON.parse(productInLocal));
  }, []);

  useEffect(() => {
    getComments()
  }, [product])

  return (
    <Container>
     <Header>
      <button
        onClick={handleBack}
      >
        <FiArrowLeft />
        <p>Voltar</p>
      </button>
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
      <div className="commentsAmount">
        <FaCommentAlt />
        <p>{comments.length} comentário(s)</p>
      </div>
     </Content>
      {
        comments.length > 0 &&
        <Comments>
          {
             comments.map(comment => (
                <Comment 
                  data={comment}
                  key={comment.id}
                />
              )) 
          }
        </Comments>
      }

      <AddComment>
        <Input 
          placeholder="Enviar um comentário" 
          onChange ={e => setNewComment(e.target.value)} 
          
        />
        <button
          onClick={handleNewComment}
        >
          <IoMdSend />
        </button>
      </AddComment>
    </Container>
  )
}