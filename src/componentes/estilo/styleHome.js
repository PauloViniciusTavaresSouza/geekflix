import styled from 'styled-components';
import imgBackground from '../imgs/star-wars-episodio-2-ataque-dos-clones.jpg';

export const DivContainer = styled.div`
  display: flex;
  width: 100%;
  height: 800px;
  background: url(${imgBackground}) no-repeat;
  background-size: cover;
  align-items: center;
`;

export const DivInfo = styled.div`
  width: 100%;
  height: 400px;
`;

export const Titulo = styled.h1`
  font-size: 6rem;
  color: #fff;
  margin: 0 0 0 50px;
  padding: 0;
`;

export const Subtitulo = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin: 0 0 0 50px;
  padding: 0;
`;

export const Descrition = styled.p`
  max-width: 500px;
  font-size: 20px;
  color: #fff;
  margin: 0 0 0 50px;
  padding: 0;
`;

export const DivButton = styled.div`
  display: flex;
`;
export const ButtonHome = styled.button`
  width: 120px;
  height: 35px;
  margin: 50px 0 0 50px;
  background: #fff;
  border: none;
  border-radius: 10px;
  color: #000;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  &:hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
  }
`;

export const ButtonHomeMaisInformation = styled.button`
  width: 180px;
  height: 35px;
  margin: 50px 0 0 20px;
  background: #fff;
  border: none;
  border-radius: 10px;
  color: #000;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  &:hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
  }
`;
