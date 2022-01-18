import React from 'react';
import {
  DivContainer,
  DivInfo,
  Titulo,
  Subtitulo,
  Descrition,
  DivButton,
  ButtonHome,
  ButtonHomeMaisInformation,
} from './estilo/styleHome';

const Home = () => {
  return (
    <div>
      <DivContainer>
        <DivInfo>
          <Titulo>STAR WARS</Titulo>
          <Subtitulo>O despertar da força</Subtitulo>
          <Descrition>
            O centro da trama é uma disputa política entre um império tirano e
            ditatorial e um grupo libertário. O enredo é permeado pela tragédia
            pessoal de Anakin Skywalker, um jedi (do bem) que sucumbe ao Lado
            Sombrio da Força (do mal) se transformando no vilão Darth Vader, que
            é um dos líderes do Império Galático.
          </Descrition>
          <DivButton>
            <ButtonHome>Assistir</ButtonHome>
            <ButtonHomeMaisInformation>
              Mais informação
            </ButtonHomeMaisInformation>
          </DivButton>
        </DivInfo>
      </DivContainer>
    </div>
  );
};

export default Home;
