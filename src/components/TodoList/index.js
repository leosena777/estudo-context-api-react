import React from "react";
import styled from "styled-components";

const List = styled.ul`
  background: ${props=> props.theme.theme.background};
  color: ${ props=> props.theme.theme.color};
  font-family:sans-serif; 
  width:600px;
  border-radius:
  li{
    line-height: 36px;
  }
`;

const TodoList = () => (
  <List>
    <li>Fazer Café</li>
    <li>Estudar ReactJS</li>
    <li>Estudar React-Native</li>
    <li>Ser um Jedi do JavaScript </li>
  </List>
);

export default TodoList;
