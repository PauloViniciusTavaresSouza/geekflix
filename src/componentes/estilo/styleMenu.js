import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  background: transparent;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const ContainerLogoMenu = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
`;

export const DivLogo = styled.div`
  width: 200px;
  height: 50px;
  text-align: center;
`;

export const LogoP = styled.p`
  font-size: 28px;
  color: red;
  margin: 10px;
`;

export const DivMenu = styled.div`
  display: flex;

  width: 600px;
  height: 50px;
`;

export const UlMenu = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const LiMenu = styled.li`
  margin: 0 20px;
  text-decoration: none;
  list-style: none;
  color: #000;
`;

export const ContainerLupaUser = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 50px;
  width: 300px;
`;

export const Lupa = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
`;

export const ImgLupa = styled.img`
  width: 30px;
  height: 30px;
  align-self: center;
  margin: 0 auto;
`;

export const Sininho = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
`;

export const ImgSininho = styled.img`
  width: 30px;
  height: 30px;
  align-self: center;
  margin: 0 auto;
`;

export const User = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
`;

export const ImgUser = styled.img`
  width: 30px;
  height: 30px;
  align-self: center;
  margin: 0 auto;
`;
