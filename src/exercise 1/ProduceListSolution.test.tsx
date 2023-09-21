import '@testing-library/jest-dom';
import ProduceList from './ProduceList';
import { render, screen } from '@testing-library/react';

describe('Hello', () => {
  it('displays the produce name', () => {
    const produce = [{ name: 'tomato', sale: false }];
    render(<ProduceList produce={produce} />);
    expect(screen.getByText(produce[0].name)).toBeVisible();
  });

  it('displays the sale icon when prduce is on sale', () => {
    const produce = [{ name: 'tomato', sale: true }];
    render(<ProduceList produce={produce} />);
    expect(screen.getByTitle('sale')).toBeVisible();
  });

  it('does not display the sale icon when prduce is not on sale', () => {
    const produce = [{ name: 'tomato', sale: false }];
    render(<ProduceList produce={produce} />);
    expect(screen.queryByTitle('sale')).not.toBeInTheDocument();
  });
});
