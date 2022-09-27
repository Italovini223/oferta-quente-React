import { Container } from "./styles";

export function Input({icon : Icon, ...rest}) {
  <Container>
    <input {...rest}/>
    {Icon && <Icon />}
  </Container>
}