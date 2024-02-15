import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/authOperation';
import { useNavigate } from 'react-router-dom';
import registrationAvatar from '../../../images/registrationAvatar.png';
import {
  ErrorIcon,
  ErrorText,
  FormWrapper,
  InputWrapper,
  Title,
  Wrapper,
} from './ModalEditUser.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import { ModalEditUserSchema } from './ModalEditUserShema';

const initialValues = {
  photo: '',
  name: '',
  email: '',
  phone: '',
};

export const ModalEditUser = ({ handleModalToggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/home');
  };

  const handleClick = () => {
    handleLogOut();
    handleModalToggle();
  };

  const handleCancel = () => {
    handleModalToggle();
  };

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    // dispatch(register({ name, email, password }));
    // resetForm();
  };

  return (
    <Wrapper>
      <Title>Edit information</Title>
      {/* <Avatar>
        <Image src={registrationAvatar} alt="Avatar" />
      </Avatar> */}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ModalEditUserSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
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
                  <Field type="text" name="phone" placeholder=" Phone" />

                  <ErrorMessage name="password" component={ErrorText} />
                </label>
              </InputWrapper>
            </FormWrapper>
            <Button
              // padding={'16px 186px'}
              width={'380px'}
              height={'52px'}
              text={'SAVE'}
              type={'submit'}
              // handleClick={handleSubmit}
            />
          </form>
        )}
      </Formik>
    </Wrapper>
  );
};
