import Greeting from './Greeting';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
  test('renders Hello world as a test', () => {
    render(<Greeting />);
  
    const helloWorldElement = screen.getByText('Hello world', { exact: false});
    expect(helloWorldElement).toBeInTheDocument();
  });
  test('renders "Nothing is impossible" if the button was NOT clicked', () => {
    render(<Greeting />)

    const outputElement = screen.getByText('Nothing is impossible', { exact: false });
    expect(outputElement).toBeInTheDocument();

  });
  test('renders "I love my job" if the button was clicked', () => {
    render(<Greeting />)

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.getByText('I love my job');
    expect(outputElement).toBeInTheDocument();

  });
});
