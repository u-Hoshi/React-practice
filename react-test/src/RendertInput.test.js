import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RednerInput from './RenderInput';

// afterEachで各テストケース実行後に毎回実行させることができる
// cleanupで毎回unmountする
afterEach(() => cleanup());

describe('Rendering', () => {
  it('Should render all the elements correctly', () => {
    render(<RednerInput />);
    expect(screen.getByRole('button')).toBeTruthy();
    expect(screen.getByPlaceholderText('Enter')).toBeTruthy();
  });
});

describe('Input form onChange event', () => {
  it('should update input value correctly', () => {
    render(<RednerInput />);
    const inputValue = screen.getByPlaceholderText('Enter');
    userEvent.type(inputValue, 'test');
    expect(inputValue.value).toBe('test');
  });
});

describe('Console Button', () => {
  it('Should not trigger output function', () => {
    const outputConsole = jest.fn();
    render(<RednerInput outputConsole={outputConsole} />);
    userEvent.click(screen.getByRole('button'));
    expect(outputConsole).not.toHaveBeenCalled();
  });

  it('Should trigger output function', () => {
    const outputConsole = jest.fn();
    render(<RednerInput outputConsole={outputConsole} />);
    const inputValue = screen.getByPlaceholderText('Enter');
    userEvent.type(inputValue, 'test');
    userEvent.click(screen.getByRole('button'));
    expect(outputConsole).toHaveBeenCalled();
  });
});
