import React, { useState, VFC } from 'react';
import { UserInfo } from './UserInfo';
import { useAllUsers } from './hooks/useAllUsers';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ModalForm } from './ModalForm';
import { isUser } from './types/isUser';
import Box from '@mui/material/Box';

const App: VFC = () => {
  const { info, displayUser, setDisplayUser, modalUser, setModalUser } =
    useAllUsers();
  const [open, setOpen] = useState(false);
  const isModalOpen = () => setOpen(!open);

  const onChangeModalSwitch = (modalUser: isUser) => {
    setModalUser({ ...modalUser });
  };

  const onSubmitModal = (modalUser: isUser) => {
    setDisplayUser({
      ...modalUser,
    });
    isModalOpen();
  };

  return (
    <>
      <Button onClick={isModalOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={isModalOpen}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box>
          <ModalForm
            modalUser={modalUser}
            displayUser={displayUser}
            onChangeModalSwitch={onChangeModalSwitch}
            onSubmitModal={() => onSubmitModal(modalUser)}
            onCancel={isModalOpen}
          />
        </Box>
      </Modal>
      <h1>簡易フィルター</h1>
      {displayUser[1] && (
        <UserInfo id={info.user1.id} userName={info.user1.name}></UserInfo>
      )}

      {displayUser[2] && (
        <UserInfo id={info.user2.id} userName={info.user2.name}></UserInfo>
      )}
      {displayUser[3] && (
        <UserInfo id={info.user3.id} userName={info.user3.name}></UserInfo>
      )}
    </>
  );
};

export default App;
