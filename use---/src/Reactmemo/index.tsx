import { useCallback, useMemo, useState } from 'react';
import { ReactmemoChild } from './ReactmemoChild';

export const Reactmemo = () => {
  const [open, setOpen] = useState(false);

  const [notOpen, setNotOpen] = useState(false);
  const onClickButton1 = () => setOpen(!open);
  const onClickButton2 = () => setNotOpen(!notOpen);

  // アロー関数で作成した関数はレンダリング毎の毎回新規作成されているとみなされる
  // →それによってpropsに変更があったと子コンポーネントが認識し、毎回レンダリングされることになる
  // これを防ぐのがuseCallback(関数のメモ化)
  // 子コンポーネントに渡さない関数にuseCallbackを使用しても意味ない
  const onClickClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  // useMemo(変数のメモ化)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const temp = useMemo(() => 1 + 3, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={onClickButton1}>Childを表示</button>
      <button onClick={onClickButton2}>Childとは関係ない</button>
      <ReactmemoChild open={open} onClickClose={onClickClose} />
    </div>
  );
};
