import { Title } from 'components/Title/Title';
import {
  ButtonWrapper,
  ErrorText,
  EyeIconInvisible,
  EyeIconVisible,
  FormWrapper,
  InputWrapper,
  Text,
  TitleWrapper,
  Wrapper,
} from './RegistrationForm.styled';
import { Formik, Field, ErrorMessage } from 'formik';

import { useState } from 'react';
import { Button } from 'components/Button/Button';
import { RegistrationFormSchema } from './RegistrationFormShema';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegistrationForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePassword = evt => {
    evt.preventDefault();
    setIsPasswordVisible(prevState => !prevState);
  };

  const handleSubmit = ({ email, password }, actions) => {
    //  handleModalToggle();
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title name={'Registration'} />
      </TitleWrapper>
      <Text>Thank you for your interest in our platform. </Text>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RegistrationFormSchema}
      >
        {({ handleSubmit }) => (
          <form>
            <FormWrapper>
              <InputWrapper>
                <label>
                  <Field type="text" name="name" placeholder="Name" />
                  <ErrorMessage name="name" component={ErrorText} />
                </label>
              </InputWrapper>

              <InputWrapper>
                <label>
                  <Field type="email" name="email" placeholder=" Email" />
                  <ErrorMessage name="email" component={ErrorText} />
                </label>
              </InputWrapper>

              <InputWrapper>
                <label>
                  <Field
                    type={isPasswordVisible ? 'text' : 'password'}
                    name="password"
                    placeholder=" Password"
                  />
                  {isPasswordVisible ? (
                    <EyeIconVisible onClick={handleTogglePassword} />
                  ) : (
                    <EyeIconInvisible onClick={handleTogglePassword} />
                  )}
                  <ErrorMessage name="password" component={ErrorText} />
                </label>
              </InputWrapper>

              <InputWrapper>
                <label>
                  <Field
                    type={isPasswordVisible ? 'text' : 'password'}
                    name="password"
                    placeholder="Confirm Password"
                  />
                  {isPasswordVisible ? (
                    <EyeIconVisible onClick={handleTogglePassword} />
                  ) : (
                    <EyeIconInvisible onClick={handleTogglePassword} />
                  )}
                  <ErrorMessage name="password" component={ErrorText} />
                </label>
              </InputWrapper>
            </FormWrapper>
            <ButtonWrapper>
              <Button
                // padding={'16px 186px'}
                width={'424px'}
                text={'REGISTRATION'}
                type={'submit'}
                handleClick={handleSubmit}
              />
            </ButtonWrapper>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
};
