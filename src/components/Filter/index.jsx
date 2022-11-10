import { Container } from "./styles";

export function Filter({icon : Icon, title, isClicked = false, ...rest}){
 return (
  <Container {...rest} clicked={isClicked}>
    {Icon && <Icon />}
    <span>{title}</span>
  </Container>
 )
}