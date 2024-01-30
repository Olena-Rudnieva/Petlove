import { IconHeart, LogoText, LogoWrapper } from './Logo.styled';
import sprite from '../../images/sprite.svg';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoText>petl</LogoText>
      <IconHeart>
        <use href={sprite + '#icon-logo-heart'}></use>
      </IconHeart>
      <LogoText>ve</LogoText>
    </LogoWrapper>
  );
};
