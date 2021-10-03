import { ChangeEvent, VFC } from 'react';
import Box from '@mui/material/Box';
import { isUser } from './types/isUser';
import { ModalSwitch } from './ModalSwitch';
import Button from '@mui/material/Button';

type ModalFormType = {
  modalUser: isUser;
  displayUser: isUser;
  onChangeModalSwitch: (modalUser: isUser) => void;
  onSubmitModal: () => void;
  onCancel: () => void;
};

export const ModalForm: VFC<ModalFormType> = props => {
  const {
    modalUser,
    displayUser,
    onChangeModalSwitch,
    onSubmitModal,
    onCancel,
  } = props;

  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          p: 4,
        }}
      >
        <ModalSwitch
          defaultChecked={displayUser[1]}
          handleChange={(
            event: ChangeEvent<HTMLInputElement>,
            checked: boolean
          ) => onChangeModalSwitch({ ...modalUser, 1: checked })}
          label='user1'
        />
        <ModalSwitch
          defaultChecked={displayUser[2]}
          handleChange={(
            event: ChangeEvent<HTMLInputElement>,
            checked: boolean
          ) => onChangeModalSwitch({ ...modalUser, 2: checked })}
          label='user2'
        />
        <ModalSwitch
          defaultChecked={displayUser[3]}
          handleChange={(
            event: ChangeEvent<HTMLInputElement>,
            checked: boolean
          ) => onChangeModalSwitch({ ...modalUser, 3: checked })}
          label='user3'
        />
        <Box
          sx={{ textAlign: 'right', paddingTop: '24px', '& button': { m: 1 } }}
        >
          <Button
            onClick={onCancel}
            variant='contained'
            color='error'
            size='small'
          >
            キャンセル
          </Button>
          <Button
            onClick={() => onSubmitModal()}
            variant='contained'
            size='small'
          >
            適用
          </Button>
        </Box>
      </Box>
    </>
  );
};
