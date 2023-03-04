import { Container } from "./styles";
import {FiArrowLeft} from 'react-icons/fi';

export function ButtonBack({title, isWhite = false, ...rest}){
  return (
    <Container
    {...rest}
    isWhite={isWhite}
  >
    <FiArrowLeft/>
    {title}
  </Container>
  )
}