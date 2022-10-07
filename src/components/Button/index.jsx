import { Container } from "./styles";

export function Button({title, previous = false, ...rest}){
  return(
    <Container
      type="button"
      previous={previous}
      {...rest}
    >
      <span>{title}</span>
    </Container>
  )
}