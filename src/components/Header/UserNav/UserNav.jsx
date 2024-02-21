import { useState } from 'react';
import { UserBar } from '../UserBar/UserBar';
import { UserNavWrapper } from './UserNav.styled';
import { BasicModalWindow } from 'components/Modal/BasicModalWindow';
import { ModalApproveAction } from 'components/Modal/ModalApproveAction/ModalApproveAction';
import { Button } from 'components/Button/Button';

export const UserNav = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(state => !state);
  };
  return (
    <UserNavWrapper>
      <Button
        width={'136px'}
        height={'50px'}
        text={'LOG OUT'}
        type={'button'}
        handleClick={handleModal}
      />
      <UserBar />
      {modal && (
        <BasicModalWindow handleModalToggle={handleModal}>
          <ModalApproveAction handleModalToggle={handleModal} />
        </BasicModalWindow>
      )}
    </UserNavWrapper>
  );
};
