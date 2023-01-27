import { render, screen } from '@testing-library/react';
import { ProductCard } from '.';
import { ProductCardPropsMock } from './mock';

const props = ProductCardPropsMock;

describe('<ProductCard/>', () => {
  it('should render ProductCard correctly', () => {
    render(<ProductCard {...props} />);

    expect(screen.getByRole('img', { name: /title 1/i })).toHaveAttribute('src', props.photo);
    expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
    expect(screen.getByRole('price', { price: /1/i })).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<ProductCard {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
