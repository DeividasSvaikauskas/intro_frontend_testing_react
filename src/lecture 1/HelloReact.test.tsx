import '@testing-library/jest-dom';
import HelloReact from '../lecture 1/HelloReact';
import { render, screen } from '@testing-library/react';

describe('Hello', () => {
  it('displays the welcome message', () => {
    render(<HelloReact />);
    expect(screen.getByText('Hello, React!')).toBeVisible();
    // expect(screen.getByText(/Hello/)).toBeVisible();
  });

  it('displays the react logo', () => {
    render(<HelloReact />);
    expect(screen.getByAltText('react-logo')).toBeVisible();
  });

  it('displays the heart logo', () => {
    render(<HelloReact />);
    expect(screen.getByTitle('blueHeart')).toBeVisible();
  });

  it('displays the prop-name', () => {
    render(<HelloReact name="Tony" />);
    expect(screen.getByText('Hello, Tony!')).toBeVisible();
  });
});
