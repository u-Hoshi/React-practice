import { render, cleanup, screen } from '@testing-library/react';
import FrameworkList from './FrameworkList';

afterEach(() => cleanup()); // クリーンアップ関数を呼ぶ

describe('Rendering the list with props', () => {
  it('should render Nodata !when no data propped', () => {
    // propsでデータを渡さないと想定通り「No Data」が表示されることを確認する
    render(<FrameworkList />);
    expect(screen.getByText('No Data')).toBeInTheDocument();
  });
  it('should render list item correctly', () => {
    const dummyData = [
      { id: 1, item: 'React dummy' },
      { id: 2, item: 'Vue dummy' },
    ];
    render(<FrameworkList frameworks={dummyData} />);
    // レンダリングして存在しているものをframeworkItemsで保持する
    const frameworkItems = screen
      .getAllByRole('listitem')
      .map(ele => ele.textContent);
    const dummyItems = dummyData.map(ele => ele.item);
    // レンダリングしてるものと、その元となるデータが一致するかを確認する
    expect(frameworkItems).toEqual(dummyItems);
    // 今回は適切にpropsが渡されているので、No Dataがレンダリングされていないことを確認する
    expect(screen.queryByText('No data')).toBeNull();
  });
});
