import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TrolleyButton } from '.';

describe('<TrolleyButton />', () => {
  it('should render the TrolleyButton', () => {
    const fn = jest.fn();
    render(<TrolleyButton onClick={fn} />);

    expect.assertions(1);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();

    render(<TrolleyButton onClick={fn} />);

    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TrolleyButton onClick={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
