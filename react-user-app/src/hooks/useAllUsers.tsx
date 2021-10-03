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
    1: true,
    2: true,
    3: true,
  });

  const [displayUser, setDisplayUser] = useState<isUser>({
    1: true,
    2: true,
    3: true,
  });
  return { info, displayUser, setDisplayUser, modalUser, setModalUser };
};
