import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseEffectRender = () => {
  const [user, setUser] = useState(null);
  const fetchJSON = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    return res.data;
  };
  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetchJSON();
      setUser(user);
    };
    fetchUser();
  }, []);
  return (
    <div>
      {user ? (
        <p>
          I am {user.username}：{user.email}
        </p>
      ) : null}
    </div>
  );
};

export default UseEffectRender;
