import '@testing-library/jest-dom';
import QuoteGenerator from './QuoteGenerator';
import { render, screen } from '@testing-library/react';
import api from './api';

jest.mock('./api');

beforeEach(() => {
  (api.get as jest.Mock).mockResolvedValue({
    data: 'Capitalism: Gods way of determining who is smart and who is poor.',
  });
});

describe('QuoteGenerator', () => {
  it('displays the title', async () => {
    render(<QuoteGenerator />);
    expect(
      await screen.findByText('The Greates Quotes By Ron Swanson')
    ).toBeVisible();
  });
  it('displays the image', async () => {
    render(<QuoteGenerator />);
    expect(await screen.findByAltText('swanson')).toBeVisible();
  });
  it('displays the New Quote button', async () => {
    render(<QuoteGenerator />);
    expect(
      await screen.findByRole('button', { name: 'New Quote' })
    ).toBeVisible();
  });
  it('loads quote upon first render', async () => {
    render(<QuoteGenerator />);
    expect(
      await screen.findByText(
        'Swanson: Capitalism: Gods way of determining who is smart and who is poor.'
      )
    ).toBeVisible();
    expect(api.get).toHaveBeenCalledWith('/quotes');
  });
});
