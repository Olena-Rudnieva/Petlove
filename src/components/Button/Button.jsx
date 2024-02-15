import { ButtonStyle } from './Button.styled';

export const Button = ({
  type,
  width,
  height,
  text,
  handleClick,
  specialbackground,
}) => {
  return (
    <ButtonStyle
      type={type}
      /*padding={padding}*/ width={width}
      height={height}
      onClick={handleClick}
      specialbackground={specialbackground}
    >
      {text}
    </ButtonStyle>
  );
};
