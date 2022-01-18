import React from 'react';
import {
  ContainerMenu,
  ContainerLogoMenu,
  DivLogo,
  DivMenu,
  UlMenu,
  LiMenu,
  ContainerLupaUser,
  Lupa,
  User,
  Sininho,
  ImgLupa,
  ImgSininho,
  ImgUser,
  LogoP,
} from './estilo/styleMenu';
import lupa from './imgs/magnifying-glass.svg';
import sininho from './imgs/bell.svg';
import user from './imgs/user.svg';
console.log(lupa);

const Menu = () => {
  return (
    <div>
      <ContainerMenu>
        <ContainerLogoMenu>
          <DivLogo>
            <LogoP>GEEKFLIX</LogoP>
          </DivLogo>
          <DivMenu>
            <UlMenu>
              <LiMenu>Inicio</LiMenu>
              <LiMenu>Series</LiMenu>
              <LiMenu>Filmes</LiMenu>
              <LiMenu>Minha Lista</LiMenu>
              <LiMenu>Bombando</LiMenu>
            </UlMenu>
          </DivMenu>
        </ContainerLogoMenu>
        <ContainerLupaUser>
          <Lupa>
            <ImgLupa src={lupa} alt="lupa" />
          </Lupa>
          <Sininho>
            <ImgSininho src={sininho} alt="sininho" />
          </Sininho>
          <User>
            <ImgUser src={user} alt="usuario" />
          </User>
        </ContainerLupaUser>
      </ContainerMenu>
    </div>
  );
};

export default Menu;
