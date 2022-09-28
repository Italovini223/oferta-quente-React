import { Container } from "./styles";

export function Filter({icon : Icon, title, ...rest}){
 return (
  <Container {...rest}>
    {Icon && <Icon />}
    <span>{title}</span>
  </Container>
 )
}