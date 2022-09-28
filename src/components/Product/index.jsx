import { Container, Description, Information, Utils, Line } from "./styles";

export function Product({image, description, price, link, ...rest}){
  return (
    <Container {...rest}>
      <Description>
        <img src={image} alt="" />
        <p>{description}</p>
      </Description>

      <Information>
        <span>{price}</span>
      </Information>

      <Line />

      <Utils>
        <a href={link}>
          Compre Agora
        </a>
      </Utils>
    </Container>
  )
}