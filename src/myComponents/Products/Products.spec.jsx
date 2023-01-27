import { render, screen } from '@testing-library/react';

import { Products } from '.';

const props = {
  products: [
    {
      id: 1,
      price: 1,
      title: 'title 1',
      describe: 'describe 1',
      cover: 'img/img1.png',
    },
    {
      id: 2,
      price: 2,
      title: 'title 2',
      describe: 'describe 2',
      cover: 'img/img2.png',
    },
    {
      id: 3,
      price: 3,
      title: 'title 3',
      describe: 'describe 3',
      cover: 'img/img3.png',
    },
  ],
};

describe('<Products/>', () => {
  it('should render Products', () => {
    render(<Products {...props} />);
    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/describe/i)).toHaveLength(3);
    expect(screen.getByRole('img', { name: /title 3/i })).toHaveAttribute('src', 'img/img3.png');
  });

  it('should not render Products', () => {
    render(<Products />);
    expect(screen.queryByRole('heading', { name: /title/i })).not.toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = render(<Products {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
