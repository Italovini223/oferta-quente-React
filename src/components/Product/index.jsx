import { Container, Description, Information, Utils, Line, UserInfo, ButtonLink } from "./styles";

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
        <ButtonLink href={link} Target="_blank">
          <span>Compre Agora</span>
        </ButtonLink>
      </Utils>
    </Container>
  )
}