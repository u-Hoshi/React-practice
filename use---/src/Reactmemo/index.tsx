import { useState } from 'react';
import { ReactmemoChild } from './ReactmemoChild';

export const Reactmemo = () => {
  const [open, setOpen] = useState(false);

  const [notOpen, setNotOpen] = useState(false);
  const onClickButton1 = () => setOpen(!open);
  const onClickButton2 = () => setNotOpen(!notOpen);

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={onClickButton1}>Childを表示</button>
      <button onClick={onClickButton2}>Childとは関係ない</button>
      <ReactmemoChild open={open} />
    </div>
  );
};
