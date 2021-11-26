import React from 'react';
import { render, screen } from '@testing-library/react';
import Render from './Render';

describe('Rendering', () => {
  it('Should render all the elements correctly', () => {
    render(<Render />); //Renderコンポーネントを取得
    // screen.debug();
    // screen.debug(screen.getByRole('heading'));
    expect(screen.getByRole('heading')).toBeTruthy(); // headingが存在するかを確認
    expect(screen.getByRole('textbox')).toBeTruthy();
    expect(screen.getAllByRole('button')[0]).toBeTruthy(); // getAllByRoleでは配列で返ってくるので[0]で要素をしてする
    expect(screen.getAllByRole('button')[1]).toBeTruthy(); // getAllByRoleでは配列で返ってくるので[1]で要素をしてする
    expect(screen.getByText('hoge2')).toBeTruthy(); //
    expect(screen.queryByText('hogehoge')).toBeNull(); // 存在しないことを確認
    expect(screen.getByTestId('sample')).toBeTruthy(); // idで確認
  });
});
