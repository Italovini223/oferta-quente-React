import { Container, Description, Information, Utils, Line, UserInfo } from "./styles";

export function Product({image, description, price, link, storeLogo, userImage, usrName, ...rest}){
  return (
    <Container {...rest}>
      <Description>
        <img src={image} alt="" />
        <p>{description}</p>
      </Description>

      <Information>
        <span>{price}</span>
        <img src={storeLogo} alt="" />
      </Information>

      <Line />

      <Utils>
        <UserInfo>
          <img src={userImage} alt="" />
          <span>{usrName}</span>
        </UserInfo>
        <a href={link}>
          Compre Agora
        </a>
      </Utils>
    </Container>
  )
}