import { useState } from 'react';
import { isUser } from '../types/isUser';

export const useAllUsers = () => {
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
  const [modalUser, setModalUser] = useState<isUser>({
    1: false,
    2: false,
    3: false,
  });

  const [displayUser, setDisplayUser] = useState<isUser>({
    1: false,
    2: false,
    3: false,
  });
  return { info, displayUser, setDisplayUser, modalUser, setModalUser };
};
