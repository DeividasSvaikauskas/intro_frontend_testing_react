import { useState } from 'react';

type NewProduceFormProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onCreate: any;
};

export default function NewProduceForm({ onCreate }: NewProduceFormProps) {
  const [inputText, setInputText] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(e: any) {
    e.preventDefault();
    if (onCreate) {
      onCreate(inputText);
    }
    setInputText('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        New produce
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}
