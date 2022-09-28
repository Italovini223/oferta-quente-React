import { Description, Information, Utils } from "./styles";

export function Product({image, description, price, link}){
  <Container>
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
}