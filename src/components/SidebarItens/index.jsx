import { Container } from "./styles";

export function SidebarItem({icon : Icon, text,  ...rest}){
  return (
    <Container {...rest}>
      <Icon />
      {text}
    </Container>
  )
}