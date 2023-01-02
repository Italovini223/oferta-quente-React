import { Container } from "./styles";

export function Input({icon : Icon, singIn = false, ...rest}) {
 return (
  <Container
    SingIn={singIn}
  >
    <input {...rest}/>
    {Icon && <Icon />}
  </Container>
 )
}