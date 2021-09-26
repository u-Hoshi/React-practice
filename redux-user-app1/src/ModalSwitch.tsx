import { ChangeEvent, VFC } from 'react';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

type ModalSwitchType = {
  defaultChecked: boolean;
  handleChange: (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  label: string;
};

export const ModalSwitch: VFC<ModalSwitchType> = props => {
  const { defaultChecked, handleChange, label } = props;
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        sx={{
          height: '40px',
          lineHeight: '40px',
        }}
      >
        {label}
      </Typography>
      <Switch
        defaultChecked={defaultChecked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </Box>
  );
};
