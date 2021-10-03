import { useState, VFC } from 'react';
import { UserInfo } from './UserInfo';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ModalForm } from './ModalForm';
import { isUser } from './types/isUser';
import Box from '@mui/material/Box';
import { RootState } from '../src/app/store';
import { useSelector, useDispatch } from 'react-redux';
import { setDisplayUser } from './features/setusers/SetUsersSlice';

const App: VFC = () => {
  const info = {
    user1: {
      id: 1,
      name: 'hoge',
    },
    user2: {
      id: 2,
      name: 'foo',
    },
    user3: {
      id: 3,
      name: 'bar',
    },
  };
  const displayUser = useSelector((state: RootState) => state.user.displayUser);
  const [modalUser, setModalUser] = useState<isUser>({
    ...displayUser,
  });
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const isModalOpen = () => setOpen(!open);

  const onChangeModalSwitch = (modalUser: isUser) => {
    setModalUser({ ...modalUser });
  };

  const onSubmitModal = () => {
    dispatch(setDisplayUser({ ...modalUser }));
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
            onSubmitModal={onSubmitModal}
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
