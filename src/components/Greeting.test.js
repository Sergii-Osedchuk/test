import Greeting from './Greeting';
import { render, screen } from '@testing-library/react'

test('renders Hello world as a test', () => {
  render(<Greeting />);

  const helloWorldElement = screen.getByText('Hello world', { exact: false});
  expect(helloWorldElement).toBeInTheDocument();
})