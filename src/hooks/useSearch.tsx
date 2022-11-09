import { useState, ChangeEvent } from 'react';

function useSearch(initialValue: string) {
  const [input, setInput] = useState(initialValue);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputReset = () => {
    setInput('');
  };

  return { input, handleInputChange, handleInputReset };
}

export default useSearch;
