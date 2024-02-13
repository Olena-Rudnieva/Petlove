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
} from './LoginForm.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import { LoginFormSchema } from './LoginFormShema.styled';
import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import { Button } from 'components/Button/Button';

const initialValues = {
  email: '',
  password: '',
};

const handleSubmit = ({ email, password }, actions) => {};

export const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title name={'Log in'} />
      </TitleWrapper>
      <Text>
        Welcome! Please enter your credentials to login to the platform:
      </Text>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginFormSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <form>
            <FormWrapper>
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
            </FormWrapper>
            <ButtonWrapper>
              <Button
                // padding={'16px 186px'}
                width={'424px'}
                text={'LOG IN'}
                type={'submit'}
                handleClick={handleSubmit}
              />
            </ButtonWrapper>
          </form>
        )}
      </Formik>
      <LinkWrapper>
        <p>Don’t have an account?</p>
        <Link to="/register">Register</Link>
      </LinkWrapper>
    </Wrapper>
  );
};
