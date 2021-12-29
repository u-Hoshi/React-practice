import { memo, VFC } from 'react';

type Props = {
  open?: boolean;
  onClickClose: () => void;
};

export const ReactmemoChild: VFC<Props> = memo(({ open, onClickClose }) => {
  // React.memo(コンポーネントのメモ化)
  console.log('再レンダリング!!!');
  return (
    <>
      {open && <p>child</p>}
      <button onClick={onClickClose}>閉じる</button>
    </>
  );
});
