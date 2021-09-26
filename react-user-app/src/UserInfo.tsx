import { VFC } from 'react';

type UserInfoType = {
  id: number;
  userName: string;
};

export const UserInfo: VFC<UserInfoType> = props => {
  const { id, userName } = props;
  return (
    <>
      <li>
        {id}：{userName}
      </li>
    </>
  );
};
