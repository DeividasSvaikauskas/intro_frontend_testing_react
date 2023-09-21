/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';
import NewProduceForm from './NewProduceForm';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('NewProduceForm', () => {
  describe('pressing create button', () => {
    const produceName = 'Bread';

    let user: any;
    let onCreate: any;

    beforeEach(() => {
      user = userEvent.setup();
    });

    async function renderAndCreate() {
      onCreate = jest.fn().mockName('onCreate');

      render(<NewProduceForm onCreate={onCreate} />);

      await user.type(screen.getByLabelText('New produce'), produceName);
      await user.click(screen.getByRole('button', { name: 'Create' }));
    }

    it('clears the message field', async () => {
      await renderAndCreate();
      expect(screen.getByLabelText('New produce')).toHaveValue('');
    });

    it('calls the create function', async () => {
      await renderAndCreate();
      expect(onCreate).toHaveBeenCalledWith(produceName);
    });
  });
});
