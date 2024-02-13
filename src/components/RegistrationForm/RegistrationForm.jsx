import { Title } from 'components/Title/Title';
import {
  ButtonWrapper,
  ErrorIcon,
  ErrorText,
  EyeIconInvisible,
  EyeIconVisible,
  FormWrapper,
  InputWrapper,
  Link,
  LinkWrapper,
  SuccessIcon,
  SuccessMessage,
  Text,
  TitleWrapper,
  Wrapper,
} from './RegistrationForm.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import sprite from '../../images/sprite.svg';

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
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const handleTogglePassword = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const handleToggleConfirmPassword = () => {
    setIsConfirmPasswordVisible(prevState => !prevState);
  };

  const handleSubmit = ({ email, password }, actions) => {};

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
        {({ handleSubmit, errors, touched }) => (
          <form>
            <FormWrapper>
              <InputWrapper hasError={touched.name && errors.name}>
                <label>
                  <Field type="text" name="name" placeholder="Name" />
                  <ErrorIcon hasError={touched.name && errors.name}>
                    ✕
                  </ErrorIcon>

                  <ErrorMessage name="name" component={ErrorText} />
                </label>
              </InputWrapper>

              <InputWrapper hasError={touched.email && errors.email}>
                <label>
                  <Field type="email" name="email" placeholder=" Email" />
                  <ErrorIcon hasError={touched.email && errors.email}>
                    ✕
                  </ErrorIcon>
                  <ErrorMessage name="email" component={ErrorText} />
                </label>
              </InputWrapper>

              <InputWrapper
                hasError={touched.password && errors.password}
                hasSuccess={touched.password && !errors.password}
              >
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
                  <ErrorIcon
                    hasError={touched.password && errors.password}
                    errorIconRight={true}
                  >
                    ✕
                  </ErrorIcon>
                  {touched.password && !errors.password && (
                    <SuccessMessage>Password is secure</SuccessMessage>
                  )}
                  {touched.password && !errors.password && (
                    <SuccessIcon>
                      <use href={sprite + '#icon-check'}></use>
                    </SuccessIcon>
                  )}
                  <ErrorMessage name="password" component={ErrorText} />
                </label>
              </InputWrapper>

              <InputWrapper
                hasError={touched.confirmPassword && errors.confirmPassword}
              >
                <label>
                  <Field
                    type={isConfirmPasswordVisible ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                  {isConfirmPasswordVisible ? (
                    <EyeIconVisible onClick={handleToggleConfirmPassword} />
                  ) : (
                    <EyeIconInvisible onClick={handleToggleConfirmPassword} />
                  )}
                  <ErrorIcon
                    hasError={touched.confirmPassword && errors.confirmPassword}
                    errorIconRight={true}
                  >
                    ✕
                  </ErrorIcon>
                  <ErrorMessage name="confirmPassword" component={ErrorText} />
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
      <LinkWrapper>
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </LinkWrapper>
    </Wrapper>
  );
};
