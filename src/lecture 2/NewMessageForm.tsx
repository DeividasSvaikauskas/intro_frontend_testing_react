import { useState } from 'react';

type NewMessageFormProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSend: any;
};

export default function NewMessageForm({ onSend }: NewMessageFormProps) {
  const [inputText, setInputText] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(e: any) {
    e.preventDefault();
    if (onSend) {
      onSend(inputText);
    }
    setInputText('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Message
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
