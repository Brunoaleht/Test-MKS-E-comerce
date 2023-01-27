import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MyCarProducts } from '.';

const handlers = [
  rest.get('*jsonplaceholder.typicode.com*', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          price: 1,
          id: 1,
          title: 'title1',
          body: 'body1',
          url: 'img1.jpg',
        },
        {
          price: 2,
          id: 2,
          title: 'title2',
          body: 'body2',
          url: 'img2.jpg',
        },
        {
          price: 3,
          id: 3,
          title: 'title3',
          body: 'body3',
          url: 'img3.jpg',
        },
        {
          price: 4,
          id: 4,
          title: 'title4',
          body: 'body4',
          url: 'img4.jpg',
        },
        {
          price: 5,
          id: 5,
          title: 'title5',
          body: 'body5',
          url: 'img5.jpg',
        },
      ]),
    );
  }),
];

const server = setupServer(...handlers);

describe('<MyCarProducts />', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => {
    server.close();
  });
  it('should render products', async () => {
    render(<MyCarProducts />);

    expect.assertions(3);

    const images = screen.getAllByRole('img', { name: /title/i });
    expect(images).toHaveLength(4);
  });

  it('should search for products', async () => {
    render(<MyCarProducts />);

    expect.assertions(16);

    const search = screen.getByPlaceholderText(/type your search/i);
    expect(screen.getByRole('heading', { name: 'title1 ' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title2 ' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title3 ' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title4 ' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title5 ' })).not.toBeInTheDocument();

    userEvent.type(search, 'title1');
    expect(screen.getByRole('heading', { name: 'title1 ' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title2 ' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title3 ' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title4 ' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title5 ' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Search: title1' })).toBeInTheDocument();

    userEvent.clear(search);
    expect(screen.getByRole('heading', { name: 'title1 ' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title2 ' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title3 ' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'title4 ' })).toBeInTheDocument();
  });
});
