/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';
import NewMessageForm from './NewMessageForm';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('NewMessageForm', () => {
  describe('pressing send button', () => {
    it('clears the message field', async () => {
      render(<NewMessageForm onSend={undefined} />);

      const user = userEvent.setup();
      await user.type(screen.getByLabelText('Message'), 'Hello Bouvet');
      expect(screen.getByLabelText('Message')).toHaveValue('Hello Bouvet');

      await user.click(screen.getByRole('button', { name: 'Send' }));
      expect(screen.getByLabelText('Message')).toHaveValue('');
    });

    it('passes the input to onSend function', async () => {
      const onSend = jest.fn().mockName('onSend');

      render(<NewMessageForm onSend={onSend} />);

      const user = userEvent.setup();
      await user.type(screen.getByLabelText('Message'), 'Hello Bouvet');
      await user.click(screen.getByRole('button', { name: 'Send' }));
      expect(onSend).toHaveBeenCalledWith('Hello Bouvet');
    });
  });
  // describe('pressing send button', () => {
  //   const messageText = 'Hello Bouvet';

  //   let user;
  //   let onSend: any;

  //   async function renderAndSend() {
  //     user = userEvent.setup();
  //     onSend = jest.fn().mockName('onSend'); // onSend = jest.fn()

  //     render(<NewMessageForm onSend={onSend} />);

  //     await user.type(screen.getByLabelText('Message'), messageText);
  //     await user.click(screen.getByRole('button', { name: 'Send' }));
  //   }

  //   // beforeEach(async () => {
  //   //   await renderAndSend();
  //   // });
  //   it('clears the message field', async () => {
  //     await renderAndSend();
  //     // render(<NewMessageForm onSend={undefined} />);

  //     // const user = userEvent.setup();
  //     // await user.type(screen.getByLabelText('Message'), messageText);
  //     // expect(screen.getByLabelText('Message')).toHaveValue(messageText);

  //     // await user.click(screen.getByRole('button', { name: 'Send' }));
  //     expect(screen.getByLabelText('Message')).toHaveValue('');
  //   });

  //   it('passes the input to onSend function', async () => {
  //     await renderAndSend();
  //     expect(onSend).toHaveBeenCalledTimes(1);
  //     expect(onSend).toHaveBeenCalledWith(messageText);
  //   });
  // });
});
