import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import {
  Avatar,
  AvatarWrapper,
  ErrorText,
  FormWrapper,
  Image,
  InputWrapper,
  // PhotoWrapper,
  Title,
  // UploadBtn,
  // UploadIcon,
  UserIconAvatar,
  Wrapper,
} from './ModalEditUser.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import { ModalEditUserSchema } from './ModalEditUserShema';
import { uploadUser } from '../../../redux/auth/authSlice';
import { selectUser } from '../../../redux/auth/authSelectors';

const initialValues = {
  // photo: '',
  name: '',
  email: '',
  phone: '',
};

export const ModalEditUser = ({ handleModalToggle }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // const handleChangeAvatar = e => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   if (file) {
  //     const blob = new Blob([file]);
  //     const objectURL = URL.createObjectURL(blob);
  //     dispatch(setAvatarURL(objectURL));
  //     document.getElementById('fileLabel').innerText = file.name;
  //   }
  // };

  // const handleFileLabelClick = () => {
  //   document.getElementById('photoInput').click();
  // };

  const handleSubmit = ({ name, email, phone }, { resetForm }) => {
    console.log('test');
    dispatch(uploadUser({ name, email, phone }));
    resetForm();
    handleModalToggle();
  };

  return (
    <Wrapper>
      <Title>Edit information</Title>
      <AvatarWrapper>
        <Avatar>
          {user.avatarURL ? (
            <Image src={user.avatarURL} alt="User" />
          ) : (
            <UserIconAvatar>
              <use href={sprite + '#icon-user'}></use>
            </UserIconAvatar>
          )}
        </Avatar>
      </AvatarWrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ModalEditUserSchema}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormWrapper>
              {/* <PhotoWrapper>
                <InputWrapper>
                  <label onClick={handleFileLabelClick} id="fileLabel">
                    Upload file
                    <Field
                      id="photoInput"
                      type="file"
                      name="photo"
                      onChange={e => handleChangeAvatar(e)}
                      placeholder="Photo"
                      className="photo"
                    />
                    <ErrorMessage name="photo" component={ErrorText} />
                  </label>
                </InputWrapper>
                <UploadBtn onClick={handleChangeAvatar}>
                  <p>Upload photo</p>
                  <UploadIcon>
                    <use href={sprite + '#icon-upload'}></use>
                  </UploadIcon>
                </UploadBtn>
              </PhotoWrapper> */}

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
                  <ErrorMessage name="phone" component={ErrorText} />
                </label>
              </InputWrapper>
            </FormWrapper>
            <Button
              width={'380px'}
              height={'52px'}
              text={'SAVE'}
              type={'submit'}
            />
          </form>
        )}
      </Formik>
    </Wrapper>
  );
};
