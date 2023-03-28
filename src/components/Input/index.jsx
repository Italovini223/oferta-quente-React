import { Container } from "./styles";

export function Input({icon : Icon, readOnly = false, singIn = false, ...rest}) {
 return (
  <Container
    SingIn={singIn}
    readOnly={readOnly}
  >
    <input 
      readOnly={readOnly}
      {...rest}
    />
    {Icon && <Icon />}
  </Container>
 )
}