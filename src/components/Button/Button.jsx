import { ButtonStyle } from './Button.styled';

export const Button = ({ type, width, text, handleClick }) => {
  return (
    <ButtonStyle
      type={type}
      /*padding={padding}*/ width={width}
      onClick={handleClick}
    >
      {text}
    </ButtonStyle>
  );
};
