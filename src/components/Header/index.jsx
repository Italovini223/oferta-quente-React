import { useState, useEffect } from "react";
import { Input } from "../Input";
import { Container, Top,Bottom } from "./styles";

import {FiSearch} from 'react-icons/fi'

import logoImg from '../../assets/logo-sem-fundo.ico'
import { Filter } from "../Filter";

export function Header({onChange, value}){
  return (
    <Container>
      <Top>
        <img src={logoImg} alt="" />
        <Input 
          type="text"
          placeholder="Digite Sua Busca"
          icon={FiSearch}
          onChange={onChange}
          value={value}
        />
      </Top>

    </Container>
  )
}