import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  Image,
  ImageWrapper,
  PetIcon,
  Text,
  Title,
  TitleWrapper,
  Wrapper,
} from './AddPetForm.styled';
import { GenderSelection } from './GenderSelection/GenderSelection';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { Avatar } from 'components/Avatar/Avatar';

const initialValues = {
  sex: '',
};

export const AddPetForm = () => {
  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Add my pet /</Title>
        <Text>Personal details</Text>
      </TitleWrapper>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <GenderSelection />

          {/* <ImageWrapper>
            {pet.imgURL ? (
              <Image src={pet.imgURL} alt="Pet" />
            ) : (
              <PetIcon>
                <use href={sprite + '#icon-pet'}></use>
              </PetIcon>
            )}
          </ImageWrapper> */}
          {/* <button type="submit">Submit</button> */}
        </Form>
      </Formik>
    </Wrapper>
  );
};
