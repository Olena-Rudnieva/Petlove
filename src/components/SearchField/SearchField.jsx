import {
  FormWrapper,
  FormField,
  Icon,
  CloseIcon,
  Loupe,
  Close,
} from './SearchField.styled';
import sprite from '../../images/sprite.svg';

export const SearchField = ({ handleSubmit, isSearching, handleChange }) => {
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormField
        name="search"
        type="text"
        onChange={handleChange}
        placeholder="Search"
      />

      <Loupe type="submit">
        <Icon>
          <use href={sprite + '#icon-search'}></use>
        </Icon>
      </Loupe>

      {!isSearching && (
        <Close type="submit" name="clear">
          <CloseIcon />
        </Close>
      )}
    </FormWrapper>
  );
};
