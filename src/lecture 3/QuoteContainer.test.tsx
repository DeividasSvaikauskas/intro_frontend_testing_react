import '@testing-library/jest-dom';
import QuoteContainer from './QuoteContainer';
import { render, screen } from '@testing-library/react';
import api from './api';

jest.mock('./api');

describe('QuoteContainer', () => {
  it('loads quote upon first render', async () => {
    // (api.get as jest.Mock).mockReturnValue(new Promise(() => {}));
    (api.get as jest.Mock).mockResolvedValue({ data: 'Helloo' });
    render(<QuoteContainer />);

    expect(await screen.findByText('Swanson: Helloo')).toBeVisible();
    expect(api.get).toHaveBeenCalledWith('/quotes');
  });
});
