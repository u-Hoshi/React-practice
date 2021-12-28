import { memo, VFC } from 'react';

type Props = {
  open?: boolean;
};

export const ReactmemoChild: VFC<Props> = memo(({ open }) => {
  console.log('再レンダリング!!!');
  return <>{open && <p>child</p>}</>;
});
